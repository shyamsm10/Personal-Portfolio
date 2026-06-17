"use client";

import { useEffect, useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
    {
        title: "AI Intern",
        company: "Infosys Springboard",
        location: "Kerala, India",
        period: "Feb 2026 - Present",
        description: "Working on phishing detection pipelines involving unstructured datasets from multiple sources. Responsible for data cleaning, feature engineering, model evaluation, and deploying trained models into production-ready Flask web applications.",
        achievements: [
            "Cleaned, validated, and preprocessed phishing datasets using Python to ensure data accuracy and consistency",
            "Extracted URL-based and domain-based features and performed model optimization with cross-validation",
            "Evaluated performance using Accuracy, Precision, Recall, F1-score, and Confusion Matrix",
            "Integrated trained ML model into a REST-based Flask web application for real-time inference"
        ],
        tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "REST API", "Excel", "SQL"]
    },
    {
        title: "Web Development Intern",
        company: "Hexcent Private Limited",
        location: "Kochi, India",
        period: "Jul 2024 - Nov 2024",
        description: "Designed and developed a fully functional e-commerce shopping website as part of a full-stack internship. Built backend logic including user authentication, product management, cart functionality, and order processing.",
        achievements: [
            "Built a complete e-commerce platform with product management and order processing",
            "Implemented user authentication and secure cart functionality using Django/Flask",
            "Developed full-stack features spanning frontend UI and backend business logic"
        ],
        tech: ["Python", "Django", "Flask", "HTML", "CSS", "JavaScript", "SQL"]
    }
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const root = sectionRef.current;
            if (!root) return;

            const leftPanel = root.querySelector<HTMLElement>(".experience-panel-left");
            const rightPanel = root.querySelector<HTMLElement>(".experience-panel-right");

            const animItems = gsap.utils.toArray<HTMLElement>(".experience-anim", root);
            const techBadges = gsap.utils.toArray<HTMLElement>(".experience-tech-anim", root);

            const panels: HTMLElement[] = [leftPanel, rightPanel].filter((el): el is HTMLElement => !!el);
            const allItems: HTMLElement[] = [...animItems, ...techBadges];

            gsap.set(panels, { autoAlpha: 0, y: 40, willChange: "transform,opacity" });
            gsap.set(allItems, { autoAlpha: 0, y: 26, willChange: "transform,opacity" });

            const tlPanelsIn = gsap.timeline({ paused: true }).to(panels, {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out",
                stagger: 0.1,
            });

            ScrollTrigger.create({
                trigger: root,
                start: "top 78%",
                end: "bottom 22%",
                onEnter: () => tlPanelsIn.play(0),
                onEnterBack: () => tlPanelsIn.play(0),
                onRefresh: (self) => {
                    if (self.progress > 0) tlPanelsIn.progress(1);
                    else tlPanelsIn.pause(0).progress(0);
                },
            });

            const scrubReveal = (el: HTMLElement, yFrom: number) => {
                gsap.fromTo(
                    el,
                    { autoAlpha: 0, y: yFrom },
                    {
                        autoAlpha: 1,
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            end: "top 70%",
                            scrub: 0.85,
                            invalidateOnRefresh: true,
                        },
                    },
                );
            };

            animItems.forEach((el) => scrubReveal(el, 22));
            techBadges.forEach((el) => scrubReveal(el, 18));
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-background py-16 sm:py-20 lg:py-28 overflow-hidden">
            <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-44 max-w-[1920px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-10 md:gap-14 lg:gap-16 items-start">
                    {/* Left — Title */}
                    <div className="experience-panel-left lg:w-5/12 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="experience-anim text-[10px] sm:text-xs uppercase tracking-[0.35em] text-foreground/45 font-mono">
                                Experience
                            </span>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <h2 className="experience-anim text-[clamp(2rem,5vw,5rem)] font-black uppercase leading-[0.95] text-foreground tracking-tight">
                            Work History
                        </h2>

                        <p className="experience-anim text-base sm:text-lg text-foreground/65 leading-relaxed max-w-lg">
                            Internship experience spanning AI/ML engineering and full-stack web development.
                        </p>
                    </div>

                    {/* Right — List */}
                    <div className="experience-panel-right lg:w-7/12 lg:self-center">
                        <div className="grid gap-10 md:gap-12">
                            {experiences.map((exp) => (
                                <article key={`${exp.company}-${exp.period}-${exp.title}`} className="experience-anim border border-border bg-muted/30 p-6 md:p-8 lg:p-10">
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-foreground/60 text-xs md:text-sm font-medium mb-4">
                                        <span className="flex items-center gap-2 text-foreground/85">
                                            <Briefcase className="w-4 h-4 opacity-50 text-foreground" />
                                            {exp.company}
                                        </span>
                                        <span className="flex items-center gap-2 text-foreground/55">
                                            <MapPin className="w-4 h-4 opacity-40" />
                                            {exp.location}
                                        </span>
                                        <span className="text-foreground/45 font-mono uppercase tracking-widest text-[10px] md:text-xs">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-none mb-4">
                                        {exp.title}
                                    </h3>

                                    <p className="text-foreground/65 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {exp.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="experience-tech-anim text-[10px] md:text-xs px-3 py-1.5 md:px-4 md:py-2 bg-muted text-foreground/60 border border-border font-mono uppercase tracking-widest"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}