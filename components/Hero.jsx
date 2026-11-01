"use client";

import { motion, animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ROLES = [
  "AI Systems Builder",
  "Full-Stack Developer",
  "LLM Evals & Guardrails",
  "Game Developer",
  "Poet & Engineer",
];

const STATS = [
  { value: 248, label: "automated tests" },
  { value: 81, suffix: "%", label: "coverage on Qualif-AI" },
  { value: 5, label: "layers of injection defence" },
  { value: 3, label: "deployed AI systems" },
];

// Sample answers cycled in the score card (illustrative, not real user data)
const SAMPLES = [
  { q: "Explain REST vs GraphQL", total: 84, bars: [["Keywords", 90], ["Structure", 82], ["Depth", 76]] },
  { q: "What is a database index?", total: 71, bars: [["Keywords", 78], ["Structure", 70], ["Depth", 62]] },
  { q: "Describe handling a team conflict", total: 63, bars: [["Keywords", 55], ["Structure", 74], ["Depth", 60]] },
];

function useTypewriter(words, reduce) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (reduce) return;
    let w = 0;
    let c = 0;
    let deleting = false;
    let t;
    const tick = () => {
      const word = words[w];
      if (!deleting) {
        c += 1;
        setText(word.slice(0, c));
        if (c === word.length) {
          deleting = true;
          t = setTimeout(tick, 1800);
          return;
        }
        t = setTimeout(tick, 60);
      } else {
        c -= 1;
        setText(word.slice(0, c));
        if (c === 0) {
          deleting = false;
          w = (w + 1) % words.length;
          t = setTimeout(tick, 300);
          return;
        }
        t = setTimeout(tick, 35);
      }
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [words, reduce]);
  return reduce ? words[0] : text;
}

function AnimatedNumber({ value, duration = 1.1 }) {
  const ref = useRef(null);
  const prev = useRef(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduce) {
      node.textContent = value;
      prev.current = value;
      return;
    }
    const controls = animate(prev.current, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => { node.textContent = Math.round(v); },
    });
    prev.current = value;
    return () => controls.stop();
  }, [value, duration, reduce]);
  return <span ref={ref}>0</span>;
}

function ScoreCard() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % SAMPLES.length), 4500);
    return () => clearInterval(id);
  }, [reduce]);

  const s = SAMPLES[i];
  const R = 42;
  const C = 2 * Math.PI * R;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="relative w-full max-w-md justify-self-center lg:justify-self-end rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md shadow-2xl"
    >
      <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-blue-500/25 via-transparent to-amber-400/15 blur-xl" />
      <div className="mb-5 flex items-center justify-between text-sm">
        <span className="font-display font-semibold text-white">Qualif-AI</span>
        <span className="text-gray-400">Sample score breakdown</span>
      </div>

      <p key={s.q} className="mb-5 min-h-[2.5rem] text-sm text-gray-300">
        <span className="text-gray-400">Question: </span>{s.q}
      </p>

      <div className="flex items-center gap-6">
        <div className="relative h-28 w-28 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r={R} fill="none" strokeWidth="9" className="stroke-white/10" />
            <motion.circle
              cx="50" cy="50" r={R} fill="none" strokeWidth="9" strokeLinecap="round"
              className="stroke-blue-400"
              strokeDasharray={C}
              initial={{ strokeDashoffset: C }}
              animate={{ strokeDashoffset: C * (1 - s.total / 100) }}
              transition={{ duration: reduce ? 0 : 1.1, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center font-display text-3xl font-extrabold text-white">
            <AnimatedNumber value={s.total} />
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {s.bars.map(([label, v]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-xs text-gray-400">
                <span>{label}</span><span>{v}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${v}%` }}
                  transition={{ duration: reduce ? 0 : 0.9, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 border-t border-white/10 pt-4 text-xs text-gray-400">
        72% LLM judgement, 28% deterministic checks. Illustrative values.
      </p>
    </motion.div>
  );
}

function Stat({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="bg-slate-950/70 px-5 py-5 backdrop-blur-sm">
      <div className="font-display text-3xl font-extrabold tracking-tight text-amber-400 md:text-4xl">
        <AnimatedNumber value={inView ? value : 0} />{suffix}
      </div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const role = useTypewriter(ROLES, reduce);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-28 md:px-10"
    >
      {/* Dot grid, faded toward the edges */}
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to internships
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 text-base text-gray-400"
          >
            <span className="font-semibold text-white">Prakhar Sharma</span>
            {" "}· Final-year CSE (AI) · Bhopal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            I build AI products that{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-amber-300 bg-clip-text text-transparent">
              keep working after the demo.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 mt-6 flex h-9 items-center"
          >
            <span className="font-mono text-xl text-gray-300 md:text-2xl">
              {role}
              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-blue-400 align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-9 max-w-xl text-lg leading-relaxed text-gray-400"
          >
            I ship LLM apps with the unglamorous parts done properly: guardrails,
            evals, tests, and monitoring.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] active:scale-95"
            >
              View my work
              <FaArrowRight className="transition-transform group-hover:translate-x-1" size={12} />
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-7 py-3.5 text-sm font-bold text-gray-200 transition-all hover:border-blue-400/50 hover:text-white active:scale-95"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <ScoreCard />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4"
      >
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </motion.div>
    </section>
  );
}
