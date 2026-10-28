"use client";

import React, { useState } from "react";
import UnscrambleText from "./UnscrambleText";
import { ArrowUpRight, ExternalLink, ChevronRight, X } from "lucide-react";
import { GitHubIcon } from "./Icons";
import { portfolioData, Project } from "@/data/portfolioData";

export default function ProjectRiver() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Systems" },
    { id: "production", label: "Production Cloud" },
    { id: "research", label: "Foundation AI & Research" },
    { id: "agentic", label: "Agentic AI" },
    { id: "creative", label: "WebRTC & Creative" },
  ].map((category) => ({ ...category, label: `${category.label} (${category.id === "all" ? portfolioData.projects.length : portfolioData.projects.filter((project) => project.category === category.id).length})` }));

  const filteredProjects = activeCategory === "all"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="universe-section" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="universe-container">
        {/* River Header */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span className="status-dot"></span>
              RIVER ARCHITECTURE / SESSIONS & SHIPS
            </div>
            <h2 className="section-title">
              <UnscrambleText text="systems.deployed()" />
            </h2>
          </div>
          <p className="section-desc">
            Production pipelines, multimodal foundation vision models, and verified autonomous agent architectures.
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div className="category-filter-bar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`category-filter-btn ${activeCategory === c.id ? "active" : ""}`}
            >
              <UnscrambleText text={c.label} />
            </button>
          ))}
        </div>

        {/* Project River Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="river-card has-crosshair has-crosshair-right"
            >
              <div className="river-card-grid">
                {/* Left 50% */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ padding: "3px 8px", borderRadius: "4px", fontSize: "10px", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", background: "var(--badge-bg)", border: "1px solid var(--badge-border)", color: "var(--badge-text)" }}>
                      {project.badge}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>
                      _system 0{index + 1}
                    </span>
                  </div>

                  <h3 className="river-title">
                    <UnscrambleText text={project.title} />
                  </h3>

                  <p className="river-desc">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "8px" }}>
                      Key Architectural Highlights:
                    </div>
                    <ul className="river-bullets">
                      {project.architectureHighlights.slice(0, 3).map((item, i) => (
                        <li key={i}>
                          <span style={{ color: "var(--accent-green-bright)" }}>▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="river-tech-pills">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right 50% Metrics & Actions */}
                <div className="river-side-col">
                  {project.metrics && (
                    <div className="metrics-row">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="metric-pill">
                          <div className="metric-val">{m.value}</div>
                          <div className="metric-lbl">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", paddingTop: "12px" }}>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="universe-button universe-button-primary"
                      >
                        <span>Live Deployment</span>
                        <ExternalLink size={13} className="arrow-slide" />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="universe-button universe-button-secondary"
                    >
                      <GitHubIcon size={14} />
                      <span>Source Code</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--accent-green-bright)", background: "transparent", border: "none", display: "inline-flex", alignItems: "center", gap: "4px", cursor: "pointer", padding: "6px 0" }}
                    >
                      <span>Inspect Blueprint</span>
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blueprint Modal */}
        {selectedProject && (
          <div style={{ position: "fixed", inset: 0, zIndex: 110, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}>
            <div style={{ width: "100%", maxWidth: "650px", backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-primary)", borderRadius: "12px", padding: "32px", position: "relative", boxShadow: "var(--shadow-subtle)", display: "flex", flexDirection: "column", gap: "20px" }}>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                style={{ position: "absolute", top: "18px", right: "18px", width: "32px", height: "32px", borderRadius: "50%", background: "var(--bg-tertiary)", border: "1px solid var(--border-primary)", color: "var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <X size={16} />
              </button>

              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-green-bright)", fontWeight: 700 }}>
                  {selectedProject.badge}
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", margin: "4px 0" }}>
                  {selectedProject.title}
                </h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-secondary)", margin: 0 }}>
                  {selectedProject.slug}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "11px", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 10px 0" }}>
                  Full Architectural Specification
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "var(--text-secondary)" }}>
                  {selectedProject.architectureHighlights.map((hl, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ color: "var(--accent-green-bright)", fontFamily: "var(--font-mono)" }}>0{i + 1}.</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: "11px", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 10px 0" }}>
                  Complete Technology Matrix
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: "16px", borderTop: "1px solid var(--border-primary)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                  Rudrax Kongbrailatpam · Systems
                </span>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="universe-button universe-button-primary"
                >
                  <span>Open Repository</span>
                  <ArrowUpRight size={14} className="arrow-slide" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
