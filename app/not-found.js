"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-indigo-500/8 blur-[100px]" />
      </div>

      {/* 404 ghost number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute text-[280px] font-black text-white select-none leading-none"
      >
        404
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        {/* Eyebrow */}
        <div className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
          Page not found
        </div>

        <div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-3">
            Lost in the{" "}
            <span className="text-blue-400 font-serif italic font-light">void</span>
          </h1>
          <p className="text-gray-400 text-base max-w-md leading-relaxed">
            This page doesn&apos;t exist — or maybe it did once and got refactored out of existence.
            Either way, there&apos;s nothing here.
          </p>
        </div>

        {/* Code block flavour */}
        <div className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl font-mono text-sm text-gray-500">
          <span className="text-blue-400">404</span>{" "}
          <span className="text-gray-600">|</span>{" "}
          <span className="text-gray-400">route not matched</span>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 mt-2">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            ← Back home
          </Link>
          <Link
            href="/#projects"
            className="px-6 py-3 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white text-sm font-bold rounded-xl transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            View projects
          </Link>
        </div>
      </motion.div>

    </main>
  );
}
