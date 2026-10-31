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
    { label: "Profile", href: "#pass" },
  ];

  return (
    <header className="universe-navbar">
      <div className="universe-container">
        <div className="navbar-inner">
          {/* Logo Brand */}
          <a href="#" className="navbar-brand">
            <div className="navbar-logo-box">
              <span aria-hidden="true" className="navbar-monogram">R</span>
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
