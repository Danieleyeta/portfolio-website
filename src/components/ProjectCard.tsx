import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/content';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

interface ProjectCardProps {
  project: Project;
  index?: number;
  onPreview: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onPreview }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group glow-card rounded-3xl p-8 h-full flex flex-col relative overflow-hidden backdrop-blur-xl"
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.6), transparent)' }}
      />

      {/* Project number */}
      {typeof index === 'number' && (
        <span
          className="absolute top-6 right-8 text-7xl font-extrabold leading-none pointer-events-none select-none"
          style={{ color: 'rgba(240,67,106,0.06)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      )}

      {/* Category badge */}
      {project.category && (
        <span
          className="inline-block mb-5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit"
          style={{ background: 'rgba(240,67,106,0.1)', border: '1px solid rgba(240,67,106,0.2)', color: '#f0436a' }}
        >
          {project.category}
        </span>
      )}

      <h3 className="text-2xl font-extrabold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
      <p className="leading-relaxed mb-6 flex-grow" style={{ color: 'var(--text-muted)' }}>{project.summary}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map(tech => (
          <span
            key={tech}
            className="px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: 'var(--bg-subtle-2)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-secondary)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        {project.videoSrc && (
          <button
            onClick={onPreview}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold hover:opacity-90 active:scale-95 transition-all"
            style={{ background: 'linear-gradient(135deg,#f0436a,#7c3aed)', boxShadow: '0 4px 20px rgba(240,67,106,0.3)' }}
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            Preview Project
          </button>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
            style={{
              border: '1px solid var(--border-stronger)',
              background: 'var(--bg-subtle)',
              color: 'var(--text-secondary)',
            }}
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon />
            Source Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              border: '1px solid var(--border-strong)',
              background: 'var(--bg-subtle)',
              color: 'var(--text-muted)',
            }}
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
