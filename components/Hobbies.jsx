"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaMusic, FaQuoteLeft, FaTimes, FaExternalLinkAlt, FaQuoteRight, FaFeather } from "react-icons/fa";

export default function BeyondTheCode() {
  const [isOpen, setIsOpen] = useState(false);

  // DATA: Anthology with images and Google Doc links
  const poems = [
    {
      title: "Questions of the Innocent",
      excerpt: "What are people, who suicide, after?...",
      link: "https://docs.google.com/document/d/121-1X0pfD_ROrT7j8a8aAUcd-WMbu52C8aQohlSjdcI/edit?usp=sharing", 
      image: "/poems/questionsinnocent.jpg" // Place images in /public/poems/
    },
    {
      title: "Prisoner of the Page",
      excerpt: "Now I'm just a Prisoner, bound by the rules...",
      link: "https://docs.google.com/document/d/12JlPHTtjnYeK7hCg_2Re6qXpOYBzSig2BVIRdknutKw/edit?usp=sharing",
      image: "/poems/prisoner.jpg"
    },
    {
      title: "The Cruel Mistress",
      excerpt: "Sweet and sour, like a fruit of Citrus, there once lived a kind, yet cruel mistress...",
      link: "https://docs.google.com/document/d/1UXUdxfCJb4zgShVNFcOQPj4fATsWiCukKNGw_h-xnTs/edit?usp=sharing",
      image: "/poems/citrus.jpg"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto relative">
      {/* CREATIVE SECTION TITLE */}
<div className="relative mb-16 flex flex-col items-center justify-center">
  {/* 1. Large Faded Background Text (The 'Shadow' Title) */}
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 0.05, y: 0 }}
    className="absolute text-6xl md:text-8xl font-black text-white select-none tracking-[0.2em] whitespace-nowrap"
  >
    ANTHOLOGY
  </motion.span>

  {/* 2. Main Foreground Title */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="relative z-10 flex flex-col items-center"
  >
    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter flex items-center gap-3">
      <span className="text-blue-500">//</span> 
      BEYOND THE <span className="text-blue-500">CODE</span>
    </h2>
    
    {/* 3. Decorative Sub-line */}
    <div className="flex items-center gap-4 mt-2">
      <div className="h-[1px] w-8 md:w-12 bg-blue-500/50" />
      <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">
        The Human Layer
      </span>
      <div className="h-[1px] w-8 md:w-12 bg-blue-500/50" />
    </div>
  </motion.div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. THE POEM CARD (Main Trigger) */}
        <motion.div 
          onClick={() => setIsOpen(true)}
          whileHover={{ y: -5 }}
          className="md:col-span-2 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl relative overflow-hidden group cursor-pointer transition-all hover:border-blue-500/30"
        >
          <FaQuoteLeft className="text-blue-500/10 text-6xl absolute top-4 left-4" />
          <div className="relative z-10">
            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.3em] mb-4 block underline underline-offset-8">Featured Verse</span>
            <p className="text-xl italic text-gray-200 leading-relaxed font-serif">
              "{poems[1].excerpt}"
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-blue-400 group-hover:text-white transition-colors">
               <FaFeather className="animate-bounce" />
               <span>Explore the Anthology →</span>
            </div>
          </div>
        </motion.div>

        {/* 2. CURRENTLY WATCHING/READING */}
        <div className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FaBookOpen className="text-purple-400" />
              <span className="text-[10px] text-gray-400 uppercase font-black">Current Read</span>
            </div>
            <h4 className="text-white font-bold">The Love Hypothesis</h4>
            <p className="text-xs text-gray-500 mt-1">Ali Hazelwood</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl">
            <div className="flex items-center gap-3 mb-4 text-green-400">
              <div className="animate-pulse w-2 h-2 rounded-full bg-green-400" />
              <span className="text-[10px] text-gray-400 uppercase font-black">Now Playing</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <FaMusic className="text-white text-sm" />
              </div>
              <div>
                <h4 className="text-sm text-white font-bold">Arz Kiya Hai</h4>
                <p className="text-[10px] text-gray-500">Anuv Jain</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. FAVOURITES */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {[
            { label: "Fav Manga", value: "Omniscient Reader's Viewpoint", color: "text-blue-400" },
            { label: "Fav Anime", value: "Hunter X Hunter", color: "text-orange-400" },
            { label: "Fav Song", value: "Line Without a Hook", color: "text-yellow-400" },
            { label: "Fav Novel", value: "The Beginning After the End", color: "text-red-400" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", y: -2 }}
              className="p-4 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center bg-white/[0.02] transition-colors"
            >
              <span className="text-[8px] uppercase text-gray-500 tracking-tighter mb-1">{item.label}</span>
              <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ANTHOLOGY MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-3xl bg-slate-950/90"
          >
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-5xl h-[80vh] bg-slate-900/40 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div>
                  <h3 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Anthology</h3>
                  <h2 className="text-2xl font-serif text-white italic">Verses Beyond the Binary</h2>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-3 text-gray-400 hover:text-white transition-all">
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Scrollable Gallery */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {poems.map((poem, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="group relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 transition-all cursor-pointer shadow-xl bg-slate-800"
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${poem.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:bg-black/80 transition-all duration-500" />

                      <div className="absolute inset-0 p-5 flex flex-col justify-end items-start">
                        <div className="bg-slate-950/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full mb-2 shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                          <h4 className="text-[10px] font-bold text-white tracking-widest uppercase italic">
                            {poem.title}
                          </h4>
                        </div>
                        
                        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out w-full">
                          <p className="text-gray-300 text-[10px] italic font-serif leading-relaxed mb-3 line-clamp-2">
                            "{poem.excerpt}"
                          </p>
                          <a 
                            href={poem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[9px] font-black text-blue-400 hover:text-white uppercase tracking-[0.2em] transition-colors"
                          >
                            Open Anthology <FaExternalLinkAlt size={8} />
                          </a>
                        </div>
                      </div>
                      <div className="absolute inset-0 border border-white/0 group-hover:border-blue-500/40 rounded-2xl pointer-events-none transition-all duration-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}