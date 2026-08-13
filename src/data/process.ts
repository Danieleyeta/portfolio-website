export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: ProcessIcon;
}

export type ProcessIcon = "search" | "layout" | "code" | "rocket";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding your goals, requirements, and constraints. We define scope, deliverables, and success metrics together.",
    icon: "search"
  },
  {
    number: "02",
    title: "Design",
    description: "Creating the architecture and user experience. From wireframes to system design, every decision is intentional.",
    icon: "layout"
  },
  {
    number: "03",
    title: "Build",
    description: "Writing clean, maintainable code with best practices. Regular updates and transparent communication throughout.",
    icon: "code"
  },
  {
    number: "04",
    title: "Deliver",
    description: "Deployment, testing, and handover. Complete documentation, knowledge transfer, and ongoing support available.",
    icon: "rocket"
  }
];

export interface ProcessHighlight {
  text: string;
}

export const processHighlights: ProcessHighlight[] = [
  {
    text: "Clear communication and project updates"
  },
  {
    text: "Clean, documented, and maintainable code"
  },
  {
    text: "Comprehensive documentation delivered"
  },
  {
    text: "Version control and proper Git workflow"
  },
  {
    text: "Thorough testing before deployment"
  },
  {
    text: "Post-launch support and maintenance"
  }
];
