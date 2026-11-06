"use client";

import { motion } from "framer-motion";
import { FaPython, FaJs, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiCplusplus, SiNextdotjs, SiFastapi, SiMongodb, SiGodotengine,
  SiJsonwebtokens, SiDocker, SiGithubactions, SiPytest, SiSentry,
  SiVercel, SiRender, SiSupabase, SiTailwindcss, SiHtml5, SiSalesforce,
} from "react-icons/si";
import {
  TbBrain, TbMicrophone, TbVectorTriangle, TbShieldCheck, TbChecklist,
  TbCpu, TbSparkles, TbBroadcast, TbApi, TbPlugConnected, TbWriting, TbTestPipe, TbGauge, TbDatabase,
} from "react-icons/tb";

// Projects that prove a skill. Entries with a slug link to the project (the Projects
// section opens its modal from #project-<slug>). Entries without a slug are plain text.
const P = {
  qualif:    { label: "Qualif-AI", slug: "qualif-ai" },
  against:   { label: "agAInst",   slug: "against" },
  documind:  { label: "DocuMind",  slug: "documind" },
  codequest: { label: "CodeQuest", slug: "codequest" },
  mafia:     { label: "Mafia Web" },
  site:      { label: "This portfolio" },
};

// Groups match the Technical Skills lines on the resume.
// Self-rated levels (Core / Proficient / Familiar) were removed: the "Used in" links are the
// evidence. A skill with an empty `used` list has no project proof yet.
const categories = [
  {
    title: "Languages",
    color: "blue",
    skills: [
      { name: "Python",     icon: <FaPython />, used: [P.qualif, P.against, P.documind, P.codequest] },
      { name: "JavaScript", icon: <FaJs />, used: [P.qualif, P.against, P.documind] },
      { name: "C++",        icon: <SiCplusplus />,   used: [] },
      { name: "GDScript",   icon: <SiGodotengine />,     used: [P.codequest] },
    ],
  },
  {
    title: "AI / ML",
    color: "violet",
    skills: [
      { name: "Generative AI (LLM apps)",    icon: <TbSparkles />,       used: [P.qualif, P.against, P.documind] },
      { name: "LLM integration (Groq)",        icon: <TbBrain />,          used: [P.qualif, P.against, P.documind] },
      { name: "RAG",                           icon: <TbVectorTriangle />, used: [P.documind] },
      { name: "FastEmbed (ONNX)",              icon: <TbCpu />,            used: [P.documind] },
      { name: "Prompt Engineering",            icon: <TbWriting />,        used: [P.against] },
      { name: "Prompt-Injection Defence",      icon: <TbShieldCheck />,    used: [P.qualif, P.against] },
      { name: "LLM Evaluation",                icon: <TbChecklist />,      used: [P.documind] },
      { name: "Speech-to-Text (Web Speech API)", icon: <TbMicrophone />, used: [P.qualif] },
    ],
  },
  {
    title: "Backend",
    color: "indigo",
    skills: [
      { name: "FastAPI",                 icon: <SiFastapi />, used: [P.qualif, P.against, P.documind, P.mafia] },
      { name: "REST APIs",               icon: <TbApi />,             used: [P.qualif, P.against, P.documind] },
      { name: "WebSockets",              icon: <TbPlugConnected />,   used: [P.mafia] },
      { name: "Server-Sent Events",      icon: <TbBroadcast />,       used: [P.documind] },
      { name: "JWT Auth",                icon: <SiJsonwebtokens />, used: [P.qualif] },
      { name: "slowapi (rate limiting)", icon: <TbGauge />,           used: [P.against] },
    ],
  },
  {
    title: "Frontend & Game Dev",
    color: "sky",
    skills: [
      { name: "React",        icon: <FaReact />, used: [P.qualif] },
      { name: "Next.js",      icon: <SiNextdotjs />,   used: [P.against, P.documind, P.mafia, P.site] },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, used: [P.site] },
      { name: "Node.js",      icon: <FaNodeJs />,      used: [P.against, P.documind, P.mafia, P.site] },
      { name: "HTML / CSS",   icon: <SiHtml5 />, used: [P.qualif, P.against, P.documind, P.site] },
      { name: "Godot Engine", icon: <SiGodotengine />,   used: [P.codequest] },
    ],
  },
  {
    title: "Databases",
    color: "emerald",
    skills: [
      { name: "MongoDB (Motor)",                      icon: <SiMongodb />, used: [P.qualif] },
      { name: "Supabase (PostgreSQL, Auth, Realtime)", icon: <SiSupabase />,   used: [P.against] },
      { name: "Qdrant (vector DB)",                   icon: <TbDatabase />,    used: [P.documind] },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "slate",
    skills: [
      { name: "Docker",             icon: <SiDocker />,        used: [P.documind] },
      { name: "Git / GitHub",       icon: <FaGithub />, used: [{ label: "All projects" }] },
      { name: "GitHub Actions (CI)", icon: <SiGithubactions />, used: [P.qualif, P.against] },
      { name: "Pytest",             icon: <SiPytest />,        used: [P.qualif, P.against] },
      { name: "Playwright",         icon: <TbTestPipe />,      used: [P.qualif] },
      { name: "Sentry",             icon: <SiSentry />,        used: [P.qualif] },
      { name: "Vercel",             icon: <SiVercel />,        used: [P.qualif, P.against, P.documind, P.site] },
      { name: "Salesforce CRM",     icon: <SiSalesforce />,    used: [] },
      { name: "Render",             icon: <SiRender />,        used: [P.qualif, P.documind] },
    ],
  },
];

