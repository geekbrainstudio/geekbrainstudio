"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.95]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottomColor: `rgba(229,229,229,${borderOpacity})`,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        backgroundColor: `rgba(255,255,255,${bgOpacity})`,
        backdropFilter: "blur(12px)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-black hover:text-[#525252] transition-colors duration-200"
        >
          Geek Brain Studio
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm text-[#525252] hover:text-black transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#products"
            className="text-sm text-[#525252] hover:text-black transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-black border border-black px-4 py-1.5 hover:bg-black hover:text-white transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

