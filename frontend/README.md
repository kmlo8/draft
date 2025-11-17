# MovieFlix Frontend

Next.js frontend application for the MovieFlix movie recommendation system with TypeScript, Tailwind CSS, and React.

## Features

- **Authentication**: JWT-based authentication with automatic token refresh
- **Dark Mode**: System-wide dark mode with user preference persistence
- **Natural Language Search**: LLM-powered movie search
- **Personalized Recommendations**: Based on user preferences and viewing history
- **Movie Discovery**: Browse movies, view details, like movies/actors/directors
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Prerequisites

- Node.js (v18 or higher)
- Backend API running on http://localhost:5000

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**

   Create `.env.local` file:
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_APP_NAME=MovieFlix
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Core Pages Implemented

- **Home (/)** - Search and browse movies
- **Login (/login)** - User authentication
- **Signup (/signup)** - Account creation
- **Questionnaire (/questionnaire)** - Set movie preferences

## Authentication

The app uses JWT tokens with automatic refresh:
- Access tokens stored in memory
- Refresh tokens in httpOnly cookies
- Automatic token refresh on expiry
- Protected routes with middleware

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Axios for API calls
- React Context for state management

## Development

```bash
npm run dev    # Start dev server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run linter
```

## Documentation

See backend README for API documentation and setup instructions.

## License

ISC
