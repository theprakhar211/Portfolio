"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          I'm always open to discussing new projects, creative ideas,
          or opportunities to collaborate. Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaEnvelope className="text-2xl" /> 
            <span>Email</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="text-2xl" /> 
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaGithub className="text-2xl" /> 
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}