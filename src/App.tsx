import { useEffect, useLayoutEffect, useState, type CSSProperties } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { aboutData, projectsData } from './data/content';
import './App.css';

const navLinks = [
  ['Projects', '#projects'],
  ['Stack', '#stack'],
  ['About', '#about'],
  ['Connect', '#contact'],
];

const greetings = [
  { text: 'Hello,', language: 'English' },
  { text: 'Bonjour,', language: 'French' },
  { text: '你好,', language: 'Chinese' },
  { text: 'Hola,', language: 'Spanish' },
  { text: 'こんにちは,', language: 'Japanese' },
  { text: 'Báwo,', language: 'Yorùbá' },
];

const services = [
  {
    number: '01',
    title: 'Full-stack development',
    body: 'Modern web products built end to end—from responsive React interfaces to dependable Python and .NET services.',
    tools: 'React · TypeScript · Python · .NET',
  },
  {
    number: '02',
    title: 'AI engineering',
    body: 'Practical AI features, agents, and LLM integrations designed around real users and measurable business outcomes.',
    tools: 'OpenAI · Gemini · Groq · RAG',
  },
  {
    number: '03',
    title: 'Cloud & infrastructure',
    body: 'Scalable cloud architecture, containerized applications, and delivery pipelines that stay maintainable as products grow.',
    tools: 'Azure · Docker · CI/CD · APIs',
  },
  {
    number: '04',
    title: 'Workflow automation',
    body: 'Connected workflows that remove repetitive work across operations, approvals, content, and customer journeys.',
    tools: 'n8n · Webhooks · Bots · Integrations',
  },
];

