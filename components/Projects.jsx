"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Qualif-AI",
    tagline: "AI Interview Simulator",
    description:
      "Full-stack AI simulator using FastAPI and React to automate mock interview sessions for technical candidates. Implements NLP and Speech-to-Text for real-time semantic analysis of candidate responses, with a feedback dashboard providing insights on communication clarity, content accuracy, and confidence levels.",
    tech: ["FastAPI", "React", "MongoDB", "NLP", "Groq / LLaMA", "JWT"],
    github: "https://github.com/theprakhar211/qualif-ai",
    demo: "https://qualif-smart-ai.vercel.app/",
    image: "/projects/qualifai.png",
    highlights: [
      "Real-time NLP semantic analysis of responses",
      "Speech-to-Text processing pipeline",
      "MongoDB schema for transcripts & metrics",
      "JWT-secured authentication & session management",
      "Feedback dashboard with multi-dimensional scoring",
    ],
    featured: true,
  },
  {
    title: "CodeQuest",
    tagline: "Programming Learning Game",
    description:
      "Interactive programming learning game designed to teach coding concepts through quests. Built with a custom logic engine that evaluates player solutions in real-time inside the Godot engine.",
    tech: ["Godot", "GDScript", "Game Dev"],
    github: "https://github.com/theprakhar211/CodeQuest",
    demo: null,
    image: "/projects/codequest.png",
    highlights: [
      "Custom logic engine for real-time solution evaluation",
      "Quest-based learning progression system",
      "Built entirely in Godot with GDScript",
    ],
    featured: false,
  },
  {
    title: "Portfolio",
    tagline: "Personal Developer Site",
    description:
      "Personal developer portfolio built using Next.js. Features include 3D flip cards, interactive mouse-tracking spotlights, and a fully responsive glassmorphic UI with Framer Motion animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/theprakhar211/Portfolio",
    demo: "https://prakhar-sharma.vercel.app/",
    image: "/projects/portfolio.webp",
    highlights: [
      "3D flip card interactions",
      "Mouse-tracking spotlight effect",
      "Glassmorphic responsive UI",
    ],
    featured: false,
  },
];

function Modal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative z-10 w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Image header */}
          <div
            className="w-full h-48 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/10 transition-all"
            >
              <FaTimes size={14} />
            </button>
          </div>

          <div className="p-8 -mt-4">
            <div className="mb-2 text-blue-400 text-xs font-black uppercase tracking-widest">
              {project.tagline}
            </div>
            <h3 className="text-3xl font-black text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-3 py-1 bg-blue-500/15 border border-blue-500/30 rounded-full text-blue-300 uppercase tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-black rounded-xl transition-all active:scale-95"
                >
                  Live Demo <FaExternalLinkAlt size={11} />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold rounded-xl transition-all"
              >
                <FaGithub size={16} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Title */}
      <div className="relative mb-20 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          className="absolute text-7xl md:text-9xl font-black text-white select-none tracking-[0.2em]"
        >
          WORKS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 text-4xl md:text-5xl font-black text-white tracking-tighter"
        >
          FEATURED{" "}
          <span className="text-blue-500 font-serif italic font-light">
            Projects
          </span>
        </motion.h2>
        <p className="mt-3 text-gray-500 text-sm">Click any card to explore details</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelected(project)}
            className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl cursor-pointer
              ${project.featured ? "md:col-span-2 lg:col-span-1 ring-1 ring-blue-500/30" : ""}
            `}
          >
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-5 right-5 z-20 px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                Featured
              </div>
            )}

            {/* Image */}
            <div
              className="w-full h-52 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute top-0 left-0 right-0 h-52 bg-gradient-to-b from-black/20 to-slate-900 pointer-events-none" />

            {/* Content */}
            <div className="p-6">
              <div className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">
                {project.tagline}
              </div>
              <h3 className="text-xl font-black text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-bold px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-400 font-bold group-hover:underline underline-offset-2 transition-all">
                  View details →
                </span>
                <div className="flex gap-2">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all"
                    >
                      <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all"
                  >
                    <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Index number */}
            <div className="absolute bottom-5 right-6 text-white/[0.06] font-black text-5xl select-none pointer-events-none">
              0{index + 1}
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/25 rounded-3xl pointer-events-none transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}