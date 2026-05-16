"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub, FaLinkedin, FaEnvelope,
  FaExternalLinkAlt, FaPaperPlane, FaCheckCircle,
} from "react-icons/fa";

// ─── Replace this with your Formspree endpoint ───────────────────────────────
// 1. Go to https://formspree.io and sign up (free)
// 2. Create a new form → copy the endpoint URL
// 3. Paste it here, e.g. "https://formspree.io/f/xyzabcde"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeenyyek";
// ─────────────────────────────────────────────────────────────────────────────

const email   = "theprakhar211@gmail.com";
const socials = [
  {
    icon:   <FaGithub />,
    label:  "GitHub",
    handle: "@theprakhar211",
    link:   "https://github.com/theprakhar211",
    color:  "hover:text-white",
  },
  {
    icon:   <FaLinkedin />,
    label:  "LinkedIn",
    handle: "Prakhar Sharma",
    link:   "https://www.linkedin.com/in/prakhar-sharma-21112004-",
    color:  "hover:text-blue-400",
  },
];

export default function Contact() {
  const [status,  setStatus]  = useState("idle"); // idle | sending | sent | error
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.06] transition-all duration-200";

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
        <p className="mt-3 text-gray-500 text-sm">I usually respond within 24 hours</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* LEFT — CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-7 bg-white/[0.02] border border-white/10 rounded-3xl"
        >
          <h3 className="text-white font-black text-lg mb-1">Send a message</h3>
          <p className="text-gray-500 text-xs mb-6">No email client needed — straight from here.</p>

          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
              <FaCheckCircle className="text-green-400 text-4xl" />
              <p className="text-white font-bold">Message sent!</p>
              <p className="text-gray-500 text-xs">I'll get back to you soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs text-blue-400 hover:underline underline-offset-2"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-xs">Something went wrong. Try emailing me directly.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-black rounded-xl transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {status === "sending" ? (
                  <>Sending…</>
                ) : (
                  <>Send Message <FaPaperPlane size={12} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* RIGHT — EMAIL + SOCIALS + STATUS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-4"
        >
          {/* Big email card */}
          <a
            href={`mailto:${email}?subject=Project%20Inquiry`}
            className="group p-6 bg-blue-600 rounded-2xl flex items-center justify-between gap-4 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-white font-black text-sm">Drop me an email</p>
                <p className="text-blue-100 text-xs font-medium">{email}</p>
              </div>
            </div>
            <FaExternalLinkAlt className="text-white/60 group-hover:text-white transition-colors shrink-0" size={12} />
          </a>

          {/* Social cards */}
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-5 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center gap-4 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
            >
              <div className={`text-2xl text-gray-500 ${s.color} transition-colors`}>
                {s.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-white uppercase tracking-widest">{s.label}</p>
                <p className="text-[10px] text-gray-500 font-mono">{s.handle}</p>
              </div>
              <FaExternalLinkAlt className="text-gray-700 group-hover:text-blue-500 transition-colors" size={11} />
            </a>
          ))}

          {/* Availability status */}
          <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center gap-3">
            <div className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Available for new opportunities
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}