import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-20 noise-overlay">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Animated gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ background: 'conic-gradient(from 0deg, #2563eb, #38bdf8, #f59e0b, #2563eb)' }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          {/* Rotating gradient border wrapper */}
          <div className="relative p-[1px] rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 32px rgba(52,211,153,0.12)' }}>
            {/* The spinning conic gradient that forms the border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, transparent 35%, #34d399 55%, #60a5fa 70%, transparent 85%)',
              }}
            />
            {/* Inner pill */}
            <div
              className="relative inline-flex items-center gap-3 py-2.5 px-5 rounded-[15px] backdrop-blur-xl"
              style={{ background: 'rgba(6,6,18,0.92)' }}
            >
              {/* Live pulse dot */}
              <div className="relative flex items-center justify-center flex-shrink-0">
                <span className="absolute w-4 h-4 rounded-full animate-ping" style={{ background: 'rgba(52,211,153,0.25)' }} />
                <span className="relative w-2 h-2 rounded-full" style={{ background: '#34d399', boxShadow: '0 0 8px #34d399' }} />
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xs font-black uppercase tracking-[0.15em]" style={{ color: '#34d399' }}>
                  Open to Work
                </span>
                <span className="hidden sm:block w-px h-3 rounded-full" style={{ background: 'rgba(52,211,153,0.25)' }} />
                <span className="hidden sm:block text-xs font-semibold tracking-wide" style={{ color: 'rgba(148,163,184,0.55)' }}>
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[110px] font-extrabold tracking-tighter mb-4 leading-[0.95]"
          style={{ color: 'var(--text-primary)' }}
        >
          Hi, I&apos;m{' '}
          <span className="relative inline-block">
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #93c5fd, #fde68a)' }}
            >
              Eyeta Daniel
            </span>
            <Sparkles className="absolute -top-4 -right-6 w-6 h-6 text-blue-400 opacity-60" />
          </span>
          .
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl font-semibold mb-8 tracking-tight"
          style={{ color: 'var(--text-secondary)' }}
        >
          Software Developer &amp; AI Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          I build robust cloud infrastructure, full-stack applications, and AI-powered automations.
          Turning complex technical challenges into seamless digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group px-8 py-4 rounded-full text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all hover:-translate-y-0.5 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#2563eb,#f59e0b)', boxShadow: '0 8px 30px rgba(37,99,235,0.35)' }}
          >
            <span className="relative z-10">View My Work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:-translate-y-0.5 transition-all backdrop-blur-xl"
            style={{
              border: '1px solid var(--border-stronger)',
              background: 'var(--bg-subtle)',
              color: 'var(--text-primary)',
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: <GithubIcon />, href: 'https://github.com/Danieleyeta', label: 'GitHub' },
            { icon: <LinkedinIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: <Mail className="w-5 h-5" />, href: 'mailto:danieleyeta1234@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-xl"
              style={{
                border: '1px solid var(--border-strong)',
                background: 'var(--bg-subtle)',
                color: 'var(--text-muted)',
              }}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-faintest)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" style={{ color: 'var(--text-faintest)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
