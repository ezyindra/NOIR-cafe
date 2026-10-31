import React from 'react';
import CoffeeScene from '../components/CoffeeScene';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0a0a0a] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              3D <span className="text-gold">Experience</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-8 text-lg">
              Dive into the world of premium coffee with our interactive 3D experience.
              Explore the intricate details of our craft and see the passion that goes into
              every cup we serve.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Artisanal Brewing', desc: 'Masterfully crafted using traditional methods' },
                { title: 'Premium Beans', desc: 'Sourced from the finest farms worldwide' },
                { title: 'Golden Perfection', desc: 'Every cup meets our exacting standards' },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <div className="w-6 h-6 rounded-full bg-gold"></div>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">{feature.title}</h4>
                    <p className="text-text-muted">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="inline-block bg-gold/5 border border-gold/20 rounded-lg p-4">
                <p className="text-gold text-sm font-medium">3D Experience Active</p>
                <p className="text-text-muted text-xs mt-1">
                  Rotate and zoom to explore our coffee craft
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gold/10"
          >
            <CoffeeScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
