"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Qualif-AI",
    tagline: "AI Interview Simulator",
    description:
      "Voice-first mock interview platform with two modes — Quick Practice and a structured 4-phase Complete Interview using your actual resume. Answers are evaluated by a blended scoring system: 72% Llama 3.3 70B + 28% deterministic checks for keyword coverage and answer structure. Tracks skill mastery across 35+ skills with exponential weighting, benchmarks your answers against AI-generated ideal responses, and deduplicates questions across sessions via hash fingerprinting. Backed by 248 automated tests at 81% coverage via GitHub Actions.",
    tech: ["FastAPI", "React", "MongoDB", "Groq / LLaMA", "JWT", "GitHub Actions"],
    github: "https://github.com/theprakhar211/qualif-ai",
    demo: "https://qualif-smart-ai.vercel.app/",
    image: "/projects/qualifai.png",
    highlights: [
      "Blended scoring: 72% LLM + 28% deterministic (keyword coverage, structure, depth)",
      "Skill graph — 35+ skills across 7 categories with exponential session weighting",
      "Answer benchmarking against permanently cached ideal answers per question",
      "Question deduplication via 8-char hash fingerprinting — fresh questions for 25+ sessions",
      "5-layer prompt-injection defence: regex sanitisation, XML delimiters, system rules, score floor, LLM classifier",
      "248 automated tests at 81% coverage via GitHub Actions — caught 5 real production bugs",
    ],
    metrics: [
      { value: "248", label: "tests" },
      { value: "81%", label: "coverage" },
      { value: "5", label: "defence layers" },
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
    metrics: [
      { value: "Godot", label: "2D RPG" },
      { value: "Python", label: "code sandbox" },
    ],
    featured: false,
  },
  {
    title: "agAInst",
    tagline: "AI Debate Arena",
    description:
      "Full-stack AI debate platform where you argue any topic against an AI that genuinely pushes back. Three role-separated LLM agents — Debater, Judge, and Analyser — run in a multi-agent pipeline. The Analyser fires in parallel with the Debater via Promise.all for zero added latency. Includes a 2-player local mode with screen-blur turn handoff, Side Flip mode, fallacy detection, and PDF export.",
    tech: ["Next.js", "FastAPI", "Groq / LLaMA", "Framer Motion", "Pydantic"],
    github: "https://github.com/theprakhar211/against-public",
    demo: "https://against-debate.vercel.app/",
    image: "/projects/against.png",
    highlights: [
      "3 role-separated LLM agents — Debater, Judge, Analyser — in one multi-agent pipeline",
      "Analyser fires in parallel with Debater via Promise.all — zero added latency",
      "Judge returns structured JSON scores with automated retry logic on parse failure",
      "Stateless API — full conversation history sent per request, no server-side session state",
      "2-player local mode with screen-blur handoff between turns",
      "Side Flip mode, fallacy detection, verdict caching, and PDF transcript export",
    ],
    metrics: [
      { value: "3", label: "LLM agents" },
      { value: "Realtime", label: "PvP mode" },
    ],
    featured: false,
  },
];

function spot(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

const activate = (fn) => (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); }
};

function Metrics({ items }) {
  return (
    <div className="mb-5 flex flex-wrap gap-x-5 gap-y-1">
      {items.map((m) => (
        <span key={m.label} className="text-sm text-gray-300">
          <span className="font-display font-bold text-amber-400">{m.value}</span>{" "}{m.label}
        </span>
      ))}
    </div>
  );
}

function Spotlight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(96,165,250,0.14), transparent 60%)" }}
    />
  );
}

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
            <div className="mb-2 text-blue-400 text-sm font-semibold">
              {project.tagline}
            </div>
            <h3 className="font-display text-3xl font-extrabold text-white mb-3">{project.title}</h3>
            <Metrics items={project.metrics} />
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
                <span key={i} className="text-xs font-medium px-3 py-1 bg-blue-500/15 border border-blue-500/30 rounded-full text-blue-200">
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

// ── Featured card (full width, image + content split) ──────────────────────
function FeaturedCard({ project, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      onKeyDown={activate(onClick)}
      onPointerMove={spot}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.title}`}
      className="group relative grid min-h-[360px] w-full cursor-pointer grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl transition-colors duration-300 hover:border-blue-400/40 md:grid-cols-[1.05fr_1fr]"
    >
      <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-slate-900 md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 md:hidden" />
      </div>

      <div className="relative z-10 flex flex-col justify-center p-8 md:p-10">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
          <span className="rounded-full bg-amber-400/15 px-3 py-1 text-amber-300">Featured</span>
          <span className="text-blue-300">{project.tagline}</span>
        </div>
        <h3 className="font-display mb-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {project.title}
        </h3>
        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-400">{project.description}</p>

        <Metrics items={project.metrics} />

        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-400 active:scale-95">
              Live demo <FaExternalLinkAlt size={10} />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10">
            <FaGithub size={14} /> GitHub
          </a>
          <span className="ml-auto text-sm font-semibold text-blue-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Full details →
          </span>
        </div>
      </div>
      <Spotlight />
    </motion.div>
  );
}

// ── Regular card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12 }}
      onClick={onClick}
      onKeyDown={activate(onClick)}
      onPointerMove={spot}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.title}`}
      className="group relative flex min-h-[340px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 shadow-xl transition-colors duration-300 hover:border-blue-400/40"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-slate-900/80 to-slate-950/95" />

      <div className="relative z-10 mt-auto flex flex-col p-6">
        <div className="mb-1 text-sm font-semibold text-blue-300">{project.tagline}</div>
        <h3 className="font-display mb-2 text-2xl font-extrabold tracking-tight text-white">{project.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-300">{project.description}</p>

        <Metrics items={project.metrics} />

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs font-medium text-gray-200 backdrop-blur-sm">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-blue-300 transition-all group-hover:underline underline-offset-4">
            View details →
          </span>
          <div className="flex gap-2">
            {project.demo && project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}
                onClick={(e) => e.stopPropagation()}
                className="rounded-lg bg-black/30 p-2 text-gray-300 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-white">
                <FaExternalLinkAlt size={11} />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-black/30 p-2 text-gray-300 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-white">
              <FaGithub size={14} />
            </a>
          </div>
        </div>
      </div>
      <Spotlight />
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState(null);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="mb-12 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl"
        >
          Things I&rsquo;ve built and shipped
        </motion.h2>
        <p className="mt-4 text-gray-400">
          Deployed projects with tests, guardrails, and design decisions I can defend. Click a card for the full breakdown.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {featured && <FeaturedCard project={featured} onClick={() => setSelected(featured)} />}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
