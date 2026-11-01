"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";

const EMAIL = "theprakhar211@gmail.com";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const [toast, setToast] = useState("");
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const openerRef = useRef(null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1800);
  }, []);

  const commands = useMemo(() => {
    const go = (id) => () => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    return [
      { label: "Go to home", hint: "Section", run: go("#home") },
      { label: "Go to about", hint: "Section", run: go("#about") },
      { label: "Go to projects", hint: "Section", run: go("#projects") },
      { label: "Go to skills", hint: "Section", run: go("#skills") },
      { label: "Go to contact", hint: "Section", run: go("#contact") },
      ...projects.map((p) => ({
        label: `Open ${p.title}`,
        hint: "Project",
        run: () => { window.location.hash = `project-${p.slug}`; },
      })),
      { label: "Download resume", hint: "File", run: () => window.open("/prakhar-resume.pdf", "_blank", "noopener") },
      {
        label: "Copy email address",
        hint: "Action",
        run: () => navigator.clipboard?.writeText(EMAIL).then(() => showToast("Email copied"), () => showToast("Copy failed")),
      },
      { label: "Open GitHub", hint: "Link", run: () => window.open("https://github.com/theprakhar211", "_blank", "noopener") },
      { label: "Open LinkedIn", hint: "Link", run: () => window.open("https://www.linkedin.com/in/prakhar-sharma-21112004-", "_blank", "noopener") },
    ];
  }, [showToast]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  const close = useCallback(() => {
    setOpen(false);
    openerRef.current?.focus?.();
  }, []);

  const openPalette = useCallback(() => {
    openerRef.current = document.activeElement;
    setQuery("");
    setSel(0);
    setOpen(true);
  }, []);

  const run = useCallback((cmd) => {
    if (!cmd) return;
    setOpen(false);
    setTimeout(cmd.run, 60);
  }, []);

  // Global shortcut and custom event (the navbar button dispatches "open-palette")
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) close(); else openPalette();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", openPalette);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", openPalette);
    };
  }, [open, close, openPalette]);

  // Keys while open (capture phase so Esc doesn't also close a project dialog behind)
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") { e.stopImmediatePropagation(); close(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, results.length - 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
      else if (e.key === "Enter") { e.preventDefault(); run(results[sel]); }
      else if (e.key === "Tab") { e.preventDefault(); }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open, results, sel, close, run]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[14vh]">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSel(0); }}
              placeholder="Where to? Try “qualif”, “resume”, or “email”"
              aria-label="Search commands"
              role="combobox"
              aria-expanded="true"
              aria-controls="palette-list"
              className="w-full border-b border-white/10 bg-transparent px-5 py-4 text-base text-white placeholder-gray-400 focus:outline-none"
            />
            <ul id="palette-list" ref={listRef} role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
              {results.length === 0 && <li className="px-3 py-3 text-sm text-gray-400">No match</li>}
              {results.map((c, i) => (
                <li
                  key={c.label}
                  role="option"
                  aria-selected={i === sel}
                  onMouseEnter={() => setSel(i)}
                  onClick={() => run(c)}
                  className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm ${i === sel ? "bg-blue-500/20 text-white" : "text-gray-300"}`}
                >
                  <span>{c.label}</span>
                  <span className="text-xs text-gray-400">{c.hint}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/10 px-4 py-2 text-xs text-gray-400">↑↓ to move · Enter to select · Esc to close</div>
          </div>
        </div>
      )}
      <div
        role="status"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-all duration-300 ${toast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      >
        {toast}
      </div>
    </>
  );
}
