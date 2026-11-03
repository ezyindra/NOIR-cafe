import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll/modules';

const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'Story', href: 'about' },
  { name: 'Menu', href: 'menu' },
  { name: 'Experience', href: 'experience' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - Minimalist */}
        <a href="#" className="text-white text-xl tracking-[0.2em] font-light">
          NOIR<span className="text-[#d4af37]">.</span>
        </a>

        {/* Desktop Menu - Minimal */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-[#888] text-sm tracking-wider hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`w-full h-px bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-px bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-px bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black md:hidden">
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-2xl text-[#888] hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
