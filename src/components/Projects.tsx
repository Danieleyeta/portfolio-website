import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import VideoPreviewModal from './VideoPreviewModal';

const projectsData = [
  {
    title: 'ClipIt',
    summary: 'A robust video clipping platform featuring a customized backend and frontend ecosystem for seamless media management and content creation at scale.',
    techStack: ['Python', 'React', 'TypeScript', 'AI Integration', 'FFmpeg'],
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    category: 'Full-Stack',
  },
  {
    title: 'Knowledge API',
    summary: 'A functional API architecture designed to handle complex data retrieval, structure knowledge bases, and deliver intelligent responses reliably.',
    techStack: ['C#', '.NET', 'REST API', 'SQL Server'],
    category: 'Backend',
  },
  {
    title: 'Automated Workflow Agents',
    summary: 'AI-powered pipelines for lead qualification and customer onboarding — slashing manual operations and accelerating team efficiency significantly.',
    techStack: ['n8n', 'Telegram Bot API', 'OpenAI', 'Webhooks'],
    category: 'AI / Automation',
  },
  {
    title: 'Breaking Free Platform',
    summary: 'Comprehensive digital ecosystem for a finance-focused educational brand — full website infrastructure paired with automated promotional workflows.',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'n8n'],
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    category: 'Full-Stack',
  },
];

type Project = (typeof projectsData)[0];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#a78bfa' }}>Selected Work</p>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
            Projects &amp;{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg,#a78bfa,#22d3ee)' }}
            >
              Case Studies
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: '#475569' }}>
            Click <strong className="text-slate-300">Preview Project</strong> on any card to watch a short video
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
