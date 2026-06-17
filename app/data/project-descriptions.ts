export const PROJECT_DESCRIPTIONS: Readonly<Record<string, string>> = {
    "careerpilot-ai":
        "A full-stack multi-agent AI career coaching platform built with React and FastAPI, orchestrating 5 specialised LLM agents via LangGraph — covering resume parsing, skill gap analysis, ATS optimisation, interview simulation, and career roadmap generation powered by Groq-hosted LLMs.",
    "skybook-ai-flight-booking-system":
        "An AI-powered flight booking platform with a conversational LLM assistant, prompt-engineered guardrails, predictive fare-forecasting models, and end-to-end data pipelines for anomaly detection and stakeholder trend reporting.",
    "rag-production-app":
        "A production-ready Retrieval-Augmented Generation system for intelligent Q&A over PDF documents, featuring semantic search, reranking, event-driven processing via Inngest, a Qdrant vector database, and a FastAPI backend with Streamlit UI.",
    "phishing-website-detection":
        "An intelligent full-stack web application that detects phishing URLs in real time using a trained Random Forest classifier, with a Flask REST API backend, feature extraction pipeline, and a results dashboard for visualisation.",
};

export function getProjectDescription(slug: string): string | undefined {
    return PROJECT_DESCRIPTIONS[slug];
}