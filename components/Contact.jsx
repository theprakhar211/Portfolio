"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  // CLEAN NAKED STRING: No extra spaces or brackets
  const email = "theprakhar211@gmail.com"; 

  const socials = [
    { 
      icon: <FaGithub />, 
      label: "GitHub", 
      handle: "@theprakhar211", 
      link: "https://github.com/theprakhar211",
      color: "hover:text-white"
    },
    { 
      icon: <FaLinkedin />, 
      label: "LinkedIn", 
      handle: "Prakhar", 
      link: "https://linkedin.com/in/yourprofile", // Update this with your actual LinkedIn
      color: "hover:text-blue-400"
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-10 max-w-4xl mx-auto">
      {/* SECTION HEADER */}
      <div className="relative mb-16 flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          className="absolute text-7xl md:text-9xl font-black text-white tracking-[0.2em] select-none"
        >
          CONNECT
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 text-4xl font-black text-white tracking-tighter"
        >
          GET IN <span className="text-blue-500 italic font-serif font-light">Touch</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. THE BIG EMAIL CARD */}
        <motion.a
        // This explicitly cleans the string for the system
        href={`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("Project Inquiry")}`}
        whileHover={{ y: -5 }}
        className="md:col-span-2 p-8 bg-blue-600 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 group transition-all shadow-xl shadow-blue-600/20"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white text-3xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-white font-black text-xl tracking-tight">Drop me an email</h3>
              <p className="text-blue-100 text-sm font-medium">{email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest group-hover:bg-blue-50 transition-colors">
            Open Mailer <FaExternalLinkAlt size={12} />
          </div>
        </motion.a>

        {/* 2. SOCIAL CARDS */}
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            className="p-6 bg-white/[0.02] border border-white/10 rounded-[2rem] flex items-center gap-4 group transition-all"
          >
            <div className={`text-2xl text-gray-500 ${social.color} transition-colors`}>
              {social.icon}
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-white uppercase tracking-widest">{social.label}</p>
              <p className="text-[10px] text-gray-500 font-mono tracking-tight">{social.handle}</p>
            </div>
            <FaExternalLinkAlt className="text-gray-700 group-hover:text-blue-500 transition-colors" size={12} />
          </motion.a>
        ))}

        {/* 3. A MINI "STATUS" CARD */}
        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-[2rem] flex items-center gap-4">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Available for new opportunities
          </p>
        </div>

      </div>
    </section>
  );
}