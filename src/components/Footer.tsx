import React from 'react';
import { Icons } from '../utils/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#222] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-8">
            <a href="#" className="text-3xl font-light text-[#d4af37]">
              NOIR<span className="text-white">.</span>
            </a>
            <p className="text-[#666] font-light leading-relaxed max-w-xs">
              Where luxury meets liquid gold. Experience the art of premium coffee in our sophisticated space.
            </p>
            <div className="flex gap-6">
              {[
                { icon: Icons.Instagram, label: 'Instagram' },
                { icon: Icons.Twitter, label: 'Twitter' },
                { icon: Icons.Facebook, label: 'Facebook' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-[#666] hover:text-[#d4af37] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-light text-lg mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Story', 'Menu', 'Experience', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#666] hover:text-white font-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-light text-lg mb-8">Visit Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Icons.MapPin className="text-[#d4af37] mt-1" />
                <span className="text-[#666] font-light leading-relaxed">
                  123 Luxury Avenue, Downtown<br />
                  Metro City, 10001
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Icons.Phone className="text-[#d4af37]" />
                <span className="text-[#666] font-light">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Icons.Mail className="text-[#d4af37]" />
                <span className="text-[#666] font-light">hello@noircafe.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-light text-lg mb-8">Stay Updated</h3>
            <p className="text-[#666] font-light mb-8 leading-relaxed">
              Subscribe for exclusive offers and the latest updates from NOIR CAFÉ.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[#0a0a0a] border border-[#333] text-white px-5 py-4 font-light text-sm placeholder-[#555] focus:border-[#d4af37] focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#d4af37] text-black py-4 px-6 font-medium text-sm tracking-wider hover:bg-[#e5c158] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#555] font-light text-sm">
            © {currentYear} NOIR CAFÉ. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-light">
            <a href="#" className="text-[#555] hover:text-[#d4af37] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#555] hover:text-[#d4af37] transition-colors">Terms of Service</a>
            <a href="#" className="text-[#555] hover:text-[#d4af37] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
