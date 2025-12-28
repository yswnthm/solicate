import React, { useEffect, useRef } from "react";

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        sectionRef.current.style.setProperty("--scroll", `${scrolled}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial set

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#EEECE7]"
      style={
        {
          "--scroll": "0",
        } as React.CSSProperties
      }
    >
      {/* Background Orb */}
      <div
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#A88C5D] to-[#EEECE7] blur-[80px] will-change-transform"
        style={{
          transform: "scale(calc(0.8 + (var(--scroll) / 800 * 29.2)))", // 0.8 -> 30 roughly
          opacity: "calc(0.4 - (var(--scroll) / 600))", // 0.4 -> 0
        }}
      />

      {/* Main Typography */}
      <div
        className="z-10 relative flex flex-col items-center will-change-transform"
        style={{
          transform: "scale(calc(1 + (var(--scroll) / 500 * 0.5)))", // 1 -> 1.5
          opacity: "calc(1 - (var(--scroll) / 300))", // 1 -> 0
        }}
      >
        <h1 className="font-serif-display text-[15vw] leading-none tracking-tighter text-[#2E2E2E] mix-blend-multiply">
          SOLICATE
        </h1>
        <p className="mt-8 font-sans-ui text-[#2E2E2E] tracking-[0.2em] text-sm uppercase opacity-60">
          Experiential Creative Studio
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          opacity: "calc(1 - (var(--scroll) / 300))",
        }}
      >
        <p className="font-sans-ui text-[10px] uppercase tracking-[0.2em] text-[#2E2E2E]/60">
          Scroll to Enter
        </p>
        <div className="w-[1px] h-12 bg-[#2E2E2E]/20 overflow-hidden relative">
          <div className="absolute top-0 w-full h-1/2 bg-[#2E2E2E] animate-scroll-line" />
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-line {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(48px);
          }
        }
        .animate-scroll-line {
          animation: scroll-line 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
