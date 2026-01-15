"use client";

import { useState, useEffect, RefObject } from "react";

export function useScrollProgress(containerRef?: RefObject<HTMLElement>) {
    const [progress, setProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = 0;
            let scrollHeight = 0;
            let clientHeight = 0;

            if (containerRef?.current) {
                const element = containerRef.current;
                scrollTop = element.scrollTop;
                scrollHeight = element.scrollHeight;
                clientHeight = element.clientHeight;
            } else {
                scrollTop = window.scrollY;
                scrollHeight = document.documentElement.scrollHeight;
                clientHeight = window.innerHeight;
            }

            const docHeight = scrollHeight - clientHeight;
            const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(scrollProgress);

            // Calculate active section (0-4 for 5 sections)
            const sectionIndex = Math.min(4, Math.floor(scrollProgress * 5 + 0.1)); // Added slight buffer
            setActiveSection(sectionIndex);
        };

        const target = containerRef?.current || window;
        target.addEventListener("scroll", handleScroll, { passive: true });

        // Also fire on resize potentially
        window.addEventListener("resize", handleScroll);

        handleScroll(); // Initial call

        return () => {
            target.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [containerRef]);

    return { progress, activeSection };
}
