"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="py-32 lg:py-40 px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="border-t border-[#e5e5e5] pt-16 lg:pt-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#a3a3a3] block mb-8">
            Contact
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight text-black leading-tight mb-6">
            Let&apos;s talk.
          </h2>
          <p className="text-lg text-[#525252] leading-relaxed mb-10">
            Have an idea, feedback, or just want to say hello? I&apos;d love to
            hear from you.
          </p>
          <a
            href="mailto:geekbrainstudio@gmail.com"
            className="inline-flex items-center gap-3 bg-black text-white text-sm font-medium px-8 py-4 hover:bg-[#525252] transition-colors duration-200 group"
          >
            geekbrainstudio@gmail.com
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
          </a>
        </motion.div>
      </div>
    </section>
  );
}

