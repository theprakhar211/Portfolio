// Single source of truth for project content (used by Projects and the command menu)
export const projects = [
  {
    title: "Qualif-AI",
    slug: "qualif-ai",
    flow: ["Your resume", "Question generation", "Voice answer", "Hybrid scoring", "Feedback"],
    tagline: "AI Interview Simulator",
    description:
      "Voice-first mock interview platform with two modes — Quick Practice and a structured 4-phase Complete Interview using your actual resume. Answers are evaluated by a blended scoring system: 72% Llama 3.3 70B + 28% deterministic checks for keyword coverage and answer structure. Tracks skill mastery across 35+ skills with exponential weighting, benchmarks your answers against AI-generated ideal responses, and deduplicates questions across sessions via hash fingerprinting. Backed by 248 automated tests at 81% coverage via GitHub Actions.",
    tech: ["FastAPI", "React", "MongoDB", "Groq / LLaMA", "JWT", "GitHub Actions"],
    github: "https://github.com/theprakhar211/qualif-ai",
    demo: "https://qualif-smart-ai.vercel.app/",
    image: "/projects/qualifai.png",
    highlights: [
      "Blended scoring: 72% LLM + 28% deterministic (keyword coverage, structure, depth)",
      "Skill graph — 35+ skills across 7 categories with exponential session weighting",
      "Answer benchmarking against permanently cached ideal answers per question",
      "Question deduplication via 8-char hash fingerprinting — fresh questions for 25+ sessions",
      "5-layer prompt-injection defence: regex sanitisation, XML delimiters, system rules, score floor, LLM classifier",
      "248 automated tests at 81% coverage via GitHub Actions — caught 5 real production bugs",
    ],
    metrics: [
      { value: "248", label: "tests" },
      { value: "81%", label: "coverage" },
      { value: "5", label: "defence layers" },
    ],
    featured: true,
  },
  {
    title: "CodeQuest",
    slug: "codequest",
    flow: ["Quest puzzle", "Your Python code", "Safe sandbox", "Result and feedback"],
    tagline: "Programming Learning Game",
    description:
      "Interactive programming learning game designed to teach coding concepts through quests. Built with a custom logic engine that evaluates player solutions in real-time inside the Godot engine.",
    tech: ["Godot", "GDScript", "Game Dev"],
    github: "https://github.com/theprakhar211/CodeQuest",
    demo: null,
    image: "/projects/codequest.png",
    highlights: [
      "Custom logic engine for real-time solution evaluation",
      "Quest-based learning progression system",
      "Built entirely in Godot with GDScript",
    ],
    metrics: [
      { value: "Godot", label: "2D RPG" },
      { value: "Python", label: "code sandbox" },
    ],
    featured: false,
  },
  {
    title: "agAInst",
    slug: "against",
    flow: ["Your argument", "Debater + Analyser (parallel)", "Judge scores", "Verdict"],
    tagline: "AI Debate Arena",
    description:
      "Full-stack AI debate platform where you argue any topic against an AI that genuinely pushes back. Three role-separated LLM agents — Debater, Judge, and Analyser — run in a multi-agent pipeline. The Analyser fires in parallel with the Debater via Promise.all for zero added latency. Includes a 2-player local mode with screen-blur turn handoff, Side Flip mode, fallacy detection, and PDF export.",
    tech: ["Next.js", "FastAPI", "Groq / LLaMA", "Framer Motion", "Pydantic"],
    github: "https://github.com/theprakhar211/against-public",
    demo: "https://against-debate.vercel.app/",
    image: "/projects/against.png",
    highlights: [
      "3 role-separated LLM agents — Debater, Judge, Analyser — in one multi-agent pipeline",
      "Analyser fires in parallel with Debater via Promise.all — zero added latency",
      "Judge returns structured JSON scores with automated retry logic on parse failure",
      "Stateless API — full conversation history sent per request, no server-side session state",
      "2-player local mode with screen-blur handoff between turns",
      "Side Flip mode, fallacy detection, verdict caching, and PDF transcript export",
    ],
    metrics: [
      { value: "3", label: "LLM agents" },
      { value: "Realtime", label: "PvP mode" },
    ],
    featured: false,
  },
];
