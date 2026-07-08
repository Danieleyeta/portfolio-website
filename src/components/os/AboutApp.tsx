import React from 'react';
import WindowFrame from './WindowFrame';
import { aboutData } from '../../data/content';
import { Code2, Cloud, Brain, Zap } from 'lucide-react';

const iconMap = [Code2, Cloud, Brain, Zap];

const AboutApp: React.FC = () => {
  return (
    <WindowFrame id="about" title="About Me.app" defaultWidth={800} defaultHeight={600} defaultX={50} defaultY={50}>
      <div className="p-10 flex flex-col justify-center min-h-full">
        <span
          className="inline-block py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest mb-6 self-start"
          style={{ background: 'rgba(240,67,106,0.1)', border: '1px solid rgba(240,67,106,0.2)', color: '#ff7096' }}
        >
          Available for new opportunities
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 leading-[1.05]" style={{ color: 'var(--text-primary)' }}>
          Hi, I'm{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #f0436a, #c084fc, #fb7185)' }}
          >
            {aboutData.name}.
          </span>
        </h1>
        <h2 className="text-xl font-semibold mb-6 tracking-tight" style={{ color: 'var(--text-secondary)' }}>
          {aboutData.role}
        </h2>
        <p className="text-base leading-relaxed font-medium max-w-2xl mb-8" style={{ color: 'var(--text-muted)' }}>
          {aboutData.detailedBio}
        </p>

        {/* Expertise chips */}
        <div className="grid grid-cols-2 gap-3">
          {aboutData.expertise.map((item, i) => {
            const Icon = iconMap[i];
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(240,67,106,0.12)' }}
                >
                  <Icon className="w-4 h-4" style={{ color: '#f0436a' }} />
                </div>
                <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </WindowFrame>
  );
};

export default AboutApp;
