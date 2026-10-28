"use client";

import React, { useState, useEffect } from "react";
import UnscrambleText from "./UnscrambleText";
import { ArrowUpRight, Moon, Sun, Terminal, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try { localStorage.setItem("universe-theme", nextTheme); } catch { /* Theme still applies for this visit. */ }
  };

  const navItems = [
    { label: "Systems", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Terminal", href: "#terminal" },
    { label: "Pass '26", href: "#pass" },
  ];

  return (
    <header className="universe-navbar">
      <div className="universe-container">
        <div className="navbar-inner">
          {/* Logo Brand */}
          <a href="#" className="navbar-brand">
            <div className="navbar-logo-box">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="navbar-brand-text">
              <span className="navbar-brand-sub">
                <span className="status-dot"></span>
                AI / ENGINEERING
              </span>
              <span className="navbar-brand-title">
                RUDRAX<span style={{ color: "var(--accent-green-bright)" }}>.DEV</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="navbar-nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="navbar-link">
                <UnscrambleText text={item.label} />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="navbar-actions">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="navbar-icon-btn"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a
              href="#terminal"
              aria-label="Open Terminal"
              className="navbar-icon-btn"
              style={{ display: "inline-flex" }}
            >
              <Terminal size={17} />
            </a>

            <a
              href={`mailto:${portfolioData.profile.email}?subject=Collaboration%20Query`}
              className="universe-button universe-button-primary"
            >
              <span>Connect</span>
              <ArrowUpRight size={14} className="arrow-slide" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="navbar-icon-btn navbar-menu-toggle"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav id="mobile-navigation" className="navbar-mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
