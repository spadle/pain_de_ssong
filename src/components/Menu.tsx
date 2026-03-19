"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  badge?: string;
};

type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: "cheesecakes",
    title: "Cheesecakes",
    subtitle: "Rich, creamy, unforgettable",
    emoji: "🍮",
    items: [
      {
        name: "Brownie Cheesecake",
        price: '$45 (7") / $5.75 (slice)',
        description:
          "Silky smooth, richly creamy, crafted to pair beautifully with coffee. Our signature.",
        badge: "Signature",
      },
      {
        name: "Black Sesame Cheesecake",
        price: '$28 (7") / $15 (4")',
        description:
          "Nutty, earthy black sesame swirled into velvety cheesecake perfection.",
        badge: "Popular",
      },
      {
        name: "Banana Cheesecake",
        price: '$28 (7") / $15 (4")',
        description:
          "Sweet ripe banana folded into a luscious cheesecake base.",
      },
      {
        name: "Matcha Cheesecake",
        price: '$28 (7") / $15 (4")',
        description:
          "Premium matcha meets creamy cheesecake for an elegant, bittersweet delight.",
      },
      {
        name: "Coffee Cheesecake",
        price: '$28 (7") / $15 (4")',
        description:
          "Bold espresso-infused cheesecake for the true coffee lover.",
      },
      {
        name: "Chocolate Eclipse Cheesecake",
        price: '$48 (7")',
        description:
          "Deep, dark, and indulgent — a chocolate lover's dream.",
        badge: "Premium",
      },
    ],
  },
  {
    id: "madeleines",
    title: "Madeleines",
    subtitle: "Classic French shell cakes",
    emoji: "🧁",
    items: [
      {
        name: "Assorted Dozen",
        price: "$28",
        description:
          "A curated dozen featuring Lemon, Earl Grey, and Black Sesame madeleines.",
        badge: "Best Value",
      },
      {
        name: "Lemon Madeleine",
        price: "$2.50",
        description:
          "Bright, zesty lemon with a tender, buttery crumb.",
      },
      {
        name: "Earl Grey Madeleine",
        price: "$2.75",
        description:
          "Fragrant Earl Grey tea leaves infused into classic French butter cake.",
      },
      {
        name: "Black Sesame Madeleine",
        price: "$2.75",
        description:
          "Toasted black sesame adds a rich, nutty depth to each bite.",
      },
    ],
  },
  {
    id: "chunky",
    title: "Chunky Madeleines",
    subtitle: "Bold flavors, generous portions",
    emoji: "🐽",
    items: [
      {
        name: "Tiramisu Madeleine Set",
        price: "$24 (set of 6)",
        description:
          "Coffee-soaked madeleine with mascarpone cream and cocoa dusting.",
        badge: "Popular",
      },
      {
        name: "Dark Chocolate",
        price: "$3.75",
        description: "Rich Valrhona dark chocolate in a chunky, decadent shell.",
      },
      {
        name: "Choco Forest",
        price: "$3.75",
        description:
          "Dark chocolate meets bittersweet matcha — a best-seller.",
        badge: "New",
      },
      {
        name: "Black Sesame",
        price: "$3.75",
        description: "Bold, nutty, and deeply satisfying.",
      },
      {
        name: "Matcha",
        price: "$3.75",
        description: "Premium Japanese matcha in a soft, buttery madeleine.",
      },
      {
        name: "Raspberry",
        price: "$3.75",
        description: "Tart raspberry bursting through sweet, golden cake.",
      },
      {
        name: "Earl Grey",
        price: "$3.75",
        description: "Elegant bergamot tea notes in a chunky, golden shell.",
      },
    ],
  },
  {
    id: "financiers",
    title: "Financiers & More",
    subtitle: "French almond-flour gems",
    emoji: "🧈",
    items: [
      {
        name: "Fig Cheese Financier",
        price: "$3.75",
        description:
          "Sweet fig and cream cheese baked into a browned-butter almond cake.",
      },
      {
        name: "Banana Nut Financier",
        price: "$3.75",
        description:
          "Ripe banana with toasted nuts in a rich, moist almond cake.",
      },
      {
        name: "Raspberry Financier",
        price: "$2.50",
        description: "Tart raspberries nestled in a golden almond-flour base.",
      },
      {
        name: "Mini Financier Combo",
        price: "$5.00",
        description: "A selection of our petite financier flavors to try.",
      },
      {
        name: "Portuguese Egg Tart",
        price: "$3.50 (min 2)",
        description:
          "Crispy puff pastry filled with silky custard. Pastéis de Nata perfection.",
      },
      {
        name: "Mini Lemon Pound Cake",
        price: "$8.50",
        description:
          "Bright lemon glaze over a tender, buttery mini pound cake.",
      },
      {
        name: "Marble Pound Cake Slice",
        price: "$4.50",
        description:
          "Classic vanilla and chocolate marble swirled into buttery perfection.",
      },
    ],
  },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="menu-card-shimmer bg-cream border border-gold/15 p-6 hover:border-gold/40 transition-all duration-500 group"
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-[family-name:var(--font-playfair)] text-lg text-warm-brown group-hover:text-gold transition-colors duration-300">
          {item.name}
        </h4>
        {item.badge && (
          <span className="gold-badge text-xs font-[family-name:var(--font-cormorant)] tracking-wider uppercase px-2.5 py-0.5 font-semibold">
            {item.badge}
          </span>
        )}
      </div>
      <p className="font-[family-name:var(--font-cormorant)] text-brown-light/70 text-base leading-relaxed mb-3">
        {item.description}
      </p>
      <div className="flex items-center gap-2">
        <div className="flex-1 border-b border-dotted border-gold/25" />
        <span className="font-[family-name:var(--font-playfair)] text-gold font-medium text-lg">
          {item.price}
        </span>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("cheesecakes");

  const currentCategory = menuData.find((c) => c.id === activeCategory)!;

  return (
    <section
      id="menu"
      className="py-28 md:py-36 bg-cream-dark relative overflow-hidden"
    >
      {/* Corner decorations - gold accented */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t border-l border-gold/20 m-8" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b border-r border-gold/20 m-8" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-gold/10 m-8" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-gold/10 m-8" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-gold text-sm tracking-[0.3em] uppercase mb-4">
            What We Bake
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl text-warm-brown mb-4">
            Our <span className="italic text-gold">Menu</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14"
        >
          {menuData.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 md:px-7 py-3 font-[family-name:var(--font-cormorant)] text-base md:text-lg tracking-wide transition-all duration-300 border ${
                activeCategory === category.id
                  ? "gold-shimmer-btn text-warm-brown border-gold/40 font-semibold"
                  : "bg-transparent text-brown-light border-gold/20 hover:border-gold/50 hover:bg-gold/5"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Category subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCategory + "-subtitle"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center font-[family-name:var(--font-cormorant)] text-xl text-brown-light/60 italic mb-10"
          >
            {currentCategory.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* Menu items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {currentCategory.items.map((item, idx) => (
              <MenuCard key={item.name} item={item} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 font-[family-name:var(--font-cormorant)] text-base text-brown-light/50 italic"
        >
          Menu rotates weekly. Limited quantities — first come, first served.
        </motion.p>
      </div>
    </section>
  );
}
