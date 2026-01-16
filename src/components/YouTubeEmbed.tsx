"use client";

import { motion } from "framer-motion";
import React from "react";

interface YouTubeEmbedProps {
    videoId: string;
    title?: string;
    className?: string;
    compact?: boolean;
}

export default function YouTubeEmbed({ videoId, title = "YouTube video", className = "", compact = false }: YouTubeEmbedProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={className}
            style={{
                position: "relative",
                width: "100%",
                maxWidth: compact ? "280px" : "100%",
                paddingBottom: compact ? "45%" : "56.25%", // Compact: ~16:11, Full: 16:9
                borderRadius: compact ? "12px" : "16px",
                overflow: "hidden",
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(125, 211, 252, 0.2)",
                boxShadow: compact
                    ? "0 10px 25px -6px rgba(0, 0, 0, 0.4)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
        >
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                }}
            />
        </motion.div>
    );
}

