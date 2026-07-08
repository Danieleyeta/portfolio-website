import React, { useState, useEffect } from 'react';
import ParticleBackground from '../ParticleBackground';
import Taskbar from './Taskbar';
import AboutApp from './AboutApp';
import ProjectsApp from './ProjectsApp';
import TerminalApp from '../TerminalApp';
import CommandPalette from '../CommandPalette';
import { ArrowLeft, Command } from 'lucide-react';
import { motion } from 'framer-motion';

interface DesktopProps {
  onExitDesktop: () => void;
}

const Desktop: React.FC<DesktopProps> = ({ onExitDesktop }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const greeting = time.getHours() < 12 ? 'Good Morning' : time.getHours() < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="relative w-screen h-screen overflow-hidden selection:bg-blue-400/30 selection:text-white z-0">
      {/* OS Wallpaper */}
      <ParticleBackground />

      {/* Gradient wallpaper overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 30% 20%, rgba(240,67,106,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(124,58,237,0.1) 0%, transparent 50%)'
      }} />
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-50" />

      {/* Top menu bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[250] flex items-center justify-between px-5 py-2"
        style={{
          background: 'var(--bg-desktop-bar)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-default)',
        }}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={onExitDesktop}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Portfolio
          </button>
          <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Eyeta OS</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 hidden sm:flex items-center gap-1.5">
            <Command className="w-3 h-3" />K to search
          </span>
          <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
            {time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })} {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>

      {/* Desktop greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-0 select-none"
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(96,165,250,0.5)' }}>{greeting}</p>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-2" style={{ color: 'var(--ghost-clock)' }}>
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </h1>
      </motion.div>

      {/* OS Apps Layer */}
      <div className="absolute inset-0 pt-10 pointer-events-none">
        <div className="pointer-events-auto w-full h-full relative">
          <AboutApp />
          <ProjectsApp />
          <TerminalApp />
        </div>
      </div>

      {/* Spotlight Search (Cmd+K) */}
      <CommandPalette />

      {/* OS Dock */}
      <Taskbar />
    </div>
  );
};

export default Desktop;
