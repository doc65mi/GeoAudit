# GeoAudit

## Overview
GEOAudit AI Intelligence is a SaaS web application for AI-powered brand perception analysis. It features user authentication, a full dashboard with dark sidebar navigation, subscription management, and multiple AI tools for SEO, AEO, content creation, and social media.

## Recent Changes
- 2026-02-08: Redesigned report hero cards with centered icon, gradient top bar, centered title (matching first release design)
- 2026-02-08: Added "Aggiungi alla Presentazione" button on all 5 SEO tool pages (appears after analysis completes)
- 2026-02-08: Rebuilt Client Presentation with real AI data rendering, A4 PDF export (window.print), mini-site web view (opens in new tab), config/preview modes, report toggles
- 2026-02-08: All SEO tool pages now have full AI integration with loading states, error handling, result rendering
- 2026-02-08: Rebuilt complete frontend with dark sidebar layout matching original design
- 2026-02-08: Full-stack setup with Express + TypeScript backend, Replit Auth, PostgreSQL database, subscription system

## User Preferences
- Language: Italian (UI is in Italian)
- User is the super user with all services active

## Project Architecture
- **Runtime**: Node.js 20 with TypeScript (tsx)
- **Framework**: Express 5
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Authentication**: Replit Auth (OpenID Connect)
- **Frontend**: Static HTML/CSS/JS served from `public/` directory (SPA with hash routing)
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
├── public/
│   ├── index.html                  # Main HTML page
│   ├── styles.css                  # All CSS styles (sidebar, landing, tools)
│   └── app.js                      # Client-side JavaScript SPA
├── drizzle.config.ts               # Drizzle Kit configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

## App Sections (Sidebar Navigation)
### Dashboard
- **Scheda Cliente** - User profile, stats, subscription info
- **Client Presentation** (HOT) - Generate client presentations

### SEO for AI
- **GEO Audit** - Deep analysis of brand perception by AI engines
- **AEO Audit** (PRO) - Answer Engine Optimization analysis
- **AI Prompt Tracker** - Monitor brand mentions in AI responses
- **AI Overview** - Google AI Overview presence analysis
- **Vector Check** - Vector database representation check

### Content Tools
- **Visual Studio** - AI-powered visual content creation
- **Social Media AI**
  - Wizard Post - Multi-platform post generation
  - LinkedIn - LinkedIn post optimization
  - Facebook - Facebook content creation
  - Instagram - Instagram caption/hashtag generation

### Impostazioni
- User profile settings
- Subscription management with plan selection

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
- Tool pages (GEO Audit, AEO Audit, etc.) have UI ready but need backend AI integration to become fully functional.
