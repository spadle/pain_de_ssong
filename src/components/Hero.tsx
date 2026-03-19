"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <motion.div style={{ scale: imgScale }} className="absolute inset-0">
        <Image
          src="/images/cheesecake.jpg"
          alt="PaindeSsong cheesecake"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/65 to-cream/85" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="decorative-line mx-auto mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-[family-name:var(--font-cormorant)] text-gold text-base md:text-lg tracking-[0.4em] uppercase mb-5"
        >
          빵드숑
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-[5.5rem] text-warm-brown leading-[0.95] mb-7"
        >
          Paine<span className="italic text-gold">de</span>Ssong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-brown-light/80 tracking-wide mb-1"
        >
          Artisan Home Bakery
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="font-[family-name:var(--font-cormorant)] text-base text-brown-light/50 tracking-widest uppercase mb-12"
        >
          Fort Lee, NJ
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#menu"
            className="px-10 py-3.5 bg-warm-brown text-cream font-[family-name:var(--font-cormorant)] text-lg tracking-[0.15em] uppercase hover:bg-warm-brown/85 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Menu
          </motion.a>
          <motion.a
            href="https://www.instagram.com/pain_de_ssong/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3.5 bg-gold text-white font-[family-name:var(--font-cormorant)] text-lg tracking-[0.15em] uppercase hover:bg-gold/85 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            DM to Order
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="decorative-line mx-auto mt-14"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.3em] text-brown-light/40 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-6 bg-gold/30"
        />
      </motion.div>
    </section>
  );
}
