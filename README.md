# FitPass

A modern fitness platform built with Next.js and TypeScript, following atomic design principles.

## Project Structure

```
fitpass/
├── frontend/          # Next.js frontend application
├── backend/           # Express.js backend API
└── README.md          # This file
```

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on http://localhost:5000

## Architecture

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Design System**: Atomic Design (atoms, molecules, organisms, templates)
- **UI Components**: shadcn/ui

### Backend
- **Framework**: Express.js
- **Language**: TypeScript
- **Structure**: MVC pattern with routes, controllers, models

## Features

- 🏋️ Gym discovery and mapping
- 🎫 Flexible pass system
- ✅ QR code check-in
- 📊 Workout logging and progress tracking
- 🤖 AI-powered diet assistant
- 🎨 Modern, responsive UI

## Development

### Frontend Structure
```
frontend/src/
├── app/              # Next.js pages (App Router)
├── components/       # React components (atomic design)
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── lib/              # Utilities
├── hooks/            # Custom hooks
└── types/            # TypeScript types
```

### Backend Structure
```
backend/src/
├── routes/           # API routes
├── controllers/       # Route handlers
├── models/            # Data models
├── middleware/        # Express middleware
└── utils/            # Utility functions
```

## Single deploy (no separate backend)

All backend behavior runs inside the frontend app via Next.js API routes:

- **`/api/health`** – health check
- **`/api/gyms`** – list gyms
- **`/api/passes`** – list passes/classes
- **`/api/check-in`** – POST check-in

Use the **frontend** only for deployment (e.g. Vercel with Root Directory `frontend`). The `backend/` folder is optional for local Express development.

## Deploy on Vercel

This repo is a **monorepo**: the Next.js app lives in `frontend/`, not at the repo root. So Vercel must build from the `frontend` folder.

1. In Vercel: **Project → Settings → General**.
2. Under **Root Directory**, set it to **`frontend`** (or `./frontend`).
3. **Framework Preset** should be **Next.js** (Vercel will detect it once root is correct).
4. Save and **Redeploy**.

After that, Vercel will use `frontend/package.json`, run `npm run build`, and serve the App Router app (`frontend/src/app/page.tsx`).

## License

MIT
