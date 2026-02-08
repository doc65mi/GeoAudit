import type { Express } from "express";
import { isAuthenticated } from "../replit_integrations/auth";
import { db } from "../db";
import { subscriptions } from "@shared/schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export function registerSubscriptionRoutes(app: Express) {
  app.get("/api/subscription", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const [sub] = await db
        .select()
        .from(subscriptions)
        .where(eq(subscriptions.userId, userId));

      if (!sub) {
        return res.json({ plan: "free", status: "active" });
      }
      res.json(sub);
    } catch (error) {
      console.error("Error fetching subscription:", error);
      res.status(500).json({ message: "Failed to fetch subscription" });
    }
  });

  app.get("/api/plans", (_req, res) => {
    res.json([
      {
        id: "free",
        name: "Free",
        price: 0,
        interval: "month",
        features: [
          "Accesso base alla piattaforma",
          "5 audit al mese",
          "Report standard",
        ],
      },
      {
        id: "pro",
        name: "Professional",
        price: 29,
        interval: "month",
        features: [
          "Audit illimitati",
          "Report avanzati",
          "Supporto prioritario",
          "Esportazione dati",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 99,
        interval: "month",
        features: [
          "Tutto del piano Professional",
          "API dedicate",
          "Supporto 24/7",
          "Personalizzazione completa",
          "Account multi-utente",
        ],
      },
    ]);
  });

  app.post("/api/subscription/create", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { plan } = req.body;

      if (!["free", "pro", "enterprise"].includes(plan)) {
        return res.status(400).json({ message: "Invalid plan" });
      }

      const existing = await db
        .select()
        .from(subscriptions)
        .where(eq(subscriptions.userId, userId));

      if (existing.length > 0) {
        const [updated] = await db
          .update(subscriptions)
          .set({ plan, status: "active", updatedAt: new Date() })
          .where(eq(subscriptions.userId, userId))
          .returning();
        return res.json(updated);
      }

      const [sub] = await db
        .insert(subscriptions)
        .values({
          id: randomUUID(),
          userId,
          plan,
          status: "active",
        })
        .returning();

      res.json(sub);
    } catch (error) {
      console.error("Error creating subscription:", error);
      res.status(500).json({ message: "Failed to create subscription" });
    }
  });
}
