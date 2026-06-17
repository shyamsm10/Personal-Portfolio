"use client";

import { useRef } from "react";
import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const quotes = [
    {
        content: "The best way to predict the future is to build it.",
        author: "Alan Kay",
        category: "Vision"
    },
    {
        content: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        category: "Persistence"
    },
    {
        content: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
        category: "Engineering"
    },
    {
        content: "Intelligence is the ability to adapt to change.",
        author: "Stephen Hawking",
        category: "AI & Life"
    },
    {
        content: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
        category: "Execution"
    },
    {
        content: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier",
        category: "Growth"
    },
    {
        content: "The science of today is the technology of tomorrow.",
        author: "Edward Teller",
        category: "Innovation"
    },
    {
        content: "Turn data into decisions. Build things that matter.",
        author: "Shyam Sarath",
        category: "Purpose"
    }
];

export default function Testimonials() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const loopedQuotes = [...quotes, ...quotes, ...quotes, ...quotes];

    const containerRef = useGSAP(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        const section = slider.closest(".Recognitions and milestones-section");
        if (!section) return;

        const totalWidth = slider.scrollWidth;
        const widthPerSet = totalWidth / 4;

        gsap.to(slider, {
            x: -widthPerSet,
            duration: 25,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % widthPerSet)
            }
        });

        gsap.from(".testimonial-header", {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

    }, []);

    return (
        <section ref={containerRef} className="testimonials-section relative w-full py-32 overflow-hidden bg-background">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-20">
                <div className="flex flex-col gap-4">
                    <span className="testimonial-header text-xs uppercase tracking-[0.3em] text-foreground/45 font-medium">Quotes</span>
                    <h2 className="testimonial-header text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.9] text-foreground">
                        Words That <br /> Drive Me
                    </h2>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-r from-background to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-l from-background to-transparent pointer-events-none"></div>

                <div ref={sliderRef} className="flex gap-6 w-max items-stretch pl-4 sm:pl-6 md:pl-12 lg:pl-20">
                    {loopedQuotes.map((quote, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[500px] shrink-0 group relative"
                        >
                            <div className="h-full bg-transparent border-t border-border hover:border-foreground/40 transition-colors duration-500 pt-8 flex flex-col justify-between">
                                <div>
                                    <span className="inline-block mb-4 text-[9px] font-mono uppercase tracking-[0.3em] text-foreground/35 border border-border px-2 py-1">
                                        {quote.category}
                                    </span>
                                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light mb-8">
                                        "{quote.content}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-1 h-6 bg-foreground/20" />
                                    <p className="text-[10px] text-foreground/45 uppercase tracking-widest font-mono">
                                        {quote.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}