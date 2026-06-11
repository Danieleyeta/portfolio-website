import React from 'react';
import { useWindowManager, type AppId } from '../../context/WindowManagerContext';
import { User, Briefcase, Terminal as TerminalIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Taskbar: React.FC = () => {
  const { windows, openApp, minimizeApp, activeApp } = useWindowManager();

  const apps: { id: AppId; icon: React.ReactNode; label: string }[] = [
    { id: 'about', icon: <User className="w-6 h-6" />, label: 'About Me' },
    { id: 'projects', icon: <Briefcase className="w-6 h-6" />, label: 'Projects' },
    { id: 'terminal', icon: <TerminalIcon className="w-6 h-6" />, label: 'Terminal' },
  ];

  const handleAppClick = (id: AppId) => {
    if (windows[id].isOpen && activeApp === id && !windows[id].isMinimized) {
      minimizeApp(id);
    } else {
      openApp(id);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200]">
      <div className="flex items-center gap-4 px-6 py-3 bg-white/40 backdrop-blur-3xl border border-white/50 shadow-2xl rounded-3xl">
        {apps.map(app => {
          const isOpen = windows[app.id].isOpen;
          const isMinimized = windows[app.id].isMinimized;
          const isActive = activeApp === app.id && !isMinimized;

          return (
            <div key={app.id} className="relative group flex flex-col items-center">
              <motion.button
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAppClick(app.id)}
                className={`p-4 rounded-2xl transition-all duration-300 relative ${
                  isActive ? 'bg-white/80 shadow-md text-violet-600' : 'bg-white/40 hover:bg-white/60 text-slate-600 hover:text-slate-900'
                }`}
              >
                {app.icon}
              </motion.button>
              
              {/* Active Indicator */}
              {isOpen && (
                <div className={`absolute -bottom-2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-violet-600 scale-100' : 'bg-slate-400 scale-75'
                }`} />
              )}

              {/* Tooltip */}
              <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-slate-800 text-white text-xs font-semibold rounded-md shadow-lg pointer-events-none whitespace-nowrap">
                {app.label}
              </div>
            </div>
          );
        })}
        
        <div className="w-px h-10 bg-white/50 mx-2"></div>
        
        {/* System Clock */}
        <div className="flex flex-col items-center justify-center px-2 text-slate-700 font-medium">
          <span className="text-sm">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