const stackGroups = [
  ['Frontend', ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite']],
  ['Backend & data', ['Python', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Data pipelines']],
  ['Cloud', ['Microsoft Azure', 'Docker', 'CI/CD', 'Vercel', 'Git']],
  ['AI & automation', ['OpenAI', 'Gemini', 'Groq', 'n8n', 'Intelligent agents']],
];

const techCards = [
  { mark: '⚛', name: 'React', detail: 'Interfaces & product systems' },
  { mark: 'TS', name: 'TypeScript', detail: 'Reliable application code' },
  { mark: 'Py', name: 'Python', detail: 'Backends, data & AI' },
  { mark: 'Az', name: 'Microsoft Azure', detail: 'Cloud infrastructure' },
  { mark: '↗', name: 'n8n', detail: 'Workflow automation' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeTech, setActiveTech] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = window.localStorage.getItem('portfolio-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const featuredProjects = projectsData.slice(0, 3);
  const remainingProjects = projectsData.slice(3);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % featuredProjects.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [featuredProjects.length]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setGreetingIndex((current) => (current + 1) % greetings.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  const showPreviousProject = () => {
    setActiveProject((current) => (current - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const showNextProject = () => {
    setActiveProject((current) => (current + 1) % featuredProjects.length);
  };

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Eyeta Daniel, home">Eyeta Daniel</a>

        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-button"
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-status"><span /> Available for select projects and opportunities</div>
          <h1 id="hero-title">
            <span
              className="accent rotating-greeting"
              key={greetingIndex}
              aria-label={`${greetings[greetingIndex].text} in ${greetings[greetingIndex].language}`}
            >
              {greetings[greetingIndex].text}
            </span>{' '}I’m Eyeta Daniel—based in Nigeria.
            <br />I build full-stack products, cloud systems, and AI automation, <em>end to end.</em>
          </h1>
          <div className="hero-bottom">
            <p>{aboutData.detailedBio}</p>
            <a className="arrow-link" href="#projects">View selected work <ArrowDownRight size={20} /></a>
          </div>
        </section>

        <section className="projects section-shell" id="projects" aria-labelledby="projects-title">
          <header className="section-heading">
            <div><span className="kicker">Selected work</span><h2 id="projects-title">Things I’ve built</h2></div>
            <p>Products, platforms, and automation systems built around real technical and business needs.</p>
          </header>

          <div className="project-showcase">
            <div className="project-viewport">
              <div className="project-track" style={{ transform: `translateX(-${activeProject * 100}%)` }}>
                {featuredProjects.map((project, index) => (
                  <article className="project-slide" key={project.title} aria-hidden={activeProject !== index}>
                    <div className="project-visual" aria-hidden="true">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{project.title.slice(0, 2).toUpperCase()}</strong>
                      <small>{project.category ?? 'Project'}</small>
                    </div>
                    <div className="project-copy">
                      <div className="project-meta"><span>Featured {String(index + 1).padStart(2, '0')}</span><span>{project.category ?? 'Project'}</span></div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <p className="project-stack"><b>Tech stack:</b> {project.techStack.join(', ')}</p>
                      <div className="project-actions">
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">View site <ArrowUpRight size={16} /></a>}
                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">View code <ArrowUpRight size={16} /></a>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="project-controls">
              <div className="project-dots" aria-label="Choose a featured project">
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.title}
                    className={activeProject === index ? 'is-active' : ''}
                    type="button"
                    onClick={() => setActiveProject(index)}
                    aria-label={`Show ${project.title}`}
                    aria-current={activeProject === index ? 'true' : undefined}
                  />
                ))}
              </div>
              <span className="project-count">0{activeProject + 1} / 0{featuredProjects.length}</span>
              <div className="project-arrows">
                <button type="button" onClick={showPreviousProject} aria-label="Previous project">←</button>
                <button type="button" onClick={showNextProject} aria-label="Next project">→</button>
              </div>
            </div>
          </div>

          <button
            className="archive-toggle"
            type="button"
            onClick={() => setShowAllProjects((current) => !current)}
            aria-expanded={showAllProjects}
            aria-controls="project-archive"
          >
            <span>{showAllProjects ? 'Hide project archive' : `View all ${projectsData.length} projects`}</span>
            <span aria-hidden="true">{showAllProjects ? '−' : '+'}</span>
          </button>

          <div className={showAllProjects ? 'project-archive is-open' : 'project-archive'} id="project-archive">
            {remainingProjects.map((project, index) => (
              <article className="archive-row" key={project.title}>
                <span>{String(index + 4).padStart(2, '0')}</span>
                <div><h3>{project.title}</h3><p>{project.category ?? 'Project'} · {project.techStack.join(', ')}</p></div>
                <div className="archive-actions">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Site <ArrowUpRight size={15} /></a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Code <ArrowUpRight size={15} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stack section-shell" id="stack" aria-labelledby="stack-title">
          <header className="section-heading compact">
            <div><span className="kicker">Tech stack</span><h2 id="stack-title">Tools I work with</h2></div>
            <p>A connected toolkit for taking an idea from interface to infrastructure.</p>
          </header>
          <div className="stack-stage">
            <div className="stack-groups">
              {stackGroups.map(([group, items]) => (
                <div className="stack-group" key={group as string}>
                  <h3>{group}</h3>
                  <p>{(items as string[]).join(' · ')}</p>
                </div>
              ))}
            </div>

            <div className="tech-deck-wrap">
              <button
                className="tech-deck"
                type="button"
                onMouseEnter={() => setActiveTech((current) => (current + 1) % techCards.length)}
                onClick={() => setActiveTech((current) => (current + 1) % techCards.length)}
                aria-label="Cycle through featured technologies"
              >
                {techCards.map((technology, index) => {
                  const position = (index - activeTech + techCards.length) % techCards.length;
                  return (
                    <span
                      className="tech-card"
                      key={technology.name}
                      style={{ '--card-position': position } as CSSProperties}
                    >
                      <span className="tech-mark">{technology.mark}</span>
                      <span className="tech-card-copy"><strong>{technology.name}</strong><small>{technology.detail}</small></span>
                      <span className="tech-card-number">0{index + 1}</span>
                    </span>
                  );
                })}
              </button>
              <p>Hover or click the deck to move through the stack.</p>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="about-title"><span className="kicker">About</span><h2 id="about-title">Engineering useful products with clarity.</h2></div>
          <div className="about-copy">
            <p className="about-lead">{aboutData.bio}</p>
            <div className="location"><MapPin size={17} /> Based in Nigeria · available worldwide</div>
          </div>
        </section>

        <section className="services section-shell" id="services" aria-labelledby="services-title">
          <header className="section-heading compact">
            <div><span className="kicker">Services</span><h2 id="services-title">What I can help you build</h2></div>
          </header>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <small>{service.tools}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <span className="kicker">Connect</span>
          <h2 id="contact-title">Let’s build something <em>useful.</em></h2>
          <p className="contact-intro">Have a web product, AI integration, cloud system, or automation workflow in mind? Share the challenge and I’ll respond with a clear next step.</p>
          <div className="contact-list">
            <a href="mailto:danieleyeta1234@gmail.com"><span><Mail size={18} /> Email</span><strong>danieleyeta1234@gmail.com</strong><ArrowUpRight size={18} /></a>
            <a href="https://linkedin.com/in/eyeta-daniel" target="_blank" rel="noreferrer"><span>in LinkedIn</span><strong>/in/eyeta-daniel</strong><ArrowUpRight size={18} /></a>
            <a href="https://github.com/Danieleyeta" target="_blank" rel="noreferrer"><span>⌘ GitHub</span><strong>github.com/Danieleyeta</strong><ArrowUpRight size={18} /></a>
            <a href="https://twitter.com/eyetadaniel" target="_blank" rel="noreferrer"><span>𝕏 X / Twitter</span><strong>@eyetadaniel</strong><ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div><strong>Eyeta Daniel</strong><span>Software Developer &amp; AI Engineer</span></div>
        <p>© {new Date().getFullYear()} Eyeta Daniel</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
