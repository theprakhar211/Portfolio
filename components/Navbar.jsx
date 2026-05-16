"use client";

import { useState, useEffect } from "react";
import { FaFileDownload } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("");
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [mounted,        setMounted]        = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers  = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled
          ? "bg-slate-900/70 backdrop-blur-md border-b border-slate-700 shadow-lg"
          : "bg-transparent"}`}
    >
      {/* BRAND */}
      <a
        href="#home"
        onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
        className="text-xl font-bold text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
      >
        Prakhar<span className="text-blue-500">.</span>
      </a>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex gap-1 text-gray-300 font-medium" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const id      = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3 py-2 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    ${isActive
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-white"}`}
                >
                  {label}
                  {/* Active underline dot */}
                  {mounted && isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="/prakhar-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          Resume <FaFileDownload size={13} />
        </a>
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        onClick={() => setMenuOpen((o) => !o)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-700 px-6 py-6 flex flex-col gap-4 md:hidden">
          {NAV_LINKS.map(({ label, href }) => {
            const id      = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1
                  ${isActive ? "text-blue-400" : "text-gray-300"}`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="/prakhar-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold w-fit hover:bg-blue-500 transition-all"
          >
            Resume <FaFileDownload size={13} />
          </a>
        </div>
      )}
    </nav>
  );
}