"use client";

import { useState, useEffect } from "react";
import { FaFileDownload } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-10 py-5 flex justify-between items-center border-b transition-all duration-300 
      ${scrolled 
        ? "bg-slate-900/70 backdrop-blur-md border-slate-700 shadow-lg" 
        : "bg-transparent border-transparent"}
      `}
    >
      {/* BRAND */}
      <h1 className="text-xl font-bold text-white tracking-tight">
        Prakhar<span className="text-blue-500">.</span>
      </h1>

      {/* NAV LINKS & RESUME */}
      <div className="flex items-center gap-10">
        <ul className="flex gap-8 text-gray-300 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* RESUME BUTTON: Kept simple to match your original style */}
        <a
          href="/prakhar-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
        >
          Resume <FaFileDownload size={14} />
        </a>
      </div>
    </nav>
  );
}