import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Monitor, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onEnterDesktop: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onEnterDesktop }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled ? 'var(--bg-nav)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tighter flex items-center gap-2.5" style={{ color: 'var(--text-primary)' }}>
            <span
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: 'linear-gradient(135deg,#f0436a,#7c3aed)', boxShadow: '0 0 12px rgba(240,67,106,0.6)' }}
            />
            Eyeta.
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-400 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onEnterDesktop}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors tracking-wide cursor-pointer"
            >
              <Monitor className="w-4 h-4" />
              Desktop Mode
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-stronger)',
                color: 'var(--text-secondary)',
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:bg-pink-500/10"
              style={{ border: '1px solid #f0436a', color: 'var(--text-primary)' }}
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer"
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-stronger)',
                color: 'var(--text-secondary)',
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </button>
            <button
              className="text-slate-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
              style={{ background: 'var(--bg-mobile-nav)', borderTop: '1px solid var(--border-subtle)' }}
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => { setMenuOpen(false); onEnterDesktop(); }}
                  className="flex items-center gap-2 text-base font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Monitor className="w-4 h-4" />
                  Desktop Mode
                </button>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 px-5 py-3 rounded-full text-sm font-bold text-center"
                  style={{ border: '1px solid #f0436a', color: 'var(--text-primary)' }}
                >
                  Book a Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
