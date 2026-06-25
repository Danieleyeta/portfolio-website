import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, Zap } from 'lucide-react';
import { aboutData } from '../data/content';

const { stats, expertise: expertiseData } = aboutData;

const iconMap = [Code2, Cloud, Brain, Zap];
const expertise = expertiseData.map((item, i) => ({ ...item, Icon: iconMap[i] }));

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      {/* Section divider */}
      <div className="section-divider max-w-4xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>About Me</p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            Building with purpose,{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg,#60a5fa,#f5c542)' }}
            >
              shipping with precision.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Bio — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glow-card rounded-3xl p-8 backdrop-blur-xl"
          >
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>Who I Am</p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {aboutData.bio}
            </p>
          </motion.div>

          {/* Stats — 2x2 mini grid spanning 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                className="glow-card rounded-2xl p-6 text-center backdrop-blur-xl"
              >
                <div
                  className="text-4xl font-extrabold mb-1.5 text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg,#60a5fa,#f5c542)' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-faint)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Expertise cards */}
          {expertise.map(({ Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glow-card rounded-2xl p-7 flex flex-col gap-4 group backdrop-blur-xl md:col-span-1"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}
              >
                <Icon className="w-5 h-5" style={{ color: '#60a5fa' }} />
              </div>
              <div>
                <h3 className="font-bold mb-1.5 text-sm" style={{ color: 'var(--text-primary)' }}>{label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
