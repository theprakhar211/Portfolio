"use client";

import { useState, useEffect } from "react";

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

      <h1 className="text-xl font-bold text-white">
        Prakhar
      </h1>

      <ul className="flex gap-8 text-gray-300">

        <li>
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </li>

      </ul>

    </nav>

  );
}
