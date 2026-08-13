import { ArrowUpRight, Brain, Check, Cloud, Code, Workflow, type LucideIcon } from 'lucide-react';
import { services, type ServiceIcon } from '../data/services';

const iconMap: Record<ServiceIcon, LucideIcon> = {
  code: Code,
  brain: Brain,
  cloud: Cloud,
  workflow: Workflow,
};

const Services = () => {
  return (
    <section id="services" className="section section-light-texture">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="section-tag flex items-center gap-3 before:h-2 before:w-2 before:rounded-full before:bg-accent-primary">Services</p>
          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
            What I can help <span className="gradient-text">you</span> with.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <article key={service.title} className="service-premium-card group relative flex min-h-[430px] flex-col overflow-hidden rounded-3xl border border-dark-border bg-dark-surface p-6 shadow-lg shadow-black/5">
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <Icon size={30} />
                  </div>
                  <span className="font-mono text-sm text-dark-muted">0{index + 1}</span>
                </div>
                <h3 className="mb-4 text-2xl font-black leading-tight">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-dark-muted">{service.description}</p>
                <ul className="mb-6 space-y-3">
                  {service.details.slice(0, 3).map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm text-dark-muted">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-dark-border pt-5 text-xs font-semibold text-accent-primary">{service.tools}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl border border-accent-primary/30 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/10 p-7 md:flex-row md:items-center">
          <div>
            <p className="text-lg">Have a project in mind?</p>
            <p className="mt-1 text-xl font-bold">Let&apos;s scope the right system and ship it properly.</p>
          </div>
          <a href="#contact" className="btn-primary group shrink-0 rounded-full px-7 py-4">
            Let&apos;s Work Together
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
