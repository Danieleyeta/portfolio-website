export interface Project {
  title: string;
  summary: string;
  techStack: string[];
  videoSrc?: string;
  category?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: 'ClipIt',
    summary: 'A robust video clipping platform featuring a customized backend and frontend ecosystem for seamless media management and content creation at scale.',
    techStack: ['Python', 'React', 'TypeScript', 'AI Integration', 'FFmpeg'],
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    category: 'Full-Stack',
  },
  {
    title: 'Fraud Detection Dashboard',
    summary: 'AI-powered profile analytics and investigation dashboard with real-time transaction review, approve/block actions, client blacklisting, and an integrated LLM-based investigative chat.',
    techStack: ['Next.js', 'TypeScript', 'Azure SWA', 'AI Chat', 'Tailwind CSS'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/Danieleyeta/fraud-detention-frontend',
  },
  {
    title: 'CareerCrafter AI',
    summary: 'An AI-powered application that generates professional CVs and cover letters from user input, leveraging the Gemini API for intelligent content generation.',
    techStack: ['React', 'TypeScript', 'Gemini AI', 'Vite'],
    category: 'AI / Automation',
    githubUrl: 'https://github.com/Danieleyeta/careercrafter-AI',
  },
  {
    title: 'GreatKart',
    summary: 'Full-featured e-commerce platform with user accounts, product catalog, category management, and a complete shopping experience built on Django.',
    techStack: ['Python', 'Django', 'JavaScript', 'CSS'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/Danieleyeta/greatkart-djando',
  },
  {
    title: 'Ecobank Frontend',
    summary: 'Modern banking frontend application built as a demonstration of enterprise-grade fintech UI — clean architecture with optimized backend integration patterns.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    category: 'Frontend',
    githubUrl: 'https://github.com/Danieleyeta/demo-frontend-eco',
  },
];

export const aboutData = {
  name: 'Eyeta Daniel',
  role: 'Software Developer & AI Engineer',
  bio: "I'm Eyeta Daniel a software developer and AI engineer who builds things that work at scale. I care deeply about clean code, fast systems, and experiences that feel effortless. From cloud-native backends to intelligent automation pipelines, I bring the full stack to the table.",
  detailedBio: 'I specialize in building robust cloud infrastructure, full-stack applications, and AI integrations. With a strong focus on clean code and user-centric design, I transform complex technical challenges into seamless, automated digital experiences.',
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Delivered' },
    { value: '10+', label: 'Technologies' },
    { value: '100%', label: 'Commitment' },
  ],
  expertise: [
    { label: 'Full-Stack Development', desc: 'React, TypeScript, .NET, Python — end-to-end web applications.' },
    { label: 'Cloud Infrastructure', desc: 'Scalable, reliable cloud architectures and DevOps pipelines.' },
    { label: 'AI Engineering', desc: 'LLM integrations, intelligent agents, and AI-powered features.' },
    { label: 'Workflow Automation', desc: 'n8n, bots, and custom automation pipelines to eliminate toil.' },
  ],
};
