"use client";

import { motion } from "framer-motion";

interface LightningCaptureSceneProps {
    className?: string;
}

export default function LightningCaptureScene({ className = "" }: LightningCaptureSceneProps) {
    return (
        <div
            className={className}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                marginBottom: "2rem",
                overflow: "hidden",
            }}
        >
            <svg
                viewBox="0 0 400 280"
                fill="none"
                style={{ width: "100%", height: "100%" }}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* Glow filters */}
                    <filter id="lightning-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="container-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    {/* Gradient for energy */}
                    <linearGradient id="energy-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Capture container - glass sphere */}
                <motion.ellipse
                    cx="200"
                    cy="160"
                    rx="70"
                    ry="65"
                    fill="rgba(125, 211, 252, 0.05)"
                    stroke="rgba(125, 211, 252, 0.3)"
                    strokeWidth="2"
                    filter="url(#container-glow)"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Inner energy ring */}
                <motion.ellipse
                    cx="200"
                    cy="160"
                    rx="50"
                    ry="45"
                    fill="none"
                    stroke="rgba(125, 211, 252, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="8 4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.6, 0.3], rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "200px 160px" }}
                />

                {/* Lightning bolt being captured */}
                <motion.g filter="url(#lightning-glow)">
                    {/* Main bolt */}
                    <motion.path
                        d="M200 20 L185 70 L205 75 L175 130 L210 100 L195 105 L220 50 L200 55 Z"
                        fill="#7dd3fc"
                        stroke="#f0f8ff"
                        strokeWidth="1"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: [0, 1, 1, 0.8], y: [-20, 0, 30, 40] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />

                    {/* Energy particles flowing into container */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.circle
                            key={i}
                            r="3"
                            fill="#7dd3fc"
                            initial={{ cx: 200 + (i - 2) * 15, cy: 100, opacity: 0 }}
                            animate={{
                                cy: [100, 140, 160],
                                opacity: [0, 1, 0],
                                scale: [1, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 1.5,
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        />
                    ))}
                </motion.g>

                {/* Captured energy swirling inside */}
                <motion.path
                    d="M160 160 Q180 140 200 155 Q220 170 240 155"
                    fill="none"
                    stroke="url(#energy-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 1],
                        opacity: [0, 0.8, 0.4],
                    }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 0.5 }}
                />

                {/* Electrode arms */}
                <motion.g
                    stroke="rgba(125, 211, 252, 0.4)"
                    strokeWidth="3"
                    strokeLinecap="round"
                >
                    <line x1="100" y1="110" x2="145" y2="140" />
                    <line x1="300" y1="110" x2="255" y2="140" />
                    <line x1="100" y1="210" x2="145" y2="180" />
                    <line x1="300" y1="210" x2="255" y2="180" />
                    {/* Electrode tips */}
                    <motion.circle
                        cx="145"
                        cy="140"
                        r="4"
                        fill="#7dd3fc"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle
                        cx="255"
                        cy="140"
                        r="4"
                        fill="#7dd3fc"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.circle
                        cx="145"
                        cy="180"
                        r="4"
                        fill="#7dd3fc"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                    />
                    <motion.circle
                        cx="255"
                        cy="180"
                        r="4"
                        fill="#7dd3fc"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
                    />
                </motion.g>

                {/* Base platform */}
                <motion.rect
                    x="150"
                    y="230"
                    width="100"
                    height="8"
                    rx="4"
                    fill="rgba(125, 211, 252, 0.2)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                />
            </svg>
        </div>
    );
}
