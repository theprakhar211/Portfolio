"use client";
import React, { useState, useEffect } from "react";
import ParticleField from "@/components/ParticleField";

export default function BackgroundWrapper({ children }) {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable spotlight on touch devices — no cursor to track
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove); // fixed typo
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden">

      {/* Mouse spotlight — desktop only */}
      {!isMobile && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Static ambient glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Particle network — sits above the glows, below the spotlight and content */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
}