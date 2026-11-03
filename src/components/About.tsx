import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".about-line", {
            yPercent: 110,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        gsap.from(".about-stat", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-stat",
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
                02 / THE PERSON BEHIND THE BUGS
            </p>

            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.95]">
                <div className="overflow-hidden">
                    <div className="about-line">QUALITY ISN'T</div>
                </div>

                <div className="overflow-hidden">
                    <div className="about-line">AN ACCIDENT.</div>
                </div>

                <div className="overflow-hidden">
                    <div className="about-line text-lime-400">
                        I MAKE SURE OF IT.
                    </div>
                </div>
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mt-16">
                Senior QA Engineer with 8+ years of experience.
                Curious about how things work.
                Even more curious about how they fail.
            </p>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
                <div className="about-stat">
                    <span className="block text-6xl md:text-8xl font-black text-lime-400">
                        8+
                    </span>
                    <p className="mt-4 text-sm uppercase tracking-widest text-gray-400">
                        Years in QA
                    </p>
                </div>

                <div className="about-stat">
                    <span className="block text-6xl md:text-8xl font-black">
                        3
                    </span>
                    <p className="mt-4 text-sm uppercase tracking-widest text-gray-400">
                        Industries
                    </p>
                </div>

                <div className="about-stat">
                    <span className="block text-6xl md:text-8xl font-black">
                        ∞
                    </span>
                    <p className="mt-4 text-sm uppercase tracking-widest text-gray-400">
                        Curiosity
                    </p>
                </div>
            </div>

        </section>
    );
}
