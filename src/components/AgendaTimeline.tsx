"use client";

import React, { useState } from "react";
import UnscrambleText from "./UnscrambleText";
import { ChevronDown, Award, ExternalLink, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function AgendaTimeline() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certificates">("experience");
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="universe-section" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="universe-container">
        {/* Header */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span className="status-dot"></span>
              TIMETABLE / TIMELINE ARCHITECTURE
            </div>
            <h2 className="section-title">
              <UnscrambleText text="developer.agenda()" />
            </h2>
          </div>

          {/* Tab Selector Buttons */}
          <div style={{ display: "flex", gap: "8px", background: "var(--bg-tertiary)", padding: "4px", borderRadius: "8px", border: "1px solid var(--border-primary)", marginTop: "16px" }}>
            {(["experience", "education", "certificates"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  background: activeTab === tab ? "var(--text-primary)" : "transparent",
                  color: activeTab === tab ? "var(--bg-primary)" : "var(--text-secondary)",
                  textTransform: "capitalize",
                  transition: "all 0.15s ease",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Experience */}
        {activeTab === "experience" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {portfolioData.experience.map((exp) => {
              const isOpen = expandedId === exp.id;
              return (
                <div
                  key={exp.id}
                  className="has-crosshair has-crosshair-right"
                  style={{ borderRadius: "8px", background: "var(--bg-primary)", border: "1px solid var(--border-primary)", overflow: "hidden" }}
                >
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    style={{ padding: "24px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent-green-bright)", fontWeight: 700 }}>
                          {exp.track}
                        </span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>
                          {exp.period}
                        </span>
                      </div>
                      <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                        {exp.role} <span style={{ color: "var(--text-muted)" }}>·</span> <span style={{ color: "var(--text-secondary)" }}>{exp.organization}</span>
                      </h3>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <button
                        style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--bg-tertiary)", border: "1px solid var(--border-primary)", color: "var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ padding: "0 24px 24px 24px", borderTop: "1px solid var(--border-muted)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
                        {exp.description}
                      </p>

                      <div>
                        <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                          Key Deliverables:
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
                          {exp.deliverables.map((del, i) => (
                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                              <span style={{ color: "var(--accent-green-bright)" }}>✔</span>
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "8px" }}>
                        {exp.tech.map((t) => (
                          <span key={t} className="tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === "education" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {portfolioData.education.map((edu, i) => (
              <div
                key={i}
                className="has-crosshair has-crosshair-right"
                style={{ borderRadius: "8px", background: "var(--bg-primary)", border: "1px solid var(--border-primary)", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px" }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent-green-bright)", display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                    <GraduationCap size={15} />
                    {edu.period}
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 4px 0" }}>
                    {edu.degree}
                  </h3>
                  <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                    {edu.institution}
                  </div>
                  {edu.details && (
                    <p style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginTop: "12px" }}>
                      {edu.details}
                    </p>
                  )}
                </div>
                <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>
                  {edu.location}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Certificates */}
        {activeTab === "certificates" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {portfolioData.certificates.map((cert, i) => (
              <div
                key={i}
                className="has-crosshair has-crosshair-right"
                style={{ borderRadius: "8px", background: "var(--bg-primary)", border: "1px solid var(--border-primary)", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px" }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent-green-bright)", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Award size={14} />
                      {cert.year}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)" }}>
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 12px 0" }}>
                    {cert.title}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cert.skills.map((s) => (
                      <span key={s} className="tech-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-muted)", display: "flex", justifyContent: "flex-end" }}>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="universe-button universe-button-secondary"
                    style={{ fontSize: "11px", padding: "6px 12px" }}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={12} className="arrow-slide" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
