import React, { useState, useRef, useEffect } from 'react';
import { useTerminal } from '../context/TerminalContext';

interface HistoryLine {
  text: React.ReactNode;
  isCommand?: boolean;
}

const Terminal: React.FC = () => {
  const { toggleTerminalMode } = useTerminal();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    { text: 'Portfolio OS v1.0.0 (tty1)' },
    { text: 'Type "help" for a list of available commands.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmed === 'exit') {
      toggleTerminalMode();
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
            <span>  exit     - Return to GUI mode</span>
          </div>
        );
        break;
      case 'ls':
        output = <span className="text-cyan-400">about.txt  projects/  skills.json  contact.sh</span>;
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
    <div 
      className="fixed inset-0 z-[100] bg-zinc-950 text-green-500 font-mono text-sm p-6 overflow-y-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-2">
        {history.map((line, i) => (
          <div key={i} className={`${line.isCommand ? 'text-zinc-300' : 'text-green-500'}`}>
            {line.text}
          </div>
        ))}
        
        <div className="flex items-center gap-2">
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
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
