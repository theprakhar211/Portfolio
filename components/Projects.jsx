"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Qualif-AI",
    tagline: "AI Interview Simulator",
    description:
      "Voice-first mock interview platform with two modes — Quick Practice and a structured 4-phase Complete Interview using your actual resume. Answers are evaluated by a blended scoring system: 72% Llama 3.3 70B + 28% deterministic checks for keyword coverage and answer structure. Tracks skill mastery across 35+ skills with exponential weighting, benchmarks your answers against AI-generated ideal responses, and deduplicates questions across sessions via hash fingerprinting. Backed by 103 automated tests via GitHub Actions.",
    tech: ["FastAPI", "React", "MongoDB", "Groq / LLaMA", "JWT", "GitHub Actions"],
    github: "https://github.com/theprakhar211/qualif-ai",
    demo: "https://qualif-smart-ai.vercel.app/",
    image: "/projects/qualifai.png",
    highlights: [
      "Blended scoring: 72% LLM + 28% deterministic (keyword coverage, structure, depth)",
      "Skill graph — 35+ skills across 7 categories with exponential session weighting",
      "Answer benchmarking against permanently cached ideal answers per question",
      "Question deduplication via 8-char hash fingerprinting — fresh questions for 25+ sessions",
      "Prompt injection protection via regex sanitisation + explicit LLM-level rules",
      "103 automated tests via GitHub Actions — caught 5 real production bugs",
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
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
        style={{ paddingTop: "72px" }} // clears the navbar on all screen sizes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative z-10 w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col"
          style={{ maxHeight: "calc(100vh - 88px)" }} // viewport minus navbar + gap
        >
          {/* Image header — fixed, never scrolls */}
          <div
            className="w-full h-44 bg-cover bg-center relative rounded-t-3xl shrink-0 overflow-hidden"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <FaTimes size={14} />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 p-8 -mt-4">
            <div className="mb-2 text-blue-400 text-xs font-black uppercase tracking-widest">
              {project.tagline}
            </div>
            <h3 className="text-3xl font-black text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
            <ul className="space-y-2 mb-6">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-bold px-3 py-1 bg-blue-500/15 border border-blue-500/30 rounded-full text-blue-300 uppercase tracking-wide">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pb-2">
              {project.demo && project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-black rounded-xl transition-all active:scale-95">
                  Live Demo <FaExternalLinkAlt size={11} />
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold rounded-xl transition-all">
                <FaGithub size={16} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Featured hero card (full-width, landscape split) ────────────────────────
function FeaturedCard({ project, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="group relative w-full rounded-3xl overflow-hidden border border-blue-500/25 bg-slate-900 shadow-2xl cursor-pointer grid grid-cols-1 md:grid-cols-2 min-h-[340px]"
    >
      {/* Left — image */}
      <div className="relative overflow-hidden min-h-[220px] md:min-h-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        {/* Fade into right content panel on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900 hidden md:block" />
        {/* Fade into bottom content panel on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 md:hidden" />
      </div>

      {/* Right — content */}
      <div className="relative z-10 flex flex-col justify-center p-8 md:p-10">
        <div className="mb-4 self-start px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
          ★ Featured
        </div>
        <div className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2">
          {project.tagline}
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Top 3 highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
              <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[9px] font-bold px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 uppercase">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 items-center">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black rounded-xl transition-all active:scale-95">
              Live Demo <FaExternalLinkAlt size={10} />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-xl transition-all">
            <FaGithub size={14} /> GitHub
          </a>
          <span className="ml-auto text-xs text-blue-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Full details →
          </span>
        </div>
      </div>

      {/* Glow border on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/40 rounded-3xl pointer-events-none transition-all duration-500" />
    </motion.div>
  );
}

// ── Regular card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12 }}
      onClick={onClick}
      className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/30 shadow-xl cursor-pointer flex flex-col transition-all duration-300 min-h-[320px]"
    >
      {/* Full card background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Blue tint overlay — darkens on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-slate-900/80 to-slate-900/95 group-hover:from-blue-950/70 group-hover:to-slate-900/98 transition-all duration-500" />

      {/* Index number — top left */}
      <div className="relative z-10 p-6 pb-0">
        <span className="text-white/15 font-black text-3xl select-none">
          0{index + 2}
        </span>
      </div>

      {/* Content — sits on top of image */}
      <div className="relative z-10 flex flex-col flex-1 p-6 pt-3 justify-end">
        <div className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">
          {project.tagline}
        </div>
        <h3 className="text-xl font-black text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[9px] font-bold px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 uppercase backdrop-blur-sm">
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-blue-400 font-bold group-hover:underline underline-offset-2 transition-all">
            View details →
          </span>
          <div className="flex gap-2">
            {project.demo && project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white transition-all">
                <FaExternalLinkAlt size={11} />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white transition-all">
              <FaGithub size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-3xl pointer-events-none transition-all duration-500" />
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState(null);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Title */}
      <div className="relative mb-16 flex flex-col items-center justify-center">
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
          <span className="text-blue-500 font-serif italic font-light">Projects</span>
        </motion.h2>
        <p className="mt-3 text-gray-500 text-sm">Click any card to explore details</p>
      </div>

      {/* Bento layout */}
      <div className="flex flex-col gap-6">
        {featured && (
          <FeaturedCard project={featured} onClick={() => setSelected(featured)} />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}