"use client";

import { motion } from "framer-motion";

import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiNextdotjs,
  SiFastapi,
  SiHtml5,
  SiCss,
  SiSalesforce
} from "react-icons/si";

export default function Skills() {

  const cardStyle = {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "transform 0.2s",
    cursor: "pointer"
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "1.3rem",
    marginBottom: "15px"
  };

  const skillStyle = {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  };

  const iconStyle = {
    fontSize: "1.1rem"
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-10"
    >

      {/* Section Title */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "50px"
        }}
      >
        Technical Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px"
        }}
      >

        {/* Languages */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={titleStyle}>Languages</div>

          <p style={skillStyle}><FaJava style={iconStyle}/> Java</p>
          <p style={skillStyle}><SiCplusplus style={iconStyle}/> C++</p>
          <p style={skillStyle}><FaPython style={iconStyle}/> Python</p>
          <p style={skillStyle}><FaJs style={iconStyle}/> JavaScript</p>
        </div>

        {/* Frontend */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={titleStyle}>Frontend</div>

          <p style={skillStyle}><FaReact style={iconStyle}/> React</p>
          <p style={skillStyle}><SiNextdotjs style={iconStyle}/> Next.js</p>
          <p style={skillStyle}><SiHtml5 style={iconStyle}/> HTML</p>
          <p style={skillStyle}><SiCss style={iconStyle}/> CSS</p>
        </div>

        {/* Backend */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={titleStyle}>Backend</div>

          <p style={skillStyle}><FaNodeJs style={iconStyle}/> Node.js</p>
          <p style={skillStyle}><SiFastapi style={iconStyle}/> FastAPI</p>
        </div>

        {/* Tools */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={titleStyle}>Tools</div>

          <p style={skillStyle}><FaGitAlt style={iconStyle}/> Git</p>
          <p style={skillStyle}><FaGithub style={iconStyle}/> GitHub</p>
          <p style={skillStyle}><SiSalesforce style={iconStyle}/> Salesforce CRM</p>
        </div>

      </div>
    </motion.section>
  );
}
