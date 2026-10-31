import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll/modules';
import { Icons } from '../utils/data';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container-custom text-center px-6">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium tracking-widest uppercase mb-6">
              Premium Coffee Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight"
          >
            The Art of <br className="hidden md:block" />
            <span className="gradient-text">Liquid Gold</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Experience the epitome of luxury coffee at NOIR CAFÉ. Where every sip tells a story,
            and every moment is crafted with precision and passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-primary w-full sm:w-auto"
            >
              Explore Menu
              <Icons.ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-outline w-full sm:w-auto"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
