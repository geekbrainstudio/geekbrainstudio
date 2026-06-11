"use client";

import { motion } from "framer-motion";

export default function HeroShapes() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.5 }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute right-0 top-0 h-full w-full lg:w-[60%]"
        viewBox="0 0 600 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* ── Fade mask: left edge bleeds into white ── */}
        <defs>
          <linearGradient id="fadeLeft" x1="0%" y1="0%" x2="30%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fadeTop" x1="0%" y1="0%" x2="0%" y2="25%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fadeBottom" x1="0%" y1="75%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="shapeMask">
            <rect width="600" height="800" fill="white" />
            <rect width="600" height="800" fill="url(#fadeLeft)" />
            <rect width="600" height="800" fill="url(#fadeTop)" />
            <rect width="600" height="800" fill="url(#fadeBottom)" />
          </mask>
        </defs>

        <g mask="url(#shapeMask)" opacity="0.55">

          {/* ── Dot grid ── */}
          {Array.from({ length: 12 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) => (
              <motion.circle
                key={`dot-${row}-${col}`}
                cx={80 + col * 52}
                cy={60 + row * 65}
                r="1.5"
                fill="#000"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.25, 0.25, 0] }}
                transition={{
                  duration: 4,
                  delay: row * 0.08 + col * 0.06,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            ))
          )}

          {/* ── Large outer circle ── */}
          <motion.circle
            cx="380"
            cy="400"
            r="240"
            stroke="#000"
            strokeWidth="0.6"
            opacity="0.12"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ originX: "380px", originY: "400px" }}
          />

          {/* ── Medium circle ── */}
          <motion.circle
            cx="380"
            cy="400"
            r="160"
            stroke="#000"
            strokeWidth="0.8"
            strokeDasharray="8 14"
            opacity="0.15"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ originX: "380px", originY: "400px" }}
          />

          {/* ── Inner circle pulsing ── */}
          <motion.circle
            cx="380"
            cy="400"
            r="80"
            stroke="#000"
            strokeWidth="0.6"
            opacity="0.1"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "380px", originY: "400px" }}
          />

          {/* ── Rotating square ── */}
          <motion.rect
            x="280"
            y="300"
            width="200"
            height="200"
            stroke="#000"
            strokeWidth="0.7"
            opacity="0.1"
            animate={{ rotate: [0, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "380px", originY: "400px" }}
          />

          {/* ── Small rotating square top-right ── */}
          <motion.rect
            x="460"
            y="130"
            width="60"
            height="60"
            stroke="#000"
            strokeWidth="0.8"
            opacity="0.18"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ originX: "490px", originY: "160px" }}
          />

          {/* ── Tiny square bottom-left ── */}
          <motion.rect
            x="130"
            y="580"
            width="36"
            height="36"
            stroke="#000"
            strokeWidth="0.8"
            opacity="0.14"
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            style={{ originX: "148px", originY: "598px" }}
          />

          {/* ── Diagonal cross lines ── */}
          <motion.line
            x1="200" y1="100" x2="560" y2="700"
            stroke="#000" strokeWidth="0.5" opacity="0.06"
            strokeDasharray="4 8"
            animate={{ strokeDashoffset: [0, -48] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="560" y1="100" x2="200" y2="700"
            stroke="#000" strokeWidth="0.5" opacity="0.06"
            strokeDasharray="4 8"
            animate={{ strokeDashoffset: [0, 48] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* ── Horizontal scan line ── */}
          <motion.line
            x1="80" y1="400" x2="560" y2="400"
            stroke="#000" strokeWidth="0.5" opacity="0.08"
            strokeDasharray="3 6"
            animate={{ strokeDashoffset: [0, -36] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          {/* ── Floating small circles ── */}
          {[
            { cx: 180, cy: 220, r: 18, delay: 0 },
            { cx: 510, cy: 310, r: 10, delay: 1 },
            { cx: 290, cy: 620, r: 14, delay: 2 },
            { cx: 490, cy: 560, r: 22, delay: 0.5 },
            { cx: 140, cy: 480, r: 8,  delay: 1.5 },
          ].map(({ cx, cy, r, delay }, i) => (
            <motion.circle
              key={`fc-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              stroke="#000"
              strokeWidth="0.7"
              opacity="0.12"
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5 + i,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ── Corner bracket top-right ── */}
          <motion.path
            d="M540 60 L540 100 M540 60 L500 60"
            stroke="#000"
            strokeWidth="1"
            opacity="0.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />

          {/* ── Corner bracket bottom-left ── */}
          <motion.path
            d="M60 740 L60 700 M60 740 L100 740"
            stroke="#000"
            strokeWidth="1"
            opacity="0.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />

          {/* ── Arc segment ── */}
          <motion.path
            d="M 200 400 A 180 180 0 0 1 560 400"
            stroke="#000"
            strokeWidth="0.6"
            opacity="0.1"
            fill="none"
            strokeDasharray="6 10"
            animate={{ strokeDashoffset: [0, -64] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

        </g>
      </svg>
    </motion.div>
  );
}

