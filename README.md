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

Backend runs on http://localhost:3001

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

## License

MIT
