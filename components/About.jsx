"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMusic, FaBookOpen, FaPenNib, FaCode, FaMicrochip } from "react-icons/fa";

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
                <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase mb-1">Lead Developer</p>
                <h3 className="text-white font-black text-2xl tracking-tighter">PRAKHAR <span className="text-blue-500 italic font-serif font-light">.v3</span></h3>
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
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.02 }}
                className="group p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-blue-500/30 group-hover:text-blue-500 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-gray-500 text-[9px] font-black uppercase tracking-widest leading-none">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}