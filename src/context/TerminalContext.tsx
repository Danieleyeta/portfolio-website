import React, { createContext, useContext, useState } from 'react';

interface TerminalContextType {
  isTerminalMode: boolean;
  toggleTerminalMode: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  const toggleTerminalMode = () => {
    setIsTerminalMode(prev => !prev);
  };

  return (
    <TerminalContext.Provider value={{ isTerminalMode, toggleTerminalMode }}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};
