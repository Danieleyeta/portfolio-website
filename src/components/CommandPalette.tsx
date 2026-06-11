import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { Bot, Terminal, FileText, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [agentResponse, setAgentResponse] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const simulateLLMResponse = async (prompt: string) => {
    setAgentResponse(null);
    setIsTyping(true);
    
    // Simulate network delay
    await new Promise(r => setTimeout(r, 600));
    
    let responseText = "I am Eyeta Daniel's AI assistant. How can I help you learn more about his work?";
    
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes('stack') || lowerPrompt.includes('skills')) {
      responseText = "Daniel specializes in React, Python, C#, and integrating AI models into automated pipelines (like n8n).";
    } else if (lowerPrompt.includes('clipit') || lowerPrompt.includes('project')) {
      responseText = "ClipIt is a robust video clipping platform built with Python and React, featuring a highly customized media management backend.";
    } else if (lowerPrompt.includes('hire') || lowerPrompt.includes('contact')) {
      responseText = "You can reach Daniel at his email in the footer, or connect with him on LinkedIn. He is currently available for new opportunities.";
    }

    // Simulate typing effect
    setIsTyping(false);
    let currentText = '';
    for (let i = 0; i < responseText.length; i++) {
      currentText += responseText[i];
      setAgentResponse(currentText);
      await new Promise(r => setTimeout(r, 15));
    }
  };


  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden flex flex-col max-h-[80vh]"
          >
            <Command 
              className="flex flex-col w-full h-full bg-transparent"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && query.trim()) {
                  simulateLLMResponse(query);
                }
              }}
            >
              <div className="flex items-center px-4 border-b border-slate-200/50">
                <Bot className="w-5 h-5 text-violet-500 mr-2" />
                <Command.Input 
                  placeholder="Ask the AI Agent about my experience, or type a command..." 
                  className="flex-grow py-5 text-lg bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
                  value={query}
                  onValueChange={setQuery}
                  autoFocus
                />
                <button onClick={() => setOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-2">
                {agentResponse || isTyping ? (
                  <div className="p-6 bg-violet-50/50 rounded-xl m-2 border border-violet-100/50">
                    <div className="flex items-center gap-2 mb-3 text-violet-600 font-bold text-sm uppercase tracking-widest">
                      <Bot className="w-4 h-4" /> AI Agent
                    </div>
                    {isTyping ? (
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                        <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      </div>
                    ) : (
                      <p className="text-slate-700 leading-relaxed">{agentResponse}</p>
                    )}
                  </div>
                ) : (
                  <Command.List className="p-2">
                    <Command.Empty className="py-6 text-center text-slate-500 text-sm">
                      Press <kbd className="px-2 py-1 bg-slate-100 rounded text-xs mx-1">Enter</kbd> to ask the AI Agent.
                    </Command.Empty>

                    <Command.Group heading="Suggestions" className="text-xs font-semibold text-slate-400 px-2 py-2 uppercase tracking-wider">
                      <Command.Item 
                        onSelect={() => { setQuery('Tell me about your tech stack'); simulateLLMResponse('stack'); }}
                        className="flex items-center px-4 py-3 rounded-lg text-slate-700 cursor-pointer hover:bg-violet-50 hover:text-violet-700 transition-colors data-[selected=true]:bg-violet-50 data-[selected=true]:text-violet-700"
                      >
                        <Terminal className="w-4 h-4 mr-3" /> Tech Stack Overview
                      </Command.Item>
                      <Command.Item 
                        onSelect={() => { setQuery('How does ClipIt work?'); simulateLLMResponse('clipit'); }}
                        className="flex items-center px-4 py-3 rounded-lg text-slate-700 cursor-pointer hover:bg-violet-50 hover:text-violet-700 transition-colors data-[selected=true]:bg-violet-50 data-[selected=true]:text-violet-700"
                      >
                        <FileText className="w-4 h-4 mr-3" /> Explain ClipIt Architecture
                      </Command.Item>
                      <Command.Item 
                        onSelect={() => { setQuery('Are you available for hire?'); simulateLLMResponse('hire'); }}
                        className="flex items-center px-4 py-3 rounded-lg text-slate-700 cursor-pointer hover:bg-violet-50 hover:text-violet-700 transition-colors data-[selected=true]:bg-violet-50 data-[selected=true]:text-violet-700"
                      >
                        <User className="w-4 h-4 mr-3" /> Hire Me
                      </Command.Item>
                    </Command.Group>
                  </Command.List>
                )}
              </div>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
