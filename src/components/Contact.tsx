import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, ExternalLink } from 'lucide-react';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="section-divider max-w-4xl mx-auto mb-32" />

      <div className="max-w-5xl mx-auto">
        {/* Section label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#f0436a' }}>
            To discuss your Cloud, AI, or Automation project
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight" style={{ color: 'var(--text-primary)' }}>
            Let&apos;s Connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/eyeta-daniel"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-5 rounded-2xl transition-all hover:-translate-y-0.5"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                style={{ background: 'rgba(10,102,194,0.15)', color: '#0a66c2' }}
              >
                <LinkedinIcon />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-faint)' }}>LinkedIn</p>
                <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Eyeta Daniel - Profile
                </p>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto opacity-30 group-hover:opacity-70 transition-opacity" style={{ color: 'var(--text-muted)' }} />
            </a>

            {/* Email */}
            <a
              href="mailto:danieleyeta1234@gmail.com"
              className="group flex items-center gap-5 p-5 rounded-2xl transition-all hover:-translate-y-0.5"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                style={{ background: 'rgba(240,67,106,0.12)', color: '#f0436a' }}
              >
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-faint)' }}>Email</p>
                <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                  danieleyeta1234@gmail.com
                </p>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto opacity-30 group-hover:opacity-70 transition-opacity" style={{ color: 'var(--text-muted)' }} />
            </a>

            {/* Status chip */}
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl"
              style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <p className="text-sm font-semibold" style={{ color: '#34d399' }}>
                Available for new projects &amp; opportunities
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Book a call card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--text-faint)' }}>
              Or Schedule a Meeting
            </p>

            {/* Booking card */}
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
            >
              {/* Header strip */}
              <div
                className="px-7 py-6"
                style={{ borderBottom: '1px solid var(--border-default)', background: 'var(--bg-subtle)' }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white"
                    style={{ background: 'linear-gradient(135deg,#f0436a,#7c3aed)' }}
                  >
                    ED
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>Eyeta Daniel</p>
                    <p className="text-xs" style={{ color: 'var(--text-faint)' }}>Software Developer &amp; AI Engineer</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-7 py-8 flex flex-col items-center text-center gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(240,67,106,0.1)', border: '1px solid rgba(240,67,106,0.2)' }}
                >
                  <Calendar className="w-7 h-7" style={{ color: '#f0436a' }} />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>30 Minute Meeting</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    Let&apos;s discuss your project: cloud infrastructure, AI automation, or full-stack development.
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="mailto:danieleyeta1234@gmail.com?subject=Let's%20Schedule%20a%20Call"
                  className="w-full px-6 py-4 rounded-full text-white font-bold text-sm uppercase tracking-widest text-center transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg,#f0436a,#7c3aed)',
                    boxShadow: '0 8px 30px rgba(240,67,106,0.3)',
                  }}
                >
                  Book a Call via Email
                </a>

                <p className="text-xs" style={{ color: 'var(--text-faintest)' }}>
                  Web conferencing details provided upon confirmation
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
