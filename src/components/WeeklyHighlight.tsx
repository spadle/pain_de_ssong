"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    quote:
      "The Brownie Cheesecake is silky smooth, richly creamy, and crafted to pair beautifully with coffee.",
    item: "Brownie Cheesecake",
    tag: "Signature",
  },
  {
    quote:
      "Our newest Chunky Choco Forest Madeleines, where dark chocolate meets bittersweet matcha, has already become a best-seller.",
    item: "Choco Forest Madeleine",
    tag: "Best Seller",
  },
  {
    quote:
      "These French almond-flour browned butter mini cakes are small but dangerously delicious... try one and you might not stop at three.",
    item: "Financiers",
    tag: "Fan Favorite",
  },
];

export default function WeeklyHighlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-cream-dark relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-12 left-12 font-[family-name:var(--font-playfair)] text-[200px] text-gold/[0.04] leading-none select-none">
        &ldquo;
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-gold text-sm tracking-[0.3em] uppercase mb-4">
            From Our Kitchen
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-warm-brown">
            What Makes Us <span className="italic text-gold">Special</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.item}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-cream border border-gold/10 p-8 text-center hover:border-gold/25 transition-all duration-500 group"
            >
              <span className="font-[family-name:var(--font-playfair)] text-5xl text-gold/20 leading-none">
                &ldquo;
              </span>
              <p className="font-[family-name:var(--font-cormorant)] text-brown-light text-lg italic leading-relaxed mt-2 mb-6">
                {item.quote}
              </p>
              <div className="w-8 h-px bg-gold/30 mx-auto mb-4" />
              <p className="font-[family-name:var(--font-playfair)] text-warm-brown text-base group-hover:text-gold transition-colors duration-300">
                {item.item}
              </p>
              <span className="font-[family-name:var(--font-cormorant)] text-gold/60 text-sm tracking-wider uppercase">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
