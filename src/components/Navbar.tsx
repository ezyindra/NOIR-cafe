import React, { useState, useEffect } from 'react';
import { Icons } from '../utils/data';
import { Link } from 'react-scroll/modules';

const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Menu', href: 'menu' },
  { name: 'Experience', href: 'experience' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Testimonials', href: 'testimonials' },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold tracking-widest text-gold hover:text-gold-dim transition-colors">
          NOIR<span className="text-white">CAFÉ</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-sm font-medium text-text-muted hover:text-gold transition-colors relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gold/20 md:hidden">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-lg font-medium text-text-muted hover:text-gold transition-colors"
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
