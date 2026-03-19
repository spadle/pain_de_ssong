"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Browse the Menu",
    description:
      "Check our weekly menu posted on Instagram every Sunday. Each week features a rotating selection of handcrafted treats.",
    icon: "📋",
  },
  {
    number: "02",
    title: "DM to Order",
    description:
      "Send us a direct message on Instagram with your order. Pre-orders open Sunday & Monday for the week.",
    icon: "💌",
  },
  {
    number: "03",
    title: "Pick Up in Fort Lee",
    description:
      "Collect your freshly baked goodies on Friday or Saturday in Fort Lee, NJ. We'll confirm your time slot.",
    icon: "📍",
  },
];

const details = [
  { label: "Location", value: "Fort Lee, NJ", icon: "📍" },
  { label: "Pre-Order", value: "Sunday & Monday", icon: "📅" },
  { label: "Pick Up", value: "Friday & Saturday", icon: "🕐" },
  { label: "Order Via", value: "Instagram DM", icon: "💌" },
];

export default function OrderInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="order"
      className="py-28 md:py-36 bg-warm-brown relative overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/cheesecake.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-warm-brown/85" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-gold-light text-sm tracking-[0.3em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl text-cream mb-4">
            Place Your <span className="italic text-gold">Order</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-5xl mb-6"
              >
                {step.icon}
              </motion.div>

              {/* Number */}
              <span className="font-[family-name:var(--font-playfair)] text-gold/30 text-6xl leading-none">
                {step.number}
              </span>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-cream mt-4 mb-3 group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>

              <p className="font-[family-name:var(--font-cormorant)] text-cream/60 text-lg leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Details grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {details.map((detail) => (
            <div
              key={detail.label}
              className="bg-brown-light/30 border border-gold/10 p-6 text-center hover:border-gold/30 transition-all duration-300"
            >
              <span className="text-2xl mb-3 block">{detail.icon}</span>
              <p className="font-[family-name:var(--font-cormorant)] text-cream/50 text-sm tracking-wider uppercase mb-1">
                {detail.label}
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-cream text-lg">
                {detail.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="https://www.instagram.com/pain_de_ssong/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-gold text-warm-brown font-[family-name:var(--font-cormorant)] text-xl tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Order on Instagram
          </motion.a>
          <p className="font-[family-name:var(--font-cormorant)] text-cream/40 text-base mt-4 italic">
            Limited quantities each week — first come, first served
          </p>
        </motion.div>
      </div>
    </section>
  );
}
