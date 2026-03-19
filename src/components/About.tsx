"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-36 bg-cream relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold/[0.03]" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-rose/[0.04]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Real photo collage */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden shadow-xl">
                <Image
                  src="/images/with-love.jpg"
                  alt="PaindeSsong pastries with love"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-warm-brown/5" />
              </div>

              {/* Floating smaller image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-8 -right-8 w-36 h-36 md:w-44 md:h-44 shadow-lg border-4 border-cream z-10"
              >
                <Image
                  src="/images/gift-box.jpg"
                  alt="PaindeSsong gift box"
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </motion.div>

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-gold/40" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-gold/40 z-20" />
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
