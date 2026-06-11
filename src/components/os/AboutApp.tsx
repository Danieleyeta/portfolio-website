import React from 'react';
import WindowFrame from './WindowFrame';

const AboutApp: React.FC = () => {
  return (
    <WindowFrame id="about" title="About Me.app" defaultWidth={800} defaultHeight={600} defaultX={50} defaultY={50}>
      <div className="p-12 flex flex-col justify-center min-h-full">
        <span className="inline-block py-2 px-5 rounded-full bg-violet-50 border border-violet-100 text-xs font-bold uppercase tracking-widest text-violet-600 mb-8 self-start shadow-sm">
          Available for new opportunities
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6 leading-[1.05]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500">Eyeta Daniel.</span>
        </h1>
        <h2 className="text-2xl font-semibold text-slate-500 mb-8 tracking-tight">
          Software Developer & AI Engineer.
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mb-12">
          I specialize in building robust cloud infrastructure, full-stack applications, and AI integrations. With a strong focus on clean code and user-centric design, I transform complex technical challenges into seamless, automated digital experiences.
        </p>
      </div>
    </WindowFrame>
  );
};

export default AboutApp;
