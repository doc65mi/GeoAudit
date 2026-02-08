# GeoAudit

## Overview
GeoAudit is a SaaS web application for geographic auditing services. It features user authentication, a reserved dashboard area, and a subscription system with multiple plans.

## Recent Changes
- 2026-02-08: Full-stack setup with Express + TypeScript backend, Replit Auth, PostgreSQL database, subscription system

## User Preferences
- Language: Italian (UI is in Italian)

## Project Architecture
- **Runtime**: Node.js 20 with TypeScript (tsx)
- **Framework**: Express 5
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Authentication**: Replit Auth (OpenID Connect)
- **Frontend**: Static HTML/CSS/JS served from `public/` directory
- **Server**: `server/index.ts` - Express server on port 5000 (0.0.0.0)

## File Structure
```
├── server/
│   ├── index.ts                    # Express server entry point
│   ├── db.ts                       # Database connection (Drizzle + Neon)
│   ├── routes/
│   │   └── subscriptions.ts        # Subscription API routes
│   └── replit_integrations/
│       └── auth/                   # Replit Auth module (DO NOT MODIFY)
├── shared/
│   ├── schema.ts                   # Main schema export
│   └── models/
│       ├── auth.ts                 # Users & sessions tables
│       └── subscription.ts         # Subscriptions table
├── client/src/                     # React hooks/utils (for future use)
├── public/
│   ├── index.html                  # Main HTML page
│   ├── styles.css                  # All CSS styles
│   └── app.js                      # Client-side JavaScript app
├── drizzle.config.ts               # Drizzle Kit configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

## Database Tables
- `users` - User accounts (managed by Replit Auth)
- `sessions` - Session storage (managed by Replit Auth)
- `subscriptions` - User subscription plans (free, pro, enterprise)

## Running the Project
- Development: `tsx server/index.ts`
- Database push: `npm run db:push`
- The server binds to `0.0.0.0:5000`

## API Endpoints
- `GET /api/auth/user` - Get current authenticated user
- `GET /api/login` - Begin login flow
- `GET /api/logout` - Begin logout flow
- `GET /api/plans` - Get available subscription plans
- `GET /api/subscription` - Get user's current subscription (protected)
- `POST /api/subscription/create` - Create/update subscription (protected)

## Notes
- Stripe integration was not connected. The subscription system currently works locally (plan selection is saved to DB). When ready to accept real payments, connect Stripe via the integrations panel to enable checkout and webhooks.
