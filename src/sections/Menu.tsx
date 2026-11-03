import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '../utils/data';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(menuItems);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === activeCategory));
    }
  }, [activeCategory]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'pastry', name: 'Pastry' },
    { id: 'breakfast', name: 'Breakfast' },
  ];

  return (
    <section id="menu" className="relative bg-black py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header - minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[#d4af37] text-sm tracking-[0.2em] uppercase">Selection</span>
          <h2 className="text-5xl md:text-7xl font-light text-white mt-4">
            Our <span className="text-[#d4af37] italic font-serif">Menu</span>
          </h2>
        </motion.div>

        {/* Category Filter - minimal pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-white text-black'
                  : 'bg-transparent border border-[#333] text-[#666] hover:border-[#d4af37] hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid - I & Me style */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative bg-[#0a0a0a] border border-[#222] hover:border-[#d4af37]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Badges */}
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-[#d4af37] text-black text-[10px] tracking-wider px-3 py-1 uppercase font-medium">
                    Popular
                  </div>
                )}
                {item.new && (
                  <div className="absolute top-4 right-4 bg-white text-black text-[10px] tracking-wider px-3 py-1 uppercase font-medium">
                    New
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg text-white font-light group-hover:text-[#d4af37] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[#d4af37] text-lg font-light">₹{item.price}</span>
                </div>
                <p className="text-[#555] text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
