import React from 'react';
import { motion } from 'framer-motion';
import { useWindowManager, type AppId } from '../../context/WindowManagerContext';
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
  const windowState = windows[id];
  const isFocused = activeApp === id;

  if (!windowState.isOpen || windowState.isMinimized) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onPointerDown={() => focusApp(id)}
      style={{ zIndex: windowState.zIndex, width: defaultWidth, height: defaultHeight, left: defaultX, top: defaultY }}
      className={`absolute flex flex-col rounded-xl overflow-hidden glass transition-shadow duration-300 ${
        isFocused ? 'shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-violet-500/50' : 'shadow-lg ring-1 ring-white/40'
      }`}
    >
      {/* Title Bar (Drag Handle) */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/40 backdrop-blur-md border-b border-white/20 cursor-move">
        <div className="flex gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); closeApp(id); }}
            className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors flex items-center justify-center group"
          >
            <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); minimizeApp(id); }}
            className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors flex items-center justify-center group"
          >
            <Minus className="w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors flex items-center justify-center group">
            <Maximize2 className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100" />
          </button>
        </div>
        <div className="text-xs font-semibold text-slate-600 tracking-wider uppercase select-none">{title}</div>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>

      {/* Window Content */}
      <div className="flex-grow bg-white/60 backdrop-blur-3xl overflow-auto custom-scrollbar relative">
        {children}
      </div>
    </motion.div>
  );
};

export default WindowFrame;
