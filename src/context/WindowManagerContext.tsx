import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

export type AppId = 'about' | 'projects' | 'terminal';

export interface WindowState {
  id: AppId;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
}

interface WindowManagerContextType {
  windows: Record<AppId, WindowState>;
  openApp: (id: AppId) => void;
  closeApp: (id: AppId) => void;
  minimizeApp: (id: AppId) => void;
  focusApp: (id: AppId) => void;
  activeApp: AppId | null;
}

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

const initialWindows: Record<AppId, WindowState> = {
  about: { id: 'about', isOpen: true, isMinimized: false, zIndex: 10 },
  projects: { id: 'projects', isOpen: false, isMinimized: false, zIndex: 0 },
  terminal: { id: 'terminal', isOpen: false, isMinimized: false, zIndex: 0 },
};

export const WindowManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<Record<AppId, WindowState>>(initialWindows);
  const topZIndexRef = useRef(10);
  const [activeApp, setActiveApp] = useState<AppId | null>('about');

  const focusApp = useCallback((id: AppId) => {
    topZIndexRef.current += 1;
    const nextZ = topZIndexRef.current;
    
    setWindows(curr => ({
      ...curr,
      [id]: { ...curr[id], zIndex: nextZ, isMinimized: false }
    }));
    setActiveApp(id);
  }, []);

  const openApp = useCallback((id: AppId) => {
    setWindows(curr => {
      if (curr[id].isOpen && !curr[id].isMinimized) {
        // Already open, just focus
        return curr;
      }
      return {
        ...curr,
        [id]: { ...curr[id], isOpen: true, isMinimized: false }
      };
    });
    focusApp(id);
  }, [focusApp]);

  const closeApp = useCallback((id: AppId) => {
    setWindows(curr => ({
      ...curr,
      [id]: { ...curr[id], isOpen: false }
    }));
    if (activeApp === id) setActiveApp(null);
  }, [activeApp]);

  const minimizeApp = useCallback((id: AppId) => {
    setWindows(curr => ({
      ...curr,
      [id]: { ...curr[id], isMinimized: true }
    }));
    if (activeApp === id) setActiveApp(null);
  }, [activeApp]);

  return (
    <WindowManagerContext.Provider value={{ windows, openApp, closeApp, minimizeApp, focusApp, activeApp }}>
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within a WindowManagerProvider');
  }
  return context;
};
