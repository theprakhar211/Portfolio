"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMusic, FaBookOpen, FaPenNib, FaCode, FaMicrochip, FaExternalLinkAlt } from "react-icons/fa";

export default function About() {
  const stats = [
    { number: "3+", label: "Architected Works", icon: <FaCode /> },
    { number: "5+", label: "Core Stack", icon: <FaMicrochip /> },
    { number: "2+", label: "AI Deployments", icon: <FaPenNib /> },
    { number: "3rd", label: "Year CSE-AI", icon: <FaBookOpen /> }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">

        {/* PROFILE CARD - Landscape Flip */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="perspective-1000 group w-full"
        >
          <div className="relative w-full aspect-video transition-transform duration-700 preserve-3d group-hover:rotate-y-180 cursor-pointer shadow-2xl">
            
            {/* FRONT: The Visual */}
            <div className="absolute inset-0 backface-hidden">
              <Image
                src="/profile1.png"
                alt="Prakhar"
                fill
                className="rounded-[2.5rem] border border-white/10 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent rounded-[2.5rem]" />
              <div className="absolute bottom-6 left-8">
              </div>
            </div>

            {/* BACK: The Blueprint */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 border-2 border-blue-500/30 rounded-[2.5rem] flex flex-col justify-center p-10 overflow-hidden">
              {/* Decorative background grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <h3 className="relative z-10 text-xl font-black text-blue-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-500/50" /> BEYOND THE CODE
              </h3>
              
              <div className="relative z-10 grid grid-cols-3 gap-6">
                {[
                  { icon: <FaPenNib />, title: "Poetry", sub: "Logic & Rhythm" },
                  { icon: <FaMusic />, title: "Music", sub: "Discovery" },
                  { icon: <FaBookOpen />, title: "Manga", sub: "Visual Art" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-blue-500 text-lg">{item.icon}</div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest">{item.title}</h4>
                    <p className="text-gray-500 text-[9px] leading-tight">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/5 italic text-gray-400 text-xs leading-relaxed">
                "I view a compiler as a stage and a codebase as a stanza. My goal is to engineer intelligence that feels inherently human."
              </div>
            </div>
          </div>
        </motion.div>

        {/* ABOUT TEXT */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-black text-white tracking-tighter mb-4">
              ABOUT <span className="text-blue-500 italic font-serif font-light">ME</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Based in the intersection of <span className="text-white font-medium">Artificial Intelligence</span> and 
              expressive design. I specialize in building autonomous systems that don't just solve problems—they 
              create meaningful interactions.
            </p>
          </div>

          {/* STATS GRID */}
          {/* STATS & RESUME GRID */}
<div className="grid grid-cols-2 gap-4">
  {stats.map((stat, index) => (
    <div 
      key={index} 
      className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all duration-500"
    >
      <div className="text-2xl font-black text-white">{stat.number}</div>
      <div className="text-gray-500 text-[9px] font-black uppercase tracking-widest leading-none mt-1">
        {stat.label}
      </div>
    </div>
  ))}

  {/* THE RESUME CARD */}
  <motion.a 
    href="/prakhar-resume.pdf" // Ensure your PDF is in the /public folder
    target="_blank"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="col-span-2 group p-5 bg-blue-600/10 border border-blue-500/50 rounded-2xl flex items-center justify-between transition-all duration-500 cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
        <FaPenNib size={18} /> 
      </div>
      <div>
        <div className="text-sm font-black text-white uppercase tracking-tight">Resume</div>
        <div className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">Download PDF • 142kb</div>
      </div>
    </div>
    <div className="p-3 bg-white/5 rounded-full text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
      <FaExternalLinkAlt size={12} />
    </div>
  </motion.a>
</div>
        </div>
      </div>
    </section>
  );
}