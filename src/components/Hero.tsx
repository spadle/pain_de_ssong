"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background pattern */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-cream-dark"
      >
        {/* Decorative wheat/grain pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wheat" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M60 10 Q65 30 60 50 Q55 30 60 10Z" fill="#4A3228" />
                <path d="M55 15 Q45 25 40 20" stroke="#4A3228" fill="none" strokeWidth="0.5" />
                <path d="M65 15 Q75 25 80 20" stroke="#4A3228" fill="none" strokeWidth="0.5" />
                <path d="M55 25 Q45 35 38 30" stroke="#4A3228" fill="none" strokeWidth="0.5" />
                <path d="M65 25 Q75 35 82 30" stroke="#4A3228" fill="none" strokeWidth="0.5" />
                <circle cx="60" cy="90" r="1" fill="#C8A97E" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wheat)" />
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* Top decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="decorative-line mx-auto mb-8"
        />

        {/* Korean name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-[family-name:var(--font-cormorant)] text-gold text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
        >
          빵드숑
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl text-warm-brown leading-[0.95] mb-6"
        >
          Paine
          <span className="italic text-gold">de</span>
          Ssong
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-brown-light tracking-wide mb-2"
        >
          Artisan Home Bakery
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-[family-name:var(--font-cormorant)] text-lg text-gold/80 tracking-wider mb-10"
        >
          Fort Lee, NJ
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#menu"
            className="px-10 py-3.5 bg-warm-brown text-cream font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase hover:bg-brown-light transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Menu
          </motion.a>
          <motion.a
            href="https://www.instagram.com/pain_de_ssong/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3.5 border border-gold text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase hover:bg-gold hover:text-cream transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            DM to Order
          </motion.a>
        </motion.div>

        {/* Bottom decorative */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="decorative-line mx-auto mt-12"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.2em] text-brown-light/60 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
