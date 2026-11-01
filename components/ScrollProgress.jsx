"use client";

import { motion, useScroll } from "framer-motion";

// Sits on the bottom edge of the navbar, so it stays visible when the bar blurs.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-400 to-amber-300"
    />
  );
}
