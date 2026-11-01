"use client";
import { useEffect, useRef } from "react";

/**
 * Cursor-reactive particle network, drawn on a fixed canvas behind the content.
 * - Dots drift, link to nearby dots, link to the cursor, and get pushed away from it.
 * - Touch devices: fewer dots, no cursor interaction.
 * - prefers-reduced-motion: draws one static frame, no animation loop.
 * - Pauses while the tab is hidden.
 */
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const DOT = "96,165,250";   // tailwind blue-400, matches the site accent
    const LINK_DIST = 120;
    const CURSOR_DIST = 170;
    const PUSH_DIST = 130;

    let w = 0;
    let h = 0;
    let dots = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(coarse ? 35 : 80, Math.floor(w / 16));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
      if (reduce) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of dots) {
        if (!reduce) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < PUSH_DIST && d > 0) {
            p.x += (dx / d) * 1.6;
            p.y += (dy / d) * 1.6;
          }
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = w;
          else if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          else if (p.y > h) p.y = 0;
        }
      }

      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        ctx.fillStyle = `rgba(${DOT},0.5)`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.8, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(${DOT},${0.25 * (1 - d / LINK_DIST)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < CURSOR_DIST) {
          ctx.strokeStyle = `rgba(${DOT},${0.55 * (1 - dm / CURSOR_DIST)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!reduce && !raf) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    if (!coarse) {
      window.addEventListener("pointermove", onMove);
      document.documentElement.addEventListener("mouseleave", onLeave);
    }

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20"
    />
  );
}
