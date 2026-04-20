# Music Video Guidance

This app provides guidance for music videos.

## Prerequisites

- Node.js (see `.nvmrc`)
- Docker

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment**

   ```bash
   cp .env.example .env
   ```

   Set `MONGODB_URI` in `.env`:

   ```
   MONGODB_URI=mongodb://user:pass@localhost:27018/music-video-guidance?authSource=admin
   ```

3. **Start the database**

   ```bash
   docker compose up -d
   ```

   This starts MongoDB on port `27018` and seeds it automatically.

4. **Run the dev server**

   ```bash
   npm run dev
   ```

   This starts the application on http://localhost:3000.

