import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../utils/data';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
              Reserve <span className="text-[#d4af37] italic font-serif">Space</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: Icons.MapPin,
                  title: 'Visit Us',
                  content: '123 Luxury Avenue, Downtown Metro City, 10001'
                },
                {
                  icon: Icons.Phone,
                  title: 'Call Us',
                  content: '+91 98765 43210',
                  subtitle: 'Mon-Sat: 7AM - 11PM'
                },
                {
                  icon: Icons.Mail,
                  title: 'Email Us',
                  content: 'hello@noircafe.com',
                  subtitle: 'reservations@noircafe.com'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-14 h-14 rounded-sm bg-[#0a0a0a] border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-light mb-2">{item.title}</h4>
                    <p className="text-[#666] font-light leading-relaxed">{item.content}</p>
                    {item.subtitle && (
                      <p className="text-[#555] text-sm font-light mt-1">{item.subtitle}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-8 border-t border-[#222]"
              >
                <h4 className="text-white font-light mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Icons.Instagram, label: 'Instagram' },
                    { icon: Icons.Twitter, label: 'Twitter' },
                    { icon: Icons.Facebook, label: 'Facebook' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-12 h-12 rounded-sm bg-[#0a0a0a] border border-[#333] flex items-center justify-center text-[#666] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#0a0a0a] border border-[#222] p-8 md:p-12">
              <h3 className="text-2xl text-white font-light mb-6">Book Your Table</h3>
              <p className="text-[#666] font-light mb-8">
                Create an unforgettable moment. Reserve now and experience luxury coffee.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#999] text-sm mb-2 font-light">Name</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[#999] text-sm mb-2 font-light">Email</label>
                    <input
                      type="email"
                      className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#999] text-sm mb-2 font-light">Date</label>
                    <input
                      type="date"
                      className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#999] text-sm mb-2 font-light">Time</label>
                    <input
                      type="time"
                      className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#999] text-sm mb-2 font-light">Guests</label>
                  <select className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#999] text-sm mb-2 font-light">Special Requests</label>
                  <textarea
                    rows={4}
                    className="w-full bg-black border border-[#333] text-white px-4 py-3 font-light focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                    placeholder="Any special occasions or requests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d4af37] text-black py-4 font-medium tracking-wider hover:bg-[#e5c158] transition-colors duration-300"
                >
                  Reserve Table
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
