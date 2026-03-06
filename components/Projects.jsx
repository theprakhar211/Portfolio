"use client";

import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "Qualif-AI",
      description:
        "AI powered interview simulator that asks questions and gives feedback using speech recognition and AI models.",
      tech: ["React", "Next.js", "FastAPI", "OpenAI API"],
      github: "https://github.com/theprakhar211/Qualif-AI",
      demo: "#",
      image: "/projects/qualifai.png"
    },
    {
      title: "CodeQuest",
      description:
        "Interactive programming learning game designed to teach coding concepts through quests and challenges.",
      tech: ["Godot", "GDScript", "Game Development"],
      github: "https://github.com/theprakhar211/CodeQuest",
      demo: "#",
      image: "/projects/codequest.png"
    },
    {
      title: "Portfolio Website",
      description:
        "Personal developer portfolio built using Next.js to showcase projects and technical skills.",
      tech: ["Next.js", "React", "CSS"],
      github: "https://github.com/theprakhar211",
      demo: "#",
      image: "/projects/portfolio.png"
    }
  ];

  const cardStyle = (image) => ({
    backgroundImage: `linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.95)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "12px",
    border: "1px solid #334155",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "pointer"
  });

  const contentStyle = {
    padding: "22px"
  };

  const tagStyle = {
    padding: "5px 10px",
    background: "#0f172a",
    border: "1px solid #334155",
    borderRadius: "6px",
    fontSize: "0.8rem"
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-10"
    >

      <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "40px" }}>
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px"
        }}
      >

        {projects.map((project, index) => (

          <div
            key={index}
            style={cardStyle(project.image)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(56,189,248,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.4)";
            }}
          >

            <div style={contentStyle}>

              <h3
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "8px",
                  color: "#38bdf8"
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  marginBottom: "12px",
                  color: "#cbd5f5",
                  fontSize: "0.95rem",
                  lineHeight: "1.4"
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "14px"
                }}
              >
                {project.tech.map((tech, i) => (
                  <span key={i} style={tagStyle}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "15px" }}>
                <a href={project.github} target="_blank">
                  GitHub
                </a>

                <a href={project.demo} target="_blank">
                  Live Demo
                </a>
              </div>

            </div>

          </div>

        ))}

      </div>

    </motion.section>
  );
}
