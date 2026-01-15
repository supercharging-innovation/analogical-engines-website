"use client";

import { motion } from "framer-motion";
import React from "react";

const smartSteps = [
    {
        letter: "S",
        title: "Search",
        description: "Discover solutions from unexpected domains that keyword search can't find",
        color: "#38bdf8", // Sky blue
    },
    {
        letter: "M",
        title: "Map",
        description: "Translate distant inspirations into actionable concepts for your problem",
        color: "#22d3ee", // Cyan
    },
    {
        letter: "A",
        title: "Adapt",
        description: "Extract transferable principles and apply them with your domain expertise",
        color: "#4ade80", // Green
    },
    {
        letter: "R",
        title: "Refine",
        description: "Explore branching possibilities and iterate toward breakthrough solutions",
        color: "#fbbf24", // Amber
    },
    {
        letter: "T",
        title: "Test",
        description: "Identify evidence paths, potential partners, and feasibility signals early",
        color: "#f472b6", // Pink
    },
];

export default function PaperShowcase() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    width: "90%",
                    maxWidth: "400px",
                }}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        marginBottom: "1rem",
                        textAlign: "center",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            color: "#64748b",
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                        }}
                    >
                        Our Framework
                    </span>
                </motion.div>

                {/* SMART Steps */}
                {smartSteps.map((step, index) => (
                    <motion.div
                        key={step.letter}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            padding: "0.875rem 1rem",
                            background: "rgba(15, 23, 42, 0.6)",
                            borderRadius: "12px",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(10px)",
                            cursor: "default",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Accent line */}
                        <div
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: "3px",
                                background: step.color,
                            }}
                        />

                        {/* Letter badge */}
                        <div
                            style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "8px",
                                background: `${step.color}15`,
                                border: `1px solid ${step.color}40`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: step.color,
                                }}
                            >
                                {step.letter}
                            </span>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "0.95rem",
                                    fontWeight: 600,
                                    color: "#f8fafc",
                                    marginBottom: "0.2rem",
                                }}
                            >
                                {step.title}
                            </div>
                            <div
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.75rem",
                                    color: "#94a3b8",
                                    lineHeight: 1.4,
                                }}
                            >
                                {step.description}
                            </div>
                        </div>

                        {/* Connecting line to next step */}
                        {index < smartSteps.length - 1 && (
                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                                viewport={{ once: true }}
                                style={{
                                    position: "absolute",
                                    left: "28px",
                                    bottom: "-0.5rem",
                                    width: "2px",
                                    height: "0.5rem",
                                    background: `linear-gradient(to bottom, ${step.color}40, ${smartSteps[index + 1].color}40)`,
                                    transformOrigin: "top",
                                    zIndex: 10,
                                }}
                            />
                        )}
                    </motion.div>
                ))}

                {/* Footer note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: "1rem",
                        textAlign: "center",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.7rem",
                            color: "#64748b",
                            fontStyle: "italic",
                        }}
                    >
                        Built on a decade of peer-reviewed research at CMU
                    </span>
                </motion.div>
            </div>

            {/* Ambient glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "150%",
                    height: "150%",
                    background: "radial-gradient(circle at center, rgba(56, 189, 248, 0.08) 0%, transparent 60%)",
                    zIndex: -1,
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
