import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll/modules';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Minimalist background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>

        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}></div>

        {/* Single accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Minimalist tagline - I & Me style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-light">
              Premium Coffee Experience
            </span>
          </motion.div>

          {/* Bold headline - split for impact */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white leading-[0.9] mb-6"
          >
            <span className="block text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tight">
              NO FLUFF
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#666] mt-2">
              Just pure
            </span>
            <span className="block text-6xl md:text-8xl lg:text-[10rem] font-serif italic text-[#d4af37] mt-4">
              coffee
            </span>
          </motion.h1>

          {/* Minimalist description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#888] text-lg md:text-xl max-w-xl mb-12 font-light"
          >
            We stripped coffee down to its essence.
            <br />
            <span className="text-white">This isn't coffee for the crowd.</span>
          </motion.p>

          {/* Single CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#d4af37] transition-all duration-300"
            >
              Explore Menu
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[#555] text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
