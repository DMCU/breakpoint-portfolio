
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: false,
            lerp: 0.1,
        });

        const updateScrollTrigger = () => {
            ScrollTrigger.update();
        };

        const updateLenis = (time: number) => {
            lenis.raf(time * 1000);
        };

        lenis.on("scroll", updateScrollTrigger);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.refresh();

        return () => {
            lenis.off("scroll", updateScrollTrigger);
            gsap.ticker.remove(updateLenis);
            lenis.destroy();
        };
    }, []);

    return null;
}
