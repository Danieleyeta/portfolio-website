import { ArrowUpRight, Github, Linkedin, Sparkles, Twitter } from 'lucide-react';
import heroArtwork from '../assets/hero-ai-sculpture.jpg';
import { aboutInfo, contactInfo } from '../data/about';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter,
};

const Hero = () => {
  return (
    <section id="hero" className="section section-light-texture relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-surface/80 px-4 py-2 text-sm font-medium text-dark-muted shadow-sm backdrop-blur">
              <Sparkles size={16} className="text-accent-primary" />
              Software, AI, cloud, and automation
            </div>

            <p className="section-tag mb-3">need a</p>
            <h1 className="mb-6 text-5xl font-black leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Software Developer
              <br />
              <span className="gradient-text">&amp; AI Engineer?</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-dark-muted md:text-xl">
              I turn <strong className="text-dark-text">complex requirements</strong> into elegant systems that scale by combining modern product engineering with practical AI automation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#work" className="btn-primary group rounded-full px-7 py-4">
                View My Work
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </a>
              <a href="#contact" className="btn-secondary rounded-full px-7 py-4">
                Start a project
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 overflow-hidden rounded-2xl border border-dark-border bg-dark-surface/75 shadow-xl shadow-black/5 backdrop-blur sm:grid-cols-4">
              {aboutInfo.stats.map((stat) => (
                <div key={stat.label} className="border-dark-border p-4 sm:border-r sm:last:border-r-0">
                  <div className="text-2xl font-black text-accent-primary md:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs leading-snug text-dark-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-semibold">Let&apos;s Connect</span>
              <div className="flex gap-2">
                {contactInfo.socials.map((social) => {
                  const Icon = socialIcons[social.platform as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-border bg-dark-surface transition-all hover:-translate-y-1 hover:border-accent-primary hover:text-accent-primary"
                      aria-label={social.platform}
                    >
                      {Icon ? <Icon size={18} /> : social.platform.charAt(0)}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-auto">
            <div className="hero-art-halo absolute inset-8 rounded-[3rem]" aria-hidden="true" />
            <div className="hero-art-card relative overflow-hidden rounded-[2.5rem] border border-dark-border bg-dark-surface shadow-2xl shadow-accent-primary/15">
              <img
                src={heroArtwork}
                alt="Abstract glass and chrome AI sculpture"
                className="aspect-[4/5] h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080810] via-[#080810]/70 to-transparent p-7 pt-24 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Engineering approach</p>
                <p className="mt-2 text-2xl font-bold">Build. Integrate. Scale.</p>
              </div>
              <div className="hero-scan-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent" />
            </div>

            <div className="hero-float-badge absolute -left-4 top-10 rounded-2xl border border-dark-border bg-dark-surface/95 p-3.5 shadow-xl backdrop-blur">
              <span className="mb-2 block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              <strong className="block text-sm">Systems online</strong>
              <span className="text-xs text-dark-muted">Production focused</span>
            </div>

            <div className="hero-float-badge absolute -bottom-4 -right-3 rounded-2xl border border-dark-border bg-dark-surface/95 p-3.5 shadow-xl backdrop-blur [animation-delay:-1.5s]">
              <span className="text-xs uppercase tracking-wider text-dark-muted">Core signal</span>
              <strong className="mt-1 block text-lg gradient-text">AI × Full Stack</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
