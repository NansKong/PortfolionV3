"use client";

import React, { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
  radius: number;
}

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: TrailPoint[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      // Add point
      points.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 1,
        radius: 3.5,
      });

      // Keep points bounded
      if (points.length > 25) {
        points.shift();
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.alpha *= 0.92;
        point.radius *= 0.97;

        if (point.alpha > 0.01) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, Math.max(0.8, point.radius), 0, Math.PI * 2);
          // Green accent glow
          ctx.fillStyle = `rgba(63, 185, 80, ${point.alpha * 0.4})`;
          ctx.fill();

          // Connect consecutive points with fine line
          if (i > 0) {
            const prev = points[i - 1];
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(point.x, point.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${point.alpha * 0.25})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Remove dead points
      points = points.filter((p) => p.alpha > 0.02);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      style={{ opacity: 0.85, position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 50 }}
    />
  );
}
