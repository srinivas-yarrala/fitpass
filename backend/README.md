# FitPass Backend

Backend API for FitPass application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

3. Run development server:
```bash
npm run dev
```

## API Endpoints

- `GET /health` - Health check
- `GET /api/gyms` - Get gyms list
- `GET /api/passes` - Get available passes
- `POST /api/check-in` - Check in to a gym

## Project Structure

```
backend/
├── src/
│   ├── routes/       # API routes
│   ├── controllers/  # Route handlers
│   ├── models/       # Data models
│   ├── middleware/   # Express middleware
│   ├── utils/        # Utility functions
│   └── config/       # Configuration files
└── dist/             # Compiled JavaScript
```

