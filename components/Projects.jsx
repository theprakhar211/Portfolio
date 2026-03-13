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
      {/* CREATIVE TITLE (Matching your Beyond the Code style) */}
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
          FEATURED <span className="text-blue-500 font-serif italic font-light">Projects</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl cursor-pointer"
          >
            {/* 1. BACKGROUND IMAGE - Subtle zoom on hover */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* 2. GRADIENT OVERLAY (Always present, but darkens on hover) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 group-hover:from-black/80 group-hover:to-black/90 transition-all duration-500" />

            {/* 3. TOP TITLE BAR (Slides down on hover) */}
            <div className="absolute top-0 inset-x-0 p-6 z-30 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <div className="flex justify-between items-start">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-xl">
                  <h3 className="text-sm font-bold text-white tracking-widest uppercase italic">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                   <a href={project.github} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-blue-400 border border-white/10 transition-all">
                     <FaGithub size={18}/>
                   </a>
                </div>
              </div>
            </div>

            {/* 4. BOTTOM CONTENT (The Glass Floor) */}
<div className="absolute inset-x-0 bottom-0 z-30 translate-y-[65%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
  
  {/* The actual Glass Backdrop */}
  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  {/* Content Container */}
  <div className="relative z-10 p-6 flex flex-col gap-4">
    
    {/* Tech Tags - Moved up so they are visible even in 'rest' state */}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, i) => (
        <span key={i} className="text-[9px] font-bold px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-100 uppercase">
          {tech}
        </span>
      ))}
    </div>

    {/* Description - Now sits on the glass floor */}
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
      <p className="text-gray-200 text-xs leading-relaxed font-medium mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <a 
          href={project.demo} 
          className="flex-1 flex items-center justify-center gap-2 text-[10px] font-black text-white bg-blue-600 py-2.5 rounded-xl hover:bg-blue-500 transition-all active:scale-95"
        >
          LIVE DEMO <FaExternalLinkAlt size={10}/>
        </a>
        <a 
          href={project.github} 
          className="px-4 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white transition-all"
        >
          <FaGithub size={16}/>
        </a>
      </div>
    </div>
  </div>
</div>

            {/* 5. INDEX NUMBER (Top left - very subtle) */}
            <div className="absolute top-6 left-6 text-white/20 font-black text-4xl group-hover:opacity-0 transition-opacity">
              0{index + 1}
            </div>
            
            {/* Border Highlight */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-3xl pointer-events-none transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}