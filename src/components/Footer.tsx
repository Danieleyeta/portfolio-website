import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10">
      {/* Bottom bar */}
      <div className="py-8 px-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="text-lg font-extrabold tracking-tighter flex items-center gap-2.5" style={{ color: 'var(--text-primary)' }}>
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: 'linear-gradient(135deg,#f0436a,#7c3aed)' }}
            />
            Eyeta.
          </a>
          <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text-faintest)' }}>
            Built with <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" /> by Eyeta Daniel &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
