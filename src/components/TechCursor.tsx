
import { useRef, useEffect } from "react";
import gsap from "gsap";

export function TechCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const container = cursor?.parentElement;

        if (!cursor || !container) return;

        const moveCursor = (event: MouseEvent) => {
            gsap.to(cursor, {
                x: event.clientX,
                y: event.clientY,
                duration: 0.6,
                ease: "power2.out",
                overwrite: "auto",
            });
        };

        const showCursor = () => {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1,
                duration: 0.25,
                overwrite: "auto",
            });
        };

        const hideCursor = () => {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0,
                duration: 0.25,
                overwrite: "auto",
            });
        };


        const clickCursor = () => {
            gsap.killTweensOf(cursor);

            const normalGlow =
                "radial-gradient(circle, rgba(163,230,53,0.35) 0%, rgba(163,230,53,0.12) 35%, transparent 75%)";

            const brightGlow =
                "radial-gradient(circle, rgba(190,255,90,0.95) 0%, rgba(163,230,53,0.55) 35%, transparent 75%)";

            gsap.timeline()
                .to(cursor, {
                    scale: 2,
                    background: brightGlow,
                    duration: 0.2,
                    ease: "power2.out",
                })
                .to(cursor, {
                    scale: 1,
                    background: normalGlow,
                    duration: 0.5,
                    ease: "power3.out",
                });
        };


        container.addEventListener("mousemove", moveCursor);
        container.addEventListener("mouseenter", showCursor);
        container.addEventListener("mouseleave", hideCursor);
        container.addEventListener("click", clickCursor);

        return () => {
            container.removeEventListener("mousemove", moveCursor);
            container.removeEventListener("mouseenter", showCursor);
            container.removeEventListener("mouseleave", hideCursor);
            container.removeEventListener("click", clickCursor);
            gsap.killTweensOf(cursor);
        };
    }, []);



    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-50 pointer-events-none
      w-20 h-20 rounded-full"
            style={{
                opacity: 0,
                scale: 0,
                translate: "-50% -50%",
                background:
                    "radial-gradient(circle, rgba(163,230,53,0.35) 0%, rgba(163,230,53,0.12) 35%, transparent 75%)",
                filter: "blur(12px)",
            }}
        />
    );


}
