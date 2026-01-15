"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface NightscapeBackgroundProps {
    scrollProgress?: number;
}

export default function NightscapeBackground({
    scrollProgress = 0,
}: NightscapeBackgroundProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Calculate colors based on scroll progress
    // Start dark → storm (section 2) → calm with grid glow (section 4-5)
    const skyOpacity = Math.min(1, scrollProgress * 1.5);
    const stormIntensity = scrollProgress < 0.5 ? scrollProgress * 2 : 1 - (scrollProgress - 0.5) * 2;
    const gridGlow = scrollProgress > 0.6 ? (scrollProgress - 0.6) * 2.5 : 0;

    if (!mounted) {
        return (
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "#0a0e1a",
                    zIndex: 0,
                }}
            />
        );
    }

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                overflow: "hidden",
            }}
        >
            {/* Sky gradient */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(
            to bottom,
            #050810 0%,
            #0a0e1a 30%,
            #1a1f2e 60%,
            #252a3d 100%
          )`,
                }}
            />

            {/* Stars */}
            <svg
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.6 + gridGlow * 0.4,
                }}
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMidYMid slice"
            >
                {Array.from({ length: 100 }).map((_, i) => (
                    <circle
                        key={i}
                        cx={Math.random() * 1920}
                        cy={Math.random() * 600}
                        r={Math.random() * 1.5 + 0.5}
                        fill="#f1f5f9"
                        opacity={Math.random() * 0.5 + 0.3}
                    />
                ))}
            </svg>

            {/* Clouds - layered for depth */}
            <svg
                style={{
                    position: "absolute",
                    bottom: "15%",
                    left: 0,
                    width: "100%",
                    height: "60%",
                    opacity: 0.7 + stormIntensity * 0.3,
                }}
                viewBox="0 0 1920 600"
                preserveAspectRatio="xMidYMax slice"
            >
                {/* Back clouds */}
                <ellipse cx="200" cy="200" rx="300" ry="100" fill="#252a3d" />
                <ellipse cx="600" cy="180" rx="400" ry="120" fill="#1a1f2e" />
                <ellipse cx="1100" cy="220" rx="350" ry="90" fill="#252a3d" />
                <ellipse cx="1600" cy="190" rx="380" ry="110" fill="#1a1f2e" />
                <ellipse cx="1900" cy="210" rx="280" ry="95" fill="#252a3d" />
                {/* Front clouds */}
                <ellipse cx="400" cy="300" rx="280" ry="80" fill="#3d4560" opacity="0.8" />
                <ellipse cx="900" cy="280" rx="320" ry="100" fill="#3d4560" opacity="0.7" />
                <ellipse cx="1400" cy="310" rx="300" ry="85" fill="#3d4560" opacity="0.8" />
            </svg>

            {/* Mountains silhouette */}
            <svg
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "45%",
                }}
                viewBox="0 0 1920 500"
                preserveAspectRatio="xMidYMax slice"
            >
                {/* Back mountain range */}
                <path
                    d="M0,500 L0,300 L200,250 L400,320 L550,200 L700,280 L900,150 L1100,280 L1250,180 L1400,260 L1550,140 L1700,220 L1920,280 L1920,500 Z"
                    fill="#1a1f2e"
                />
                {/* Front mountain range */}
                <path
                    d="M0,500 L0,380 L150,350 L300,400 L450,320 L600,380 L800,280 L1000,360 L1150,290 L1300,350 L1500,270 L1700,340 L1920,300 L1920,500 Z"
                    fill="#0f1219"
                />
            </svg>

            {/* Town silhouette */}
            <svg
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "25%",
                }}
                viewBox="0 0 1920 250"
                preserveAspectRatio="xMidYMax slice"
            >
                {/* Ground */}
                <rect x="0" y="200" width="1920" height="50" fill="#0a0e1a" />

                {/* Buildings - cartoony silhouettes */}
                <g fill="#0a0e1a">
                    {/* Left side buildings */}
                    <rect x="50" y="150" width="60" height="50" />
                    <polygon points="50,150 80,110 110,150" />
                    <rect x="130" y="130" width="80" height="70" />
                    <rect x="140" y="90" width="20" height="40" />
                    <rect x="230" y="160" width="50" height="40" />
                    <rect x="300" y="120" width="70" height="80" />
                    <polygon points="300,120 335,70 370,120" />

                    {/* Center buildings */}
                    <rect x="450" y="140" width="100" height="60" />
                    <rect x="480" y="100" width="40" height="40" />
                    <rect x="580" y="110" width="120" height="90" />
                    <rect x="620" y="60" width="40" height="50" />
                    <rect x="730" y="150" width="80" height="50" />
                    <rect x="840" y="130" width="90" height="70" />
                    <polygon points="840,130 885,80 930,130" />

                    {/* Right side buildings */}
                    <rect x="1000" y="145" width="70" height="55" />
                    <rect x="1100" y="120" width="100" height="80" />
                    <rect x="1130" y="70" width="40" height="50" />
                    <rect x="1230" y="160" width="60" height="40" />
                    <rect x="1320" y="135" width="80" height="65" />
                    <polygon points="1320,135 1360,90 1400,135" />
                    <rect x="1430" y="150" width="50" height="50" />
                    <rect x="1510" y="125" width="90" height="75" />
                    <rect x="1540" y="80" width="30" height="45" />
                    <rect x="1650" y="160" width="60" height="40" />
                    <rect x="1740" y="140" width="70" height="60" />
                    <polygon points="1740,140 1775,100 1810,140" />
                    <rect x="1850" y="155" width="50" height="45" />
                </g>

                {/* Windows that light up based on grid progress */}
                <g fill={`rgba(251, 191, 36, ${gridGlow})`}>
                    {/* Building windows - scattered across buildings */}
                    <rect x="145" y="140" width="8" height="10" rx="1" />
                    <rect x="165" y="140" width="8" height="10" rx="1" />
                    <rect x="145" y="160" width="8" height="10" rx="1" />
                    <rect x="310" y="140" width="10" height="12" rx="1" />
                    <rect x="340" y="140" width="10" height="12" rx="1" />
                    <rect x="310" y="165" width="10" height="12" rx="1" />
                    <rect x="340" y="165" width="10" height="12" rx="1" />
                    <rect x="600" y="130" width="12" height="14" rx="1" />
                    <rect x="625" y="130" width="12" height="14" rx="1" />
                    <rect x="660" y="130" width="12" height="14" rx="1" />
                    <rect x="600" y="155" width="12" height="14" rx="1" />
                    <rect x="625" y="155" width="12" height="14" rx="1" />
                    <rect x="660" y="155" width="12" height="14" rx="1" />
                    <rect x="860" y="150" width="10" height="12" rx="1" />
                    <rect x="885" y="150" width="10" height="12" rx="1" />
                    <rect x="860" y="170" width="10" height="12" rx="1" />
                    <rect x="1115" y="140" width="12" height="14" rx="1" />
                    <rect x="1145" y="140" width="12" height="14" rx="1" />
                    <rect x="1175" y="140" width="12" height="14" rx="1" />
                    <rect x="1115" y="165" width="12" height="14" rx="1" />
                    <rect x="1145" y="165" width="12" height="14" rx="1" />
                    <rect x="1340" y="155" width="10" height="12" rx="1" />
                    <rect x="1365" y="155" width="10" height="12" rx="1" />
                    <rect x="1525" y="145" width="10" height="12" rx="1" />
                    <rect x="1555" y="145" width="10" height="12" rx="1" />
                    <rect x="1525" y="170" width="10" height="12" rx="1" />
                    <rect x="1555" y="170" width="10" height="12" rx="1" />
                    <rect x="1580" y="145" width="10" height="12" rx="1" />
                    <rect x="1755" y="160" width="10" height="12" rx="1" />
                    <rect x="1780" y="160" width="10" height="12" rx="1" />
                </g>

                {/* Window glow effect */}
                {gridGlow > 0 && (
                    <g filter="url(#windowGlow)">
                        <rect x="600" y="130" width="85" height="40" fill={`rgba(251, 191, 36, ${gridGlow * 0.3})`} />
                        <rect x="1115" y="140" width="75" height="40" fill={`rgba(251, 191, 36, ${gridGlow * 0.3})`} />
                    </g>
                )}

                <defs>
                    <filter id="windowGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {/* Power grid lines - appear in final section */}
            {gridGlow > 0 && (
                <svg
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        left: 0,
                        width: "100%",
                        height: "40%",
                        opacity: gridGlow,
                    }}
                    viewBox="0 0 1920 400"
                    preserveAspectRatio="xMidYMax slice"
                >
                    <defs>
                        <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
                        </linearGradient>
                        <filter id="gridGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Grid lines connecting buildings */}
                    <g
                        stroke="url(#gridGradient)"
                        strokeWidth="2"
                        fill="none"
                        filter="url(#gridGlow)"
                        style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000 - gridGlow * 1000,
                            transition: "stroke-dashoffset 1s ease-out",
                        }}
                    >
                        <path d="M100,350 Q300,280 500,350 T900,320 T1300,340 T1700,310 T1900,350" />
                        <path d="M200,380 Q500,300 800,360 T1200,330 T1600,360" />
                    </g>
                </svg>
            )}

            {/* Storm overlay - active during lightning sections */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse at top, rgba(56, 189, 248, ${stormIntensity * 0.08}) 0%, transparent 70%)`,
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
