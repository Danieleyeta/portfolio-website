export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
  details: string[];
  tools: string;
}

export type ServiceIcon = "code" | "brain" | "cloud" | "workflow";

export const services: Service[] = [
  {
    icon: "code",
    title: "Full-Stack Development",
    description: "Building modern web applications with React, TypeScript, and Python. From responsive frontends to scalable backends, I create production-ready solutions.",
    details: [
      "Modern React applications with TypeScript and Tailwind CSS",
      "REST APIs and backend services with Python",
      "Database design and optimization with PostgreSQL and MongoDB",
      "Responsive and accessible interface implementation"
    ],
    tools: "React · TypeScript · Python · PostgreSQL · REST APIs"
  },
  {
    icon: "brain",
    title: "AI Engineering",
    description: "Integrating AI capabilities into applications using modern LLMs and AI APIs. Building intelligent systems that solve real business problems.",
    details: [
      "AI-powered content generation and automation workflows",
      "Gemini, GPT, and Groq AI API integration",
      "Fraud detection and pattern recognition systems",
      "Intelligent chatbots and conversational interfaces"
    ],
    tools: "Gemini AI · GPT · Groq · LangChain · OpenAI"
  },
  {
    icon: "cloud",
    title: "Cloud & Infrastructure",
    description: "Deploying and managing applications on cloud platforms with focus on scalability, security, and cost optimization.",
    details: [
      "Azure cloud infrastructure and deployment",
      "Docker containerization and orchestration",
      "CI/CD pipeline setup and automation",
      "Performance monitoring and optimization"
    ],
    tools: "Azure · Docker · Git · CI/CD · Vercel"
  },
  {
    icon: "workflow",
    title: "Workflow Automation",
    description: "Creating automated workflows that eliminate manual tasks and boost productivity using no-code and custom integrations.",
    details: [
      "n8n workflow automation for business processes",
      "API integrations for social and business platforms",
      "Automated content creation and scheduling",
      "Data processing and transformation pipelines"
    ],
    tools: "n8n · Make · Zapier · APIs · Webhooks"
  }
];
