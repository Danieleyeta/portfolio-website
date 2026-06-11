import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, Zap } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '10+', label: 'Technologies' },
  { value: '100%', label: 'Commitment' },
];

const expertise = [
  { Icon: Code2, label: 'Full-Stack Development', desc: 'React, TypeScript, .NET, Python — end-to-end web applications.' },
  { Icon: Cloud, label: 'Cloud Infrastructure', desc: 'Scalable, reliable cloud architectures and DevOps pipelines.' },
  { Icon: Brain, label: 'AI Engineering', desc: 'LLM integrations, intelligent agents, and AI-powered features.' },
  { Icon: Zap, label: 'Workflow Automation', desc: 'n8n, bots, and custom automation pipelines to eliminate toil.' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#a78bfa' }}>About Me</p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
            Building with purpose,{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg,#a78bfa,#22d3ee)' }}
            >
              shipping with precision.
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: '#64748b' }}>
            I'm Eyeta Daniel — a software developer and AI engineer who builds things that work at scale.
            I care deeply about clean code, fast systems, and experiences that feel effortless. From cloud-native
            backends to intelligent automation pipelines, I bring the full stack to the table.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-dark rounded-2xl p-6 text-center"
            >
              <div
                className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg,#a78bfa,#22d3ee)' }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: '#475569' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {expertise.map(({ Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-dark rounded-2xl p-7 flex items-start gap-5 group transition-all duration-300 hover:border-violet-500/20"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.2)' }}
              >
                <Icon className="w-5 h-5" style={{ color: '#a78bfa' }} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1.5">{label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
