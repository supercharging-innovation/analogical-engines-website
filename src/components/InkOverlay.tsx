"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface InkOverlayProps {
  side: "left" | "right";
  children: ReactNode;
  className?: string;
}

export default function InkOverlay({ side, children, className = "" }: InkOverlayProps) {
  // Different organic blob shapes for variety
  const leftMask = `
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="
        M0,0 
        L70,0 
        Q78,8 75,18 
        Q71,28 77,38 
        Q83,48 76,58 
        Q69,68 78,78 
        Q85,88 72,95 
        Q65,100 0,100 
        Z
      " fill="white"/>
    </svg>
  `;

  const rightMask = `
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="
        M100,0 
        L30,0 
        Q22,8 25,18 
        Q29,28 23,38 
        Q17,48 24,58 
        Q31,68 22,78 
        Q15,88 28,95 
        Q35,100 100,100 
        Z
      " fill="white"/>
    </svg>
  `;

  const encodedMask = encodeURIComponent(side === "left" ? leftMask : rightMask);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        [side]: 0,
        width: "60%",
        background: "linear-gradient(180deg, rgba(5, 8, 16, 0.97) 0%, rgba(5, 8, 16, 0.95) 50%, rgba(5, 8, 16, 0.97) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        maskImage: `url("data:image/svg+xml,${encodedMask}")`,
        WebkitMaskImage: `url("data:image/svg+xml,${encodedMask}")`,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        padding: "4rem",
        boxShadow: side === "left"
          ? "20px 0 60px rgba(0, 0, 0, 0.5)"
          : "-20px 0 60px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          maxWidth: "540px",
          marginLeft: side === "left" ? "0" : "auto",
          marginRight: side === "left" ? "auto" : "0",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
