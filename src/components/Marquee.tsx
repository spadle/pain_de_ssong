"use client";

import { motion } from "framer-motion";

const items = [
  "Madeleines",
  "Cheesecakes",
  "Financiers",
  "Egg Tarts",
  "Pound Cake",
  "Tiramisu",
  "Matcha",
  "Black Sesame",
  "Earl Grey",
  "Raspberry",
  "Dark Chocolate",
  "빵드숑",
];

export default function Marquee() {
  return (
    <div className="py-6 bg-gradient-to-r from-warm-brown via-brown-light/90 to-warm-brown overflow-hidden border-y border-gold/15">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-gold/25 tracking-widest uppercase flex items-center gap-8"
          >
            {item}
            <span className="text-gold/40 text-xs">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
