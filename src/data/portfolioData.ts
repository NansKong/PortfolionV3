export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "research" | "production" | "agentic" | "creative";
  categoryLabel: string;
  badge: string;
  tagline: string;
  description: string;
  architectureHighlights: string[];
  tech: string[];
  github: string;
  demo?: string;
  livePreview?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  orgUrl?: string;
  track: string;
  description: string;
  deliverables: string[];
  tech: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  details?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  verifyUrl: string;
  skills: string[];
}

export const portfolioData = {
  profile: {
    name: "Rudrax Kongbrailatpam",
    handle: "NansKong",
    title: "AI/ML Engineer · Full-Stack Developer · Automation Architect",
    statusBadge: "Available for AI Research & Full-Stack Roles",
    location: "Punjab / Manipur, India",
    email: "krudrax16@gmail.com",
    resumeUrl: "https://drive.google.com/file/d/1ec5AAaENdN1BaUuiScZk7T6HSJEO4rMf/view?usp=sharing",
    socials: {
      github: "https://github.com/NansKong",
      linkedin: "https://www.linkedin.com/in/rudrax-kongbrailatpam/",
      huggingface: "https://huggingface.co/nanskong",
      medium: "https://medium.com/@krudrax16",
    },
    tagline: "AI & Python Developer building intelligent, scalable systems — from ML models to production-ready APIs. I turn complex data into reliable, explainable solutions that drive real-world impact.",
    heroStatement: "Architecting foundation vision models, multimodal AI tutors, and production cloud infrastructure.",
    bioShort: "AI & Full-Stack Developer engineering end-to-end intelligent systems — from pretraining 135M language models to sub-second geospatial pipelines and resilient cloud architectures.",
    bioLong: `I'm an AI/ML Engineer who builds intelligent systems — not just models in notebooks. I work across the full stack of machine learning: empirical research, system architecture, data engineering, model training, and production deployment.

My work spans multiple domains — from pretraining open-source foundational language models for low-resource languages (ManipuriGPT) to multimodal Earth Observation foundation models (SPECTRA-EO), verified grounded AI tutoring systems (Saarthi), and real-time geospatial intelligence pipelines (GeoAtlas).

I approach problems with a research-first mindset: dissecting papers, running rigorous empirical benchmarks, and engineering production APIs and automation layers so models run reliably in high-throughput environments.`,
  },

  stats: [
    { label: "Active Repositories", value: "36+" },
    { label: "NAACL Submission", value: "HAFT '25" },
    { label: "Foundation Model", value: "135M Params" },
    { label: "Benchmark Pixels", value: "23.38M EO" },
    { label: "Pipeline Records", value: "1,024 Cases" },
  ],

  projects: [
    {
      id: "bharatai", title: "BharatAI — Academic Opportunity Platform", slug: "bharat.opportunities()",
      category: "production", categoryLabel: "AI & Education", badge: "OPEN SOURCE",
      tagline: "An AI-powered platform connecting students with academic opportunities.",
      description: "BharatAI aggregates academic opportunities and helps students discover relevant internships, scholarships, hackathons and research programs.",
      architectureHighlights: ["Opportunity ingestion and deduplication", "AI classification and semantic search for personalized discovery", "Application tracking and InCoScore merit scoring"],
      tech: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "Celery", "FAISS"],
      github: "https://github.com/NansKong/BharatAI", featured: true
    },
    {
      id: "geoatlas",
      title: "GeoAtlas — Geopolitical Intelligence Engine",
      slug: "geoatlas.engine()",
      category: "production",
      categoryLabel: "Production Cloud System",
      badge: "LIVE ON VERCEL & ORACLE CLOUD",
      tagline: "Real-time geopolitical intelligence, news ingestion, and market impact prediction platform.",
      description: "A production geospatial intelligence platform continuously ingesting global news, extracting macroeconomic and geopolitical signals with calibrated NLP pipelines, and mapping them to financial assets via an interactive Knowledge Graph.",
      architectureHighlights: [
        "Celery worker & beat news ingestion pipeline with Upstash/Redis AOF persistence",
        "FastAPI backend with automated Caddy SSL reverse proxy on Oracle Cloud ARM VM",
        "MapLibre GL dynamic map projection with live macroeconomic asset correlation",
        "On-VM PostgreSQL 17 container with automated 30-day telemetry retention cleanup",
        "Market snapshot circuit breakers preventing financial API exhaustion"
      ],
      tech: ["Next.js 14", "FastAPI", "Celery", "Redis", "PostgreSQL 17", "Oracle Cloud", "MapLibre GL", "Docker"],
      github: "https://github.com/NansKong/GeoAtlas",
      demo: "https://geoatlas-live.vercel.app",
      livePreview: "https://geoatlas-live.vercel.app",
      featured: true,
      metrics: [
        { label: "Deployment", value: "Oracle ARM VM" },
        { label: "Ingestion", value: "Celery Beat" },
        { label: "Frontend", value: "Next.js 14" },
      ]
    },
    {
      id: "spectra-eo",
      title: "SPECTRA-EO — Foundation Vision Model for Earth Observation",
      slug: "spectra.multimodal()",
      category: "research",
      categoryLabel: "Foundation AI & CV",
      badge: "RESEARCH BENCHMARK",
      tagline: "Multimodal SAR + Optical fusion foundation model for rapid environmental disaster intelligence.",
      description: "Multimodal Earth Observation foundation vision model combining Sentinel-1 SAR C-band with Sentinel-2 MSI optical 6-band imagery using bidirectional cross-attention, cloud-adaptive gating, and progressive transpose-conv decoders.",
      architectureHighlights: [
        "Bidirectional cross-attention fusing SAR penetrating signals with optical multispectral data",
        "Cloud-adaptive gating mechanism to dynamically handle cloud occlusion",
        "Soft Jaccard / Dice loss with class imbalance weighting ([0.5566, 4.9183])",
        "Rigorous 23.38M pixel benchmark evaluation across diverse flood and terrain topologies",
        "Zero-shot out-of-distribution transfer validated on Bolivia disaster scenarios"
      ],
      tech: ["PyTorch", "Sentinel-1 SAR", "Sentinel-2 MSI", "Cross-Attention", "Computer Vision", "Streamlit", "GDAL"],
      github: "https://github.com/NansKong/SPECTRA-EO-SAR-Penetrating-Earth-Cross-Transformer-for-Rapid-Assessment-in-Earth-Observation",
      featured: true,
      metrics: [
        { label: "Benchmark Pixels", value: "23.38M" },
        { label: "Modality", value: "SAR + Optical" },
        { label: "Transfer", value: "Bolivia OOD" },
      ]
    },
    {
      id: "saarthi",
      title: "Saarthi — Grounded Adaptive Multimodal Tutor",
      slug: "saarthi.adaptive_tutor()",
      category: "production",
      categoryLabel: "Verified AI & EdTech",
      badge: "VERIFIED ZERO-HALLUCINATION",
      tagline: "Pedagogically structured multimodal AI tutor with prerequisite DAGs and Bayesian Knowledge Tracing.",
      description: "An AI study companion that ingests multimodal course materials (slides, textbooks, lecture audio), generates independently-verified assessment items, and personalizes the student's learning journey using Bayesian Knowledge Tracing with automated diagnostic backward-walks.",
      architectureHighlights: [
        "Multimodal ingestion pipeline processing PDF textbooks, PPTX slides, and Whisper audio transcripts",
        "NetworkX Directed Acyclic Graph (DAG) mining concept dependencies to enforce prerequisites",
        "Dual-LLM + SymPy mathematical verification pipeline guaranteeing zero hallucinated answers",
        "Bayesian Knowledge Tracing (BKT) maintaining dynamic mastery probability P(Lt)",
        "Pedagogical backward-walk engine identifying and remediating root misconceptions"
      ],
      tech: ["FastAPI", "Next.js", "Python", "Qdrant", "BM25", "BKT", "SymPy", "Whisper", "NetworkX"],
      github: "https://github.com/NansKong/Saarthi-A-Verified-Grounded-Adaptive-Tutor",
      featured: true,
      metrics: [
        { label: "Architecture", value: "4-Pod Verified" },
        { label: "Retrieval", value: "Hybrid Dense + BM25" },
        { label: "Learner Model", value: "Bayesian KT" },
      ]
    },
    {
      id: "haft",
      title: "HAFT — Adversarial Robustness for Hindi Fact-Checking",
      slug: "haft.adversarial_eval()",
      category: "research",
      categoryLabel: "Empirical NLP Research",
      badge: "NAACL MANUSCRIPT SUBMISSION",
      tagline: "Empirical benchmark and calibrated feasibility predictor for Devanagari Hindi automated fact-checking.",
      description: "A comprehensive empirical adversarial attack benchmark (1,120 claims, 22 attack strategies, 18,304 clean-verified evaluations) with a Leave-One-Out calibrated feasibility predictor achieving 90.91% accuracy for Devanagari Hindi automated fact-checking.",
      architectureHighlights: [
        "Curated 1,120 claim benchmark across 22 adversarial perturbation vectors",
        "Leave-One-Out calibrated feasibility predictor with 90.91% accuracy and 8.1 exemplars",
        "Fine-tuned IndicBERTv2 across 2,801 pairs yielding 95.81% clean test accuracy",
        "Transfer audits on Meta Llama 3 70B (966 completions, 96.33% evidence poisoning)",
        "Coverage-aware auditing policy discovering 83.71% vulnerabilities over standard baselines"
      ],
      tech: ["Python", "PyTorch", "Transformers", "IndicBERTv2", "mDeBERTa-v3", "Llama 3 70B", "Adversarial ML"],
      github: "https://github.com/NansKong/HAFT-Adversarial-Robustness-Benchmarking-for-Hindi-Fact-Checking-with-Adaptive-Attack-Selection-",
      featured: true,
      metrics: [
        { label: "Claims Audited", value: "1,120" },
        { label: "Evaluations", value: "18,304" },
        { label: "Predictor Acc", value: "90.91%" },
      ]
    },
    {
      id: "manipurigpt",
      title: "ManipuriGPT — Low-Resource Foundation Language Model",
      slug: "manipurigpt.pretrain()",
      category: "research",
      categoryLabel: "Foundation Language Model",
      badge: "HUGGINGFACE MODEL HUB",
      tagline: "135M-parameter GPT foundation model trained from scratch for low-resource Manipuri (Meitei).",
      description: "A research-grade open foundation language model for Manipuri (Meitei). Trained a 135M-parameter GPT-style transformer from scratch with an engineered corpus of 147k sequences, a 32K-vocabulary tokenizer with 91% utilization, and an SFT instruction-tuning pipeline of 30k ChatML records.",
      architectureHighlights: [
        "135M parameter transformer architecture custom-engineered for morphologically rich agglutinative syntax",
        "32K vocabulary BPE tokenizer achieving 91% vocabulary utilization",
        "Multi-stage training: unsupervised pretraining on 147k sequences followed by 30k ChatML SFT",
        "Open-source release with full model weights, tokenizer configs, and demo on HuggingFace"
      ],
      tech: ["PyTorch", "Transformers", "HuggingFace", "Python", "BPE Tokenization", "SFT", "CUDA"],
      github: "https://github.com/NansKong/ManipuriGPT-Foundational-Language-",
      demo: "https://huggingface.co/nanskong",
      featured: true,
      metrics: [
        { label: "Parameters", value: "135 Million" },
        { label: "Vocab Size", value: "32,000" },
        { label: "Platform", value: "HuggingFace" },
      ]
    },
    {
      id: "khromaderm",
      title: "KhromaDerm Clinic — Aesthetic Medical Operations System",
      slug: "khromaderm.enterprise()",
      category: "production",
      categoryLabel: "Enterprise Production App",
      badge: "LIVE AT KHROMADERMCLINIC.COM",
      tagline: "High-performance Next.js 16 clinical booking engine with Upstash Redis and Resend email pipelines.",
      description: "Full-stack medical clinic platform for KhromaDerm Clinic. Features Upstash Redis dual-storage architecture with fallback JSON persistence, transactional Resend email engine with automated luxury booking confirmations, 1-click Google Calendar & .ics sync, EHR patient tracking, and MedicalClinic Schema.org JSON-LD.",
      architectureHighlights: [
        "Next.js 16 App Router on Vercel with zero client-side waterfall delays",
        "Upstash Redis dual-storage architecture with JSON file fallback resilience",
        "Transactional Resend email engine with 1-click Google Calendar & Apple/Outlook .ics sync",
        "Visually lossless asset optimization (2400px Retina MozJPEG 97% bandwidth drop)",
        "EHR patient records and comprehensive admin operations suite"
      ],
      tech: ["Next.js 16", "React 19", "TypeScript", "Upstash Redis", "Resend API", "Schema.org", "Vercel"],
      github: "https://github.com/NansKong",
      demo: "https://www.khromadermclinic.com",
      livePreview: "https://www.khromadermclinic.com",
      featured: false,
      metrics: [
        { label: "Bandwidth Drop", value: "-97%" },
        { label: "Stack", value: "Next.js 16 App Router" },
        { label: "Storage", value: "Upstash Redis" },
      ]
    },
    {
      id: "research-desk",
      title: "Research Desk — Autonomous Financial Agent",
      slug: "agent.market_research()",
      category: "agentic",
      categoryLabel: "Agentic AI & LLMs",
      badge: "AGENTIC WORKFLOW",
      tagline: "Autonomous equity analyst utilizing LangChain and LangGraph for real-time institutional memos.",
      description: "An autonomous financial research agent utilizing LangChain, LangGraph, and financial market tools to evaluate equities, synthesize earnings transcripts, and generate institutional investment memos in real time.",
      architectureHighlights: [
        "Cyclic graph workflow with LangGraph executing parallel analyst subagents",
        "Replicate API & financial tools ingesting balance sheets and SEC filings",
        "Deterministic valuation checking and automated summary narrative drafting"
      ],
      tech: ["TypeScript", "LangChain", "LangGraph", "Replicate API", "React", "Next.js"],
      github: "https://github.com/NansKong/investment-research-agent",
      demo: "https://researchdesk-pi.vercel.app/",
      livePreview: "https://researchdesk-pi.vercel.app/",
      featured: false,
      metrics: [
        { label: "Framework", value: "LangGraph" },
        { label: "Output", value: "Analyst Memos" },
      ]
    },
    {
      id: "photobooth",
      title: "Virtual Photobooth Retro",
      slug: "webrtc.photobooth()",
      category: "creative",
      categoryLabel: "WebRTC & Creative Canvas",
      badge: "LIVE APP",
      tagline: "Interactive WebRTC camera application with live canvas shaders, sticker WYSIWYG, and photo strips.",
      description: "A retro-styled interactive virtual photobooth featuring real-time WebRTC multi-peer video streaming, custom canvas filters, dynamic sticker placement, photo strip composition, and automated download sharing.",
      architectureHighlights: [
        "WebRTC peer connections with custom Node.js signaling server on Render",
        "Canvas API retro filters, grain overlay, and drag-and-drop sticker compositor",
        "Automated photo strip assembler with printable export format"
      ],
      tech: ["Next.js 14", "WebRTC", "Canvas API", "Node.js", "Tailwind CSS"],
      github: "https://github.com/NansKong",
      demo: "https://photoboothretro.vercel.app",
      livePreview: "https://photoboothretro.vercel.app",
      featured: false,
    },
    {
      id: "phera",
      title: "Phera — Automated Pharmacovigilance Pipeline",
      slug: "phera.pipeline()",
      category: "production",
      categoryLabel: "Healthcare AI Pipeline",
      badge: "DATA PIPELINE",
      tagline: "Production-grade automated PADER reporting system for 1,024 adverse drug reaction cases.",
      description: "An automated 8-step pharmacovigilance pipeline for regulatory compliance (PADER). Ingests adverse drug reaction reports, performs deterministic analysis, generates clinical narratives via LLMs with 6-layer automated validation, and renders compliant PDFs via Jinja2.",
      architectureHighlights: [
        "8-step deterministic + LLM pipeline with 6-layer validation gating",
        "Processes 1,024 adverse drug reaction cases with strict MedDRA terminology",
        "Automated Jinja2 PDF report generator with audit trail logs"
      ],
      tech: ["Python", "LLMs", "Jinja2", "Replicate API", "YAML", "Data Pipelines"],
      github: "https://github.com/NansKong/Phera",
      featured: false,
      metrics: [
        { label: "Cases Processed", value: "1,024 ADRs" },
        { label: "Validation", value: "6 Layers" },
      ]
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      period: "2025 — Present",
      role: "AI/ML Engineer",
      organization: "Freelance & Production Deployments",
      track: "_track 01 / Production Systems",
      description: "Design and deploy end-to-end machine learning pipelines, LLM-powered tools, and agentic AI systems for enterprise automation. Architect production-ready APIs, backend services, and data engineering pipelines integrating AI models with cloud infrastructure (Oracle Cloud, Vercel, Supabase).",
      deliverables: [
        "Engineered real-time geopolitical intelligence platform (GeoAtlas) handling concurrent news and market feeds",
        "Developed automated pharmacovigilance reporting pipeline with 6-layer validation gates",
        "Built agentic financial research workflows with LangGraph and cyclic tool-calling agents"
      ],
      tech: ["Python", "FastAPI", "LangChain", "Docker", "PostgreSQL", "Redis", "Celery", "Oracle Cloud"]
    },
    {
      id: "exp-2",
      period: "2023 — Present",
      role: "AI Systems Researcher & Developer",
      organization: "Independent Research",
      track: "_track 02 / Foundation AI & NLP",
      description: "Conduct empirical research and build AI systems across low-resource NLP, foundation model pretraining, computer vision, and intelligent automation. Trained ManipuriGPT (135M params) from scratch and co-authored empirical adversarial robustness research submitted to NAACL.",
      deliverables: [
        "Co-authored NAACL submission on adversarial attack feasibility for Hindi fact-checking (HAFT)",
        "Pretrained 135M parameter transformer foundation model for Manipuri on HuggingFace",
        "Built SPECTRA-EO: multimodal SAR + optical vision foundation model evaluated on 23.38M benchmark pixels"
      ],
      tech: ["PyTorch", "Transformers", "HuggingFace", "Computer Vision", "Adversarial ML", "CUDA"]
    },
    {
      id: "exp-3",
      period: "Jun' 25 — Jul' 25",
      role: "Real World ML & AI Fellow",
      organization: "Fifth Force",
      orgUrl: "https://drive.google.com/file/d/1LK8fJ4YjczLGj0oC_SXENW2nuCXobZzO/view?usp=sharing",
      track: "_track 03 / Applied AI",
      description: "Participated in an intensive 6-week program focused on designing, training, and deploying real-world machine learning and deep learning applications from scratch.",
      deliverables: [
        "Hands-on architectural modeling and model optimization for real-world deployments",
        "Completed industry-standard evaluation benchmarks and model diagnostics"
      ],
      tech: ["Python", "Machine Learning", "Deep Learning", "Scikit-Learn", "PyTorch"]
    }
  ],

  education: [
    {
      period: "Aug' 23 — Present",
      degree: "Bachelor of Technology — Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      details: "Focusing on Deep Learning, Foundation Models, Natural Language Processing, and Distributed Systems."
    },
    {
      period: "Mar' 22 — Mar' 23",
      degree: "Higher Secondary (Intermediate) — Science",
      institution: "Herbert School",
      location: "Manipur, India",
    },
    {
      period: "Mar' 19 — Mar' 20",
      degree: "Matriculation (Secondary Education)",
      institution: "St. Joseph's Higher Secondary School",
      location: "Manipur, India",
    }
  ],

  skillsMatrix: [
    {
      category: "Foundation AI & Deep Learning",
      slug: "ai.core()",
      skills: ["PyTorch", "Transformers", "HuggingFace", "TensorFlow", "Generative AI", "LangChain", "LangGraph", "Fine-Tuning", "RLHF", "RAG Pipelines", "Computer Vision", "Multimodal Fusion"]
    },
    {
      category: "Full-Stack & Web Systems",
      slug: "web.systems()",
      skills: ["Next.js (App Router)", "React 19", "TypeScript", "JavaScript (ES6+)", "FastAPI", "Node.js", "Express.js", "Django", "Tailwind CSS", "Vanilla CSS Design Systems"]
    },
    {
      category: "Cloud, Infrastructure & DevOps",
      slug: "cloud.infra()",
      skills: ["Docker", "Oracle Cloud (ARM A1)", "Vercel", "Caddy Reverse Proxy", "Celery Task Queues", "Redis (AOF)", "Git / GitHub Actions", "Linux / Bash"]
    },
    {
      category: "Databases & Vector Search",
      slug: "db.storage()",
      skills: ["PostgreSQL 17", "Supabase", "Qdrant", "FAISS", "MongoDB", "MySQL", "Upstash Redis"]
    },
    {
      category: "Data Science & NLP Tooling",
      slug: "nlp.tooling()",
      skills: ["Pandas", "NumPy", "Scikit-Learn", "Weights & Biases", "Replicate API", "SymPy", "Whisper", "NetworkX (DAGs)", "Jinja2"]
    }
  ],

  certificates: [
    { title: "Build Generative AI", issuer: "Infosys Springboard", year: "2025", verifyUrl: "https://drive.google.com/file/d/1NwP_8cHZoLATQnAMc6RuA15eTbQpchQG/view?usp=sharing", skills: ["Generative AI"] },
    { title: "ChatGPT Made Easy", issuer: "Udemy", year: "2025", verifyUrl: "https://drive.google.com/file/d/1w8-UzLPnvHSLpGykAztcIP9PjiTkcbZt/view?usp=sharing", skills: ["Generative AI"] },
    { title: "ChatGPT4 Prompt Engineering", issuer: "Infosys Springboard", year: "2025", verifyUrl: "https://drive.google.com/file/d/1_nFJuC8NilBwrkrtuorRpNdarb-P3rKF/view?usp=sharing", skills: ["Prompt Engineering"] },
    { title: "Computational Theory Language Principle & Finite Automata Theory", issuer: "Infosys Springboard", year: "2025", verifyUrl: "https://drive.google.com/file/d/1mCnxo2fqElJKRJq_PAPU_MDcTn6655Os/view?usp=sharing", skills: ["Computer Science"] },
    { title: "Master Generative AI & Generative AI tools", issuer: "Infosys Springboard", year: "2025", verifyUrl: "https://drive.google.com/file/d/19ODvBvhaukFD2YCnCM00dxJpZn_T8kFm/view?usp=sharing", skills: ["Generative AI"] },
    { title: "TCP/IP and Advanced Topics", issuer: "University of Colorado", year: "2024", verifyUrl: "https://drive.google.com/file/d/1SNHzKXLgEZtLw7oFX1o9RF1Yvlq5VrX-/view?usp=sharing", skills: ["Networking"] },
    { title: "Peer-to-Peer Protocols and Local Area Networks", issuer: "University of Colorado", year: "2024", verifyUrl: "https://drive.google.com/file/d/1oD3YPTqZ0GeV6jae5do_KUYig7yPVEY5/view?usp=sharing", skills: ["Networking"] },
    { title: "The Bits and Bytes of Computer Networking", issuer: "Google / Coursera", year: "2024", verifyUrl: "https://drive.google.com/file/d/1Y34WrxStHHGjD1IZRYkzTFHdbxg0nmVG/view?usp=sharing", skills: ["Networking"] },
    { title: "Fundamentals of Network Communication", issuer: "University of Colorado", year: "2024", verifyUrl: "https://drive.google.com/file/d/1iGb6g8tf7_P3wgtaJc8FK1Ftl83AcPjX/view?usp=sharing", skills: ["Networking"] },
    { title: "Project Management Course", issuer: "Udemy", year: "2024", verifyUrl: "https://drive.google.com/file/d/1s39tzkWP5W2Hn4fubu4_7YJtKCtwASmx/view?usp=sharing", skills: ["Project Management"] },
    {
      title: "Real World Machine Learning & AI: Scratch to Impact",
      issuer: "Fifth Force",
      year: "2025",
      verifyUrl: "https://drive.google.com/file/d/1LK8fJ4YjczLGj0oC_SXENW2nuCXobZzO/view?usp=sharing",
      skills: ["Machine Learning", "AI", "Deep Learning", "Pipelines"]
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard / Coursera",
      year: "2024",
      verifyUrl: "https://drive.google.com/file/d/1wc_H8SzhZm6GLcUiV3m4IZUo2GdhxD_F/view?usp=sharing",
      skills: ["AI Foundations", "Machine Learning Algorithms"]
    },
    {
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard / Coursera",
      year: "2024",
      verifyUrl: "https://drive.google.com/file/d/1PsKkbPR5p5XeeaDoMxThoDkjk9wS0yM4/view?usp=sharing",
      skills: ["Data Science", "Python Analytics", "Statistics"]
    },
    {
      title: "Introduction to Natural Language Processing",
      issuer: "Infosys Springboard / Coursera",
      year: "2024",
      verifyUrl: "https://drive.google.com/file/d/1zZvx3TRIGQ_88zEn24gOuSFiyrH5kq8U/view?usp=sharing",
      skills: ["NLP", "Tokenization", "Text Classification"]
    }
  ]
};
