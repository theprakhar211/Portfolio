"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-32 px-10 flex flex-col items-center text-center"
    >

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6"
      >
        Hi, I'm <span className="text-blue-400">Prakhar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl text-gray-300 max-w-2xl mb-8"
      >
        Software Engineering student specializing in AI and full-stack
        development. I build intelligent systems, developer tools,
        and interactive applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-6"
      >

        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-500 hover:border-blue-400 px-6 py-3 rounded-lg font-medium transition"
        >
          Contact Me
        </a>

      </motion.div>

    </section>
  );
}
