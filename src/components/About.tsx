"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-36 bg-cream relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold/[0.03]" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-rose/[0.04]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Decorative element */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-cream-dark overflow-hidden">
              {/* Decorative bakery illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 400 500" className="w-full h-full p-12 opacity-90">
                  {/* Madeleine shape */}
                  <ellipse cx="200" cy="180" rx="120" ry="80" fill="none" stroke="#C8A97E" strokeWidth="1.5" />
                  <ellipse cx="200" cy="180" rx="90" ry="60" fill="none" stroke="#C8A97E" strokeWidth="0.8" opacity="0.5" />
                  {/* Shell ridges */}
                  {[...Array(8)].map((_, i) => (
                    <line
                      key={i}
                      x1="200"
                      y1="120"
                      x2={140 + i * 15}
                      y2="240"
                      stroke="#C8A97E"
                      strokeWidth="0.5"
                      opacity="0.4"
                    />
                  ))}
                  {/* Text */}
                  <text x="200" y="320" textAnchor="middle" fill="#4A3228" fontFamily="serif" fontSize="24" fontStyle="italic">
                    Baked with Love
                  </text>
                  <text x="200" y="360" textAnchor="middle" fill="#C8A97E" fontFamily="serif" fontSize="16" letterSpacing="4">
                    SINCE 2023
                  </text>
                  {/* Cross symbol */}
                  <line x1="200" y1="390" x2="200" y2="420" stroke="#C8A97E" strokeWidth="1" />
                  <line x1="188" y1="400" x2="212" y2="400" stroke="#C8A97E" strokeWidth="1" />
                </svg>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/40" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-[family-name:var(--font-cormorant)] text-gold text-sm tracking-[0.3em] uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-warm-brown leading-tight mb-8">
                A Home Kitchen,{" "}
                <span className="italic text-gold">Endless</span>{" "}
                Passion
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-5 font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-brown-light leading-relaxed"
            >
              <p>
                Born from a love of French pastry tradition and Korean heart,
                PaindeSsong is a home bakery nestled in Fort Lee, New Jersey.
                Every madeleine, every cheesecake, every financier is handcrafted
                with premium ingredients and genuine care.
              </p>
              <p>
                We use only the finest — Valrhona chocolate, real browned butter,
                fresh seasonal fruits — because we believe that what goes into
                each bite matters as much as the love behind it.
              </p>
              <p className="text-gold italic text-xl md:text-2xl font-[family-name:var(--font-playfair)]">
                &ldquo;Well done, good and faithful servant.&rdquo;
                <span className="block text-base text-brown-light/60 mt-1 not-italic font-[family-name:var(--font-cormorant)]">
                  — Matthew 25:21
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-8"
            >
              {[
                { label: "Handcrafted", icon: "🤲" },
                { label: "Premium Ingredients", icon: "🧈" },
                { label: "Made to Order", icon: "💌" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-[family-name:var(--font-cormorant)] text-lg text-brown-light tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
