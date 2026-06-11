import React from 'react';
import ParticleBackground from '../ParticleBackground';
import Taskbar from './Taskbar';
import AboutApp from './AboutApp';
import ProjectsApp from './ProjectsApp';
import TerminalApp from '../TerminalApp';
import CommandPalette from '../CommandPalette';

const Desktop: React.FC = () => {

  return (
    <div className="relative w-screen h-screen overflow-hidden selection:bg-violet-200 selection:text-slate-900 z-0">
      {/* OS Wallpaper */}
      <ParticleBackground />
      
      {/* OS Apps Layer */}
      <div className="absolute inset-0 pointer-events-none">
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
