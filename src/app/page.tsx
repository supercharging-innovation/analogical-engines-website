"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/useIsMobile";
import NightscapeBackground from "@/components/NightscapeBackground";
import InkOverlay from "@/components/InkOverlay";
import AnalogyCarousel from "@/components/AnalogyCarousel";
import LightningBolt from "@/components/LightningBolt";
import ComingSoon from "@/components/ComingSoon";
import LightningCaptureScene from "@/components/LightningCaptureScene";
import PaperShowcase from "@/components/PaperShowcase";
import PowerGridScene from "@/components/PowerGridScene";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { motion } from "framer-motion";
import Link from "next/link";

import { useRef } from "react";

export default function Home() {
    const mainRef = useRef<HTMLElement>(null);
    const { progress, activeSection } = useScrollProgress(mainRef);
    const isMobile = useIsMobile();

    const analogies = [
        { source: "Kingfisher's beak", target: "Shinkansen bullet train", image: "/images/analogies/kingfisher-train.jpeg" },
        { source: "Bicycle chain mechanics", target: "Wright Brothers' airplane", image: "/images/analogies/bicycle-airplane.jpeg" },
        { source: "Origami folding patterns", target: "NASA solar arrays", image: "/images/analogies/origami-solar.jpeg" },
    ];

    return (
        <main
            ref={mainRef}
            style={{
                position: "relative",
                height: isMobile ? "100dvh" : "100vh",
                overflowY: "auto",
                scrollSnapType: isMobile ? "y proximity" : "y mandatory",
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
            }}
        >
            {/* Fixed Background */}
            <NightscapeBackground scrollProgress={progress} />

            {/* ========== SECTION 1: Hero ========== */}
            <section
                style={{
                    position: "relative",
                    minHeight: isMobile ? "100dvh" : "100vh",
                    height: isMobile ? "100dvh" : "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                    scrollSnapAlign: "start",
                    scrollSnapStop: "always",
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    style={{
                        textAlign: "center",
                        padding: "2rem",
                        maxWidth: "900px",
                    }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(3.25rem, 9vw, 6rem)",
                            fontWeight: 800,
                            lineHeight: 1.0,
                            color: "#f8fafc",
                            marginBottom: "2rem",
                            textShadow: "0 4px 60px rgba(0, 0, 0, 0.6)",
                            letterSpacing: "-0.035em",
                        }}
                    >
                        Breakthroughs don&apos;t come from nowhere.
                        <br />
                        <span
                            style={{
                                background: "linear-gradient(135deg, #a5f3fc 0%, #38bdf8 50%, #0ea5e9 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                filter: "drop-shadow(0 0 30px rgba(56, 189, 248, 0.4))",
                            }}
                        >
                            They come from elsewhere.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        style={{
                            fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                            color: "#b8c5d6",
                            maxWidth: "700px",
                            margin: "0 auto",
                            lineHeight: 1.8,
                            fontStyle: "italic",
                            fontWeight: 300,
                        }}
                    >
                        What does a kingfisher have to do with the world&apos;s fastest train?
                        <br />
                        How did origami inspire NASA&apos;s solar arrays?
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        style={{
                            fontSize: "0.875rem",
                            color: "#64748b",
                            marginTop: "4rem",
                        }}
                    >
                        <motion.span
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ display: "inline-block", fontSize: "1.5rem" }}
                        >
                            ↓
                        </motion.span>
                    </motion.div>
                </motion.div>
            </section>

            {/* ========== SECTION 2: Lightning Strikes (Analogies) ========== */}
            <section
                style={{
                    position: "relative",
                    minHeight: isMobile ? "100dvh" : "100vh",
                    height: isMobile ? "100dvh" : "100vh",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    scrollSnapAlign: "start",
                }}
            >
                {/* Lightning bolts in background */}
                {activeSection >= 1 && (
                    <>
                        <LightningBolt x={75} delay={0} intensity="high" />
                        <LightningBolt x={85} delay={0.5} intensity="medium" />
                        <LightningBolt x={65} delay={1.2} intensity="low" />
                        <LightningBolt x={90} delay={2} intensity="medium" />
                    </>
                )}

                <InkOverlay side="left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: isMobile ? "clamp(1.75rem, 6vw, 2.25rem)" : "clamp(2rem, 5vw, 3rem)",
                                fontWeight: 600,
                                lineHeight: 1.15,
                                marginBottom: isMobile ? "1.25rem" : "1.75rem",
                                color: "#f8fafc",
                                textShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            History&apos;s greatest breakthroughs
                            <br />
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #a5f3fc 0%, #38bdf8 50%, #0ea5e9 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                came from unexpected connections.
                            </span>
                        </h2>

                        <AnalogyCarousel analogies={analogies} interval={4500} />

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: isMobile ? "1rem" : "1.35rem",
                                color: "#e2e8f0",
                                lineHeight: 1.7,
                                fontStyle: "italic",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            But these moments of insight were rare.
                            <br />
                            Unpredictable. Uncontrollable.
                            <br />
                            <span style={{ color: "#7dd3fc", fontStyle: "normal", fontWeight: 600 }}>
                                Like trying to catch lightning.
                            </span>
                        </motion.p>
                    </motion.div>
                </InkOverlay>
            </section>

            {/* ========== SECTION 3: Capturing Lightning ========== */}
            <section
                style={{
                    position: "relative",
                    minHeight: isMobile ? "100dvh" : "100vh",
                    height: isMobile ? "100dvh" : "100vh",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    scrollSnapAlign: "start",
                }}
            >
                {/* Animated Lightning Capture Scene on LEFT side - hidden on mobile */}
                {!isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        style={{
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "50%",
                            height: "80%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 5,
                        }}
                    >
                        <PaperShowcase />
                    </motion.div>
                )}

                {/* Content on RIGHT side with ink overlay */}
                <InkOverlay side="right">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ width: "100%", height: "200px", marginBottom: "1rem" }}>
                            <LightningCaptureScene />
                        </div>
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: isMobile ? "clamp(1.75rem, 6vw, 2.25rem)" : "clamp(2.25rem, 5.5vw, 3.5rem)",
                                fontWeight: 600,
                                lineHeight: 1.1,
                                marginBottom: isMobile ? "1.25rem" : "1.75rem",
                                color: "#f8fafc",
                                textShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            What if you could{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #a5f3fc 0%, #22d3ee 50%, #06b6d4 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                capture lightning?
                            </span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: isMobile ? "0.95rem" : "1.2rem",
                                color: "#e2e8f0",
                                lineHeight: 1.6,
                                marginBottom: isMobile ? "1rem" : "1.5rem",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            A decade of peer-reviewed research into how breakthroughs actually happen.
                            <br />
                            <span style={{ color: "#f8fafc", fontWeight: 600 }}>
                                Now we&apos;re making them repeatable.
                            </span>
                        </motion.p>

                        {/* YouTube Video */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                            style={{
                                marginBottom: "1.5rem",
                                display: "flex",
                                justifyContent: isMobile ? "center" : "flex-start",
                            }}
                        >
                            <YouTubeEmbed
                                videoId="4LLgrYOfxTU"
                                title="Analogical Engines - How it works"
                                compact={isMobile === true}
                            />
                        </motion.div>

                    </motion.div>
                </InkOverlay>
            </section>

            {/* ========== SECTION 3b: Our Framework (Mobile-only separate section) ========== */}
            {isMobile && (
                <section
                    style={{
                        position: "relative",
                        minHeight: "100dvh",
                        height: "100dvh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        scrollSnapAlign: "start",
                    }}
                >
                    <InkOverlay side="left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <PaperShowcase compact />
                        </motion.div>
                    </InkOverlay>
                </section>
            )}

            {/* ========== SECTION 4: Building the Grid ========== */}
            <section
                style={{
                    position: "relative",
                    minHeight: isMobile ? "100dvh" : "100vh",
                    height: isMobile ? "100dvh" : "100vh",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    scrollSnapAlign: "start",
                }}
            >
                {/* Animated Power Grid Scene on RIGHT side - hidden on mobile */}
                {!isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        style={{
                            position: "absolute",
                            right: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "50%",
                            height: "80%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 5,
                        }}
                    >
                        <PowerGridScene />
                    </motion.div>
                )}

                {/* Content on LEFT side with ink overlay */}
                <InkOverlay side="left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: isMobile ? "clamp(1.75rem, 6vw, 2.25rem)" : "clamp(2rem, 5vw, 3rem)",
                                fontWeight: 600,
                                lineHeight: 1.15,
                                marginBottom: isMobile ? "1.25rem" : "1.75rem",
                                color: "#f8fafc",
                                textShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            Now we&apos;re building
                            <br />
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                the power grid.
                            </span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: isMobile ? "1.1rem" : "1.5rem",
                                color: "#f8fafc",
                                lineHeight: 1.7,
                                marginBottom: isMobile ? "0.75rem" : "1.25rem",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            <strong>Analogical Engines</strong> turns serendipity into a system.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: isMobile ? "0.95rem" : "1.25rem",
                                color: "#e2e8f0",
                                lineHeight: 1.7,
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            An AI platform that helps R&D teams escape fixation and discover non-obvious solutions from unexpected domains.
                        </motion.p>
                    </motion.div>
                </InkOverlay>
            </section>

            {/* ========== SECTION 5: Coming Soon ========== */}
            <section
                style={{
                    position: "relative",
                    minHeight: isMobile ? "100dvh" : "100vh",
                    height: isMobile ? "100dvh" : "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                    scrollSnapAlign: "start",
                    scrollSnapStop: "always",
                }}
            >
                <ComingSoon />
            </section>
        </main>
    );
}
