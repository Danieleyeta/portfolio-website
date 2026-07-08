import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowLeft } from 'lucide-react';

interface Project {
  title: string;
  summary: string;
  techStack: string[];
  videoSrc?: string;
  liveUrl?: string;
}

interface VideoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({ isOpen, onClose, project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)' }}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
            style={{ background: 'var(--bg-video-modal)', border: '1px solid var(--border-strong)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top bar with back button */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: '1px solid var(--border-default)' }}
            >
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:-translate-x-0.5 hover:opacity-80"
                style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-stronger)', color: 'var(--text-secondary)' }}
                aria-label="Go back"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:opacity-80"
                style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-stronger)', color: 'var(--text-secondary)' }}
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video area */}
            <div className="relative w-full bg-black" style={{ aspectRatio: '16/9' }}>
              {project.videoSrc ? (
                <video
                  ref={videoRef}
                  src={project.videoSrc}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                  playsInline
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-4"
                  style={{ background: 'linear-gradient(135deg,rgba(240,67,106,0.15),rgba(124,58,237,0.1))' }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(240,67,106,0.2)', border: '1px solid rgba(240,67,106,0.3)' }}
                  >
                    <svg className="w-8 h-8" style={{ color: '#f0436a' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-faint)' }}>
                    Video preview coming soon
                  </p>
                </div>
              )}
            </div>

            {/* Project details */}
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold hover:opacity-90 transition-opacity flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#f0436a,#7c3aed)' }}
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(240,67,106,0.1)', border: '1px solid rgba(240,67,106,0.2)', color: '#ff7096' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default VideoPreviewModal;
