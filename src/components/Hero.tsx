import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

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

const DOTS = [
  { top: '12%', left: '6%', size: 8 }, { top: '28%', left: '40%', size: 6 },
  { top: '18%', left: '72%', size: 8 }, { top: '55%', left: '18%', size: 6 },
  { top: '42%', left: '88%', size: 8 }, { top: '70%', left: '60%', size: 6 },
  { top: '82%', left: '30%', size: 8 }, { top: '65%', left: '80%', size: 6 },
  { top: '38%', left: '52%', size: 4 }, { top: '90%', left: '78%', size: 6 },
  { top: '8%',  left: '55%', size: 4 }, { top: '75%', left: '5%',  size: 6 },
];

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-24 pb-16 noise-overlay">
      {/* Background glow blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl opacity-[0.12]"
        style={{ background: 'conic-gradient(from 0deg, #f0436a, #7c3aed, #f0436a)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
      />
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #f0436a, transparent 70%)' }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      {/* Scattered glowing dots */}
      {DOTS.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            background: '#34d399',
            boxShadow: `0 0 ${dot.size * 2}px #34d399`,
          }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 leading-[0.95]"
            style={{ color: 'var(--text-primary)' }}
          >
            I&apos;m{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #f0436a, #c084fc, #fb7185)' }}
            >
              Eyeta Daniel
            </span>
            .
          </motion.h1>

          {/* Role: large pink */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tight"
            style={{ color: '#f0436a' }}
          >
            Software Developer
            <br />
            <span style={{ color: '#c084fc' }}>&amp; AI Engineer</span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg leading-relaxed mb-10 max-w-xl"
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
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:-translate-y-0.5 transition-all backdrop-blur-xl"
              style={{
                border: '1px solid var(--border-stronger)',
                background: 'var(--bg-subtle)',
                color: 'var(--text-primary)',
              }}
            >
              Let&apos;s Connect
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#f0436a,#7c3aed)', boxShadow: '0 8px 30px rgba(240,67,106,0.35)' }}
            >
              View My Work
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-3"
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
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-xl hover:border-pink-500/40"
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-faintest)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: 'var(--border-stronger)' }}
        >
          <motion.div className="w-1 h-2 rounded-full" style={{ background: '#f0436a' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
