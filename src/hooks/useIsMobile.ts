"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if the current viewport is mobile-sized.
 * Returns undefined during SSR/initial render to avoid hydration mismatch.
 * @param breakpoint - The width threshold in pixels (default 768)
 * @returns boolean indicating if viewport is at or below the breakpoint, or undefined during SSR
 */
export function useIsMobile(breakpoint = 768): boolean | undefined {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        // Check initial state on client
        const query = window.matchMedia(`(max-width: ${breakpoint}px)`);
        setIsMobile(query.matches);

        // Listen for changes
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        query.addEventListener("change", handler);

        return () => query.removeEventListener("change", handler);
    }, [breakpoint]);

    return isMobile;
}

