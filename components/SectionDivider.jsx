"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "60%" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        height: "2px",
        background: "linear-gradient(to right,#38bdf8,transparent)",
        margin: "80px auto"
      }}
    />

  );
}
