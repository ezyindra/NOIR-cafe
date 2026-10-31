import React from 'react';
import { Icons } from '../utils/data';
import { Link } from 'react-scroll/modules';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-gold/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="font-serif text-2xl font-bold tracking-widest text-gold">
              NOIR<span className="text-white">CAFÉ</span>
            </a>
            <p className="text-text-muted leading-relaxed">
              Where luxury meets liquid gold. Experience the art of premium coffee in our sophisticated space.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-gold transition-colors">
                <Icons.Instagram />
              </a>
              <a href="#" className="text-text-muted hover:text-gold transition-colors">
                <Icons.Twitter />
              </a>
              <a href="#" className="text-text-muted hover:text-gold transition-colors">
                <Icons.Facebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Experience', 'Gallery'].map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-text-muted hover:text-gold transition-colors block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-6">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-gold mt-1">
                  <Icons.MapPin />
                </span>
                <span className="text-text-muted">
                  123 Luxury Avenue, Downtown<br />
                  Metro City, 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gold">
                  <Icons.Phone />
                </span>
                <span className="text-text-muted">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gold">
                  <Icons.Mail />
                </span>
                <span className="text-text-muted">hello@noircafe.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gold">
                  <Icons.Clock />
                </span>
                <span className="text-text-muted">Mon-Sat: 7AM - 11PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-6">Newsletter</h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Subscribe to receive updates, special offers, and the latest news from NOIR CAFÉ.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-black border border-gold/20 text-white placeholder-text-muted focus:border-gold focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-gold text-black px-6 py-3 font-medium hover:bg-gold-dim transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 pt-8 text-center">
          <p className="text-text-muted">
            &copy; {currentYear} NOIR CAFÉ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