/*
  HELD OUT (no project proof, removed by Sid's decision or pending):
    Java (removed: only syntax-level knowledge), NLP (pending; covered by "LLM integration",
    "RAG" and "Speech-to-Text").
  Removed on purpose: Microsoft Azure, Google Cloud, spaCy.
  To restore NLP: { name: "NLP", icon: <TbBrain />, used: [] } in AI / ML.
*/

const accentBorder = {
  blue:    "border-blue-500/30 hover:border-blue-500/60",
  violet:  "border-violet-500/30 hover:border-violet-500/60",
  indigo:  "border-indigo-500/30 hover:border-indigo-500/60",
  sky:     "border-sky-500/30 hover:border-sky-500/60",
  emerald: "border-emerald-500/30 hover:border-emerald-500/60",
  slate:   "border-slate-500/30 hover:border-slate-500/60",
};

const accentTitle = {
  blue:    "text-blue-400",
  violet:  "text-violet-400",
  indigo:  "text-indigo-400",
  sky:     "text-sky-400",
  emerald: "text-emerald-400",
  slate:   "text-gray-400",
};

function UsedIn({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 pl-[1.65rem] text-[10px] leading-tight text-gray-500">
      <span>Used in</span>
      {items.map((p, i) => (
        <span key={p.label}>
          {p.slug ? (
            <a
              href={`#project-${p.slug}`}
              className="text-blue-300/80 underline-offset-2 hover:text-blue-200 hover:underline focus:outline-none focus-visible:underline"
            >
              {p.label}
            </a>
          ) : (
            <span className="text-gray-400">{p.label}</span>
          )}
          {i < items.length - 1 && ","}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Title */}
      <div className="relative mb-14 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          className="absolute text-7xl md:text-9xl font-black text-white select-none tracking-[0.2em]"
        >
          STACK
        </motion.span>
        <h2 className="relative z-10 text-4xl md:text-5xl font-black text-white tracking-tighter text-center">
          Technical{" "}
          <span className="text-blue-500 font-serif italic font-light">Skills</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.08 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl bg-white/[0.03] border transition-all duration-300 ${accentBorder[cat.color]}`}
          >
            <h3 className={`text-xs font-black uppercase tracking-[0.18em] mb-5 ${accentTitle[cat.color]}`}>
              {cat.title}
            </h3>

            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 text-gray-300 text-sm font-medium">
                      <span className="text-base opacity-70">{skill.icon}</span>
                      {skill.name}
                    </div>
                  </div>
                  <UsedIn items={skill.used} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
