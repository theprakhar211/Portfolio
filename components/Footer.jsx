"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "100px",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #334155"
      }}
    >

      <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
        Prakhar Sharma
      </h3>

      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
        Software Engineer • AI Enthusiast • Game Developer
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          fontSize: "1.4rem",
          marginBottom: "20px"
        }}
      >
        <a href="https://github.com/theprakhar211" target="_blank">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/prakhar-sharma-21112004-" target="_blank">
          <FaLinkedin />
        </a>

        <a href="mailto:theprakhar211@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p style={{ fontSize: "0.9rem", color: "#64748b" }}>
        © {new Date().getFullYear()} Prakhar Sharma. All rights reserved.
      </p>

    </footer>
  );
}
