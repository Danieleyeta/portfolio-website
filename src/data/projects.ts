export interface Project {
  title: string;
  summary: string;
  techStack: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "ClipIt",
    summary: "A robust video clipping platform featuring a customized backend and frontend ecosystem for seamless media management and content creation at scale.",
    techStack: ["Python", "React", "TypeScript", "AI Integration", "FFmpeg"],
    category: "Full-Stack / AI",
    featured: true,
  },
  {
    title: "Fraud Detection Dashboard",
    summary: "AI-powered real-time fraud detection dashboard with analytics, featuring intelligent chat assistance for security monitoring and pattern recognition.",
    techStack: ["Next.js", "TypeScript", "Azure", "AI Chat", "Analytics"],
    category: "AI / Cloud",
    githubUrl: "https://github.com/Danieleyeta/fraud-detention-frontend",
    liveUrl: "https://fraud-detection-dashboard-pi.vercel.app",
    featured: true,
  },
  {
    title: "CareerCrafter AI",
    summary: "An AI-powered web app that generates professional CVs and cover letters from user input, leveraging the Gemini API for intelligent content generation.",
    techStack: ["React", "TypeScript", "Gemini AI", "Vite"],
    category: "AI / Automation",
    githubUrl: "https://github.com/Danieleyeta/careercrafter-AI",
    featured: true,
  },
  {
    title: "GreatKart",
    summary: "A fully-featured e-commerce platform with user authentication, product management, shopping cart, and secure payment integration.",
    techStack: ["Python", "Django", "PostgreSQL", "Stripe"],
    category: "Full-Stack",
    githubUrl: "https://github.com/Danieleyeta/greatkart-djando",
  },
  {
    title: "Ecobank Frontend",
    summary: "Modern banking interface with responsive design and intuitive user experience for financial operations and account management.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    category: "Frontend",
    githubUrl: "https://github.com/Danieleyeta/demo-frontend-eco",
  },
  {
    title: "X (Twitter) AI Thread Auto-Poster",
    summary: "Automated content creation and scheduling workflow that generates and posts engaging Twitter threads using AI-powered content generation.",
    techStack: ["n8n", "Groq AI", "Twitter API", "Workflow Automation"],
    category: "Automation",
    githubUrl: "https://github.com/Danieleyeta/twitter-x-auto-poster",
    featured: false,
  },
  {
    title: "LinkedIn AI Content Creator",
    summary: "Intelligent content automation system for LinkedIn that generates professional posts, manages scheduling, and optimizes engagement.",
    techStack: ["n8n", "Groq AI", "LinkedIn API", "Content Automation"],
    category: "Automation",
    githubUrl: "https://github.com/Danieleyeta/linkedin-content-creator",
    featured: false,
  },
  {
    title: "MarketBook",
    summary: "Modern marketplace application with real-time updates, user authentication, and seamless buying/selling experience.",
    techStack: ["React", "TypeScript", "Docker", "REST API"],
    category: "Full-Stack",
    githubUrl: "https://github.com/Danieleyeta/MarketBook",
  },
];

export const featuredProjects = projects.filter(p => p.featured);
