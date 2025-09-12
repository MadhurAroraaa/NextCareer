"use client"

import { motion, useCycle, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights
});

const STAGGER = 0.035;

const HeroPage: React.FC = () => {
    const [animationSequence, cycleAnimationSequence] = useCycle("textIn", "idle");

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        cycleAnimationSequence();
    }, [cycleAnimationSequence]);

    return (
        <motion.div
            ref={targetRef}
            style={{ opacity }}
            className="hero-background relative flex flex-col items-center justify-center  min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden text-center"
        >
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 max-w-full px-2 md:px-6">
                {/* Heading */}
                <TextRoll
                    className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white tracking-tight cursor-pointer ${epilogue.className}`}
                    center
                    hoverEffect={isClient && window.innerWidth >= 640}
                    animateIn={animationSequence === "textIn"}
                >
                    NextCareer
                </TextRoll>

                {/* Multi-line description */}
                <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 max-w-3xl">
                    <TextRoll
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight"
                        animateIn={animationSequence === "textIn"}
                    >
                        NextCareer helps students and professionals discover jobs,
                    </TextRoll>
                    <TextRoll
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight"
                        animateIn={animationSequence === "textIn"}
                    >
                        internships, and resources to grow their careers.
                    </TextRoll>
                </div>
            </div>
        </motion.div>
        
    );
};

interface TextRollProps {
    children: string;
    className?: string;
    center?: boolean;
    hoverEffect?: boolean;
    animateIn?: boolean;
}

const TextRoll: React.FC<TextRollProps> = ({
    children,
    className,
    center = false,
    hoverEffect = false,
    animateIn = false,
}) => {
    const letters = children.split("");
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => { };

    const letterVariants = { initial: { y: "0%" }, hovered: { y: "-100%" } };
    const letterVariantsReverse = { initial: { y: "100%" }, hovered: { y: "0%" } };

    return (
        <motion.span
            className={clsx("relative inline-block overflow-hidden", className)}
            style={{ lineHeight: 1.2 }}
            onMouseEnter={hoverEffect ? handleMouseEnter : undefined}
            onMouseLeave={hoverEffect ? handleMouseLeave : undefined}
        >
            {letters.map((l, i) => {
                const delay = center
                    ? STAGGER * Math.abs(i - (letters.length - 1) / 2)
                    : STAGGER * i;
                const animateDelay = animateIn ? STAGGER * i : 0;
                const totalDelay = delay + animateDelay;

                if (hoverEffect) {
                    return (
                        <span key={i} className="relative inline-block">
                            <motion.span
                                variants={letterVariants}
                                initial="initial"
                                animate={isHovered ? "hovered" : "initial"}
                                transition={{ ease: "easeInOut", delay: totalDelay }}
                                className="inline-block"
                            >
                                {l === " " ? "\u00A0" : l}
                            </motion.span>
                            <motion.span
                                className="absolute inset-0 inline-block"
                                variants={letterVariantsReverse}
                                initial="initial"
                                animate={isHovered ? "hovered" : "initial"}
                                transition={{ ease: "easeInOut", delay: totalDelay }}
                                onAnimationComplete={() => {
                                    if (isHovered) setIsHovered(false);
                                }}
                            >
                                {l === " " ? "\u00A0" : l}
                            </motion.span>
                        </span>
                    );
                } else {
                    return (
                        <motion.span
                            key={i}
                            className="inline-block"
                            initial={{ y: "100%" }}
                            animate={animateIn ? { y: "0%" } : { y: "0%" }}
                            transition={{ ease: "easeOut", delay: totalDelay }}
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    );
                }
            })}
            
        </motion.span>
    );
};

export default HeroPage;
export { TextRoll };
