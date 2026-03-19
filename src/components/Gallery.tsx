"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const galleryItems = [
  {
    title: "Brownie Cheesecake",
    description: "Our signature — silky smooth and richly creamy",
    color: "from-amber-800/30 to-amber-900/50",
    emoji: "🍮",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    title: "Chunky Madeleines",
    description: "Golden shells with bold, chunky flavors",
    color: "from-yellow-700/30 to-amber-800/40",
    emoji: "🧁",
    span: "",
    aspect: "aspect-square",
  },
  {
    title: "Black Sesame Cheesecake",
    description: "Nutty, earthy perfection",
    color: "from-stone-700/40 to-stone-900/50",
    emoji: "🪨",
    span: "",
    aspect: "aspect-square",
  },
  {
    title: "Matcha Madeleine",
    description: "Premium Japanese matcha in every bite",
    color: "from-green-700/30 to-green-900/40",
    emoji: "🍵",
    span: "",
    aspect: "aspect-square",
  },
  {
    title: "Choco Forest",
    description: "Dark chocolate meets bittersweet matcha",
    color: "from-emerald-900/30 to-stone-900/40",
    emoji: "🌳",
    span: "",
    aspect: "aspect-square",
  },
  {
    title: "Gift Box Collection",
    description: "Beautifully packaged for sharing",
    color: "from-rose-800/20 to-amber-800/30",
    emoji: "🎁",
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    title: "Fig Financier",
    description: "Browned butter, almond flour, sweet fig",
    color: "from-purple-900/20 to-amber-900/30",
    emoji: "🧈",
    span: "",
    aspect: "aspect-square",
  },
  {
    title: "Portuguese Egg Tart",
    description: "Crispy puff pastry, silky custard",
    color: "from-yellow-600/30 to-orange-800/40",
    emoji: "🥚",
    span: "",
    aspect: "aspect-square",
  },
  {
    title: "Marble Pound Cake",
    description: "Classic vanilla-chocolate swirl",
    color: "from-amber-700/30 to-stone-800/40",
    emoji: "🍫",
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    title: "Tiramisu Madeleines",
    description: "Coffee-soaked with mascarpone cream",
    color: "from-amber-900/30 to-stone-800/50",
    emoji: "☕",
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
];

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`gallery-item ${item.span} ${item.aspect} relative cursor-pointer overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-all duration-700`}
      />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`dots-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="#C8A97E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <motion.span
          animate={isHovered ? { scale: 1.3, y: -10 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-5xl md:text-6xl mb-4 drop-shadow-lg"
        >
          {item.emoji}
        </motion.span>

        <motion.h3
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
          className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-cream mb-2 drop-shadow-md"
        >
          {item.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="font-[family-name:var(--font-cormorant)] text-cream/80 text-base"
        >
          {item.description}
        </motion.p>
      </div>

      {/* Hover border */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        className="absolute inset-2 border border-gold/30 z-10 pointer-events-none"
      />
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-28 md:py-36 bg-cream relative">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Our Creations
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl text-warm-brown mb-4">
            Baked with <span className="italic text-gold">Heart</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, idx) => (
            <GalleryCard key={item.title} item={item} index={idx} />
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://www.instagram.com/pain_de_ssong/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-gold text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-wider uppercase hover:bg-gold hover:text-cream transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            See More on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
