"use client";
import React from "react";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Qualif-AI</h1>
      <p>Practice interviews with AI and get instant feedback.</p>

      <div className="categories">
        <h2>Choose Interview Type</h2>

        <div className="category-list">
          <button>DSA Interview</button>
          <button>Frontend Interview</button>
          <button>Backend Interview</button>
          <button>HR Interview</button>
        </div>
      </div>

      <div className="start-section">
        <button className="start-btn">Start Interview</button>
      </div>
    </div>
  );
}

export default Home;
