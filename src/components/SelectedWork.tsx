import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SelectedWork() {
    const sectionRef = useRef<HTMLElement>(null);


    useGSAP(
        () => {
            const section = sectionRef.current;
            if (!section) return;

            const track = section.querySelector<HTMLElement>(".project-track");
            const viewport = section.querySelector<HTMLElement>(".project-viewport");

            if (!track || !viewport) return;

            const getDistance = () =>
                Math.max(0, track.scrollWidth - viewport.clientWidth);

            gsap.to(track, {
                x: () => -getDistance(),
                ease: "none",

                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getDistance()}`,
                    pin: true,
                    anticipatePin: 1,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        gsap.set(".scroll-progress", {
                            scaleX: self.progress,
                        });
                    },
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="h-screen box-border bg-[#111111] text-white px-8 md:px-20 py-8 flex flex-col justify-center overflow-hidden">
            <p className="text-lime-400 tracking-widest mb-4">
                01 / SELECTED WORK
            </p>

            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-16">
                THINGS I'VE WORKED ON.
            </h2>

            <div className="project-viewport overflow-hidden py-8">
                <div className="project-track flex gap-6 w-max">
                    {<div className="project-track flex gap-6 w-max">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="w-[80vw] md:w-[55vw] lg:w-[40vw] shrink-0"
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>}
                </div>
            </div>

            <div className="mt-8 h-[3px] w-full bg-white/20">
                <div className="scroll-progress h-full w-full bg-lime-400 origin-left scale-x-0" />
            </div>




        </section>
    );
}
