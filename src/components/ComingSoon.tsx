"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ComingSoon() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                textAlign: "center",
                padding: "2rem",
            }}
        >
            {/* Company Logo */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <Image
                    src="/assets/analogical engines_dark_background.png"
                    alt="Analogical Engines"
                    width={280}
                    height={80}
                    style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "280px",
                    }}
                    priority
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{
                    display: "inline-block",
                    padding: "0.6rem 1.75rem",
                    background: "linear-gradient(135deg, rgba(125, 211, 252, 0.2), rgba(56, 189, 248, 0.12))",
                    border: "1px solid rgba(125, 211, 252, 0.4)",
                    borderRadius: "100px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#a5f3fc",
                    fontWeight: 500,
                }}
            >
                Coming Soon
            </motion.div>

            {/* Institutional Logos */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    marginTop: "1.5rem",
                }}
            >
                <p
                    style={{
                        fontSize: "0.875rem",
                        color: "#94a3b8",
                        margin: 0,
                    }}
                >
                    From the researchers at
                </p>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2.5rem",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        src="/assets/cmu-wordmark-stacked-r.png"
                        alt="Carnegie Mellon University"
                        width={120}
                        height={50}
                        style={{
                            width: "auto",
                            height: "40px",
                            filter: "brightness(0) invert(1)",
                            opacity: 0.8,
                        }}
                    />
                    <Image
                        src="/assets/hcii-logo.png"
                        alt="Human-Computer Interaction Institute"
                        width={100}
                        height={40}
                        style={{
                            width: "auto",
                            height: "35px",
                            filter: "brightness(0) invert(1)",
                            opacity: 0.8,
                        }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
