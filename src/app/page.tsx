import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DeveloperPass from "@/components/DeveloperPass";
import ProjectRiver from "@/components/ProjectRiver";
import ResearchSpotlight from "@/components/ResearchSpotlight";
import AgendaTimeline from "@/components/AgendaTimeline";
import SkillsTerminal from "@/components/SkillsTerminal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DeveloperPass />
        <ProjectRiver />
        <ResearchSpotlight />
        <AgendaTimeline />
        <SkillsTerminal />
      </main>
      <Footer />
    </div>
  );
}
