import type { Project } from "../data/projects";
import { useRef } from "react";
import gsap from "gsap";

type ProjectCardProps = {
  project: Project;
  onClick?: (project: Project) => void;
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {

  const cardRef = useRef<HTMLElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -8,
      scale: 1.02,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(arrowRef.current, {
      rotation: 45,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(arrowRef.current, {
      rotation: 0,
      duration: 0.35,
      ease: "power2.out",
    });
  };
  return (
    <article
      ref={cardRef}
      onClick={() => onClick?.(project)}
      onKeyDown={(event) => {
        if (onClick && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onClick(project);
        }
      }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="project-card min-h-[400px] rounded-2xl p-8 flex flex-col justify-between text-black"
      style={{ backgroundColor: project.color }}
    >
      <div className="flex justify-between items-start">
        <p className="text-sm font-semibold tracking-widest">
          {project.category}
        </p>
        <span ref={arrowRef} className="inline-block text-2xl">↗</span>
      </div>

      <div>
        <h3 className="text-5xl md:text-7xl font-black tracking-tighter">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md text-lg">
          {project.description}
        </p>
      </div>
    </article>
  );
}
