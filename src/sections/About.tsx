import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-black py-32 md:py-48">
      {/* Minimalist grid layout */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Large statement headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight">
            Built different,
            <br />
            <span className="text-[#d4af37] italic font-serif">crafted right</span>
          </h2>
        </motion.div>

        {/* Benefits grid - I & Me style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {[
            {
              number: '01',
              title: 'No Sugar Added',
              desc: 'Pure coffee. No shortcuts, no sweeteners masking the flavor. Just the natural taste of premium beans.'
            },
            {
              number: '02',
              title: 'Premium Beans',
              desc: 'Sourced from the finest farms. Single-origin, ethically traded, roasted to perfection in small batches.'
            },
            {
              number: '03',
              title: 'Crafted Daily',
              desc: 'Every cup made fresh. No pre-brewed batches sitting for hours. Quality you can taste.'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="border-t border-[#333] pt-8"
            >
              <span className="text-[#d4af37] text-sm tracking-wider">{item.number}</span>
              <h3 className="text-2xl text-white mt-4 mb-4 font-light">{item.title}</h3>
              <p className="text-[#666] leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Large image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-32 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop"
            alt="NOIR CAFÉ"
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16">
            <p className="text-[#d4af37] text-sm tracking-wider mb-2">Est. 2024</p>
            <h3 className="text-3xl md:text-5xl text-white font-light">
              Premium Coffee
              <br />
              <span className="italic font-serif">Experience</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
