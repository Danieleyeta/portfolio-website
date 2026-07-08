import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/content';

const skills = [
  { label: 'Full-Stack Development (React, .NET, Python)', percent: 90 },
  { label: 'Cloud Infrastructure & DevOps', percent: 85 },
  { label: 'AI Engineering & LLM Integration', percent: 88 },
  { label: 'Workflow Automation (n8n, Bots)', percent: 80 },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="section-divider max-w-4xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#f0436a' }}>Get to know me</p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight" style={{ color: 'var(--text-primary)' }}>
            About{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#f0436a,#7c3aed)' }}>
              Me
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: profile card + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Profile card */}
            <div
              className="rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
            >
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(circle, #f0436a, transparent 70%)' }} />

              {/* Avatar initials */}
              <div
                className="relative w-28 h-28 rounded-full flex items-center justify-center mb-5 text-3xl font-extrabold text-white flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#f0436a,#7c3aed)', boxShadow: '0 0 32px rgba(240,67,106,0.4)' }}
              >
                ED
                <span
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2"
                  style={{ background: '#34d399', borderColor: 'var(--bg)' }}
                />
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight mb-1" style={{ color: 'var(--text-primary)' }}>
                {aboutData.name}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: '#f0436a' }}>{aboutData.role}</p>

              {/* Meta info */}
              <div className="flex items-center gap-3 text-xs font-semibold flex-wrap justify-center" style={{ color: 'var(--text-muted)' }}>
                <span>📍 Nigeria</span>
                <span style={{ color: 'var(--border-stronger)' }}>·</span>
                <span>🕐 Available Now</span>
                <span style={{ color: 'var(--border-stronger)' }}>·</span>
                <span>🌐 Remote</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="glow-card rounded-2xl p-5 text-center backdrop-blur-xl"
                >
                  <div
                    className="text-3xl font-extrabold mb-1 text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg,#f0436a,#7c3aed)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-faint)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: bio + skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              {aboutData.bio}
            </p>

            {/* Skills label */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest text-white"
                style={{ background: 'linear-gradient(135deg,#f0436a,#7c3aed)' }}
              >
                Main Skills
              </div>
              <div className="flex-1 h-px" style={{ background: 'var(--border-default)' }} />
            </div>

            {/* Skill bars */}
            <div className="flex flex-col gap-7">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                      {skill.label}
                    </span>
                    <span className="text-xs font-black" style={{ color: '#f0436a' }}>{skill.percent}%</span>
                  </div>
                  {/* Track */}
                  <div className="w-full h-1.5 rounded-full" style={{ background: 'var(--bg-subtle-2)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(to right, #f0436a, #7c3aed, #3b82f6)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mt-10">
              {aboutData.expertise.map(item => (
                <span
                  key={item.label}
                  className="px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(240,67,106,0.08)',
                    border: '1px solid rgba(240,67,106,0.2)',
                    color: '#f0436a',
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
