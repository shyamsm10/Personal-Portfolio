"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const blogPosts = [
    {
        title: "The Hidden Cost of Skipping Data Validation in ML Pipelines",
        excerpt: "Most ML failures in production aren't model failures — they're data failures. Garbage in, garbage out is a cliché because it's true. Yet teams consistently underinvest in data validation, treating it as a checkbox rather than a discipline. Here's why rigorous validation at every stage of your pipeline is the single highest-leverage investment you can make before training a single model.",
        date: "May 2, 2026",
        readTime: "6 min read",
        category: "MLOps",
        image: "🔬"
    },
    {
        title: "Prompt Engineering Is a Skill, Not a Trick",
        excerpt: "There's a common misconception that prompt engineering is just clever wordplay — a few magic phrases that unlock better responses. In practice, it's a structured discipline that sits at the intersection of linguistics, systems thinking, and domain expertise. Understanding why a model responds the way it does is what separates engineers who ship reliable LLM applications from those who don't.",
        date: "April 14, 2026",
        readTime: "5 min read",
        category: "LLMs & GenAI",
        image: "💬"
    },
    {
        title: "Why Your Model's Accuracy Score Is Lying to You",
        excerpt: "A 95% accurate model sounds impressive until you realise your dataset is 95% one class. Accuracy is the most misused metric in machine learning — and over-relying on it leads to models that look great on paper and fail catastrophically in the real world. This post breaks down when to use Precision, Recall, F1-score, and AUC-ROC, and how to choose the right metric for the problem you're actually solving.",
        date: "March 22, 2026",
        readTime: "7 min read",
        category: "ML & Evaluation",
        image: "📊"
    },
    {
        title: "What Low-Resource NLP Taught Me About Assumptions in AI",
        excerpt: "Building AI for English is swimming with the current. Building it for a morphologically rich, low-resource language is a different problem entirely — and the experience fundamentally changed how I think about generalisation, bias, and what it means for a model to truly 'understand' language. These are lessons that apply far beyond regional NLP.",
        date: "February 28, 2026",
        readTime: "6 min read",
        category: "NLP",
        image: "🌐"
    }
];

export default function Blog() {
    const sectionRef = useGSAP(() => {
        gsap.from(".blog-card", {
            scrollTrigger: {
                trigger: ".blog-section",
                start: "top 80%",
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, []);

    return (
        <section ref={sectionRef} className="blog-section max-w-4xl mx-auto px-6 py-20">
            <div className="mb-12">
                <span className="text-sm text-gray-300 uppercase tracking-wider">Blog</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Latest Articles</h2>
                <p className="text-gray-400 text-lg">
                    Thoughts, tutorials, and insights on AI, machine learning, and building intelligent systems.
                </p>
            </div>

            <div className="space-y-12">
                {blogPosts.map((post, index) => (
                    <article key={index} className="blog-card group border-b border-gray-800 pb-12 last:border-b-0 last:pb-0">
                        <div className="mb-4">
                            <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded border border-purple-500/20">
                                {post.category}
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                            {post.title}
                        </h3>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-300 mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <a 
                            href="#" 
                            aria-label={`Read more about ${post.title}`}
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium border-b border-purple-400/30 hover:border-purple-400 pb-1"
                        >
                            Read more
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </a>
                    </article>
                ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
                <a 
                    href="#" 
                    aria-label="View all blog articles"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                    View All Articles
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}