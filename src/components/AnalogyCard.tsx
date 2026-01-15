"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnalogyCardProps {
    source: string;
    target: string;
    imageSrc: string;
    delay?: number;
}

export default function AnalogyCard({ source, target, imageSrc, delay = 0 }: AnalogyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.4, 0, 0.2, 1],
            }}
            viewport={{ once: true, margin: "-50px" }}
            style={{
                marginBottom: "1.5rem",
            }}
        >
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 60px rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(125, 211, 252, 0.15)",
                }}
            >
                {/* Image Container */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 9",
                    }}
                >
                    <Image
                        src={imageSrc}
                        alt={`${source} inspiring ${target}`}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Gradient overlay at bottom for text readability */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "50%",
                            background: "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 50%, transparent 100%)",
                            pointerEvents: "none",
                        }}
                    />
                </div>

                {/* Caption overlay */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "1.25rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.75rem",
                    }}
                >
                    {/* Source */}
                    <span
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.95rem",
                            color: "#e2e8f0",
                            fontWeight: 400,
                        }}
                    >
                        {source}
                    </span>

                    {/* Arrow */}
                    <motion.svg
                        width="28"
                        height="10"
                        viewBox="0 0 28 10"
                        fill="none"
                        style={{ flexShrink: 0 }}
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path
                            d="M0 5H24M24 5L19 1M24 5L19 9"
                            stroke="#7dd3fc"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </motion.svg>

                    {/* Target */}
                    <span
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.95rem",
                            color: "#f8fafc",
                            fontWeight: 600,
                        }}
                    >
                        {target}
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}
