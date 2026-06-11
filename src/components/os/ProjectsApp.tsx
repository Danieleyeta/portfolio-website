import React from 'react';
import WindowFrame from './WindowFrame';
import ProjectCard from '../ProjectCard';

const projectsData = [
  {
    title: "ClipIt",
    summary: "A robust video clipping platform featuring a customized backend and frontend ecosystem for seamless media management.",
    techStack: ["Python", "React", "AI Integration"],
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Knowledge API",
    summary: "A functional API architecture designed to handle complex data retrieval and structure knowledge bases efficiently.",
    techStack: ["C#", ".NET"]
  },
  {
    title: "Automated Workflow Agents",
    summary: "Integrated AI models into automated pipelines for lead qualification and customer onboarding, heavily optimizing operational workflows.",
    techStack: ["n8n", "Telegram Bot API", "AI Models"]
  },
  {
    title: "Breaking Free Platform",
    summary: "Developed a comprehensive digital ecosystem for a finance-focused educational brand, including website infrastructure and automated promotional workflows.",
    techStack: ["Full-stack", "UI/UX"],
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

const ProjectsApp: React.FC = () => {
  return (
    <WindowFrame id="projects" title="Finder - Projects" defaultWidth={1000} defaultHeight={700} defaultX={100} defaultY={100}>
      <div className="p-10">
        <h2 className="text-4xl font-extrabold tracking-tighter text-slate-900 mb-2">Selected Work</h2>
        <p className="text-lg text-slate-500 font-medium mb-10">A collection of projects showcasing my focus on scalable architecture.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div key={project.title} className="h-96">
              <ProjectCard 
                title={project.title}
                summary={project.summary}
                techStack={project.techStack}
                videoSrc={project.videoSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </WindowFrame>
  );
};

export default ProjectsApp;
