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
    <div className="py-5 bg-warm-brown overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-[family-name:var(--font-cormorant)] text-base md:text-lg text-cream/15 tracking-[0.2em] uppercase flex items-center gap-12"
          >
            {item}
            <span className="text-gold/20 text-[8px]">&#9671;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
