import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface PrinciplesProps {
    text?: string;
    highlightWords?: string[];
    highlightColor?: string;
}

const Word = ({
    children,
    progress,
    range,
    highlight,
    forceStatic
}: {
    children: string;
    progress: MotionValue<number>;
    range: [number, number];
    highlight?: boolean;
    forceStatic?: boolean;
}) => {
    const opacity = useTransform(progress, range, [0, 1]);
    const blur = useTransform(progress, range, [10, 0]);
    const y = useTransform(progress, range, [20, 0]);

    return (
        <span className="relative inline-block mr-2 lg:mr-4">
            <motion.span
                style={{
                    opacity,
                    filter: useTransform(blur, (v) => `blur(${v}px)`),
                    y,
                    color: highlight ? "#D35400" : undefined
                }}
                className="inline-block"
            >
                {children}
            </motion.span>
        </span>
    );
};

export const Principles: React.FC<PrinciplesProps> = ({
    text = "Our principles are rooted in clarity, defined by honesty, and built to endure.",
    highlightWords = [],
    highlightColor = "#D35400"
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "start 0.2"]
    });

    const words = text.split(" ");

    return (
        <div ref={containerRef} className="relative min-h-[50vh] flex items-center justify-center py-32 bg-[#EEECE7]">
            <div className="absolute top-12 right-6 md:right-12 text-xs uppercase tracking-widest text-nordic-charcoal/50 z-20">
                Principles
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-20">
                <h2 className="font-serif-display text-4xl md:text-6xl lg:text-7xl leading-[1.2] text-[#2E2E2E] flex flex-wrap justify-center text-center">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);

                        // Check highlight
                        const cleanWord = word.replace(/[.,;!?]$/, "").toLowerCase();
                        const shouldHighlight = highlightWords.some(w => w.toLowerCase() === cleanWord);

                        return (
                            <Word
                                key={i}
                                progress={scrollYProgress}
                                range={[start, end]}
                                highlight={shouldHighlight}
                            >
                                {word}
                            </Word>
                        );
                    })}
                </h2>
            </div>
        </div>
    );
};
