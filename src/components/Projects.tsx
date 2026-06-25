import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import VideoPreviewModal from './VideoPreviewModal';
import { projectsData, type Project } from '../data/content';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      {/* Section divider */}
      <div className="section-divider max-w-4xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>Selected Work</p>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            Projects &amp;{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg,#60a5fa,#f5c542)' }}
            >
              Case Studies
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--text-faint)' }}>
            Click <strong style={{ color: 'var(--text-secondary)' }}>Preview Project</strong> on any card to watch a short video
            overview of what the project is about.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                index={index}
                onPreview={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video preview modal */}
      <VideoPreviewModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
