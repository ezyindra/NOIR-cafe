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
    <section id="gallery" className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Gallery</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-text-muted max-w-2xl mx-auto">
            Step into our world of luxury and sophistication. Every corner tells a story.
          </p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                selectedCategory === cat
                  ? 'bg-gold text-black'
                  : 'text-text-muted hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold text-xs font-medium mb-2">{item.category}</span>
                <h3 className="text-white font-serif text-lg">{item.caption}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
