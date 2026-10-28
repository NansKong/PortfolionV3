"use client";

import React from "react";
import UnscrambleText from "./UnscrambleText";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ResearchSpotlight() {
  return (
    <section id="research" className="universe-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="universe-container">
        {/* Header */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow" style={{ color: "var(--accent-purple-bright)" }}>
              <span className="status-dot" style={{ backgroundColor: "var(--accent-purple-bright)" }}></span>
              PEER-REVIEWED & FOUNDATION RESEARCH
            </div>
            <h2 className="section-title">
              <UnscrambleText text="research.foundation_models()" />
            </h2>
          </div>
          <p className="section-desc">
            Rigorous empirical benchmarks, pretraining low-resource LLMs from scratch, and adversarial robustness audits.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          {/* Card 1: HAFT NAACL Submission */}
          <div className="has-crosshair has-crosshair-right" style={{ borderRadius: "12px", background: "var(--bg-secondary)", border: "1px solid var(--border-primary)", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ padding: "4px 10px", borderRadius: "4px", fontSize: "10px", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.05em", background: "var(--accent-purple-glow)", color: "var(--accent-purple-bright)", border: "1px solid rgba(137, 87, 229, 0.3)" }}>
                  NAACL '25 RESEARCH MANUSCRIPT
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>_paper 01</span>
              </div>

              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", margin: 0 }}>
                <UnscrambleText text="HAFT — Adversarial Robustness for Hindi Fact-Checking" />
              </h3>

              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
                An empirical benchmark dataset (1,120 claims, 22 attack strategies, 18,304 clean-verified evaluations) and Leave-One-Out calibrated feasibility predictor for Devanagari Hindi automated fact-checking, submitted to NAACL.
              </p>

              {/* Research Metrics Matrix */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", paddingTop: "8px" }}>
                <div style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 900, color: "var(--text-primary)" }}>90.91%</div>
                  <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Predictor Acc</div>
                </div>
                <div style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 900, color: "var(--accent-purple-bright)" }}>1,120</div>
                  <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Claims Audited</div>
                </div>
                <div style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 900, color: "var(--text-primary)" }}>18,304</div>
                  <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Evaluations</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px", fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={13} style={{ color: "var(--accent-purple-bright)" }} />
                  <span>Fine-tuned IndicBERTv2 across 2,801 pairs (95.81% accuracy)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={13} style={{ color: "var(--accent-purple-bright)" }} />
                  <span>Meta Llama 3 70B transfer audits (96.33% poisoning ASR)</span>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: "20px", borderTop: "1px solid var(--border-muted)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>NLP / Adversarial ML</span>
              <a
                href="https://github.com/NansKong/HAFT-Adversarial-Robustness-Benchmarking-for-Hindi-Fact-Checking-with-Adaptive-Attack-Selection-"
                target="_blank"
                rel="noopener noreferrer"
                className="universe-button universe-button-secondary"
              >
                <span>Read Benchmark</span>
                <ArrowUpRight size={13} className="arrow-slide" />
              </a>
            </div>
          </div>

          {/* Card 2: ManipuriGPT Foundation Model */}
          <div className="has-crosshair has-crosshair-right" style={{ borderRadius: "12px", background: "var(--bg-secondary)", border: "1px solid var(--border-primary)", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ padding: "4px 10px", borderRadius: "4px", fontSize: "10px", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.05em", background: "var(--badge-bg)", color: "var(--badge-text)", border: "1px solid var(--badge-border)" }}>
                  FOUNDATION MODEL PRETRAIN
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>_model 02</span>
              </div>

              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", margin: 0 }}>
                <UnscrambleText text="ManipuriGPT — 135M Parameter Language Model" />
              </h3>

              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
                A research-grade open foundation language model for Manipuri (Meitei), an agglutinative low-resource language. Pretrained a 135M-parameter GPT transformer from scratch with an engineered corpus of 147k sequences and 32K-vocabulary tokenizer.
              </p>

              {/* Model Specs Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", paddingTop: "8px" }}>
                <div style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 900, color: "var(--text-primary)" }}>135M</div>
                  <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Parameters</div>
                </div>
                <div style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 900, color: "var(--accent-green-bright)" }}>32,000</div>
                  <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Vocab BPE</div>
                </div>
                <div style={{ padding: "12px", borderRadius: "8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-muted)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 900, color: "var(--text-primary)" }}>30,000</div>
                  <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>SFT ChatML</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px", fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={13} style={{ color: "var(--accent-green-bright)" }} />
                  <span>32K tokenizer engineered for Meitei Mayek & Bengali script</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={13} style={{ color: "var(--accent-green-bright)" }} />
                  <span>Full model weights and inference pipelines on HuggingFace Hub</span>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: "20px", borderTop: "1px solid var(--border-muted)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>HuggingFace Model Hub</span>
              <a
                href="https://github.com/NansKong/ManipuriGPT-Foundational-Language-"
                target="_blank"
                rel="noopener noreferrer"
                className="universe-button universe-button-primary"
              >
                <span>Inspect Model Weights</span>
                <ArrowUpRight size={13} className="arrow-slide" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
