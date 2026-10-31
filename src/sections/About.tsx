import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll/modules';

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-lg blur-xl"></div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop"
                  alt="NOIR CAFÉ Interior"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <p className="text-gold text-sm font-medium">Est. 2024</p>
                  <h3 className="text-2xl font-serif text-white">Premium Coffee Experience</h3>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Our <span className="text-gold">Passion</span> in Every Cup
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              At NOIR CAFÉ, we believe that coffee is more than just a beverage—it's an art form.
              Our journey began with a simple mission: to create a space where premium coffee
              meets sophisticated ambiance.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              We source our beans from the highest quality farms around the world, roasting
              each batch to perfection in our on-site roastery. Every drink we serve is crafted
              with precision, passion, and an unwavering commitment to excellence.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-serif text-gold mb-2">100%</div>
                <div className="text-text-muted text-sm">Premium Beans</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-gold mb-2">150+</div>
                <div className="text-text-muted text-sm">Blends</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-gold mb-2">5★</div>
                <div className="text-text-muted text-sm">Ratings</div>
              </div>
            </div>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-flex items-center text-gold hover:text-gold-dim transition-colors"
            >
              View Our Menu
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
