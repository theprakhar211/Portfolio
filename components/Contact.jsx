"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck,
  FaExternalLinkAlt, FaPaperPlane, FaCheckCircle, FaFileDownload,
} from "react-icons/fa";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeenyyek";

const email = "theprakhar211@gmail.com";
const TOPICS = ["Internship", "Collaboration", "Just saying hi"];
const socials = [
  { icon: <FaGithub />, label: "GitHub", handle: "@theprakhar211", link: "https://github.com/theprakhar211", color: "group-hover:text-white" },
  { icon: <FaLinkedin />, label: "LinkedIn", handle: "Prakhar Sharma", link: "https://www.linkedin.com/in/prakhar-sharma-21112004-", color: "group-hover:text-blue-400" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Please add your name.";
  if (!EMAIL_RE.test(f.email)) e.email = "Please enter a valid email address.";
  if (f.message.trim().length < 10) e.message = "Please write at least a sentence or two.";
  return e;
}

function Field({ name, label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-300">{label}</label>
      {children}
      {error && <p id={`${name}-error`} className="text-xs text-red-300">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [topic, setTopic] = useState(TOPICS[0]);
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const sentRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const submit = async () => {
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      formRef.current?.querySelector("[aria-invalid='true']")?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, topic }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "", _gotcha: "" });
        setTimeout(() => sentRef.current?.focus(), 50);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inputClass = (name) =>
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/[0.06] transition-all duration-200 ${
      errors[name] ? "border-red-400/70 focus:border-red-400" : "border-white/10 focus:border-blue-500/60"
    }`;

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:px-10">
      <div className="mb-12 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl"
        >
          Let&rsquo;s talk
        </motion.h2>
        <p className="mt-4 text-gray-400">
          I&rsquo;m looking for internships where I can work on LLM products end to end. I usually reply within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.1fr_0.9fr]">
        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
        >
          {status === "sent" ? (
            <div role="status" className="flex flex-col items-center justify-center gap-3 py-12 text-center">
              <FaCheckCircle className="text-4xl text-emerald-400" />
              <p ref={sentRef} tabIndex={-1} className="font-display text-xl font-bold text-white focus:outline-none">Message sent</p>
              <p className="text-sm text-gray-400">Thanks for reaching out. I&rsquo;ll get back to you soon.</p>
              <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-blue-300 underline-offset-4 hover:underline">
                Send another
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={(e) => { e.preventDefault(); submit(); }}
              className="flex flex-col gap-5"
              noValidate
            >
              <fieldset>
                <legend className="mb-2 text-sm font-medium text-gray-300">What is this about?</legend>
                <div className="flex flex-wrap gap-2">
                  {TOPICS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={topic === t}
                      onClick={() => setTopic(t)}
                      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                        topic === t ? "border-blue-400 bg-blue-500/20 text-white" : "border-white/10 text-gray-300 hover:border-blue-400/50"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field name="name" error={errors.name} label="Name">
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name"
                    value={form.name} onChange={handleChange}
                    aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClass("name")} />
                </Field>
                <Field name="email" error={errors.email} label="Email">
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com"
                    value={form.email} onChange={handleChange}
                    aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass("email")} />
                </Field>
              </div>

              <Field name="message" error={errors.message} label="Message">
                <textarea id="message" name="message" rows={5} placeholder="What’s on your mind? Ctrl+Enter sends."
                  value={form.message} onChange={handleChange}
                  onKeyDown={(e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") submit(); }}
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${inputClass("message")} resize-none`} />
              </Field>

              {/* Honeypot: hidden from people, filled by bots */}
              <input type="text" name="_gotcha" value={form._gotcha} onChange={handleChange}
                tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              {status === "error" && (
                <p role="alert" className="text-sm text-red-300">
                  Something went wrong sending that.{" "}
                  <a className="underline underline-offset-4" href={`mailto:${email}`}>Email me directly</a> instead.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition-all hover:bg-blue-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {status === "sending" ? "Sending…" : <>Send message <FaPaperPlane size={12} /></>}
              </button>
            </form>
          )}
        </motion.div>

        {/* SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center justify-between gap-3 rounded-2xl bg-blue-600 p-5 shadow-xl shadow-blue-600/20">
            <a href={`mailto:${email}`} className="flex min-w-0 items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 rounded-lg">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-xl text-white"><FaEnvelope /></span>
              <span className="min-w-0">
                <span className="block text-sm font-bold text-white">Email me</span>
                <span className="block truncate text-xs text-blue-100">{email}</span>
              </span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
              className="flex shrink-0 items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
            >
              {copied ? <><FaCheck size={11} /> Copied</> : <><FaCopy size={11} /> Copy</>}
            </button>
          </div>

          <a
            href="/prakhar-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-amber-300/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span className="text-2xl text-gray-400 transition-colors group-hover:text-amber-300"><FaFileDownload /></span>
            <span className="flex-1">
              <span className="block text-sm font-semibold text-white">Download my resume</span>
              <span className="block text-xs text-gray-400">PDF, one page</span>
            </span>
            <FaExternalLinkAlt className="text-gray-400 transition-colors group-hover:text-amber-300" size={11} />
          </a>

          {socials.map((s) => (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span className={`text-2xl text-gray-400 transition-colors ${s.color}`}>{s.icon}</span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-white">{s.label}</span>
                <span className="block font-mono text-xs text-gray-400">{s.handle}</span>
              </span>
              <FaExternalLinkAlt className="text-gray-400 transition-colors group-hover:text-blue-400" size={11} />
            </a>
          ))}

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <p className="text-sm text-gray-300">Open to internships and AI/ML roles</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
