"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="mb-10">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#a3a3a3]">
            geekbrainstudio.com
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[1.05] tracking-tight text-black mb-8"
        >
          Small Ideas.
          <br />
          Real Products.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg lg:text-xl text-[#525252] max-w-xl leading-relaxed mb-12"
        >
          I design and build focused digital products that solve everyday
          problems.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <Link
            href="#products"
            className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 hover:bg-[#525252] transition-colors duration-200"
          >
            View Products
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#about"
            className="text-sm text-[#525252] hover:text-black transition-colors duration-200 underline underline-offset-4 decoration-[#e5e5e5] hover:decoration-black"
          >
            Learn more
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#a3a3a3]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#a3a3a3] to-transparent"
        />
      </motion.div>
    </section>
  );
}

