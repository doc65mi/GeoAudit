# GeoAudit

## Overview
GeoAudit is a web application project. Currently set up as a starter template ready for development.

## Recent Changes
- 2026-02-08: Initial project setup with Node.js/Express server

## Project Architecture
- **Runtime**: Node.js 20
- **Framework**: Express 5
- **Frontend**: Static HTML served from `public/` directory
- **Server**: `server.js` - Express server on port 5000 (0.0.0.0)

## File Structure
```
├── server.js          # Express server entry point
├── public/            # Static frontend assets
│   └── index.html     # Main HTML page
├── package.json       # Node.js dependencies
└── .gitignore         # Git ignore rules
```

## Running the Project
- Development: `node server.js`
- The server binds to `0.0.0.0:5000`
