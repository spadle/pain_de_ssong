"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "/images/brownie-cheesecake.jpg",
    title: "Brownie Cheesecake",
    description: "Our signature — silky smooth and richly creamy",
    span: "md:col-span-2 md:row-span-2",
    postUrl: "https://www.instagram.com/p/DSyaDfela8v/",
  },
  {
    src: "/images/madeleines.jpg",
    title: "Chunky Madeleines",
    description: "Golden shells with bold, chunky flavors",
    span: "",
    postUrl: "https://www.instagram.com/p/DVVCngmDtVq/",
  },
  {
    src: "/images/matcha-madeleine.jpg",
    title: "Matcha Madeleine",
    description: "Premium Japanese matcha in every bite",
    span: "",
    postUrl: "https://www.instagram.com/p/DSqBac-FVLh/",
  },
  {
    src: "/images/assorted.jpg",
    title: "Assorted Treats",
    description: "Our weekly selection of handcrafted delights",
    span: "",
    postUrl: "https://www.instagram.com/p/DVL4IYNlUXw/",
  },
  {
    src: "/images/gift-box.jpg",
    title: "Gift Box",
    description: "Beautifully packaged, perfect for sharing",
    span: "",
    postUrl: "https://www.instagram.com/p/DTCYye6jvQW/",
  },
  {
    src: "/images/valentines.jpg",
    title: "Special Occasions",
    description: "Valentine's bouquets and seasonal offerings",
    span: "md:col-span-2",
    postUrl: "https://www.instagram.com/p/DUjHvrRmccO/",
  },
  {
    src: "/images/financiers.jpg",
    title: "Financiers",
    description: "French almond-flour browned butter mini cakes",
    span: "",
    postUrl: "https://www.instagram.com/p/DR5WQicEiA1/",
  },
  {
    src: "/images/christmas-tart.jpg",
    title: "Festive Bakes",
    description: "Holiday treats baked with the sweetest love",
    span: "",
    postUrl: "https://www.instagram.com/p/DSMSKotjrgw/",
  },
  {
    src: "/images/christmas.jpg",
    title: "Christmas Cheesecakes",
    description: "Last-minute holiday indulgence",
    span: "md:col-span-2",
    postUrl: "https://www.instagram.com/p/DSRdNx2FW06/",
  },
  {
    src: "/images/with-love.jpg",
    title: "With Love",
    description: "Every order wrapped with care and faith",
    span: "md:col-span-2",
    postUrl: "https://www.instagram.com/p/DTeJiABDF37/",
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
    <motion.a
      href={item.postUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`gallery-item ${item.span} relative cursor-pointer overflow-hidden group block`}
      style={{ aspectRatio: item.span.includes("col-span-2") && !item.span.includes("row-span-2") ? "2/1" : "1/1" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Real photo */}
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes={item.span.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
      />

      {/* Overlay on hover */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-warm-brown/80 via-warm-brown/30 to-transparent z-10"
      />

      {/* Content on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-5 md:p-6 text-center z-20">
        <motion.h3
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-cream mb-1 drop-shadow-md"
        >
          {item.title}
        </motion.h3>

        <motion.p
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="font-[family-name:var(--font-cormorant)] text-cream/80 text-sm md:text-base"
        >
          {item.description}
        </motion.p>
      </div>

      {/* Hover border */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        className="absolute inset-2 border border-gold/30 z-20 pointer-events-none"
      />
    </motion.a>
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
            className="gold-outline-btn inline-flex items-center gap-3 px-8 py-3.5 text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-wider uppercase hover:text-warm-brown"
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
