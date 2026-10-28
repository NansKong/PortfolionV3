"use client";

import React, { useState, useRef } from "react";
import UnscrambleText from "./UnscrambleText";
import { Sparkles, RefreshCw, Check, Shield, Share2 } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export default function DeveloperPass() {
  const { profile } = portfolioData;
  const [visitorName, setVisitorName] = useState("AI Architect & Engineer");
  const [ticketType, setTicketType] = useState<"VIP" | "SPEAKER" | "RESEARCHER">("SPEAKER");
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="pass" className="universe-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="universe-container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span className="status-dot"></span>
              DEVELOPER PASS / RUDRAX.DEV
            </div>
            <h2 className="section-title">
              <UnscrambleText text="developer.attendee_pass()" />
            </h2>
          </div>
          <p className="section-desc">
            Interactive holographic credential card. Customize your badge, inspect cryptographic telemetry, or flip for verified credentials.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
          {/* Controls Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ padding: "24px", borderRadius: "10px", background: "var(--bg-secondary)", border: "1px solid var(--border-primary)", display: "flex", flexDirection: "column", gap: "18px" }}>
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles size={16} style={{ color: "var(--accent-purple-bright)" }} />
                Customize Attendee Badge
              </h3>

              {/* Attendee Name Input */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Attendee Name / Title
                </label>
                <input
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  maxLength={32}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", background: "var(--bg-tertiary)", border: "1px solid var(--border-primary)", color: "var(--text-primary)", fontFamily: "var(--font-mono)", fontSize: "13px", outline: "none" }}
                  placeholder="Enter your name or role"
                />
              </div>

              {/* Badge Access Tier */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Access Tier
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                  {(["SPEAKER", "RESEARCHER", "VIP"] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setTicketType(tier)}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        cursor: "pointer",
                        border: "1px solid " + (ticketType === tier ? "var(--accent-green)" : "var(--border-primary)"),
                        background: ticketType === tier ? "var(--accent-green)" : "var(--bg-tertiary)",
                        color: ticketType === tier ? "#ffffff" : "var(--text-secondary)",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "10px", paddingTop: "12px", borderTop: "1px solid var(--border-muted)" }}>
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="universe-button universe-button-secondary"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <RefreshCw size={14} style={{ transform: isFlipped ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                  <span>{isFlipped ? "View Front" : "Flip Pass"}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="universe-button universe-button-secondary"
                  style={{ padding: "8px 14px" }}
                >
                  {copied ? <Check size={14} style={{ color: "var(--accent-green-bright)" }} /> : <Share2 size={14} />}
                  <span>{copied ? "Copied" : "Share"}</span>
                </button>
              </div>
            </div>

            {/* Pass Metadata Info */}
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Pass Authority:</span>
                <span style={{ color: "var(--text-primary)" }}>Rudrax.dev / Portfolio</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Verification Crypt:</span>
                <span style={{ color: "var(--accent-green-bright)" }}>SHA-256 / VALIDATED</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Principal:</span>
                <span style={{ color: "var(--text-primary)" }}>{profile.name}</span>
              </div>
            </div>
          </div>

          {/* 3D Ticket Container */}
          <div style={{ display: "flex", justifyContent: "center", perspective: "1000px" }}>
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                width: "100%",
                maxWidth: "400px",
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: "transform 0.15s ease-out",
                transformStyle: "preserve-3d",
              }}
            >
              {!isFlipped ? (
                /* Ticket Front */
                <div className="holo-foil" style={{ borderRadius: "16px", background: "var(--bg-secondary)", border: "2px solid var(--border-primary)", padding: "28px", boxShadow: "var(--shadow-subtle)", position: "relative", overflow: "hidden" }}>
                  {/* Top Bar */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "18px", borderBottom: "1px solid var(--border-primary)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "var(--bg-tertiary)", border: "1px solid var(--border-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
                        🐙
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: "13px", color: "var(--text-primary)" }}>
                          RUDRAX.DEV
                        </div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>
                          AI / RESEARCH / ENGINEERING
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: "4px 10px", borderRadius: "4px", background: "var(--bg-primary)", border: "1px solid var(--accent-green)", fontSize: "10px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent-green-bright)", letterSpacing: "0.05em" }}>
                      {ticketType} PASS
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: "28px 0" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Shield size={12} />
                      OFFICIAL DELEGATE
                    </div>
                    <div style={{ fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {visitorName || profile.name}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
                      Host: {profile.name} (@{profile.handle})
                    </div>
                  </div>

                  {/* Perforation Line */}
                  <div style={{ position: "relative", margin: "8px 0", borderTop: "1px dashed var(--border-primary)" }} />

                  {/* Bottom Bar: QR Code, Pass ID */}
                  <div style={{ paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase" }}>
                        Serial Identification
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "0.05em" }}>
                        RK-AI-2026
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent-cyan)", marginTop: "2px" }}>
                        PORTFOLIO / PERSONAL
                      </div>
                    </div>

                    <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="Open Rudrax's GitHub profile" style={{ display: "block", background: "#fff", borderRadius: "6px", lineHeight: 0 }}>
                      <Image src="/github-qr.svg" alt="QR code linking to Rudrax's GitHub profile" width={108} height={108} unoptimized />
                    </a>
                  </div>

                  {/* Bottom Barcode Strip */}
                  <div style={{ marginTop: "20px", paddingTop: "12px", borderTop: "1px solid var(--border-muted)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    <span>||||| |||| || |||||| ||||| |||</span>
                    <span>RUDRAX KONGBRAILATPAM</span>
                  </div>
                </div>
              ) : (
                /* Ticket Back */
                <div style={{ borderRadius: "16px", background: "var(--bg-secondary)", border: "2px solid var(--border-primary)", padding: "28px", boxShadow: "var(--shadow-subtle)", position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "1px solid var(--border-primary)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, color: "var(--text-primary)" }}>
                      VERIFIED CREDENTIALS
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent-green-bright)" }}>
                      ● ACTIVE
                    </span>
                  </div>

                  <div style={{ padding: "20px 0", display: "flex", flexDirection: "column", gap: "14px", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                    <div>
                      <span style={{ color: "var(--text-muted)", display: "block", fontSize: "10px" }}>RESEARCH TRACK</span>
                      <strong style={{ color: "var(--text-primary)" }}>NAACL '25 Submission (HAFT)</strong>
                    </div>
                    <div>
                      <span style={{ color: "var(--text-muted)", display: "block", fontSize: "10px" }}>FOUNDATION PRETRAIN</span>
                      <strong style={{ color: "var(--text-primary)" }}>ManipuriGPT (135M Parameters)</strong>
                    </div>
                    <div>
                      <span style={{ color: "var(--text-muted)", display: "block", fontSize: "10px" }}>PRODUCTION INFRA</span>
                      <strong style={{ color: "var(--text-primary)" }}>GeoAtlas (Oracle Cloud ARM + Celery)</strong>
                    </div>
                  </div>

                  <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-primary)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    <span style={{ color: "var(--text-secondary)" }}>Click Flip to return</span>
                    <span style={{ color: "var(--accent-green-bright)" }}>VALIDATED</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
