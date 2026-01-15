"use client";

import { motion } from "framer-motion";

interface PowerGridSceneProps {
    className?: string;
}

export default function PowerGridScene({ className = "" }: PowerGridSceneProps) {
    // Node positions for the network
    const nodes = [
        { id: 1, x: 200, y: 60, main: true },   // Central top
        { id: 2, x: 100, y: 120, main: false },
        { id: 3, x: 300, y: 120, main: false },
        { id: 4, x: 60, y: 200, main: false },
        { id: 5, x: 160, y: 200, main: false },
        { id: 6, x: 240, y: 200, main: false },
        { id: 7, x: 340, y: 200, main: false },
        { id: 8, x: 100, y: 260, main: false },
        { id: 9, x: 200, y: 260, main: false },
        { id: 10, x: 300, y: 260, main: false },
    ];

    // Connections between nodes
    const connections = [
        [1, 2], [1, 3],
        [2, 4], [2, 5],
        [3, 6], [3, 7],
        [4, 8], [5, 8], [5, 9], [6, 9], [6, 10], [7, 10],
    ];

    return (
        <div
            className={className}
            style={{
                position: "relative",
                width: "100%",
                height: "300px",
                marginBottom: "1.5rem",
                overflow: "hidden",
            }}
        >
            <svg
                viewBox="0 0 400 300"
                fill="none"
                style={{ width: "100%", height: "100%" }}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="grid-energy" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                        <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Connection lines */}
                {connections.map(([from, to], idx) => {
                    const fromNode = nodes.find(n => n.id === from)!;
                    const toNode = nodes.find(n => n.id === to)!;
                    return (
                        <g key={idx}>
                            {/* Base line */}
                            <line
                                x1={fromNode.x}
                                y1={fromNode.y}
                                x2={toNode.x}
                                y2={toNode.y}
                                stroke="rgba(251, 191, 36, 0.15)"
                                strokeWidth="2"
                            />
                            {/* Animated energy pulse */}
                            <motion.line
                                x1={fromNode.x}
                                y1={fromNode.y}
                                x2={toNode.x}
                                y2={toNode.y}
                                stroke="#fbbf24"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: [0, 1],
                                    opacity: [0, 0.8, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: idx * 0.15,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                            />
                        </g>
                    );
                })}

                {/* Nodes */}
                {nodes.map((node, idx) => (
                    <g key={node.id}>
                        {/* Outer glow ring */}
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r={node.main ? 20 : 12}
                            fill="none"
                            stroke="rgba(251, 191, 36, 0.3)"
                            strokeWidth="1"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                delay: idx * 0.1,
                                repeat: Infinity,
                            }}
                        />
                        {/* Inner node */}
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r={node.main ? 12 : 6}
                            fill={node.main ? "#fbbf24" : "rgba(251, 191, 36, 0.6)"}
                            filter="url(#node-glow)"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
                        />
                        {/* Pulse effect */}
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r={node.main ? 12 : 6}
                            fill="none"
                            stroke="#fbbf24"
                            strokeWidth="2"
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{
                                scale: [1, 2, 2.5],
                                opacity: [0.8, 0.3, 0],
                            }}
                            transition={{
                                duration: 2,
                                delay: idx * 0.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        />
                    </g>
                ))}

                {/* Energy particles flowing through network */}
                {[0, 1, 2].map((i) => (
                    <motion.circle
                        key={i}
                        r="4"
                        fill="#fbbf24"
                        filter="url(#node-glow)"
                        initial={{ cx: 200, cy: 60, opacity: 0 }}
                        animate={{
                            cx: [200, 100, 60, 100],
                            cy: [60, 120, 200, 260],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            delay: i * 1,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                    />
                ))}
                {[0, 1, 2].map((i) => (
                    <motion.circle
                        key={`right-${i}`}
                        r="4"
                        fill="#fbbf24"
                        filter="url(#node-glow)"
                        initial={{ cx: 200, cy: 60, opacity: 0 }}
                        animate={{
                            cx: [200, 300, 340, 300],
                            cy: [60, 120, 200, 260],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            delay: 0.5 + i * 1,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                    />
                ))}

                {/* Central source label */}
                <motion.text
                    x="200"
                    y="40"
                    textAnchor="middle"
                    fill="rgba(251, 191, 36, 0.6)"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    letterSpacing="0.1em"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    SOURCE
                </motion.text>
            </svg>
        </div>
    );
}
