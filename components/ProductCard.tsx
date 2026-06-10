"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { ProductIcon } from "./Icons";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
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
    >
      <Link href={`/products/${product.slug}`} className="group block">
        <div className="bg-white border border-[#e5e5e5] p-8 hover:border-[#a3a3a3] transition-all duration-300 hover:shadow-[0_4px_32px_rgba(0,0,0,0.06)] relative overflow-hidden">
          {/* Status badge + icon */}
          <div className="flex items-start justify-between mb-8">
            {/* Icon: real image or SVG fallback */}
            {product.iconUrl ? (
              <div className="w-10 h-10 overflow-hidden rounded-lg border border-[#e5e5e5] shrink-0">
                <Image
                  src={product.iconUrl}
                  alt={`${product.name} icon`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ) : (
              <div className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] group-hover:border-[#a3a3a3] transition-colors duration-300">
                <ProductIcon
                  name={product.icon}
                  className="w-5 h-5 text-black"
                />
              </div>
            )}
            <span
              className={`text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 ${
                product.status === "live"
                  ? "text-black bg-[#f5f5f5]"
                  : product.status === "beta"
                    ? "text-[#525252] bg-[#f5f5f5]"
                    : "text-[#a3a3a3] bg-[#f5f5f5]"
              }`}
            >
              {product.status}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-[#525252] transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-sm text-[#525252] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {product.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[11px] text-[#a3a3a3] bg-[#f5f5f5] px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-black group-hover:gap-3 transition-all duration-200">
            <span>View Project</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom line reveal on hover */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}

