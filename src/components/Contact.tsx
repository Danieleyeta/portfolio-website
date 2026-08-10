import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send, Twitter } from 'lucide-react';
import { contactInfo } from '../data/about';

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Twitter };

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  return (
    <section id="contact" className="section section-contrast relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full border border-white/5" />
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-tag">Contact</p>
            <h2 className="mb-7 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              Let&apos;s build something <span className="gradient-text">exceptional.</span>
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-dark-muted">
              Web product, AI integration, cloud system, or automation workflow. Share the challenge and I&apos;ll respond with a clear next step.
            </p>

            <div className="space-y-3">
              <a href={`mailto:${contactInfo.email}`} className="group flex items-center gap-4 rounded-2xl border border-dark-border bg-dark-surface/70 p-4 transition-all hover:border-accent-primary">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/15 text-accent-primary"><Mail size={21} /></span>
                <span><small className="block text-dark-muted">Email</small><strong>{contactInfo.email}</strong></span>
                <ArrowUpRight className="ml-auto text-dark-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={19} />
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-dark-border bg-dark-surface/70 p-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/15 text-accent-primary"><MapPin size={21} /></span>
                <span><small className="block text-dark-muted">Based in</small><strong>{contactInfo.location}</strong></span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {contactInfo.socials.map((social) => {
                const Icon = socialIcons[social.platform as keyof typeof socialIcons];
                return <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.platform} className="flex h-11 w-11 items-center justify-center rounded-full border border-dark-border bg-dark-surface transition-all hover:-translate-y-1 hover:border-accent-primary hover:text-accent-primary"><Icon size={19} /></a>;
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-dark-border bg-dark-surface/85 p-6 shadow-2xl shadow-black/25 backdrop-blur md:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-dark-border pb-5">
              <div><h3 className="text-xl font-bold">Project brief</h3><p className="text-sm text-dark-muted">Tell me what you are building.</p></div>
              <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">Replies within 24h</span>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium">First Name<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Your first name" className="mt-2 w-full rounded-xl border border-dark-border bg-dark-bg px-4 py-3.5 outline-none transition-colors placeholder:text-dark-muted/60 focus:border-accent-primary" /></label>
              <label className="text-sm font-medium">Last Name<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Your last name" className="mt-2 w-full rounded-xl border border-dark-border bg-dark-bg px-4 py-3.5 outline-none transition-colors placeholder:text-dark-muted/60 focus:border-accent-primary" /></label>
            </div>
            <label className="mt-5 block text-sm font-medium">Email<input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-dark-border bg-dark-bg px-4 py-3.5 outline-none transition-colors placeholder:text-dark-muted/60 focus:border-accent-primary" /></label>
            <label className="mt-5 block text-sm font-medium">Message<textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Project goals, timeline, and what success looks like..." className="mt-2 w-full resize-none rounded-xl border border-dark-border bg-dark-bg px-4 py-3.5 outline-none transition-colors placeholder:text-dark-muted/60 focus:border-accent-primary" /></label>
            <button type="submit" className="btn-primary group mt-6 w-full justify-center rounded-xl py-4">
              Send Project Brief
              <Send className="transition-transform group-hover:translate-x-1" size={19} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
