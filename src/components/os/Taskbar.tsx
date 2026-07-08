import React from 'react';
import { useWindowManager, type AppId } from '../../context/WindowManagerContext';
import { User, Briefcase, Terminal as TerminalIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Taskbar: React.FC = () => {
  const { windows, openApp, minimizeApp, activeApp } = useWindowManager();

  const apps: { id: AppId; icon: React.ReactNode; label: string }[] = [
    { id: 'about', icon: <User className="w-5 h-5" />, label: 'About Me' },
    { id: 'projects', icon: <Briefcase className="w-5 h-5" />, label: 'Projects' },
    { id: 'terminal', icon: <TerminalIcon className="w-5 h-5" />, label: 'Terminal' },
  ];

  const handleAppClick = (id: AppId) => {
    if (windows[id].isOpen && activeApp === id && !windows[id].isMinimized) {
      minimizeApp(id);
    } else {
      openApp(id);
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[200]">
      <div
        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl"
        style={{
          background: 'var(--bg-taskbar)',
          backdropFilter: 'blur(24px)',
          border: '1px solid var(--border-strong)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {apps.map(app => {
          const isOpen = windows[app.id].isOpen;
          const isMinimized = windows[app.id].isMinimized;
          const isActive = activeApp === app.id && !isMinimized;

          return (
            <div key={app.id} className="relative group flex flex-col items-center">
              <motion.button
                whileHover={{ y: -6, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAppClick(app.id)}
                className="p-3 rounded-xl transition-all duration-300 relative cursor-pointer"
                style={{
                  background: isActive ? 'rgba(240,67,106,0.2)' : 'var(--bg-subtle)',
                  border: isActive ? '1px solid rgba(240,67,106,0.3)' : '1px solid transparent',
                  color: isActive ? '#ff7096' : 'var(--text-muted)',
                }}
              >
                {app.icon}
              </motion.button>

              {/* Active Indicator */}
              {isOpen && (
                <div className={`absolute -bottom-1.5 w-1 h-1 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-blue-400 scale-100' : 'bg-slate-500 scale-75'
                }`} />
              )}

              {/* Tooltip */}
              <div
                className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 rounded-lg text-xs font-semibold shadow-lg pointer-events-none whitespace-nowrap"
                style={{ background: 'var(--bg-tooltip)', border: '1px solid var(--border-stronger)', color: 'var(--text-secondary)' }}
              >
                {app.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Taskbar;
