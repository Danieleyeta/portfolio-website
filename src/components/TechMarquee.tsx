import React from 'react';

const techs = [
  'React', 'TypeScript', 'Python', 'C#', '.NET', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'Docker', 'Azure', 'OpenAI', 'n8n', 'FFmpeg', 'REST APIs',
  'Git', 'Vite', 'SQL Server', 'Framer Motion',
];

const TechMarquee: React.FC = () => {
  return (
    <div
      className="relative z-10 py-12 overflow-hidden"
      style={{
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(90deg, var(--bg), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(270deg, var(--bg), transparent)' }} />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={i}
            className="mx-6 text-sm font-semibold uppercase tracking-widest flex items-center gap-3"
            style={{ color: 'var(--marquee-color)' }}
          >
            {tech}
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(37,99,235,0.4)' }} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
