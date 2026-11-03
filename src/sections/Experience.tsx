import React from 'react';
import CoffeeScene from '../components/CoffeeScene';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#050505] py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[#d4af37] text-sm tracking-[0.2em] uppercase">Interactive</span>
          <h2 className="text-5xl md:text-7xl font-light text-white mt-4">
            3D <span className="text-[#d4af37] italic font-serif">Experience</span>
          </h2>
        </motion.div>

        {/* Full width 3D viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[70vh] border border-[#222] rounded-sm overflow-hidden"
        >
          <CoffeeScene />

          {/* Overlay UI */}
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-black/80 backdrop-blur-sm px-4 py-3 border border-[#333]">
              <p className="text-[#d4af37] text-xs tracking-wider uppercase">3D Experience Active</p>
              <p className="text-[#666] text-xs mt-1">Rotate and zoom to explore</p>
            </div>
          </div>
        </motion.div>

        {/* Features row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { title: 'Artisanal Brewing', desc: 'Crafted using traditional methods' },
            { title: 'Premium Beans', desc: 'Sourced from finest farms worldwide' },
            { title: 'Golden Perfection', desc: 'Every cup meets exacting standards' }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="w-2 h-2 bg-[#d4af37] rounded-full mb-4 mx-auto md:mx-0"></div>
              <h4 className="text-white text-lg font-light mb-2">{feature.title}</h4>
              <p className="text-[#666] text-sm font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
