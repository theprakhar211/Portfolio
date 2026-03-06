"use client";
import React, { useState, useEffect } from "react";

export default function BackgroundWrapper({ children }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update mouse position
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeMouseMove("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden">
      
      {/* 1. THE MOUSE SPOTLIGHT */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* 2. STATIC AMBIENT GLOWS (Top Left & Bottom Right) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-10"></div>

      {/* 3. OPTIONAL: SUBTLE GRID OVERLAY (For that Manga/Tech vibe) */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none z-20"></div>

      {/* THE ACTUAL CONTENT */}
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
}