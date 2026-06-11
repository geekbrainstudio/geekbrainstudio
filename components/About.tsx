"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutShapes from "./AboutShapes";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease },
    },
  };

  return (
    <section
      id="about"
      className="relative py-32 lg:py-40 px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Animated code symbols background */}
      <AboutShapes />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10"
      >
        {/* Left: Label */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#a3a3a3]">
            About
          </span>
        </motion.div>

        {/* Right: Content */}
        <div className="lg:col-span-9">
          <motion.p
            variants={itemVariants}
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-snug tracking-tight text-black max-w-2xl mb-10"
          >
            I am an independent developer creating simple, focused software
            products that help people solve specific problems more efficiently.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-12"
          >
            <div>
              <div className="text-3xl font-semibold text-black mb-1">3+</div>
              <div className="text-sm text-[#a3a3a3]">Products launched</div>
            </div>
            <div className="w-px bg-[#e5e5e5] hidden sm:block" />
            <div>
              <div className="text-3xl font-semibold text-black mb-1">Solo</div>
              <div className="text-sm text-[#a3a3a3]">Founder & Developer</div>
            </div>
            <div className="w-px bg-[#e5e5e5] hidden sm:block" />
            <div>
              <div className="text-3xl font-semibold text-black mb-1">
                100%
              </div>
              <div className="text-sm text-[#a3a3a3]">Bootstrapped</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

