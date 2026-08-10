import { Check, Code, FileText, Layout, Rocket, Search } from 'lucide-react';
import { processHighlights, processSteps } from '../data/process';

const iconMap = {
  search: Search,
  layout: Layout,
  code: Code,
  rocket: Rocket,
};

const Process = () => {
  return (
    <section id="process" className="section section-light-texture overflow-hidden">
      <div className="container">
        <div className="mb-16 max-w-4xl">
          <p className="section-tag flex items-center gap-3 before:h-2 before:w-2 before:rounded-full before:bg-accent-primary">Process</p>
          <h2 className="text-5xl font-black leading-none tracking-[-0.05em] md:text-6xl lg:text-7xl">
            Methodical, thorough, <span className="gradient-text">effective.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-dark-muted">Every project follows a transparent path from first question to production handover.</p>
        </div>

        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-16 hidden border-t-2 border-dashed border-accent-primary/30 lg:block" aria-hidden="true" />
          {processSteps.map((step) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <article key={step.number} className="group relative z-10 text-center">
                <div className="mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full border border-dark-border bg-dark-surface shadow-xl shadow-black/5 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-accent-primary group-hover:shadow-accent-primary/15">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-primary/10 text-accent-primary transition-transform group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={30} />
                  </div>
                </div>
                <span className="text-sm font-black text-accent-primary">{step.number}</span>
                <h3 className="mt-2 text-2xl font-black">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-dark-muted">{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-dark-border bg-dark-surface p-7 shadow-xl shadow-black/5">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent-primary/10 blur-3xl" />
          <div className="relative mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-primary text-white"><FileText size={21} /></div>
            <div><h3 className="font-bold">Every delivery includes</h3><p className="text-sm text-dark-muted">Clear documentation, accountable communication, and support.</p></div>
          </div>
          <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processHighlights.map((highlight) => (
              <div key={highlight.text} className="flex items-center gap-3 rounded-xl border border-dark-border bg-dark-bg/60 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-primary text-white"><Check size={15} /></span>
                <p className="text-sm">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
