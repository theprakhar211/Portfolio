"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMusic, FaBookOpen, FaPenNib } from "react-icons/fa";

export default function About() {
  const stats = [
    { number: "3+", label: "Projects Built" },
    { number: "5+", label: "Technologies" },
    { number: "2+", label: "AI Projects" },
    { number: "3rd", label: "Year CSE-AI" }
  ];

  return (
    <section id="about" className="py-24 px-10">
      {/* Container is wider (max-w-7xl) to accommodate the landscape image */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-16 items-center">

        {/* Profile Image - Landscape Flip Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center perspective-1000 group w-full"
        >
          {/* Changed: aspect-video (16:9) instead of square. 
              If your image is slightly taller, use aspect-[3/2] 
          */}
          <div className="relative w-full aspect-video transition-transform duration-700 preserve-3d group-hover:rotate-y-180 cursor-pointer">
            
            {/* FRONT SIDE */}
            <div className="absolute inset-0 backface-hidden">
              <Image
                src="/profile1.png"
                alt="Profile Landscape"
                fill
                priority
                className="rounded-2xl border-2 border-gray-700 shadow-2xl object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 right-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white uppercase tracking-widest border border-white/20">
                Flip ↺
              </div>
            </div>

            {/* BACK SIDE */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 border-2 border-blue-500 rounded-2xl flex flex-col justify-center p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Beyond the Code</h3>
              
              {/* Using a horizontal flex layout on the back to utilize the landscape space */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-2">
                  <FaPenNib className="text-blue-400 mx-auto mb-2 text-xl" />
                  <h4 className="text-white text-sm font-semibold">Poetry</h4>
                  <p className="text-gray-500 text-[10px] mt-1">Logic & Rhythm</p>
                </div>

                <div className="text-center p-2 border-x border-gray-800">
                  <FaMusic className="text-blue-400 mx-auto mb-2 text-xl" />
                  <h4 className="text-white text-sm font-semibold">Music</h4>
                  <p className="text-gray-500 text-[10px] mt-1">Lo-fi Production</p>
                </div>

                <div className="text-center p-2">
                  <FaBookOpen className="text-blue-400 mx-auto mb-2 text-xl" />
                  <h4 className="text-white text-sm font-semibold">Manga</h4>
                  <p className="text-gray-500 text-[10px] mt-1">Visual Stories</p>
                </div>
              </div>

              <div className="mt-6 text-center italic text-gray-400 text-sm border-t border-gray-800 pt-4">
                "Finding the intersection of art and artificial intelligence."
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-gray-400 mb-6 text-lg">
            I'm a third-year Computer Science student specializing in AI. 
            I build software that bridges the gap between intelligence and 
            user interaction.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}