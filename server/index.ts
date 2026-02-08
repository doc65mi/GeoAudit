import express from "express";
import path from "path";
import { setupAuth, registerAuthRoutes, isAuthenticated } from "./replit_integrations/auth";
import { registerSubscriptionRoutes } from "./routes/subscriptions";
import { registerAiRoutes } from "./routes/ai";
import { db } from "./db";

const app = express();
const PORT = 5000;

app.set("trust proxy", 1);
app.use(express.json());

async function start() {
  await setupAuth(app);
  registerAuthRoutes(app);
  registerSubscriptionRoutes(app);
  registerAiRoutes(app);

  app.use(express.static(path.join(__dirname, "..", "public")));

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/{*path}", (_req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`GeoAudit server running on http://0.0.0.0:${PORT}`);
  });
}

start().catch(console.error);
