"use client";

import React, { useState, useRef, useEffect } from "react";
import UnscrambleText from "./UnscrambleText";
import { CornerDownLeft } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface TerminalLine {
  type: "input" | "output" | "error" | "system";
  text: string;
}

export default function SkillsTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "system", text: "Rudrax AI & Systems OS [Version 3.0.4-LTS]" },
    { type: "system", text: "Type 'help' or click shortcut chips to inspect capabilities." },
    { type: "output", text: "System initialized. All 36+ modules mounted successfully." },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  const executeCommand = (cmdText: string) => {
    const raw = cmdText.trim().toLowerCase();
    if (!raw) return;

    const newHistory = [...history, { type: "input" as const, text: `$ ${cmdText}` }];

    switch (raw) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Available commands:\n  • skills     - Display categorized engineering & AI skills matrix\n  • projects   - List flagship deployed systems\n  • whoami     - Display developer identity and mission\n  • research   - Show NAACL & Foundation model publications\n  • contact    - Get email and communication endpoints\n  • clear      - Clear terminal screen\n  • sudo hire  - Trigger immediate priority consultation",
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: "PRIMARY CAPABILITIES:\n" +
            "  [AI/ML]: PyTorch, Transformers, HuggingFace, LangGraph, BKT, SymPy, Computer Vision, GDAL\n" +
            "  [Full-Stack]: Next.js 16, React 19, TypeScript, FastAPI, Node.js, Tailwind CSS\n" +
            "  [Cloud & Infra]: Docker, Oracle Cloud ARM, Celery Workers, Redis AOF, Caddy SSL Reverse Proxy\n" +
            "  [Databases]: PostgreSQL 17, Qdrant Vector DB, Supabase, Upstash Redis",
        });
        break;

      case "whoami":
        newHistory.push({
          type: "output",
          text: `Principal: ${portfolioData.profile.name} (@${portfolioData.profile.handle})\nRole: ${portfolioData.profile.title}\nStatus: ${portfolioData.profile.statusBadge}`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: "FLAGSHIP SYSTEMS:\n" +
            "  1. GeoAtlas       -> Geopolitical news ingestion & market prediction (Oracle ARM + Next.js)\n" +
            "  2. SPECTRA-EO     -> Multimodal SAR + Optical Foundation Vision Model (23.38M pixels)\n" +
            "  3. Saarthi        -> Verified Grounded Adaptive Multimodal AI Tutor (DAG + BKT)\n" +
            "  4. ManipuriGPT    -> 135M Parameter Foundation Model on HuggingFace Hub\n" +
            "  5. HAFT           -> Adversarial Robustness Benchmark (NAACL '25 Submission)",
        });
        break;

      case "research":
        newHistory.push({
          type: "output",
          text: "PUBLICATIONS & PREPRINTS:\n  • HAFT: NAACL '25 empirical adversarial robustness manuscript (90.91% predictor acc)\n  • ManipuriGPT: 135M parameter open foundation model for low-resource NLP",
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `Direct Email: ${portfolioData.profile.email}\nGitHub: ${portfolioData.profile.socials.github}\nLinkedIn: ${portfolioData.profile.socials.linkedin}`,
        });
        break;

      case "sudo hire":
      case "hire":
        newHistory.push({
          type: "output",
          text: `Opening contact channel... Redirecting to ${portfolioData.profile.email}`,
        });
        if (typeof window !== "undefined") {
          window.location.href = `mailto:${portfolioData.profile.email}?subject=Role%20Inquiry%20from%20Portfolio%20Terminal`;
        }
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `Command not found: '${cmdText}'. Type 'help' for valid instructions.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
    setTimeout(scrollToBottom, 20);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section id="terminal" className="universe-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="universe-container">
        {/* Header */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span className="status-dot"></span>
              CLI REPL / INTERACTIVE ORCHESTRATION
            </div>
            <h2 className="section-title">
              <UnscrambleText text="developer.terminal()" />
            </h2>
          </div>
          <p className="section-desc">
            Type commands or trigger quick instruction chips to query real-time stack architecture and background.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px", alignItems: "flex-start" }}>
          {/* Terminal Box */}
          <div>
            <div className="has-crosshair has-crosshair-right" style={{ borderRadius: "10px", background: "var(--bg-secondary)", border: "1px solid var(--border-primary)", boxShadow: "var(--shadow-subtle)", overflow: "hidden", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
              {/* Header Bar */}
              <div style={{ padding: "12px 16px", background: "var(--bg-tertiary)", borderBottom: "1px solid var(--border-primary)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56", display: "inline-block" }}></span>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }}></span>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f", display: "inline-block" }}></span>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", marginLeft: "8px" }}>
                    rudrax@portfolio: ~ (zsh)
                  </span>
                </div>
                <div style={{ fontSize: "10px", color: "var(--accent-green-bright)", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>● REPL READY</span>
                </div>
              </div>

              {/* Output Area */}
              <div
                ref={terminalBodyRef}
                style={{ padding: "18px", height: "300px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", background: "rgba(0,0,0,0.3)" }}
              >
                {history.map((line, i) => (
                  <div key={i} style={{ lineHeight: 1.5 }}>
                    {line.type === "input" && (
                      <span style={{ color: "var(--accent-green-bright)", fontWeight: 700 }}>
                        {line.text}
                      </span>
                    )}
                    {line.type === "system" && (
                      <span style={{ color: "var(--text-muted)" }}>
                        {line.text}
                      </span>
                    )}
                    {line.type === "output" && (
                      <pre style={{ margin: 0, fontFamily: "var(--font-mono)", color: "var(--text-primary)", whiteSpace: "pre-wrap" }}>
                        {line.text}
                      </pre>
                    )}
                    {line.type === "error" && (
                      <span style={{ color: "#f87171", fontWeight: 600 }}>
                        {line.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleSubmit}
                style={{ padding: "12px 16px", background: "var(--bg-tertiary)", borderTop: "1px solid var(--border-primary)", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ color: "var(--accent-green-bright)", fontWeight: 700 }}>$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help', 'skills', 'projects', 'contact'..."
                  style={{ flex: 1, background: "transparent", border: "none", color: "var(--text-primary)", fontFamily: "var(--font-mono)", fontSize: "12px", outline: "none" }}
                />
                <button
                  type="submit"
                  aria-label="Submit command"
                  style={{ padding: "4px 8px", borderRadius: "4px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}
                >
                  <CornerDownLeft size={14} />
                </button>
              </form>
            </div>

            {/* Quick Command Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginTop: "16px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--text-muted)" }}>Shortcuts:</span>
              {["skills", "projects", "whoami", "research", "contact", "sudo hire"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  style={{ padding: "4px 10px", borderRadius: "4px", background: "var(--bg-secondary)", border: "1px solid var(--border-primary)", color: "var(--text-primary)", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: "11px", transition: "all 0.15s ease" }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Right Skills Matrix */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h3 style={{ fontSize: "11px", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.05em", margin: "0 0 4px 0" }}>
              Verified Technical Competencies
            </h3>
            {portfolioData.skillsMatrix.map((matrix) => (
              <div
                key={matrix.category}
                style={{ padding: "16px", borderRadius: "8px", background: "var(--bg-secondary)", border: "1px solid var(--border-primary)" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <h4 style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                    {matrix.category}
                  </h4>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-green-bright)" }}>
                    {matrix.slug}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {matrix.skills.map((skill) => (
                    <span key={skill} className="tech-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
