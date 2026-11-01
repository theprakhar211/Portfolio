"use client";
import { useState } from "react";

const KEYWORDS = ["rest", "graphql", "endpoint", "query", "schema", "http", "resource", "over-fetching", "single", "flexible"];
const CONNECTORS = ["because", "for example", "however", "therefore", "whereas", "while", "so that"];
const SAMPLE =
  "REST exposes many endpoints, and each resource is fetched over HTTP, so a client can get extra data. GraphQL has a single endpoint with a schema, because the client sends a query for exactly the fields it needs. For example, this avoids over-fetching. However, REST is simpler to cache.";

function score(text) {
  const t = text.toLowerCase();
  const words = t.trim() ? t.trim().split(/\s+/).length : 0;
  const hits = KEYWORDS.filter((k) => t.includes(k));
  const keywords = Math.round((hits.length / KEYWORDS.length) * 100);
  const sentences = t.split(/[.!?]/).filter((s) => s.trim().length > 12).length;
  const structure = Math.min(100, CONNECTORS.filter((c) => t.includes(c)).length * 30 + Math.min(sentences, 3) * 14);
  const depth = Math.min(100, Math.round((words / 60) * 100));
  const penalty = words > 0 && words < 20 ? 15 : 0;
  const total = Math.max(0, Math.round(0.5 * keywords + 0.25 * structure + 0.25 * depth) - penalty);
  return { hits, keywords, structure, depth, penalty, total };
}

export default function ScorerDemo() {
  const [text, setText] = useState("");
  const r = score(text);
  const R = 36;
  const C = 2 * Math.PI * R;

  return (
    <div className="mb-6 rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="mb-1 text-sm font-semibold text-white">Try the scorer</p>
      <p className="mb-3 text-xs text-gray-400">
        This runs the deterministic checks in your browser. The real app blends them with an LLM score on the server, weighted by interview phase.
      </p>
      <p className="mb-2 text-sm text-gray-300">Question: Explain how REST differs from GraphQL.</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        aria-label="Your answer"
        placeholder="Type an answer…"
        className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500/60 focus:outline-none"
      />
      <div className="my-3 flex gap-2">
        <button type="button" onClick={() => setText(SAMPLE)} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 hover:border-blue-400/50 hover:text-white">
          Fill a sample answer
        </button>
        <button type="button" onClick={() => setText("")} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 hover:border-blue-400/50 hover:text-white">
          Clear
        </button>
      </div>

      <div className="flex items-center gap-5" aria-live="polite">
        <div className="relative h-24 w-24 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r={R} fill="none" strokeWidth="10" className="stroke-white/10" />
            <circle
              cx="50" cy="50" r={R} fill="none" strokeWidth="10" strokeLinecap="round"
              className="stroke-blue-400"
              strokeDasharray={C}
              style={{ strokeDashoffset: C * (1 - r.total / 100), transition: "stroke-dashoffset .5s ease" }}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center font-display text-2xl font-extrabold text-white">{r.total}</div>
        </div>
        <div className="flex-1 space-y-2">
          {[["Keywords", r.keywords], ["Structure", r.structure], ["Depth", r.depth]].map(([label, v]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-xs text-gray-400"><span>{label}</span><span>{v}</span></div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-400" style={{ width: `${v}%`, transition: "width .5s ease" }} />
              </div>
            </div>
          ))}
          {r.penalty > 0 && <p className="text-xs text-amber-300">Depth penalty: -{r.penalty} (answer too short)</p>}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {KEYWORDS.map((k) => (
          <span key={k} className={`rounded-full border px-2 py-0.5 text-xs ${r.hits.includes(k) ? "border-emerald-400/60 text-emerald-300" : "border-white/10 text-gray-400"}`}>
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}
