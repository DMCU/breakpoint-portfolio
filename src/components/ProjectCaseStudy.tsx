import type { Project } from "../data/projects";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type ProjectCaseStudyProps = {
    project: Project;
    onClose: () => void;
};

export function ProjectCaseStudy({
    project,
    onClose,
}: ProjectCaseStudyProps) {

    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const panel = panelRef.current;
        if (!panel) return;

        const animation = gsap.fromTo(
            panel,
            { yPercent: 100 },
            {
                yPercent: 0,
                duration: 0.7,
                ease: "power3.inOut",
            }
        );

        return () => {
            animation.kill();
        };
    }, []);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);

    return (
        <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-[#111111] text-white"
            data-lenis-prevent
        >
            <div className="min-h-screen px-8 py-12 md:px-20">
                <div className="flex items-center justify-between">
                    <span className="text-sm tracking-widest text-lime-400">
                        BREAKPOINT. / CASE STUDY
                    </span>

                    <button
                        type="button"
                        onClick={onClose}
                        className="cursor-pointer text-sm uppercase tracking-widest hover:text-lime-400"
                    >
                        CLOSE ×
                    </button>
                </div>

                <div className="mt-24">
                    <p className="mb-6 text-sm uppercase tracking-widest text-lime-400">
                        {project.category}
                    </p>

                    <h2
                        id="case-study-title"
                        className="max-w-5xl text-6xl font-black tracking-tighter md:text-9xl"
                    >
                        {project.title}
                    </h2>

                    <div
                        className="mt-10 h-1 w-24"
                        style={{ backgroundColor: project.color }}
                    />

                    <p className="mt-12 max-w-3xl text-2xl leading-relaxed text-gray-400 md:text-4xl">
                        {project.description}
                    </p>


                    <div className="mt-24 border-t border-white/20">
                        {[
                            {
                                number: "01",
                                title: "THE CHALLENGE",
                                content: project.challenge,
                            },
                            {
                                number: "02",
                                title: "WHAT I TESTED",
                                content: project.testing,
                            },
                            {
                                number: "03",
                                title: "MY CONTRIBUTION",
                                content: project.contribution,
                            },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="grid gap-6 border-b border-white/20 py-12 md:grid-cols-[100px_1fr_2fr] md:gap-10"
                            >
                                <span className="text-sm font-semibold text-lime-400">
                                    {item.number}
                                </span>

                                <h3 className="text-2xl font-black tracking-tight md:text-3xl">
                                    {item.title}
                                </h3>

                                <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer text-sm font-semibold tracking-widest text-lime-400 transition-colors hover:text-white"
                        >
                            ← BACK TO SELECTED WORK
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
