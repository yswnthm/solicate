import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  const textScale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const orbScale = useTransform(scrollY, [0, 800], [0.8, 30]);
  const orbOpacity = useTransform(scrollY, [0, 600], [0.4, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#EEECE7]">
      {/* Background Orb */}
      <motion.div
        style={{ scale: orbScale, opacity: orbOpacity }}
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#A88C5D] to-[#EEECE7] blur-[80px]"
      />

      {/* Main Typography */}
      <motion.div
        style={{ scale: textScale, opacity: textOpacity }}
        className="z-10 relative flex flex-col items-center"
      >
        <h1 className="font-serif-display text-[15vw] leading-none tracking-tighter text-[#2E2E2E] mix-blend-multiply">
          SOLICATE
        </h1>
        <p className="mt-8 font-sans-ui text-[#2E2E2E] tracking-[0.2em] text-sm uppercase opacity-60">
          Experiential Creative Studio
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-[#2E2E2E]/20 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-full h-1/2 bg-[#2E2E2E]"
          />
        </div>
      </motion.div>
    </section>
  );
};
