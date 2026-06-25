import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';

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

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10">
      {/* Contact CTA */}
      <div className="section-divider max-w-4xl mx-auto" />
      <div className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: '#60a5fa' }}>Get in Touch</p>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s build something{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg,#60a5fa,#f5c542)' }}
              >
                exceptional.
              </span>
            </h2>
            <p className="text-xl mb-12 max-w-xl mx-auto" style={{ color: 'var(--text-faint)' }}>
              Available for freelance work and full-time opportunities. Let&apos;s connect.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:danieleyeta1234@gmail.com"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#f59e0b)', boxShadow: '0 8px 30px rgba(37,99,235,0.35)' }}
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Danieleyeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                  style={{
                    border: '1px solid var(--border-strong)',
                    background: 'var(--bg-subtle)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                  style={{
                    border: '1px solid var(--border-strong)',
                    background: 'var(--bg-subtle)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-8 px-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="text-lg font-extrabold tracking-tighter flex items-center gap-2.5" style={{ color: 'var(--text-primary)' }}>
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#f59e0b)' }}
            />
            Eyeta.
          </a>
          <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text-faintest)' }}>
            Built with <Heart className="w-3.5 h-3.5 fill-blue-500 text-blue-500" /> by Eyeta Daniel &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
