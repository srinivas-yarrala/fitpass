# FitPass Frontend

Next.js frontend application for FitPass, built with TypeScript and following atomic design principles.

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── onboarding/        # Onboarding flow
│   │   ├── gyms/              # Gym discovery
│   │   ├── passes/            # Pass management
│   │   ├── check-in/          # Check-in page
│   │   ├── log/               # Workout logger
│   │   ├── progress/          # Progress tracking
│   │   └── diet-bot/          # Diet bot
│   ├── components/
│   │   ├── atoms/             # Basic UI components (buttons, inputs, etc.)
│   │   ├── molecules/         # Simple component combinations
│   │   ├── organisms/         # Complex components (Header, Footer, etc.)
│   │   ├── templates/         # Page templates
│   │   ├── ui/                # shadcn/ui components
│   │   └── onboarding/        # Onboarding-specific components
│   ├── lib/                   # Utilities
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript type definitions
│   └── assets/                # Static assets (images, etc.)
└── public/                    # Public static files
```

## Atomic Design Structure

- **Atoms**: Basic building blocks (buttons, inputs, labels)
- **Molecules**: Simple combinations (form fields, card items)
- **Organisms**: Complex components (Header, Footer, Navigation)
- **Templates**: Page-level layouts
- **Pages**: Next.js route pages

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Start production server:
```bash
npm start
```

## Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **React Three Fiber** - 3D graphics (for hologram avatar)
- **TanStack Query** - Data fetching

## Features

- ✅ Onboarding flow with 3D avatar selection
- ✅ Gym discovery and mapping
- ✅ Pass management
- ✅ Check-in system
- ✅ Workout logging
- ✅ Progress tracking
- ✅ Diet bot assistant

