<div align="center">
  <img src="public/logo.png" alt="CRISS Robotics Logo" width="120" />
  <h1>CRISS Robotics Website</h1>
  <p><strong>Official Web Portal for the CRISS Robotics Team</strong></p>
</div>

<p align="center">
  <a href="#about">About</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#deployment">Deployment</a>
</p>

## About

This repository contains the source code for the official [CRISS Robotics](https://www.criss-robotics.in/) website. It is designed to showcase our mission, engineering achievements, team members, past alumni, and provide information for potential sponsors. 

The website is a modern Single Page Application (SPA) built with a custom dark-themed design system, smooth micro-animations, and glassmorphism elements to fit our aerospace and robotics identity.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Routing:** React Router v6
- **Styling:** Custom Vanilla CSS (Design Tokens, Glassmorphism, CSS Modules)
- **Icons:** Lucide React

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (or yarn / pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CRISS-Robotics/Website.git
   cd Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```text
├── public/                 # Static assets (images, logos, favicon)
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/              # Main page routes (Home, Sponsorship, Team, etc.)
│   ├── App.tsx             # Main application router
│   ├── index.css           # Global CSS variables and shared styles
│   └── main.tsx            # Application entry point
├── .gitignore
├── package.json
└── vite.config.ts          # Vite configuration
```

## Deployment

This project is optimized for deployment on Vercel.

1. Connect this GitHub repository to your Vercel account.
2. Vercel will automatically detect the Vite + React setup.
3. The build command will automatically run `npm run build` and publish the `dist` directory.

Alternatively, you can manually build the project using:
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory, which can be hosted on any static web server.

---
<div align="center">
  <i>Forging the next generation of aerospace engineers.</i>
</div>
