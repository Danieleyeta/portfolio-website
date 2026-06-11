import React, { useState, useRef, useEffect } from 'react';
import WindowFrame from './os/WindowFrame';

interface HistoryLine {
  text: React.ReactNode;
  isCommand?: boolean;
}

const TerminalApp: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    { text: 'Portfolio OS v2.0.0 (tty1)' },
    { text: 'Type "help" for a list of available commands.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    let output: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        output = (
          <div className="flex flex-col gap-1">
            <span>Available commands:</span>
            <span>  ls       - List directory contents</span>
            <span>  cat      - View file contents (e.g. cat about.txt)</span>
            <span>  whoami   - Display current user</span>
            <span>  clear    - Clear terminal output</span>
          </div>
        );
        break;
      case 'ls':
        output = <span className="text-cyan-400">about.txt  projects/  skills.json</span>;
        break;
      case 'cat about.txt':
        output = 'Hi, I am Eyeta Daniel. Software Developer & AI Engineer specializing in robust cloud infrastructure.';
        break;
      case 'cat':
        output = 'Usage: cat [filename]';
        break;
      case 'whoami':
        output = 'guest_user';
        break;
      case '':
        output = '';
        break;
      default:
        if (trimmed.startsWith('cat ')) {
          output = `cat: ${trimmed.replace('cat ', '')}: No such file or directory`;
        } else {
          output = `command not found: ${trimmed}`;
        }
    }

    setHistory(prev => [
      ...prev,
      { text: `visitor@edo-portfolio:~$ ${cmd}`, isCommand: true },
      ...(output ? [{ text: output }] : [])
    ]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <WindowFrame id="terminal" title="Terminal - bash" defaultWidth={700} defaultHeight={450} defaultX={150} defaultY={150}>
      <div 
        className="w-full h-full bg-zinc-950/90 text-green-500 font-mono text-sm p-4 overflow-y-auto cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex flex-col gap-1.5">
          {history.map((line, i) => (
            <div key={i} className={`${line.isCommand ? 'text-zinc-300' : 'text-green-500'}`}>
              {line.text}
            </div>
          ))}
          
          <div className="flex items-center gap-2 mt-2">
            <span className="text-zinc-300">visitor@edo-portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="flex-grow bg-transparent outline-none border-none text-zinc-100"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} className="h-4" />
        </div>
      </div>
    </WindowFrame>
  );
};

export default TerminalApp;
