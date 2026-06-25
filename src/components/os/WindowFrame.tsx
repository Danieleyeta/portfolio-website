import React from 'react';
import { motion } from 'framer-motion';
import { useWindowManager, type AppId } from '../../context/WindowManagerContext';
import { useTheme } from '../../context/ThemeContext';
import { X, Minus, Maximize2 } from 'lucide-react';

interface WindowFrameProps {
  id: AppId;
  title: string;
  children: React.ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
  defaultX?: number;
  defaultY?: number;
}

const WindowFrame: React.FC<WindowFrameProps> = ({
  id,
  title,
  children,
  defaultWidth = 800,
  defaultHeight = 600,
  defaultX = 100,
  defaultY = 100
}) => {
  const { windows, closeApp, minimizeApp, focusApp, activeApp } = useWindowManager();
  const { theme } = useTheme();
  const windowState = windows[id];
  const isFocused = activeApp === id;

  if (!windowState.isOpen || windowState.isMinimized) return null;

  const unfocusedRing = theme === 'dark' ? 'ring-1 ring-white/5' : 'ring-1 ring-black/5';

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onPointerDown={() => focusApp(id)}
      style={{ zIndex: windowState.zIndex, width: defaultWidth, height: defaultHeight, left: defaultX, top: defaultY }}
      className={`absolute flex flex-col rounded-2xl overflow-hidden transition-shadow duration-300 ${
        isFocused
          ? 'shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-blue-500/30'
          : `shadow-[0_8px_30px_rgba(0,0,0,0.3)] ${unfocusedRing} opacity-90`
      }`}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-4 py-3 cursor-move"
        style={{
          background: 'var(--bg-titlebar)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-default)',
        }}
      >
        <div className="flex gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); closeApp(id); }}
            className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors flex items-center justify-center group"
          >
            <X className="w-2 h-2 text-red-950 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); minimizeApp(id); }}
            className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors flex items-center justify-center group"
          >
            <Minus className="w-2 h-2 text-yellow-950 opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors flex items-center justify-center group">
            <Maximize2 className="w-2 h-2 text-green-950 opacity-0 group-hover:opacity-100" />
          </button>
        </div>
        <div className="text-xs font-semibold tracking-wider uppercase select-none" style={{ color: 'var(--text-muted)' }}>{title}</div>
        <div className="w-16"></div>
      </div>

      {/* Window Content */}
      <div
        className="flex-grow overflow-auto"
        style={{
          background: 'var(--bg-window)',
          backdropFilter: 'blur(24px)',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default WindowFrame;
