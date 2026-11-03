import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryItems } from '../utils/data';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Interior', 'Process', 'Source', 'Art', 'Mood', 'Menu'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative bg-black py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[#d4af37] text-sm tracking-[0.2em] uppercase">Visual Journal</span>
          <h2 className="text-5xl md:text-7xl font-light text-white mt-4">
            Behind <span className="text-[#d4af37] italic font-serif">Scenes</span>
          </h2>
        </motion.div>

        {/* Category Filter - Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-[#0a0a0a] border border-[#222] rounded-sm p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 text-sm tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-black'
                    : 'text-[#666] hover:text-[#d4af37]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden bg-[#0a0a0a] border border-[#222] hover:border-[#d4af37]/50 transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105 group-hover:contrast-125"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#d4af37] text-xs tracking-wider uppercase block mb-2">{item.category}</span>
                  <h3 className="text-white font-light text-lg">{item.caption}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
