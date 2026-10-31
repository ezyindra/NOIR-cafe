import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../utils/data';
import ReservationForm from '../components/ReservationForm';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Reserve Your <span className="text-gold">Table</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Experience the epitome of luxury dining at NOIR CAFÉ. Book your table
              online and let us create an unforgettable moment for you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                  <Icons.MapPin />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Visit Us</h4>
                  <p className="text-text-muted">
                    123 Luxury Avenue, Downtown<br />
                    Metro City, 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                  <Icons.Phone />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <p className="text-text-muted">+91 98765 43210</p>
                  <p className="text-text-muted text-sm">Mon-Sat: 7AM - 11PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                  <Icons.Mail />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <p className="text-text-muted">hello@noircafe.com</p>
                  <p className="text-text-muted text-sm">reservations@noircafe.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gold/10">
              <h3 className="font-serif text-xl text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {[Icons.Instagram, Icons.Twitter, Icons.Facebook].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-black border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <ReservationForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
