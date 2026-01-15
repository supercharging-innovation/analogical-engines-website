"use client";

import { motion } from "framer-motion";

interface LightningBoltProps {
    x?: number;
    delay?: number;
    duration?: number;
    intensity?: "low" | "medium" | "high";
}

export default function LightningBolt({
    x = 50,
    delay = 0,
    duration = 0.3,
    intensity = "medium",
}: LightningBoltProps) {
    const intensityOpacity = {
        low: 0.4,
        medium: 0.7,
        high: 1,
    };

    const intensityGlow = {
        low: "0 0 10px rgba(125, 211, 252, 0.3)",
        medium: "0 0 20px rgba(125, 211, 252, 0.5), 0 0 40px rgba(56, 189, 248, 0.3)",
        high: "0 0 30px rgba(125, 211, 252, 0.8), 0 0 60px rgba(56, 189, 248, 0.5), 0 0 100px rgba(14, 165, 233, 0.3)",
    };

    // Generate a random lightning path
    const generatePath = () => {
        let path = `M ${x} 0`;
        let currentX = x;
        let currentY = 0;
        const segments = 8 + Math.floor(Math.random() * 4);
        const segmentHeight = 100 / segments;

        for (let i = 0; i < segments; i++) {
            const offsetX = (Math.random() - 0.5) * 20;
            const nextX = currentX + offsetX;
            const nextY = currentY + segmentHeight;
            path += ` L ${nextX} ${nextY}`;
            currentX = nextX;
            currentY = nextY;
        }

        return path;
    };

    const mainPath = generatePath();

    return (
        <motion.svg
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 5,
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, intensityOpacity[intensity], intensityOpacity[intensity], 0, 0.3, 0],
            }}
            transition={{
                duration: duration,
                delay: delay,
                times: [0, 0.1, 0.3, 0.5, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 3 + Math.random() * 5,
            }}
        >
            <defs>
                <filter id={`lightning-glow-${x}`} x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="1" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Main bolt */}
            <motion.path
                d={mainPath}
                stroke="#f0f8ff"
                strokeWidth="0.8"
                fill="none"
                filter={`url(#lightning-glow-${x})`}
                style={{
                    filter: `drop-shadow(${intensityGlow[intensity]})`,
                }}
            />

            {/* Outer glow */}
            <motion.path
                d={mainPath}
                stroke="#7dd3fc"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
            />
        </motion.svg>
    );
}
