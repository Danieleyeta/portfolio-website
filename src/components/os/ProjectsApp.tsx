import React from 'react';
import WindowFrame from './WindowFrame';
import ProjectCard from '../ProjectCard';
import { projectsData } from '../../data/content';

const ProjectsApp: React.FC = () => {
  return (
    <WindowFrame id="projects" title="Finder - Projects" defaultWidth={1000} defaultHeight={700} defaultX={100} defaultY={100}>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tighter mb-1" style={{ color: 'var(--text-primary)' }}>Selected Work</h2>
            <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>A collection of projects showcasing scalable architecture.</p>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', color: '#60a5fa' }}>
            {projectsData.length} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectsData.map((project, index) => (
            <div key={project.title}>
              <ProjectCard
                project={project}
                index={index}
                onPreview={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
    </WindowFrame>
  );
};

export default ProjectsApp;
