"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const symbols = [
  { text: "</>",    x: 72,  y: 120, size: 36, delay: 0,   dur: 7  },
  { text: "{ }",    x: 820, y: 80,  size: 28, delay: 0.5, dur: 8  },
  { text: "=>",     x: 920, y: 220, size: 24, delay: 1.0, dur: 6  },
  { text: "[ ]",    x: 60,  y: 300, size: 26, delay: 1.5, dur: 9  },
  { text: "===",    x: 850, y: 350, size: 20, delay: 0.3, dur: 7  },
  { text: "&&",     x: 100, y: 460, size: 30, delay: 0.8, dur: 8  },
  { text: "//",     x: 960, y: 460, size: 26, delay: 1.2, dur: 6  },
  { text: "import", x: 80,  y: 580, size: 16, delay: 1.8, dur: 10 },
  { text: "( )",    x: 900, y: 560, size: 22, delay: 0.6, dur: 7  },
  { text: "...",    x: 500, y: 60,  size: 24, delay: 2.0, dur: 8  },
  { text: "npm",    x: 500, y: 560, size: 18, delay: 2.2, dur: 9  },
  { text: "async",  x: 420, y: 120, size: 16, delay: 1.4, dur: 10 },
  { text: "#",      x: 950, y: 130, size: 32, delay: 0.4, dur: 6  },
  { text: "typeof", x: 70,  y: 680, size: 14, delay: 2.4, dur: 11 },
  { text: "??",     x: 880, y: 660, size: 26, delay: 1.1, dur: 7  },
  { text: "git",    x: 480, y: 640, size: 18, delay: 1.6, dur: 9  },
  { text: "<!>",    x: 580, y: 80,  size: 20, delay: 0.9, dur: 8  },
  { text: "export", x: 350, y: 600, size: 14, delay: 2.6, dur: 10 },
];

export default function AboutShapes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1060 740"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Fade edges — all 4 sides blend into white */}
          <linearGradient id="aFadeL" x1="0%" y1="0%" x2="12%" y2="0%">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="aFadeR" x1="88%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="aFadeT" x1="0%" y1="0%" x2="0%" y2="18%">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="aFadeB" x1="0%" y1="82%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="aboutMask">
            <rect width="1060" height="740" fill="white" />
            <rect width="1060" height="740" fill="url(#aFadeL)" />
            <rect width="1060" height="740" fill="url(#aFadeR)" />
            <rect width="1060" height="740" fill="url(#aFadeT)" />
            <rect width="1060" height="740" fill="url(#aFadeB)" />
          </mask>
        </defs>

        <g mask="url(#aboutMask)">

          {/* ── Dot grid ── */}
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 18 }).map((_, col) => (
              <motion.circle
                key={`ad-${row}-${col}`}
                cx={40 + col * 56}
                cy={50 + row * 70}
                r="1.2"
                fill="#000"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0, 0.15, 0.15, 0] } : { opacity: 0 }}
                transition={{
                  duration: 5,
                  delay: row * 0.07 + col * 0.04,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            ))
          )}

          {/* ── Horizontal scan lines — very faint ── */}
          {[185, 370, 555].map((y, i) => (
            <motion.line
              key={`sl-${i}`}
              x1="0" y1={y} x2="1060" y2={y}
              stroke="#000" strokeWidth="0.4" opacity="0.05"
              strokeDasharray="5 12"
              animate={isInView ? { strokeDashoffset: [0, i % 2 === 0 ? -60 : 60] } : {}}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
            />
          ))}

          {/* ── Large ghost brackets spanning the section ── */}
          <motion.text
            x="20" y="480"
            fontFamily="'SF Mono','Fira Code','Courier New',monospace"
            fontSize="320" fill="#000" opacity="0.025"
            animate={isInView ? { y: [0, -12, 0] } : {}}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >{"["}
          </motion.text>
          <motion.text
            x="860" y="680"
            fontFamily="'SF Mono','Fira Code','Courier New',monospace"
            fontSize="320" fill="#000" opacity="0.025"
            animate={isInView ? { y: [0, 12, 0] } : {}}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >{"]"}
          </motion.text>

          {/* ── Floating code symbols ── */}
          {symbols.map(({ text, x, y, size, delay, dur }, i) => (
            <motion.text
              key={`as-${i}`}
              x={x} y={y}
              fontFamily="'SF Mono','Fira Code','Courier New',monospace"
              fontSize={size}
              fill="#000"
              opacity="0"
              animate={isInView ? {
                opacity: [0, 0.12, 0.12, 0],
                y: [y, y - 20, y - 20, y],
              } : { opacity: 0 }}
              transition={{
                duration: dur,
                delay,
                repeat: Infinity,
                repeatDelay: dur * 0.5,
                ease: "easeInOut",
              }}
            >{text}
            </motion.text>
          ))}

          {/* ── Dashed connector paths ── */}
          <motion.path
            d="M72 120 L60 300 L100 460 L80 580"
            stroke="#000" strokeWidth="0.4" opacity="0.04"
            fill="none" strokeDasharray="4 10"
            animate={isInView ? { strokeDashoffset: [0, -56] } : {}}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M820 80 L850 350 L900 560 L880 660"
            stroke="#000" strokeWidth="0.4" opacity="0.04"
            fill="none" strokeDasharray="4 10"
            animate={isInView ? { strokeDashoffset: [0, 56] } : {}}
            transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M500 60 L480 640"
            stroke="#000" strokeWidth="0.3" opacity="0.04"
            fill="none" strokeDasharray="3 8"
            animate={isInView ? { strokeDashoffset: [0, -44] } : {}}
            transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          />

          {/* ── Corner brackets ── */}
          <motion.path
            d="M30 30 L30 60 M30 30 L60 30"
            stroke="#000" strokeWidth="1" opacity="0.15" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d="M1030 710 L1030 680 M1030 710 L1000 710"
            stroke="#000" strokeWidth="1" opacity="0.15" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          />

        </g>
      </svg>
    </motion.div>
  );
}

