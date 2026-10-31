import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Icons } from '../utils/data';
import { menuItems, categories } from '../utils/data';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const controls = useAnimation();

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === activeCategory));
    }
  }, [activeCategory]);

  const filteredCategories = [
    { id: 'all', name: 'All', icon: <Icons.Coffee /> },
    { id: 'coffee', name: 'Coffee', icon: <Icons.Cup /> },
    { id: 'tea', name: 'Tea', icon: <Icons.CupHot /> },
    { id: 'pastry', name: 'Pastry', icon: <Icons.Pastry /> },
    { id: 'breakfast', name: 'Breakfast', icon: <Icons.Sun /> },
  ];

  return (
    <section id="menu" className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Our Menu</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-text-muted max-w-2xl mx-auto">
            Experience our carefully crafted selection of premium beverages and delectable pastries,
            each created with the finest ingredients and unmatched expertise.
          </p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filteredCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-black/40 border border-gold/20 text-text-muted hover:border-gold hover:text-white'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="group bg-black/40 border border-gold/10 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                {item.new && (
                  <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-gold font-bold">₹{item.price}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
