"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

function PlaceholderCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
      className="p-8 h-full flex flex-col justify-between min-h-[300px]"
    >
      {/* Dashed border overlay */}
      <div className="absolute inset-4 border border-dashed border-[#e5e5e5] pointer-events-none rounded-sm" />

      {/* Icon placeholder */}
      <div className="flex items-start justify-between mb-8">
        <div className="w-10 h-10 flex items-center justify-center border border-dashed border-[#e5e5e5]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3v10M3 8h10"
              stroke="#e5e5e5"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 text-[#a3a3a3] bg-[#f5f5f5]">
          soon
        </span>
      </div>

      {/* Text */}
      <div className="flex-1">
        <div className="h-4 w-32 bg-[#f5f5f5] rounded-sm mb-3" />
        <div className="h-3 w-full bg-[#f5f5f5] rounded-sm mb-2" />
        <div className="h-3 w-4/5 bg-[#f5f5f5] rounded-sm mb-8" />
      </div>

      {/* Label */}
      <p className="text-xs text-[#a3a3a3] tracking-wide">
        Next product — in development
      </p>
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="products"
      className="py-32 lg:py-40 px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="border-t border-[#e5e5e5] pt-16 lg:pt-20">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[#a3a3a3]"
            >
              Products
            </motion.span>
          </div>
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-black leading-tight max-w-lg"
            >
              Focused tools built for real use.
            </motion.h2>
          </div>
        </div>

        {/* Products grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]"
        >
          {/* Real products */}
          {products.map((product, index) => (
            <div key={product.id} className="bg-white">
              <ProductCard product={product} index={index} />
            </div>
          ))}

          {/* Placeholder slots */}
          {[products.length, products.length + 1].map((i) => (
            <div
              key={`placeholder-${i}`}
              className="bg-white relative overflow-hidden"
            >
              <PlaceholderCard index={i} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-[#a3a3a3] mt-10 text-center"
        >
          More products in development —{" "}
          <a
            href="#contact"
            className="text-[#525252] hover:text-black transition-colors underline underline-offset-2"
          >
            follow along
          </a>
        </motion.p>
      </div>
    </section>
  );
}
