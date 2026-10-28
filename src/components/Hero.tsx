import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { profile } = portfolioData;
  return (
    <section id="hero" className="identity-hero">
      <div className="identity-inner">
        <div className="identity-meta"><span>AI / ML ENGINEER</span><span>RESEARCH · SYSTEMS · DEVELOPMENT</span></div>
        <h1 className="identity-name" aria-label="Rudrax Kongbrailatpam"><span className="identity-line" aria-hidden="true"><span className="identity-typed">{Array.from("RUDRAX KONGBRAILATPAM").map((character, index, letters) => <span className="identity-character" key={index} style={{ animationDelay: `${(index / letters.length) * 2.6}s` }}>{character === " " ? "\u00a0" : character}</span>)}</span></span></h1>
        <div className="identity-bottom">
          <div><span className="identity-kicker">explore-my-work/</span><p>{profile.tagline}</p></div>
          <div className="hero-system-art" aria-hidden="true">
            <div className="hero-art-orbit hero-art-orbit-one" />
            <div className="hero-art-orbit hero-art-orbit-two" />
            <div className="hero-art-orbit hero-art-orbit-three" />
            <div className="hero-art-core"><span>RK</span><small>AI / SYSTEMS</small></div>
            <div className="hero-node-path hero-node-path-one"><i className="hero-art-node hero-art-node-one" /></div>
            <div className="hero-node-path hero-node-path-two"><i className="hero-art-node hero-art-node-two" /></div>
            <div className="hero-node-path hero-node-path-three"><i className="hero-art-node hero-art-node-three" /></div>
            <span className="hero-art-label hero-art-label-top">01 / RESEARCH</span>
            <span className="hero-art-label hero-art-label-bottom">02 / DEPLOY</span>
          </div>
          <div className="identity-actions">
            <a className="universe-button universe-button-primary" href="#projects">Explore my work <ArrowUpRight size={16} /></a>
            <a className="universe-button universe-button-secondary" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">View résumé <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="identity-process" aria-label="My process: research, build, deploy">
          {[["01", "RESEARCH"], ["02", "BUILD"], ["03", "DEPLOY"]].map(([number, label]) => (
            <div className="identity-process-step" key={number}><span>{number} /</span><strong>{label}</strong><i aria-hidden="true" /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
