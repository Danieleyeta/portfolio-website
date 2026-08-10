import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { featuredProjects, projects } from '../data/projects';

const visualStyles = [
  'from-indigo-600 via-violet-600 to-fuchsia-500',
  'from-cyan-600 via-blue-600 to-indigo-700',
  'from-emerald-500 via-teal-600 to-cyan-700',
  'from-orange-500 via-rose-500 to-purple-700',
];

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? projects : featuredProjects;

  return (
    <section id="work" className="section section-soft overflow-hidden">
      <div className="container">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-tag flex items-center gap-3 before:h-2 before:w-2 before:rounded-full before:bg-accent-primary">Selected Work</p>
            <h2 className="text-5xl font-black tracking-[-0.05em] md:text-6xl">Products built to perform.</h2>
          </div>
          <p className="max-w-md text-dark-muted">Full-stack platforms, AI systems, and automation workflows designed around measurable outcomes.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {displayProjects.map((project, index) => (
            <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-dark-border bg-dark-surface shadow-xl shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-primary/10">
              <div className={`project-visual relative min-h-72 overflow-hidden bg-gradient-to-br ${visualStyles[index % visualStyles.length]} p-6`}>
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/20" />
                <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-white/15" />
                <div className="relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-white/25 bg-[#080810]/80 shadow-2xl backdrop-blur transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.03]">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <div className="ml-3 h-5 flex-1 rounded-md bg-white/10" />
                  </div>
                  <div className="grid min-h-44 grid-cols-[0.34fr_1fr] gap-px bg-white/10">
                    <div className="space-y-3 bg-[#0d0d1a] p-4">
                      <div className="h-5 w-8 rounded bg-white/20" />
                      <div className="h-2 w-full rounded bg-white/10" />
                      <div className="h-2 w-3/4 rounded bg-white/10" />
                      <div className="h-2 w-5/6 rounded bg-white/10" />
                    </div>
                    <div className="bg-[#111122] p-5">
                      <div className="mb-4 flex items-end gap-2">
                        {[42, 70, 55, 88, 62, 95, 76].map((height, barIndex) => (
                          <div key={barIndex} className="flex-1 rounded-t bg-gradient-to-t from-accent-primary to-accent-secondary" style={{ height }} />
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-11 rounded-lg bg-white/10" />
                        <div className="h-11 rounded-lg bg-white/10" />
                        <div className="h-11 rounded-lg bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-5 left-6 rounded-full border border-white/25 bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black">{project.title}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark-border transition-all group-hover:border-accent-primary group-hover:bg-accent-primary group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <p className="mb-5 leading-relaxed text-dark-muted">{project.summary}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-full bg-dark-bg px-3 py-1 text-xs font-medium text-dark-muted">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-5 border-t border-dark-border pt-5 text-sm font-semibold">
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-primary"><Github size={17} /> Code</a>}
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-primary"><ExternalLink size={17} /> Live Demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll && projects.length > featuredProjects.length && (
          <div className="mt-10 text-center">
            <button onClick={() => setShowAll(true)} className="btn-secondary rounded-full px-8 py-4">
              Explore all {projects.length} projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
