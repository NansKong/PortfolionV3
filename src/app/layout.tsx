import type { Metadata, Viewport } from "next";
import "./globals.css";
import MouseTrail from "@/components/MouseTrail";

export const metadata: Metadata = {
  title: "Rudrax Kongbrailatpam — AI/ML Engineer & Systems Architect",
  description:
    "Official portfolio of Rudrax Kongbrailatpam (NansKong) — AI/ML Engineer building foundation models, multimodal AI systems, and cloud infrastructure.",
  keywords: [
    "Rudrax Kongbrailatpam",
    "NansKong",
    "AI/ML Engineer",
    "Machine Learning",
    "Foundation Models",
    "ManipuriGPT",
    "GeoAtlas",
    "SPECTRA-EO",
    "Saarthi",
    "Full-Stack Developer",
    "PyTorch",
    "Next.js"
  ],
  authors: [{ name: "Rudrax Kongbrailatpam", url: "https://github.com/NansKong" }],
  openGraph: {
    title: "Rudrax Kongbrailatpam — AI/ML Engineer & Systems Architect",
    description: "Where models become production infrastructure. Explore foundation models, empirical research, and real-time platforms.",
    url: "https://github.com/NansKong",
    siteName: "Rudrax Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudrax Kongbrailatpam — AI/ML Engineer & Systems Architect",
    description: "Where models become production infrastructure.",
  },
};

export const viewport: Viewport = {
  themeColor: "#e9edec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className="antialiased min-h-screen selection:bg-[#2ea043] selection:text-white">
        <script dangerouslySetInnerHTML={{ __html: `try { document.documentElement.dataset.theme = localStorage.getItem('universe-theme') === 'dark' ? 'dark' : 'light'; } catch (_) {}` }} />
        <MouseTrail />
        {children}
      </body>
    </html>
  );
}
