import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface EthosProps {
  text?: string;
}

export const Ethos: React.FC<EthosProps> = ({
  text = "We shape ideas that linger like echoes in quiet rooms."
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"]
  });

  const words = text.split(" ");

  return (
    <div ref={trackRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#EEECE7]">
        <div className="absolute top-12 left-6 md:left-12 text-xs uppercase tracking-widest text-nordic-charcoal/50 z-20">
          Ethos
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
          <h2 className="font-serif-display text-4xl md:text-7xl lg:text-8xl leading-[1.1] text-[#2E2E2E]/10 flex flex-wrap gap-x-4 md:gap-x-8">
            {words.map((word, i) => {
              // Stagger the fill effect based on word index and scroll progress
              const start = i / words.length;
              const end = start + (1 / words.length);

              // We accelerate the reveal slightly so it completes before the very end of the scroll
              // to ensure it sits fully revealed for a moment.
              const adjustedEnd = Math.min(1, end + 0.1);

              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

              return (
                <span key={i} className="relative">
                  <span className="absolute inset-0 text-[#2E2E2E]/10 select-none">{word}</span>

                  <motion.span
                    style={{ opacity }}
                    className="relative text-[#2E2E2E]"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </h2>
        </div>
      </div>
    </div>
  );
};