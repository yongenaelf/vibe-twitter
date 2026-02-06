# Chirp - Twitter Clone

A modern Twitter/X clone built with React, TypeScript, TailwindCSS, and Node.js.

## Project Structure

```
chirp/
├── frontend-src/       # Vite + React + TailwindCSS (source)
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── layouts/    # Layout components
│   │   └── pages/      # Page components
│   ├── package.json
│   └── vite.config.ts
├── frontend/           # Built frontend output (generated)
├── backend/            # Node.js + Express API
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml  # MongoDB + Redis + Backend
└── README.md
```

## Features

- Home Feed with post composer
- Explore/Search page
- Notifications hub
- Direct Messages
- User Profiles
- Post/Thread detail view
- Dark mode support
- Responsive design

## Getting Started

### Prerequisites

- Node.js 20+
- Docker & Docker Compose (for local development)

### Installation

1. Install frontend dependencies:
```bash
cd frontend-src && npm install && cd ..
```

2. Install backend dependencies:
```bash
cd backend && npm install && cd ..
```

### Development

1. Start the database services:
```bash
docker-compose up -d mongodb redis
```

2. Start the backend (in one terminal):
```bash
cd backend && npm run dev
```

3. Start the frontend (in another terminal):
```bash
cd frontend-src && npm run dev
```

4. Open http://localhost:5173 in your browser

### Production Build

1. Build the frontend:
```bash
cd frontend-src && npm run build && cd ..
```

2. Start all services with Docker:
```bash
docker-compose up -d
```

## Environment Variables

### Frontend (Build-time)

| Variable | Description |
|----------|-------------|
| `API_URL` | Backend API URL (e.g., `https://chirp-api.chrono-ai.fun`) |

### Backend (Runtime)

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017` |
| `MONGODB_DATABASE` | Database name | `chirp` |
| `REDIS_URL` | Redis connection URL | `redis://localhost:6379` |

## Tech Stack

### Frontend
- React 18
- TypeScript
- TailwindCSS
- React Router
- Vite

### Backend
- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- Redis

### Infrastructure
- Docker
- Docker Compose
