"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Analogy {
    source: string;
    target: string;
    image: string;
}

interface AnalogyCarouselProps {
    analogies: Analogy[];
    interval?: number;
}

export default function AnalogyCarousel({ analogies, interval = 4000 }: AnalogyCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % analogies.length);
        }, interval);

        return () => clearInterval(timer);
    }, [analogies.length, interval]);

    const currentAnalogy = analogies[currentIndex];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
                marginBottom: "1.5rem",
            }}
        >
            {/* Image Container */}
            <div
                style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 60px rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(125, 211, 252, 0.15)",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 9",
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                position: "absolute",
                                inset: 0,
                            }}
                        >
                            <Image
                                src={currentAnalogy.image}
                                alt={`${currentAnalogy.source} inspiring ${currentAnalogy.target}`}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Gradient overlay */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "60%",
                            background: "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 50%, transparent 100%)",
                            pointerEvents: "none",
                            zIndex: 1,
                        }}
                    />
                </div>

                {/* Caption */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "1rem 1.25rem",
                        zIndex: 2,
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.75rem",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.95rem",
                                    color: "#e2e8f0",
                                }}
                            >
                                {currentAnalogy.source}
                            </span>

                            <motion.svg
                                width="28"
                                height="10"
                                viewBox="0 0 28 10"
                                fill="none"
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

                            <span
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.95rem",
                                    color: "#f8fafc",
                                    fontWeight: 600,
                                }}
                            >
                                {currentAnalogy.target}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Dots indicator */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginTop: "0.75rem",
                }}
            >
                {analogies.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: index === currentIndex ? "24px" : "8px",
                            height: "8px",
                            borderRadius: "4px",
                            background: index === currentIndex ? "#7dd3fc" : "rgba(125, 211, 252, 0.3)",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            padding: 0,
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </motion.div>
    );
}
