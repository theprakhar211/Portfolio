"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Qualif-AI",
      description: "AI powered interview simulator that asks questions and gives feedback using speech recognition and AI models like GPT-4 and Whisper for seamless interaction.",
      tech: ["Next.js", "FastAPI", "OpenAI"],
      github: "https://github.com/theprakhar211/Qualif-AI",
      demo: "#",
      image: "/projects/qualifai.png",
    },
    {
      title: "CodeQuest",
      description: "Interactive programming learning game designed to teach coding concepts through quests. Built with a custom logic engine to evaluate player solutions in real-time.",
      tech: ["Godot", "GDScript", "Game Dev"],
      github: "https://github.com/theprakhar211/CodeQuest",
      demo: "#",
      image: "/projects/codequest.png",
    },
    {
      title: "Portfolio",
      description: "Personal developer portfolio built using Next.js. Features include custom 3D flip cards, interactive mouse-tracking spotlights, and a fully responsive glassmorphic UI.",
      tech: ["Next.js", "Tailwind", "Framer"],
      github: "https://github.com/theprakhar211",
      demo: "#",
      image: "/projects/portfolio.png",
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16 text-white tracking-tight"
      >
        Featured <span className="text-blue-500">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-square w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900"
          >
            {/* 1. BACKGROUND IMAGE */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* 2. BASE OVERLAY (Darkens on hover to make text pop) */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition-colors duration-500" />

            {/* 3. FLOATING TITLE (Always Visible, but moves up slightly on hover) */}
            <div className="absolute bottom-6 left-6 z-20 group-hover:bottom-[80%] transition-all duration-500 ease-in-out">
              <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full shadow-xl group-hover:border-blue-500/50">
                <h3 className="text-xs md:text-sm font-bold text-white tracking-widest uppercase">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* 4. HIDDEN DESCRIPTION DRAWER (Slides up from bottom) */}
            <div className="absolute inset-x-0 bottom-0 z-30 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl">
                
                {/* Header links */}
                <div className="flex justify-between items-center mb-3">
                   <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">DETAILS</span>
                   <div className="flex gap-3">
                     <a href={project.github} target="_blank" className="text-white hover:text-blue-400 transition-colors"><FaGithub size={16}/></a>
                     <a href={project.demo} target="_blank" className="text-white hover:text-blue-400 transition-colors"><FaExternalLinkAlt size={14}/></a>
                   </div>
                </div>

                {/* Full Text - No line clamp because the box only shows on hover */}
                <p className="text-gray-200 text-[11px] leading-relaxed mb-4 max-h-[100px] overflow-y-auto custom-scrollbar pr-1">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[8px] font-bold px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-blue-300 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Glow Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-3xl pointer-events-none z-10 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}