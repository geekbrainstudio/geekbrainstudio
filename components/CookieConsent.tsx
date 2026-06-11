"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "gbs_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-9999 w-[calc(100%-2rem)] max-w-2xl"
        >
          <div className="bg-white border border-[#e5e5e5] shadow-sm px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Text */}
            <p className="text-sm text-[#525252] leading-relaxed flex-1">
              We use cookies and similar technologies to analyse site usage.
              By continuing, you agree to our{" "}
              <Link
                href="/privacy-policy/website"
                className="text-black underline underline-offset-2 hover:text-[#525252] transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="text-sm text-[#a3a3a3] hover:text-black transition-colors duration-200 underline underline-offset-2 cursor-pointer"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="text-sm font-medium bg-black text-white px-5 py-2 hover:bg-[#525252] transition-colors duration-200 cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}




