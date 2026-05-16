"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROLES = [
  "AI Systems Builder",
  "Full-Stack Developer",
  "Game Developer",
  "Poet & Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/8 blur-[100px]" />
      </div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.2em]"
      >
        Available for opportunities
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-3"
      >
        Hi, I'm{" "}
        <span className="text-blue-400">Prakhar</span>
      </motion.h1>

      {/* Typing role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="h-10 flex items-center justify-center mb-6"
      >
        <span className="text-2xl md:text-3xl font-light text-gray-300 font-mono">
          {displayed}
          <span className="inline-block w-[2px] h-6 bg-blue-400 ml-1 align-middle animate-pulse" />
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-400 max-w-xl text-base leading-relaxed mb-10"
      >
        3rd year CSE-AI student building intelligent systems, developer tools,
        and interactive applications — where logic meets expression.
      </motion.p>

      {/* CTAs — clear visual hierarchy */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        {/* Primary */}
        <a
          href="#projects"
          className="group relative px-8 py-3.5 rounded-xl font-bold text-sm bg-blue-500 text-white overflow-hidden transition-all hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] active:scale-95"
        >
          View My Work
        </a>

        {/* Secondary — visually quieter */}
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-xl font-bold text-sm border border-white/10 text-gray-300 hover:border-blue-500/40 hover:text-white transition-all active:scale-95"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
}