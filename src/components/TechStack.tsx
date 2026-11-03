import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { technologies } from "../data/technologies";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TechCursor } from "./TechCursor";

gsap.registerPlugin(ScrollTrigger);

export function TechStack() {

    const sectionRef = useRef<HTMLElement>(null);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useGSAP(() => {
        gsap.from(".tech-row", {
            y: 50,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".tech-row",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });
    }, { scope: sectionRef });

    return (
        <section

            ref={sectionRef}
            className="min-h-screen bg-[#111111] text-white px-8 md:px-20 py-32">
            <p className="text-lime-400 tracking-widest mb-12">
                03 / MY TOOLBOX
            </p>

            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">
                TOOLS OF
                <br />
                THE TRADE.
            </h2>

            <p className="text-gray-400 text-xl mt-8 mb-20">
                A few of the things I use to find what others miss.
            </p>

            <div className="relative border-t border-white/20">

                {technologies.map((technology) => (
                    <div
                        key={technology.id}
                        className="tech-row border-b border-white/20"
                    >
                        <button
                            type="button"
                            aria-expanded={expandedId === technology.id}
                            className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
                            onClick={() => {
                                setExpandedId(
                                    expandedId === technology.id ? null : technology.id
                                );
                            }}
                            onMouseEnter={(event) => {
                                const title = event.currentTarget.querySelector("h3");

                                gsap.to(title, {
                                    x: 24,
                                    color: "#a3e635",
                                    duration: 0.35,
                                    ease: "power3.out",
                                    overwrite: "auto",
                                });
                            }}
                            onMouseLeave={(event) => {
                                const title = event.currentTarget.querySelector("h3");

                                gsap.to(title, {
                                    x: 0,
                                    color: "#ffffff",
                                    duration: 0.35,
                                    ease: "power3.out",
                                    overwrite: "auto",
                                });
                            }}
                        >
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                                {technology.name}
                            </h3>

                            <span className="text-xs md:text-sm text-gray-500 tracking-widest">
                                {technology.category}
                                <span className="ml-4 text-lime-400 text-xl">
                                    {expandedId === technology.id ? "−" : "+"}
                                </span>
                            </span>
                        </button>

                        {expandedId === technology.id && (
                            <div className="pb-8 max-w-2xl">
                                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                                    {technology.description}
                                </p>
                            </div>
                        )}
                    </div>
                ))}

                <TechCursor />
            </div>
        </section>
    );
}
