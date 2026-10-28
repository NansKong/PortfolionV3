"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, FileText, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, HuggingFaceIcon } from "./Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer id="connect" style={{ padding: "80px 0 40px 0", backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-primary)" }}>
      <div className="universe-container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", paddingBottom: "64px", borderBottom: "1px solid var(--border-primary)" }}>
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-green-bright)", textTransform: "uppercase", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="status-dot"></span>
              ENDPOINTS & SESSIONS / GET IN TOUCH
            </div>

            <h2 style={{ fontSize: "32px", fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em", margin: 0, lineHeight: 1.15 }}>
              Ready to engineer intelligent systems?
            </h2>

            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: "540px", margin: 0 }}>
              Whether you are building foundation models, architecting multimodal pipelines, or scaling real-time microservices — let's build systems that make a lasting impact.
            </p>

            {/* Email Copy Box */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", paddingTop: "8px" }}>
              <button
                onClick={handleCopyEmail}
                className="universe-button universe-button-secondary"
              >
                {copied ? <Check size={15} style={{ color: "var(--accent-green-bright)" }} /> : <Copy size={15} />}
                <span style={{ fontFamily: "var(--font-mono)" }}>{profile.email}</span>
                <span style={{ fontSize: "10px", color: "var(--accent-green-bright)", marginLeft: "4px" }}>
                  {copied ? "(Copied!)" : "(Click to copy)"}
                </span>
              </button>

              <a
                href={`mailto:${profile.email}?subject=New%20Opportunity%20/%20Project`}
                className="universe-button universe-button-primary"
              >
                <Mail size={15} />
                <span>Open Mailer</span>
                <ArrowUpRight size={14} className="arrow-slide" />
              </a>
            </div>
          </div>

          {/* Right Column: Social Links Matrix */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px" }}>
            <div>
              <h3 style={{ fontSize: "11px", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.05em", margin: "0 0 16px 0" }}>
                Verified Profiles & Repositories
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none", color: "inherit", transition: "border-color 0.15s ease" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-primary)" }}>
                    <GitHubIcon size={16} />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
                </a>

                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none", color: "inherit", transition: "border-color 0.15s ease" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-primary)" }}>
                    <LinkedInIcon size={16} />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
                </a>

                <a
                  href={profile.socials.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none", color: "inherit", transition: "border-color 0.15s ease" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-primary)" }}>
                    <HuggingFaceIcon size={16} />
                    <span>HuggingFace</span>
                  </div>
                  <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
                </a>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none", color: "inherit", transition: "border-color 0.15s ease" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-primary)" }}>
                    <FileText size={16} />
                    <span>Resume</span>
                  </div>
                  <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
                </a>
              </div>
            </div>

            {/* System Status Ping */}
            <div style={{ padding: "12px 16px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-secondary)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="status-dot"></span>
                <span>SYSTEM STATUS</span>
              </span>
              <span style={{ color: "var(--accent-green-bright)", fontWeight: 700 }}>
                ALL 36+ PIPELINES OPERATIONAL
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div style={{ paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
          <div>
            © 2026 {profile.name} (NansKong).
          </div>
          <div>
            <a href="#hero" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
              ↑ Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
