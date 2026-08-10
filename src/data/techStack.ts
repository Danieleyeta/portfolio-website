export type TechIcon = 'react' | 'nextjs' | 'python' | 'docker' | 'azure';

export interface TechItem {
  name: string;
  description: string;
  icon: TechIcon;
}

export const techStack: TechItem[] = [
  {
    name: 'React',
    description: 'Component-driven interfaces',
    icon: 'react',
  },
  {
    name: 'Next.js',
    description: 'Production React applications',
    icon: 'nextjs',
  },
  {
    name: 'Python',
    description: 'AI and backend engineering',
    icon: 'python',
  },
  {
    name: 'Docker',
    description: 'Containerized applications',
    icon: 'docker',
  },
  {
    name: 'Microsoft Azure',
    description: 'Cloud platforms and deployment',
    icon: 'azure',
  },
];

export interface TechGroup {
  number: string;
  title: string;
  description: string;
  tools: string[];
}

export const techGroups: TechGroup[] = [
  {
    number: '01',
    title: 'Frontend Systems',
    description: 'Fast, accessible interfaces built as reusable design systems.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    number: '02',
    title: 'Backend & Data',
    description: 'Reliable application services, APIs, and production-ready data layers.',
    tools: ['Python', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Data Pipelines'],
  },
  {
    number: '03',
    title: 'Cloud, AI & Automation',
    description: 'Cloud deployments and intelligent workflows that reduce manual work.',
    tools: ['Azure', 'Docker', 'CI/CD', 'OpenAI', 'Gemini', 'n8n'],
  },
];

export const stackTicker = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Vite',
  'Python',
  'REST APIs',
  'PostgreSQL',
  'Azure',
  'Docker',
  'OpenAI',
  'n8n',
];
