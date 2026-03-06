"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "#38bdf8",
        transformOrigin: "0%",
        zIndex: 50
      }}
    />
  );
}
