import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../utils/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#050505] py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white">
            Voices of <span className="text-[#d4af37] italic font-serif">Excellence</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            {
              name: 'Elena Thompson',
              role: 'Coffee Connoisseur',
              content: 'NOIR CAFÉ offers an extraordinary coffee experience. The atmosphere is sophisticated, and every drink tells a story.',
              rating: 5
            },
            {
              name: 'Marcus Chen',
              role: 'Design Enthusiast',
              content: 'The attention to detail in every cup is remarkable. From bean selection to brewing technique, perfection achieved.',
              rating: 5
            },
            {
              name: 'Sarah Williams',
              role: 'Regular Visitor',
              content: 'A perfect blend of aesthetics and functionality. The space feels luxurious yet welcoming.',
              rating: 4
            },
            {
              name: 'David Rodriguez',
              role: 'Business Owner',
              content: 'My favorite spot for morning meetings. The Wi-Fi is reliable, and the baristas always get my order right.',
              rating: 5
            }
          ].map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 text-[#d4af37]/10 text-8xl font-serif leading-none z-0">
                "
              </div>

              <div className="relative bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#d4af37]/50 transition-all duration-500">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? 'text-[#d4af37]' : 'text-[#333]'}`}
                    >
                      <Icons.Star className="w-full h-full fill-current" />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#999] leading-relaxed mb-8 relative z-10 font-light">
                  {t.content}
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#aa8c2c] rounded-full flex items-center justify-center text-black font-serif text-lg mr-4">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-light text-lg">{t.name}</h4>
                    <p className="text-[#666] text-sm font-light">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
