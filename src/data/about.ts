export interface AboutInfo {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  stats: Stat[];
  expertise: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export const aboutInfo: AboutInfo = {
  name: "Eyeta Daniel",
  role: "Software Developer & AI Engineer",
  shortBio: "I'm Eyeta Daniel, a Software Developer & AI Engineer who transforms complex ideas into elegant, scalable solutions that drive real business value.",
  fullBio: [
    "I build modern web applications, AI-powered systems, and intelligent automation workflows that solve real problems.",
    "With expertise spanning full-stack development, cloud infrastructure, and AI integration, I focus on creating production-ready solutions that are maintainable, scalable, and user-centered.",
    "From fraud detection dashboards to automated content workflows, I've delivered projects across multiple domains, always with an emphasis on clean code and practical impact."
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Commitment" }
  ],
  expertise: [
    "Full-Stack Development",
    "Cloud Infrastructure",
    "AI Engineering",
    "Workflow Automation"
  ]
};

export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
  socials: Social[];
}

export interface Social {
  platform: string;
  url: string;
}

export const contactInfo: ContactInfo = {
  email: "danieleyeta1234@gmail.com",
  location: "Nigeria",
  availability: "Available for freelance and full-time opportunities",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/Danieleyeta"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/eyeta-daniel"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/eyetadaniel"
    }
  ]
};
