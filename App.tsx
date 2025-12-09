import React, { useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Capabilities } from './components/Capabilities';
import { Manifesto } from './components/Manifesto'; // Added
import { Process } from './components/Process';
import { Journal } from './components/Journal';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Ethos } from './components/Ethos';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="antialiased selection:bg-[#2E2E2E] selection:text-[#EEECE7]">
      <CustomCursor />

      <main className="w-full relative z-10 bg-[#EEECE7]">
        <Hero />
        <Ethos text="We shape ideas that settle like echoes in quiet rooms."
          highlightWords={["echoes"]}
          highlightColor="#D35400" />
        <SelectedWork />
        <Capabilities />
        <Ethos
          text="Our principles are rooted in clarity, defined by honesty, and built to endure."
          highlightWords={["clarity", "honesty", "endure"]}
          highlightColor="#D35400"
        />
        <Process />
        <Journal />
      </main>

      <div className="relative z-0">
        <Footer />
      </div>

      {/* Texture Overlay (Dust) */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}

export default App;