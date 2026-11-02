
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type HeroProps = {
    title: string;
    role: string;
    subtitle: string;
};

export function Hero({ title, role, subtitle }: HeroProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const timeline = gsap.timeline({
                defaults: {
                    duration: 0.8,
                    ease: "power3.out",
                },
            });

            timeline
                .from(".hero-label", {
                    y: 30,
                    opacity: 0,
                })
                .from(".hero-word", {
                    yPercent: 110,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.05,
                }, "-=0.4")

                .from(".hero-role", {
                    y: 30,
                    opacity: 0,
                }, "-=0.4")
                .from(".hero-subtitle", {
                    y: 30,
                    opacity: 0,
                }, "-=0.4");
        },
        { scope: sectionRef }
    );


    const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
        gsap.to(event.currentTarget, {
            scale: 1.15,
            rotation: -5,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLSpanElement>) => {
        gsap.to(event.currentTarget, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
        });
    };


    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-[#111111] text-white flex flex-col justify-center px-8 md:px-20"
        >
            <p className="hero-label text-lime-400 uppercase tracking-widest mb-8">
                QA Engineer / Creative Problem Solver
            </p>


            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase">
                {title.split(" ").map((word, index) => (
                    <span
                        key={index}
                        className="inline-block overflow-hidden mr-4"
                    >
                        <span
                            className={`hero-word inline-block ${word === "BREAK" ? "text-lime-400 cursor-pointer" : ""
                                }`}
                            onMouseEnter={word === "BREAK" ? handleMouseEnter : undefined}
                            onMouseLeave={word === "BREAK" ? handleMouseLeave : undefined}
                        >
                            {word}
                        </span>

                    </span>
                ))}
            </h1>


            <p className="hero-role text-white mt-8 text-xl">
                {role}
            </p>

            <p className="hero-subtitle text-2xl mt-8 text-gray-400">
                {subtitle}
            </p>
        </section>
    );
}
