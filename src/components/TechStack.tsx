import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { stackTicker, techGroups, techStack, type TechIcon } from '../data/techStack';

const logoMap: Record<TechIcon, ReactNode> = {
  react: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke="#149eca" strokeWidth="4">
        <ellipse cx="50" cy="50" rx="44" ry="17" />
        <ellipse cx="50" cy="50" rx="44" ry="17" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="44" ry="17" transform="rotate(120 50 50)" />
      </g>
      <circle cx="50" cy="50" r="8" fill="#149eca" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="#111111" />
      <path d="M30 70V30h8l31 40h-11L39 45v25z" fill="white" />
      <path d="M65 30h7v27l-7-9z" fill="white" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path d="M49 8c-22 0-21 10-21 10v11h22v4H20S7 31 7 54s12 22 12 22h8V64s-1-12 12-12h22s12 0 12-12V19S75 8 49 8Zm-12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" fill="#3776ab" />
      <path d="M51 92c22 0 21-10 21-10V71H50v-4h30s13 2 13-21-12-22-12-22h-8v12s1 12-12 12H39S27 48 27 60v21s-2 11 24 11Zm12-8a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="#ffd343" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <g fill="#2496ed">
        <rect x="15" y="35" width="14" height="13" rx="2" />
        <rect x="32" y="35" width="14" height="13" rx="2" />
        <rect x="49" y="35" width="14" height="13" rx="2" />
        <rect x="32" y="19" width="14" height="13" rx="2" />
        <rect x="49" y="19" width="14" height="13" rx="2" />
        <rect x="66" y="35" width="14" height="13" rx="2" />
        <path d="M92 43c-5-3-10-3-14-1-2-12-10-16-10-16s-7 8-2 19H12c-4 0-6 3-5 7 4 20 18 30 39 30 20 0 36-9 45-26 5 0 9-2 11-6-4-3-7-6-10-7Z" />
      </g>
      <circle cx="25" cy="58" r="3" fill="white" />
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path d="M43 10h25L43 88 12 76Z" fill="#0089d6" />
      <path d="m56 40 32 36-46 12 26-78-12 30Z" fill="#0078d4" />
      <path d="M56 40 42 88l46-12Z" fill="#26d2f5" />
    </svg>
  ),
};

const TechStack = () => {
  return (
    <section id="stack" className="section-contrast relative overflow-hidden px-4 py-24 md:px-8 lg:px-16">
      <div className="pointer-events-none absolute inset-0 tech-grid-bg" aria-hidden="true" />
      <div className="container relative z-10">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-tag">Tech Stack</p>
            <h2 className="section-heading">From interface to infrastructure.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-dark-muted lg:justify-self-end">
            One connected engineering workflow: design the experience, build reliable services, then deploy intelligence and automation at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {techStack.map((tech) => (
            <div key={tech.name} className="group flex items-center gap-4 rounded-2xl border border-dark-border bg-dark-surface/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary hover:bg-dark-surface">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2.5 [&_svg]:h-full [&_svg]:w-full">
                {logoMap[tech.icon]}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold">{tech.name}</h3>
                <p className="mt-0.5 truncate text-xs text-dark-muted">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-10 grid gap-5 lg:grid-cols-3">
          <div className="absolute left-[15%] right-[15%] top-1/2 hidden border-t border-dashed border-accent-primary/40 lg:block" aria-hidden="true" />
          {techGroups.map((group, index) => (
            <article key={group.number} className="group relative z-10 rounded-3xl border border-dark-border bg-dark-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary">
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-primary text-sm font-black text-white">{group.number}</span>
                {index < techGroups.length - 1 && (
                  <span className="absolute -right-8 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-accent-primary/40 bg-[#080810] text-accent-primary lg:flex">
                    <ArrowRight size={18} />
                  </span>
                )}
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-muted">Layer {index + 1}</span>
              </div>
              <h3 className="text-2xl font-black">{group.title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-relaxed text-dark-muted">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-dark-border bg-dark-bg/60 px-3 py-1.5 text-xs font-medium">{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="stack-marquee mt-10 overflow-hidden border-y border-dark-border bg-dark-surface/40 py-4">
          <div className="stack-marquee-track flex w-max items-center">
            {[...stackTicker, ...stackTicker].map((tool, index) => (
              <div key={`${tool}-${index}`} className="flex items-center gap-4 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-dark-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
