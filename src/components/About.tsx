import { BrainCircuit, Cloud, Code2, Workflow, type LucideIcon } from 'lucide-react';
import { aboutInfo, type ExpertiseIcon } from '../data/about';

const expertiseIcons: Record<ExpertiseIcon, LucideIcon> = {
  code: Code2,
  cloud: Cloud,
  brain: BrainCircuit,
  workflow: Workflow,
};

const About = () => {
  return (
    <section id="about" className="section section-light-texture relative overflow-hidden">
      <div className="container">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-tag flex items-center gap-3 before:h-2 before:w-2 before:rounded-full before:bg-accent-primary">About Me</p>
            <h2 className="mb-8 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              I&apos;m <span className="gradient-text">{aboutInfo.name},</span> an engineer who turns technical complexity into useful products and intelligent systems.
            </h2>
            <div className="grid gap-5 text-lg leading-relaxed text-dark-muted md:grid-cols-2">
              {aboutInfo.fullBio.slice(0, 2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Python', 'PostgreSQL', 'Azure', 'Docker', 'AI APIs', 'n8n'].map((tech) => (
                <span key={tech} className="rounded-full border border-dark-border bg-dark-surface/70 px-4 py-2 text-sm font-medium shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-dark-border bg-dark-surface shadow-2xl shadow-black/10">
              <div className="flex items-center justify-between border-b border-dark-border p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-xl font-black text-white">
                    ED
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Engineering profile</h3>
                    <p className="text-sm text-dark-muted">{aboutInfo.role}</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">Available</span>
              </div>

              <div className="grid grid-cols-2 gap-px bg-dark-border">
                {aboutInfo.expertise.map((skill, index) => {
                  const Icon = expertiseIcons[skill.icon];
                  return (
                    <article key={skill.name} className="group bg-dark-surface p-6 transition-colors hover:bg-dark-bg">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary transition-transform group-hover:scale-110">
                        <Icon size={24} />
                      </div>
                      <h4 className="font-bold leading-snug">{skill.name}</h4>
                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-dark-border">
                        <div className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" style={{ width: `${88 - index * 4}%` }} />
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-dark-border p-6 text-center">
                <div><strong className="block text-2xl text-accent-primary">15+</strong><span className="text-xs text-dark-muted">Builds</span></div>
                <div><strong className="block text-2xl text-accent-primary">4</strong><span className="text-xs text-dark-muted">Disciplines</span></div>
                <div><strong className="block text-2xl text-accent-primary">24/7</strong><span className="text-xs text-dark-muted">Curiosity</span></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-accent-secondary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
