# AI Agent Instructions for Portfolio Website

## Project Overview

This is a personal portfolio website for **Eyeta Daniel**, a Software Developer & AI Engineer. The site showcases projects, skills, certifications, and professional experience.

**Design Reference**: The site is styled after [https://shagzz.zynthieraa.com/](https://shagzz.zynthieraa.com/) with a dark theme and smooth sectioned layout.

## Tech Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (dark theme design)
- **Deployment**: Static build output in `dist/`

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/     # React components (Hero, About, Projects, etc.)
│   ├── assets/        # Images, icons, and static assets
│   ├── styles/        # Additional CSS/styling files
│   ├── data/          # Portfolio content (projects, skills, etc.)
│   ├── App.tsx        # Main app component
│   └── main.tsx       # App entry point
├── public/            # Static assets (favicon, icons.svg, etc.)
├── dist/              # Build output (committed for deployment)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Design System

Based on the reference site, maintain these design principles:

- **Dark Theme**: Primary background `#10131a` (or similar dark slate)
- **Smooth Scrolling**: Implement smooth scroll behavior between sections
- **Sections**: Hero, About, Services/Skills, Projects, Certifications, Process, Contact
- **Typography**: Clean, modern font hierarchy with good readability
- **Animations**: Subtle scroll-triggered animations and transitions
- **Responsive**: Mobile-first design approach

## Key Conventions

1. **Component Organization**
   - One component per file
   - Use functional components with TypeScript interfaces
   - Keep components in `src/components/`
   - Co-locate styles when using CSS modules

2. **Data Management**
   - Store portfolio content (projects, skills, certifications) in `src/data/`
   - Use TypeScript interfaces for data structures
   - Example: `projects.ts`, `skills.ts`, `certifications.ts`

3. **Styling Approach**
   - Tailwind utility classes as primary styling method
   - Use `@apply` for repeated patterns
   - Dark mode by default
   - Maintain consistent spacing scale (Tailwind's default)

4. **Assets**
   - Optimize images before adding to `src/assets/`
   - Use SVG for icons and logos when possible
   - Reference with proper import or public path

## Common Tasks

### Adding a New Project

1. Update `src/data/projects.ts` with project details:
   ```typescript
   {
     title: "Project Name",
     description: "Brief description",
     techStack: ["React", "TypeScript", "etc"],
     category: "Web / AI / etc",
     githubUrl: "https://github.com/...",
     liveUrl: "https://..." // optional
   }
   ```

2. Add project image to `src/assets/projects/`
3. Component will auto-render from data

### Updating Content

- **Skills**: Edit `src/data/skills.ts`
- **Certifications**: Edit `src/data/certifications.ts`
- **About section**: Update `src/components/About.tsx`
- **Contact info**: Update `src/components/Contact.tsx`

### Styling Changes

- Use Tailwind classes directly in JSX
- For theme colors, check `tailwind.config.js`
- For custom CSS, add to component or global styles

## Important Notes

⚠️ **Source Files**: If `src/` directory is missing, it needs to be recreated. The `dist/` folder contains the built output but not the source code.

🎨 **Design Consistency**: Always reference https://shagzz.zynthieraa.com/ for styling decisions to maintain the desired aesthetic.

📱 **Mobile Responsive**: Test all changes on mobile viewports (320px, 375px, 768px, 1024px+).

🔧 **TypeScript**: Maintain strict typing - define interfaces for all data structures and component props.

## Troubleshooting

- **Build fails**: Check `vite.config.ts` and ensure all imports resolve
- **Styles not applying**: Verify Tailwind config and purge settings
- **Assets not loading**: Check public path configuration in Vite config
- **Type errors**: Run `npm run type-check` or `tsc --noEmit` to validate

## Getting Started for AI Agents

When working on this project:

1. **First time**: Check if `src/` exists. If not, scaffold the project structure based on the `dist/` output and the design reference.
2. **Making changes**: Always maintain the dark theme and design consistency with the reference site.
3. **Testing**: Run `npm run dev` to test changes locally before building.
4. **Building**: Run `npm run build` to generate production output in `dist/`.

---

*This portfolio showcases full-stack development, AI engineering, and cloud systems expertise.*
