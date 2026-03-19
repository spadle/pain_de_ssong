"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
      className="menu-card-shimmer bg-cream border border-warm-brown/8 p-6 transition-all duration-400 group"
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-[family-name:var(--font-playfair)] text-lg text-warm-brown">
          {item.name}
        </h4>
        {item.badge && (
          <span className="text-[11px] font-[family-name:var(--font-cormorant)] tracking-[0.15em] uppercase px-2 py-0.5 text-gold border border-gold/25">
            {item.badge}
          </span>
        )}
      </div>
      <p className="font-[family-name:var(--font-cormorant)] text-brown-light/60 text-base leading-relaxed mb-4">
        {item.description}
      </p>
      <div className="flex items-center gap-3">
        <div className="flex-1 border-b border-dotted border-warm-brown/10" />
        <span className="font-[family-name:var(--font-playfair)] text-warm-brown/70 text-base">
          {item.price}
        </span>
      </div>
    </motion.div>
  );
}

function TabButton({
  category,
  isActive,
  onClick,
  layoutId,
  compact = false,
}: {
  category: MenuCategory;
  isActive: boolean;
  onClick: () => void;
  layoutId: string;
  compact?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative cursor-pointer rounded-full font-[family-name:var(--font-cormorant)] tracking-wide ${
        compact
          ? "px-4 md:px-5 py-2 text-sm md:text-base"
          : "px-6 md:px-8 py-3 md:py-3.5 text-base md:text-lg"
      }`}
      whileHover={{ scale: 1.06, y: compact ? -1 : -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {isActive && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 bg-warm-brown rounded-full"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      {!isActive && (
        <div className="absolute inset-0 rounded-full border border-warm-brown/12 transition-colors duration-300" />
      )}
      <span
        className={`relative z-10 flex items-center gap-1.5 transition-colors duration-200 ${
          isActive ? "text-cream" : "text-brown-light/60"
        }`}
      >
        <motion.span
          animate={isActive ? { scale: 1.15 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={compact ? "text-sm" : "text-base md:text-lg"}
        >
          {category.emoji}
        </motion.span>
        {compact ? (
          <span className="hidden sm:inline">{category.title}</span>
        ) : (
          category.title
        )}
      </span>
    </motion.button>
  );
}

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("cheesecakes");
  const [showStickyTabs, setShowStickyTabs] = useState(false);

  const currentCategory = menuData.find((c) => c.id === activeCategory)!;

  useEffect(() => {
    const handleScroll = () => {
      if (!tabsRef.current || !sectionRef.current) return;

      const tabsRect = tabsRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();

      // Show sticky when original tabs scroll above viewport
      // AND the menu section bottom is still below viewport (still in section)
      const tabsScrolledPast = tabsRect.bottom < 80;
      const sectionStillVisible = sectionRect.bottom > 200;

      setShowStickyTabs(tabsScrolledPast && sectionStillVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky floating tab bar */}
      <AnimatePresence>
        {showStickyTabs && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 left-0 right-0 z-40 flex justify-center pointer-events-none"
          >
            <div className="pointer-events-auto px-4 py-2.5 bg-cream/85 backdrop-blur-xl border border-warm-brown/8 rounded-full shadow-lg shadow-warm-brown/5 flex gap-1.5 md:gap-2">
              {menuData.map((category) => (
                <TabButton
                  key={`sticky-${category.id}`}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  layoutId="stickyMenuTab"
                  compact
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="menu"
        ref={sectionRef}
        className="py-28 md:py-36 bg-cream-dark relative overflow-hidden"
      >
        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-gold/10 m-8 hidden md:block" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-gold/10 m-8 hidden md:block" />

        <div className="max-w-6xl mx-auto px-6 md:px-12">
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

          {/* Original category tabs */}
          <motion.div
            ref={tabsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-5 mb-14"
          >
            {menuData.map((category) => (
              <TabButton
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                layoutId="activeMenuTab"
              />
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
    </>
  );
}
