import React from 'react';
import { motion } from 'framer-motion';
import { Icons, testimonials } from '../utils/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            <span className="text-gold">Voices</span> of Excellence
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-text-muted max-w-2xl mx-auto">
            What our guests and critics say about their NOIR CAFÉ experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-xl relative"
            >
              <div className="absolute top-6 right-6 text-gold/10 text-6xl font-serif leading-none">
                "
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icons.Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < t.rating ? 'text-gold fill-gold' : 'text-text-muted'
                    }`}
                  />
                ))}
              </div>
              <p className="text-text-muted leading-relaxed mb-6 relative z-10">
                {t.content}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dim flex items-center justify-center text-black font-serif font-bold text-lg mr-3">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.name}</h4>
                  <p className="text-text-muted text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
