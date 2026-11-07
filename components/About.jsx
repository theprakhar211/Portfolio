"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMusic, FaBookOpen, FaPenNib,
  FaHammer, FaMapMarkerAlt, FaBriefcase, FaCloud, FaExternalLinkAlt,
} from "react-icons/fa";

const signals = [
  {
    icon: <FaHammer />,
    label: "Currently Building",
    detail: "CodeQuest: Syntax Scrolls — a 2D RPG where you solve puzzles by writing Python. MVP in development.",
  },
  {
    icon: <FaCloud />,
    label: "Internship",
    detail: "AWS & DevOps Intern (Virtual), EWB Edutech Pvt. Ltd. (via National Internship Portal), Oct 2026 – Present. Completing a mentor-led AWS and DevOps programme with weekly assessments, assigned tasks and a final mini project.",
  },
  {
    icon: <FaBriefcase />,
    label: "Open To",
    detail: "Internships · AI/ML roles · Full-stack · Remote",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Based In",
    detail: "Bhopal, India · Open to relocation & remote",
  },
];

export default function About() {
  const [flipped, setFlipped] = useState(false);
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">

        {/* PROFILE FLIP CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="perspective-1000 group w-full"
        >
          <div
            role="button"
            tabIndex={0}
            aria-pressed={flipped}
            aria-label="Flip profile card"
            onClick={() => setFlipped((f) => !f)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped((f) => !f); } }}
            className={`relative w-full aspect-video transition-transform duration-700 preserve-3d group-hover:rotate-y-180 cursor-pointer shadow-2xl ${flipped ? "rotate-y-180" : ""}`}
          >

            {/* FRONT */}
            <div className="absolute inset-0 backface-hidden">
              <Image
                src="/profile1.png"
                alt="Prakhar"
                fill
                className="rounded-[2.5rem] border border-white/10 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent rounded-[2.5rem]" />
              <div className="absolute bottom-6 left-8 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                Hover or tap to flip →
              </div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 border-2 border-blue-500/30 rounded-[2.5rem] flex flex-col justify-center p-10 overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <h3 className="relative z-10 text-xl font-black text-blue-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-500/50" /> BEYOND THE CODE
              </h3>
              <div className="relative z-10 grid grid-cols-3 gap-6">
                {[
                  { icon: <FaPenNib />,   title: "Poetry", sub: "Logic & Rhythm" },
                  { icon: <FaMusic />,    title: "Music",  sub: "Discovery" },
                  { icon: <FaBookOpen />, title: "Manga",  sub: "Visual Art" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-blue-500 text-lg">{item.icon}</div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest">{item.title}</h4>
                    <p className="text-gray-500 text-[9px] leading-tight">{item.sub}</p>
                  </div>
                ))}
              </div>
              <div className="relative z-10 mt-8 pt-6 border-t border-white/5 italic text-gray-400 text-xs leading-relaxed">
                &ldquo;I view a compiler as a stage and a codebase as a stanza. My goal is to engineer intelligence that feels inherently human.&rdquo;
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-black text-white tracking-tighter mb-4">
              ABOUT{" "}
              <span className="text-blue-500 italic font-serif font-light">ME</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I build{" "}
              <span className="text-white font-medium">LLM applications</span> end to
              end: FastAPI backends, React and Next.js frontends, and the guardrails,
              tests and CI that keep them working after the demo. So far that means an
              AI interview simulator, a debate arena, a document Q&amp;A system and a
              game that teaches Python.
            </p>
          </div>

          {/* RECRUITER SIGNALS */}
          <div className="flex flex-col gap-3">
            {signals.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-9 h-9 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                  {s.icon}
                </div>
                <div>
                  <div className="text-[9px] font-black text-gray-500 uppercase tracking-[0.18em] leading-none mb-1">
                    {s.label}
                  </div>
                  <div className="text-sm font-medium text-gray-200">
                    {s.detail}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* RESUME CARD */}
            <motion.a
              href="/prakhar-resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-1 p-4 bg-blue-600/10 border border-blue-500/50 rounded-2xl flex items-center justify-between transition-all duration-300 cursor-pointer hover:bg-blue-600/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 shrink-0">
                  <FaPenNib size={14} />
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-tight">Resume</div>
                  <div className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">
                    Download PDF
                  </div>
                </div>
              </div>
              <div className="p-2.5 bg-white/5 rounded-full text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaExternalLinkAlt size={11} />
              </div>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}