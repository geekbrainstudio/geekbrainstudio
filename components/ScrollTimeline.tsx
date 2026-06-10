"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const timelineItems = [
  {
    year: "2023",
    label: "Krkortet launched on Google Play",
    description:
      "Published the first version of Krkortet — a driving licence preparation app for Android. Category: Education.",
  },
  {
    year: "2024",
    label: "Growth and iteration",
    description:
      "Continued improving the app with better practice tests, study materials, and school search.",
  },
  {
    year: "2026",
    label: "Expanding the product line",
    description:
      "Building new focused micro-products and SaaS tools alongside Krkortet.",
  },
];

function TimelineNode({ item, index }: { item: (typeof timelineItems)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease }}
      className="flex gap-8 items-start"
    >
      {/* Node dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          className="w-2 h-2 rounded-full bg-black mt-2"
        />
      </div>

      {/* Content */}
      <div className="pb-12">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#a3a3a3] mb-2 block">
          {item.year}
        </span>
        <h4 className="text-base font-semibold text-black mb-1.5">
          {item.label}
        </h4>
        <p className="text-sm text-[#525252] leading-relaxed max-w-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="py-32 lg:py-40 px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="border-t border-[#e5e5e5] pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[#a3a3a3]"
            >
              Journey
            </motion.span>
          </div>
          <div className="lg:col-span-9">
            <motion.h2
              ref={sectionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-black leading-tight max-w-lg"
            >
              One developer. Building continuously.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9">
            <div ref={containerRef} className="relative">
              {/* Animated vertical line */}
              <div className="absolute left-[3px] top-0 bottom-0 w-px bg-[#e5e5e5]">
                <motion.div
                  className="w-full bg-black origin-top"
                  style={{ height: lineHeight }}
                />
              </div>

              {/* Timeline items */}
              <div className="pl-0">
                {timelineItems.map((item, index) => (
                  <TimelineNode key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

