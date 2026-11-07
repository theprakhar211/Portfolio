// Single source of truth for project content (used by Projects and the command menu)
// Every number and claim here comes from the verified fact sheets. Do not add unverified figures.
export const projects = [
  {
    title: "Qualif-AI",
    slug: "qualif-ai",
    flow: ["Your resume", "Question generation", "Voice answer", "Hybrid scoring", "Feedback"],
    tagline: "AI Interview Simulator",
    // TODO: add an evaluation-speed claim only after post-deploy timing has been measured (not measured yet).
    description:
      "Voice-first mock interview platform with two modes — Quick Practice and a structured 4-phase Complete Interview using your actual resume. Answers are evaluated by a blended scoring system: an LLM judgement (Groq-hosted gpt-oss-120b for the smart model, gpt-oss-20b for the fast one) combined with deterministic checks for keyword coverage, answer structure, and depth, weighted per interview phase. Tracks skill mastery across 42 skills in 7 categories, benchmarks your answers against AI-generated ideal responses, and avoids repeat questions by remembering your last 200 via a hash fingerprint. Backed by 281 backend tests and 4 Playwright end-to-end specs, run in GitHub Actions.",
    tech: ["FastAPI", "React", "MongoDB", "Groq / gpt-oss", "JWT", "GitHub Actions", "Playwright", "Sentry"],
    github: "https://github.com/theprakhar211/qualif-ai",
    demo: "https://qualif-smart-ai.vercel.app/",
    image: "/projects/qualifai.webp",
    highlights: [
      "Hybrid scoring: LLM judgement plus deterministic checks, weighted per phase (LLM/deterministic): intro 80/20, behavioural 80/20, resume 75/25, technical and quick 72/28",
      "Skill graph: 42 skills across 7 categories, with mastery tracked over each user's last 5 scores",
      "Answer benchmarking against AI-generated ideal answers",
      "Question deduplication: an 8-character SHA-256 fingerprint, remembering your last 200 questions",
      "5-layer prompt-injection defence: regex sanitiser, delimited input, prompt rule, score floor, LLM classifier",
      "281 backend tests plus 4 Playwright end-to-end specs (71% coverage on application code), run in GitHub Actions",
    ],
    metrics: [
      { value: "281", label: "tests" },
      { value: "5", label: "defence layers" },
      { value: "42", label: "skills tracked" },
    ],
    featured: true,
  },
  {
    title: "agAInst",
    slug: "against",
    flow: ["Your argument", "Debater replies", "Analyser (non-blocking)", "Judge scores", "Verdict"],
    tagline: "AI Debate Arena",
    description:
      "Full-stack AI debate platform where you argue any topic against an AI debater. Three AI roles — debater, judge, and analyser — plus a PvP judge and a topic generator make up five prompts, all running gpt-oss-120b via Groq. The analyser starts right after the debater and does not block the debate. Online PvP runs on Supabase Realtime, with auth and cloud sync and a global leaderboard. The API is rate limited (HTTP 429), player input is sanitised against prompt injection, and 44 pytest tests with a mocked LLM run in GitHub Actions CI.",
    tech: ["Next.js", "FastAPI", "Supabase", "Groq / gpt-oss", "Framer Motion", "Pydantic", "GitHub Actions"],
    github: "https://github.com/theprakhar211/agAInst",
    demo: "https://against-debate.vercel.app/",
    image: "/projects/against.webp",
    highlights: [
      "5 prompts: debater, judge, analyser, PvP judge and topic generator, on gpt-oss-120b via Groq",
      "Analyser starts right after the debater and does not block the debate",
      "Judge returns structured JSON scores with automated retry logic on parse failure",
      "Online PvP on Supabase Realtime, auth with cloud sync, and a global leaderboard",
      "Rate limiting with HTTP 429, and prompt-injection sanitising of player input",
      "44 pytest tests with a mocked LLM, plus a GitHub Actions CI workflow",
      "Stress-tested the live API, traced 500 errors to a shared Groq token limit, and fixed them with caching and a graceful fallback",
      // Carried over from the previous version of this card; confirm they are still accurate:
      "2-player local mode with screen-blur handoff, Side Flip mode, fallacy detection, and PDF transcript export",
    ],
    metrics: [
      { value: "5", label: "LLM prompts" },
      { value: "44", label: "pytest tests" },
      { value: "Realtime", label: "PvP mode" },
    ],
    featured: false,
  },
  {
    title: "DocuMind",
    slug: "documind",
    flow: ["Upload PDF", "Chunk and embed", "Filtered vector search", "Streamed answer with citations"],
    tagline: "RAG Document Q&A",
    description:
      "Upload a PDF and ask questions about it. DocuMind extracts the text with PyMuPDF, splits it into overlapping chunks, embeds them, and retrieves the most relevant passages for each question from Qdrant, scoped to the document you uploaded. Answers stream back over Server-Sent Events with source citations arriving before the first token. A built-in evaluation endpoint and dashboard score context recall, faithfulness and relevance.",
    tech: ["FastAPI", "Qdrant", "FastEmbed (ONNX)", "Groq", "Next.js", "Docker"],
    github: "https://github.com/theprakhar211/documind",
    demo: "https://documind-ps.vercel.app/",
    image: "/projects/documind.webp",
    highlights: [
      "PyMuPDF ingestion with fixed-size 512-character chunks, 64 overlap, snapped to word boundaries",
      "all-MiniLM-L6-v2 embeddings via FastEmbed",
      "Per-document filtered vector search using a Qdrant payload index",
      "Answers stream over Server-Sent Events, with source citations sent before the first token",
      "Evaluation endpoint and dashboard scoring context recall, faithfulness and relevance (a custom RAGAS-inspired evaluator, not the ragas library)",
      "Multi-stage Docker build; backend on Render, frontend on Vercel",
      "Fixed a 512 MB out-of-memory crash by replacing PyTorch with an ONNX runtime, and migrated from retired Groq Llama models to gpt-oss",
    ],
    metrics: [
      { value: "SSE", label: "streamed answers" },
      { value: "3", label: "eval metrics" },
    ],
    featured: false,
  },
  // TODO: Mafia Web card goes here once the fact sheet is done
  // (FastAPI WebSockets + Next.js, live demo only, no GitHub link on the resume).
  {
    title: "CodeQuest",
    slug: "codequest",
    flow: ["Quest puzzle", "Your Python code", "Output check", "Result and feedback"],
    tagline: "Programming Learning Game",
    description:
      "2D RPG where players solve puzzles by writing executable Python. A custom in-game evaluation engine, built in Godot, checks outputs and gives targeted syntax feedback. MVP in development. The source is private; code is available on request.",
    tech: ["Godot", "GDScript", "Python"],
    github: "https://github.com/theprakhar211/codequest-public",
    demo: null,
    image: "/projects/codequest.webp",
    highlights: [
      "Players solve puzzles by writing executable Python",
      "Custom in-game evaluation engine that checks outputs and gives targeted syntax feedback",
      "Modular, data-driven subsystems (movement, dialogue, quests), so new puzzles need no changes to core engine code",
    ],
    metrics: [
      { value: "Godot", label: "2D RPG" },
      { value: "MVP", label: "in development" },
    ],
    featured: false,
  },
];
