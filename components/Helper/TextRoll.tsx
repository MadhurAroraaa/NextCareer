"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import type { ReactNode } from "react"; 
import clsx from "clsx";

const STAGGER = 0.035;

interface TextRollProps {
    text: string;
    className?: string;
    center?: boolean;
    hoverEffect?: boolean;
    animateIn?: boolean;
}

const TextRoll: React.FC<TextRollProps> = ({
    text,
    className,
    center = false,
    hoverEffect = false,
    animateIn = false,
}) => {
    const letters = text.split("");
    const [isHovered, setIsHovered] = useState(false);

    const letterVariants = { initial: { y: "0%" }, hovered: { y: "-100%" } };
    const letterVariantsReverse = { initial: { y: "100%" }, hovered: { y: "0%" } };

    return (
        <motion.span
            className={clsx("relative inline-block overflow-hidden", className)}
            style={{ lineHeight: 1.2 }}
            onMouseEnter={hoverEffect ? () => setIsHovered(true) : undefined}
            onMouseLeave={hoverEffect ? () => setIsHovered(false) : undefined}
        >
            {letters.map((l, i) => {
                const delay = center
                    ? STAGGER * Math.abs(i - (letters.length - 1) / 2)
                    : STAGGER * i;
                const animateDelay = animateIn ? STAGGER * i : 0;
                const totalDelay = delay + animateDelay;

                return (
                    <span key={i} className="relative inline-block">
                        {/* Main letter */}
                        <motion.span
                            variants={letterVariants}
                            initial="initial"
                            animate={isHovered ? "hovered" : "initial"}
                            transition={{ ease: "easeInOut", delay: totalDelay }}
                            className="inline-block"
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>

                        {/* Hover rollover version */}
                        {hoverEffect && (
                            <motion.span
                                className="absolute inset-0 inline-block"
                                variants={letterVariantsReverse}
                                initial="initial"
                                animate={isHovered ? "hovered" : "initial"}
                                transition={{ ease: "easeInOut", delay: totalDelay }}
                            >
                                {l === " " ? "\u00A0" : l}
                            </motion.span>
                        )}
                    </span>
                );
            })}
        </motion.span>
    );
};

export default TextRoll;
