# Eyeta Daniel Portfolio

A responsive portfolio for Eyeta Daniel, a Software Developer and AI Engineer. The site presents selected projects, services, technical capabilities, working process, and contact information.

## Design

The visual direction is inspired by [shagzz.zynthieraa.com](https://shagzz.zynthieraa.com/) and adapted into a distinct portfolio experience with:

- Alternating off-white and dark sections
- Light and dark theme support
- Responsive, mobile-first layouts
- Subtle motion with reduced-motion support
- Advanced, code-rendered project visuals
- A focused technical stack presentation

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

```text
src/
|-- assets/
|   `-- hero-ai-sculpture.jpg
|-- components/
|   |-- About.tsx
|   |-- Contact.tsx
|   |-- Footer.tsx
|   |-- Hero.tsx
|   |-- Navigation.tsx
|   |-- Process.tsx
|   |-- Services.tsx
|   |-- TechStack.tsx
|   `-- Work.tsx
|-- data/
|   |-- about.ts
|   |-- process.ts
|   |-- projects.ts
|   |-- services.ts
|   `-- techStack.ts
|-- App.tsx
|-- index.css
|-- main.tsx
`-- vite-env.d.ts
```

## Content updates

- Personal and contact information: `src/data/about.ts`
- Projects and links: `src/data/projects.ts`
- Services: `src/data/services.ts`
- Process steps and principles: `src/data/process.ts`
- Featured technologies: `src/data/techStack.ts`
- Theme variables and global styles: `src/index.css`
- Tailwind tokens and animations: `tailwind.config.js`

## Deployment

Run `npm run build`, then deploy the generated `dist/` directory to a static hosting provider such as Vercel, Netlify, GitHub Pages, or Azure Static Web Apps.

Copyright 2026 Eyeta Daniel. All rights reserved.
