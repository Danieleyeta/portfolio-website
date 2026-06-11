import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  summary: string;
  techStack: string[];
  videoSrc?: string;
  category?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onPreview: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreview }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group glass-dark rounded-3xl p-8 h-full flex flex-col relative overflow-hidden transition-all duration-500"
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.6), transparent)' }}
      />

      {/* Category badge */}
      {project.category && (
        <span
          className="inline-block mb-5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit"
          style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#a78bfa' }}
        >
          {project.category}
        </span>
      )}

      <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">{project.title}</h3>
      <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#64748b' }}>{project.summary}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map(tech => (
          <span
            key={tech}
            className="px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', color: '#94a3b8' }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPreview}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold hover:opacity-90 active:scale-95 transition-all"
          style={{ background: 'linear-gradient(135deg,#7c3aed,#0891b2)', boxShadow: '0 4px 20px rgba(124,58,237,0.3)' }}
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          Preview Project
        </button>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-white transition-all hover:scale-110"
            style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
            aria-label={`Open ${project.title} live demo`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
