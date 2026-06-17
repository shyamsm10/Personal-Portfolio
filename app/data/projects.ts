import { PROJECT_DESCRIPTIONS } from "./project-descriptions";

export type Project = {
    slug: string;
    title: string;
    role: string;
    description: string;
    highlights: readonly string[];
    tech: readonly string[];
    github: string;
    live: string;
    featured: boolean;
    year: string;
    image: string;
};

type ProjectCore = Omit<Project, "description">;

const projectCoreList: readonly ProjectCore[] = [
    {
        slug: "careerpilot-ai",
        title: "CareerPilot AI",
        role: "Full-Stack AI Engineer",
        highlights: [
            "Engineered a full-stack multi-agent AI career platform with a React frontend and FastAPI backend, orchestrating 5 specialised agents (resume parsing, skill gap analysis, ATS optimisation, interview simulation, career roadmap) via LangGraph supervisor pattern.",
            "Integrated Groq-hosted LLMs (Qwen 3-32B, Llama) with dynamic YouTube API resource retrieval for personalised, real-time career coaching — demonstrating cloud-native AI integration from ideation to functional MVP.",
            "Implemented robust JSON parsing, rate-limit handling, and streaming responses; designed dark space-themed UI with animated multi-step user journey — production-grade UX meeting enterprise standards.",
        ],
        tech: ["React", "FastAPI", "LangGraph", "Groq", "Python", "RAG", "YouTube API"],
        github: "https://github.com/shyamsm10/CareerPilot-AI",
        live: "#",
        featured: true,
        year: "2025",
        image: "/images/projects/careerpilot.webp",
    },
    {
        slug: "skybook-ai-flight-booking-system",
        title: "SkyBook AI — Flight Booking System",
        role: "Full-Stack AI Engineer",
        highlights: [
            "Built an AI-powered platform embedding a conversational LLM assistant with prompt-engineered guardrails, production-ready REST APIs, and predictive fare-forecasting models retrained on historical data distributions.",
            "Constructed end-to-end data pipelines (ingestion → validation → anomaly detection) delivering recurring trend reports for stakeholders — demonstrating full ideation-to-MVP engineering execution.",
        ],
        tech: ["Flask", "Python", "REST APIs", "RAG", "Predictive ML", "LLM"],
        github: "https://github.com/shyamsm10/SKYBOOK-AI-flight-booking-system-",
        live: "#",
        featured: true,
        year: "2025",
        image: "/images/projects/flight.webp",
    },
    {
        slug: "rag-production-app",
        title: "RAG Production App",
        role: "AI/ML Engineer",
        highlights: [
            "Built a production-ready RAG system for intelligent Q&A over PDF documents, integrating PDF ingestion, semantic chunking, embedding-based retrieval, and reranking for improved accuracy.",
            "Architected an event-driven pipeline using Inngest with a FastAPI backend and Qdrant vector database (Dockerized), enabling scalable, asynchronous document processing.",
            "Delivered an interactive Streamlit UI with comprehensive Pytest test coverage across pipeline, validation, and integration layers — production-grade engineering from end to end.",
        ],
        tech: ["FastAPI", "Qdrant", "Inngest", "Streamlit", "Python", "Docker", "Pytest"],
        github: "https://github.com/shyamsm10/rag-production-app",
        live: "#",
        featured: true,
        year: "2025",
        image: "/images/projects/chatwithpdf.webp",
    },
    {
        slug: "phishing-website-detection",
        title: "Phishing Website Detection System",
        role: "ML Engineer",
        highlights: [
            "Built an intelligent full-stack web app that classifies URLs as phishing or legitimate using a trained Random Forest model with URL-based feature extraction (length, special characters, domain signals).",
            "Developed a Flask REST API backend with a lightweight HTML/CSS/JS frontend and results dashboard for real-time phishing detection.",
            "Packaged the ML pipeline with Scikit-learn, Pandas, and NumPy; serialised model artifacts for fast inference with no retraining overhead at runtime.",
        ],
        tech: ["Python", "Flask", "Scikit-learn", "Random Forest", "Pandas", "NumPy", "JavaScript"],
        github: "https://github.com/shyamsm10/Phishing-website-detetion",
        live: "#",
        featured: false,
        year: "2025",
        image: "/images/projects/phishing.webp",
    },
];

function attachDescription(core: ProjectCore): Project {
    const description = PROJECT_DESCRIPTIONS[core.slug];
    if (description === undefined) {
        throw new Error(`Missing PROJECT_DESCRIPTIONS entry for slug: ${core.slug}`);
    }
    return { ...core, description };
}

export const projects: readonly Project[] = projectCoreList.map(attachDescription);

export const getProjectBySlug = (slug: string): Project | null => {
    return projects.find((project) => project.slug === slug) ?? null;
};