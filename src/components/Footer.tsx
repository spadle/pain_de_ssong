"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-cream mb-3">
                Paine<span className="text-gold italic">de</span>Ssong
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-cream/40 text-lg mb-1">
                빵드숑
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-cream/30 text-base leading-relaxed">
                Artisan Home Bakery
                <br />
                Fort Lee, New Jersey
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-[family-name:var(--font-cormorant)] text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Menu", "Gallery", "Order"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-[family-name:var(--font-cormorant)] text-cream/40 text-lg hover:text-gold transition-colors duration-300 w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-[family-name:var(--font-cormorant)] text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/pain_de_ssong/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-[family-name:var(--font-cormorant)] text-cream/40 text-lg hover:text-gold transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @pain_de_ssong
              </a>
              <p className="font-[family-name:var(--font-cormorant)] text-cream/30 text-base">
                📍 Fort Lee, NJ
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-cream/30 text-base">
                📅 Pre-order: Sun & Mon
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-cream/30 text-base">
                🕐 Pick-up: Fri & Sat
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-cormorant)] text-cream/20 text-sm">
            &copy; {new Date().getFullYear()} PaindeSsong. Baked with love.
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-cream/20 text-sm italic">
            🙏 Matthew 25:21
          </p>
        </div>
      </div>
    </footer>
  );
}
