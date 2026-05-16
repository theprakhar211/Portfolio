"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiPython, SiFastapi,
  SiJavascript, SiGodotengine, SiGithub,
  SiMongodb, SiJsonwebtokens, SiCplusplus,
  SiHtml5, SiCss, SiSalesforce, SiNodedotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrain, TbBrandAzure } from "react-icons/tb";
import { SiGooglecloud } from "react-icons/si";

const tech = [
  // Languages
  { icon: <SiPython />,      name: "Python",         category: "Language" },
  { icon: <SiJavascript />,  name: "JavaScript",     category: "Language" },
  { icon: <SiCplusplus />,   name: "C++",            category: "Language" },
  { icon: <FaJava />,        name: "Java",           category: "Language" },
  { icon: <SiHtml5 />,       name: "HTML",           category: "Language" },
  { icon: <SiCss />,         name: "CSS",            category: "Language" },

  // Frameworks & DB
  { icon: <SiReact />,       name: "React",          category: "Framework" },
  { icon: <SiNextdotjs />,   name: "Next.js",        category: "Framework" },
  { icon: <SiFastapi />,     name: "FastAPI",        category: "Framework" },
  { icon: <SiNodedotjs />,   name: "Node.js",        category: "Framework" },
  { icon: <SiMongodb />,     name: "MongoDB",        category: "Framework" },
  { icon: <SiJsonwebtokens />, name: "JWT",          category: "Framework" },

  // AI & Cloud
  { icon: <TbBrain />,       name: "NLP / Gen AI",   category: "AI & Cloud" },
  { icon: <SiGooglecloud />, name: "Google Cloud",   category: "AI & Cloud" },
  { icon: <TbBrandAzure />,  name: "Azure",          category: "AI & Cloud" },

  // Tools
  { icon: <SiGithub />,      name: "GitHub",         category: "Tools" },
  { icon: <SiGodotengine />, name: "Godot",          category: "Tools" },
  { icon: <SiSalesforce />,  name: "Salesforce",     category: "Tools" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6 md:px-10">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        Technology <span className="text-blue-500">Stack</span>
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {tech.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03, duration: 0.25 }}
            viewport={{ once: true }}
            className="group bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/40 p-4 rounded-xl flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
          >
            <div className="text-3xl text-blue-400 group-hover:text-blue-300 transition-colors">
              {item.icon}
            </div>
            <div className="text-gray-400 group-hover:text-gray-200 text-xs font-medium text-center transition-colors">
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}