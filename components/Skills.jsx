"use client";

import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiCplusplus, SiNextdotjs, SiFastapi,
  SiHtml5, SiCss, SiMongodb, SiGooglecloud,
  SiSalesforce, SiGodotengine, SiJsonwebtokens,
} from "react-icons/si";
import { TbBrain, TbBrandAzure } from "react-icons/tb";

const categories = [
  {
    title: "Languages",
    color: "blue",
    skills: [
      { name: "Python",       icon: <FaPython />,    level: "Daily driver" },
      { name: "JavaScript",   icon: <FaJs />,        level: "Daily driver" },
      { name: "C++",          icon: <SiCplusplus />, level: "Proficient" },
      { name: "Java",         icon: <FaJava />,      level: "Proficient" },
      { name: "GDScript",     icon: <SiGodotengine />, level: "Familiar" },
      { name: "HTML / CSS",   icon: <SiCss />,           level: "Daily driver" },
    ],
  },
  {
    title: "Frameworks & Databases",
    color: "indigo",
    skills: [
      { name: "FastAPI",  icon: <SiFastapi />,   level: "Daily driver" },
      { name: "React",    icon: <FaReact />,     level: "Daily driver" },
      { name: "Next.js",  icon: <SiNextdotjs />, level: "Proficient" },
      { name: "Node.js",  icon: <FaNodeJs />,    level: "Proficient" },
      { name: "MongoDB",  icon: <SiMongodb />,   level: "Proficient" },
      { name: "JWT",      icon: <SiJsonwebtokens />, level: "Familiar" },
    ],
  },
  {
    title: "AI & Cloud",
    color: "sky",
    skills: [
      { name: "NLP",             icon: <TbBrain />,          level: "Proficient" },
      { name: "Generative AI",   icon: <TbBrain />,          level: "Proficient" },
      { name: "Speech-to-Text",  icon: <TbBrain />,          level: "Familiar" },
      { name: "Google Cloud",    icon: <SiGooglecloud />,    level: "Familiar" },
      { name: "Microsoft Azure", icon: <TbBrandAzure />, level: "Familiar" },
    ],
  },
  {
    title: "Tools & Dev",
    color: "slate",
    skills: [
      { name: "Git / GitHub",    icon: <FaGithub />,      level: "Daily driver" },
      { name: "Godot Engine",    icon: <SiGodotengine />, level: "Proficient" },
      { name: "Salesforce CRM",  icon: <SiSalesforce />,  level: "Familiar" },
    ],
  },
];

const levelColor = {
  "Daily driver": "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "Proficient":   "text-green-400 bg-green-500/10 border-green-500/20",
  "Familiar":     "text-gray-400 bg-white/5 border-white/10",
};

const accentBorder = {
  blue:   "border-blue-500/30 hover:border-blue-500/60",
  indigo: "border-indigo-500/30 hover:border-indigo-500/60",
  sky:    "border-sky-500/30 hover:border-sky-500/60",
  slate:  "border-slate-500/30 hover:border-slate-500/60",
};

const accentTitle = {
  blue:   "text-blue-400",
  indigo: "text-indigo-400",
  sky:    "text-sky-400",
  slate:  "text-gray-400",
};

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
      <div className="relative mb-6 flex flex-col items-center justify-center">
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

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mb-14 flex-wrap">
        {Object.entries(levelColor).map(([label, cls]) => (
          <span
            key={label}
            className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-widest ${cls}`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
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
              {cat.skills.map((skill, si) => (
                <div key={si} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 text-gray-300 text-sm font-medium">
                    <span className="text-base opacity-70">{skill.icon}</span>
                    {skill.name}
                  </div>
                  <span
                    className={`shrink-0 text-[8px] font-black px-2 py-0.5 rounded-full border uppercase tracking-wide ${levelColor[skill.level]}`}
                  >
                    {skill.level === "Daily driver" ? "Core" : skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}