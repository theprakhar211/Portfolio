"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiJavascript,
  SiGodotengine,
  SiOpenai,
  SiGithub
} from "react-icons/si";

export default function TechStack() {

  const tech = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiGodotengine />, name: "Godot" },
    { icon: <SiOpenai />, name: "OpenAI" },
    { icon: <SiGithub />, name: "GitHub" }
  ];

  return (
    <section id="tech" className="py-24 px-10">

      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        Technology Stack
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

        {tech.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02, duration: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center gap-4 cursor-pointer"
          >

            <div className="text-4xl text-blue-400">
              {item.icon}
            </div>

            <div className="text-gray-300">
              {item.name}
            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
