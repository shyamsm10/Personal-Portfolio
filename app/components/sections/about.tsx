"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Coffee, Rocket } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
    
export default function About() {
    const sectionRef = useGSAP(() => {
        gsap.from(".about-item", {
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);

    return (
        <section ref={sectionRef} className="about-section max-w-3xl mx-auto px-6 py-20">
            <div className="mb-12">
                <span className="text-sm text-gray-300 uppercase tracking-wider">About</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8">Who I Am</h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
                <div className="about-item space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I'm an AI/ML Engineer and B.Tech graduate in Artificial Intelligence & Data Science, 
                        passionate about architecting intelligent systems that solve real-world problems.
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed">
                        With hands-on expertise in machine learning, deep learning pipelines, LLM-powered applications, 
                        and full-stack AI development, I specialise in the complete model lifecycle — from data ingestion 
                        and preprocessing through evaluation, retraining, and production deployment with robust guardrails.
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed">
                        My work spans NLP, multilingual speech pipelines, RAG architectures, and predictive analytics. 
                        I'm committed to distilling complex data into strategic business insights through compelling 
                        visualisation dashboards and structured analytical reporting.
                    </p>
                </div>

                <div className="about-item grid md:grid-cols-3 gap-6 mt-12">
                    <div className="p-6 border-l-2 border-purple-500/30 pl-6">
                        <Code2 className="w-6 h-6 text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold mb-2">AI & ML Engineering</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Building and fine-tuning predictive models, LLM pipelines, and RAG architectures for production</p>
                    </div>
                    <div className="p-6 border-l-2 border-purple-500/30 pl-6">
                        <Coffee className="w-6 h-6 text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold mb-2">Data & Analytics</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Transforming raw data into actionable insights through EDA, visualisation, and analytical reporting</p>
                    </div>
                    <div className="p-6 border-l-2 border-purple-500/30 pl-6">
                        <Rocket className="w-6 h-6 text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold mb-2">Full Stack AI</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Deploying end-to-end AI systems with Flask REST APIs, real-time inference, and seamless integrations</p>
                    </div>
                </div>
            </div>
        </section>
    );
}