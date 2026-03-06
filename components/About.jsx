"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {

  const stats = [
    { number: "3+", label: "Projects Built" },
    { number: "5+", label: "Technologies" },
    { number: "2+", label: "AI Projects" },
    { number: "3rd", label: "Year CSE-AI" }
  ];

  return (
    <section id="about" className="py-24 px-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <Image
            src="/profile.png"
            alt="Profile"
            width={320}
            height={320}
            className="rounded-xl border border-gray-700 shadow-lg"
          />

        </motion.div>

        {/* About Text */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold mb-6 text-white">
            About Me
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I'm a third-year Computer Science (AI) student passionate about
            building intelligent software and interactive applications.
            I enjoy combining AI, web technologies, and game development
            to create engaging digital experiences.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Currently working on projects like an AI-powered interview simulator
            and an interactive programming learning game designed to make coding
            more engaging.
          </p>

          {/* Animated Stats */}

          <div className="grid grid-cols-2 gap-6">

            {stats.map((stat, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center"
              >

                <div className="text-3xl font-bold text-blue-400">
                  {stat.number}
                </div>

                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}
