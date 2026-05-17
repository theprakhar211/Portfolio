"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/theprakhar211",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/prakhar-sharma-21112004-",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope size={18} />,
    href: "mailto:theprakhar211@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.06] py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-white font-black text-lg tracking-tight">
            Prakhar<span className="text-blue-500">.</span>
          </span>
          <span className="text-gray-600 text-xs">
            Software Engineer · AI · Game Dev
          </span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-gray-500 hover:text-white hover:border-blue-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Prakhar Sharma. All rights reserved.
        </p>

      </div>
    </footer>
  );
}