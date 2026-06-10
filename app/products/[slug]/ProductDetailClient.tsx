"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { ProductIcon } from "@/components/Icons";

interface Props {
  product: Product;
}

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function GooglePlayBadge({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 border border-[#e5e5e5] hover:border-[#a3a3a3] px-5 py-3 transition-all duration-200 hover:shadow-sm group"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 text-black shrink-0"
        fill="currentColor"
      >
        <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.53L13.1 8.76 3.18 23.76zM.54 1.52C.2 1.9 0 2.47 0 3.2v17.6c0 .73.2 1.3.54 1.68l.09.08 9.86-9.86v-.23L.63 1.44l-.09.08zM20.3 10.27l-2.81-1.6-3.16 3.16 3.16 3.16 2.83-1.62c.81-.46.81-1.2 0-1.66l-.02-.04zM3.18.24L13.1 15.24l3.67-3.67L4.17.04A1.2 1.2 0 0 0 3.18.24z" />
      </svg>
      <div>
        <div className="text-[9px] text-[#525252] leading-none mb-0.5">
          GET IT ON
        </div>
        <div className="text-sm font-semibold text-black leading-none">
          Google Play
        </div>
      </div>
    </a>
  );
}

export default function ProductDetailClient({ product }: Props) {
  const hasScreenshots = product.screenshots && product.screenshots.length > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Back navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-[#e5e5e5] bg-white/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#525252] hover:text-black transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 7H1M7 1L1 7l6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </Link>
          <span className="text-sm font-semibold text-black">
            Geek Brain Studio
          </span>
        </div>
      </div>

      <main className="pt-32 pb-24 px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-20 lg:mb-28">
            <div className="lg:col-span-3">
              <motion.div variants={itemVariants}>
                {/* App icon — real or fallback */}
                {product.iconUrl ? (
                  <div className="w-16 h-16 mb-6 overflow-hidden rounded-xl border border-[#e5e5e5]">
                    <Image
                      src={product.iconUrl}
                      alt={`${product.name} icon`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center border border-[#e5e5e5] mb-6">
                    <ProductIcon
                      name={product.icon}
                      className="w-6 h-6 text-black"
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
                {product.category && (
                  <div className="mt-4 text-xs text-[#a3a3a3] uppercase tracking-[0.15em]">
                    {product.category}
                  </div>
                )}
                {product.lastUpdated && (
                  <div className="mt-2 text-xs text-[#a3a3a3]">
                    Updated {product.lastUpdated}
                  </div>
                )}
              </motion.div>
            </div>
            <div className="lg:col-span-9">
              <motion.h1
                variants={itemVariants}
                className="text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-tight text-black leading-[1.05] mb-6"
              >
                {product.name}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-[#525252] leading-relaxed max-w-xl mb-10"
              >
                {product.tagline}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4"
              >
                {product.playStoreUrl && (
                  <GooglePlayBadge url={product.playStoreUrl} />
                )}
                {product.url && !product.playStoreUrl && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 hover:bg-[#525252] transition-colors duration-200 group"
                  >
                    Visit Product
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        d="M1 11L11 1M11 1H4M11 1v7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t border-[#e5e5e5] mb-20 lg:mb-28"
          />

          {/* Screenshots — real Play Store images */}
          {hasScreenshots && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-20 lg:mb-28">
                <div className="lg:col-span-3">
                  <motion.span
                    variants={itemVariants}
                    className="text-xs font-medium tracking-[0.2em] uppercase text-[#a3a3a3]"
                  >
                    Screenshots
                  </motion.span>
                </div>
                <div className="lg:col-span-9">
                  <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2">
                    {product.screenshots.map((src, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="shrink-0 w-40 bg-[#f5f5f5] overflow-hidden rounded-lg border border-[#e5e5e5]"
                      >
                        <Image
                          src={src}
                          alt={`${product.name} screenshot ${i + 1}`}
                          width={300}
                          height={614}
                          className="w-full h-auto object-cover"
                          unoptimized
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                variants={itemVariants}
                className="border-t border-[#e5e5e5] mb-20 lg:mb-28"
              />
            </>
          )}

          {/* About */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-20 lg:mb-28">
            <div className="lg:col-span-3">
              <motion.span
                variants={itemVariants}
                className="text-xs font-medium tracking-[0.2em] uppercase text-[#a3a3a3]"
              >
                About
              </motion.span>
            </div>
            <motion.div variants={itemVariants} className="lg:col-span-9">
              <p className="text-lg text-[#525252] leading-relaxed max-w-2xl">
                {product.longDescription}
              </p>
            </motion.div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-20 lg:mb-28">
            <div className="lg:col-span-3">
              <motion.span
                variants={itemVariants}
                className="text-xs font-medium tracking-[0.2em] uppercase text-[#a3a3a3]"
              >
                Features
              </motion.span>
            </div>
            <div className="lg:col-span-9">
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="w-1 h-1 rounded-full bg-black mt-2.5 shrink-0" />
                    <span className="text-base text-[#525252]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-20 lg:mb-28">
            <div className="lg:col-span-3">
              <motion.span
                variants={itemVariants}
                className="text-xs font-medium tracking-[0.2em] uppercase text-[#a3a3a3]"
              >
                Built with
              </motion.span>
            </div>
            <div className="lg:col-span-9">
              <div className="flex flex-wrap gap-3">
                {product.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={itemVariants}
                    className="text-sm text-[#525252] border border-[#e5e5e5] px-4 py-2"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Back to products */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-sm text-[#525252] hover:text-black transition-colors underline underline-offset-4 decoration-[#e5e5e5] hover:decoration-black"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7H1M7 1L1 7l6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All Products
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

