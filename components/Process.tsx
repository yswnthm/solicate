import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { label: 'Listen', desc: 'Deep immersion in the problem space.' },
    { label: 'Define', desc: 'Isolating the core truth.' },
    { label: 'Shape', desc: 'Exploration of form and function.' },
    { label: 'Build', desc: 'Rigorous engineering.' },
    { label: 'Refine', desc: 'Polishing until silence.' },
];

export const Process: React.FC = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<SVGPathElement>(null);
    const dotsRef = useRef<(SVGCircleElement | null)[]>([]);
    const [activeStep, setActiveStep] = React.useState<number>(-1);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const line = lineRef.current;
            if (!line) return;

            const length = line.getTotalLength();

            gsap.set(line, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            // Master timeline synced to scroll of the track
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: trackRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
                onUpdate: function () {
                    // Calculate active step based on timeline progress
                    const progress = this.progress();
                    // Map progress to step indices (0 to 4)
                    const index = Math.round(progress * (steps.length - 1));
                    setActiveStep(index);
                }
            });

            // Draw the line over the course of the scroll
            tl.to(line, {
                strokeDashoffset: 0,
                ease: 'none',
                duration: 1
            }, 0);

            // Reveal dots progressively
            dotsRef.current.forEach((dot, index) => {
                if (!dot) return;

                // Calculate precise trigger point based on step index
                const startPos = index / (steps.length - 1 || 1);

                // Animate dot scale/opacity
                tl.fromTo(dot,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.1, // Quick pop in
                        ease: "back.out(1.7)"
                    },
                    Math.max(0, startPos - 0.05) // Trigger slightly before the line hits the exact center
                );
            });

        }, trackRef);

        return () => ctx.revert();
    }, []);

    // Define the Y-offsets for each step to match the sine wave
    // Path: M 0,300 C 150,300 150,100 300,100 S 450,300 600,300 S 750,500 900,500 S 1050,300 1200,300
    // Visual Y coordinates: 
    // Step 0: 300 (0 offset)
    // Step 1: 100 (-200 offset)
    // Step 2: 300 (0 offset)
    // Step 3: 500 (+200 offset)
    // Step 4: 300 (0 offset)

    return (
        <div ref={trackRef} className="relative h-[300vh]">
            <section ref={containerRef} className="sticky top-0 h-screen py-32 px-6 md:px-24 bg-arctic-linen flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-12 left-6 md:left-12 text-xs uppercase tracking-widest text-nordic-charcoal/50">
                    Process
                </div>

                <div className="relative w-full max-w-6xl h-[600px] flex flex-col md:flex-row justify-between items-center z-10">

                    {/* SVG Path Background */}
                    <svg
                        className="absolute inset-x-0 top-0 w-full h-full pointer-events-none visible md:invisible"
                        preserveAspectRatio="none"
                    >
                        {/* Vertical line for mobile */}
                        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#E1E0DC" strokeWidth="1" />
                    </svg>

                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none invisible md:visible"
                        viewBox="0 0 1200 600"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* 
                           Sine wave path passing through:
                           (0,300) -> (300,100) -> (600,300) -> (900,500) -> (1200,300)
                        */}
                        <path
                            ref={lineRef}
                            d="M 0,300 C 150,300 150,100 300,100 S 450,300 600,300 S 750,500 900,500 S 1050,300 1200,300"
                            fill="none"
                            stroke="#1F1F1F"
                            strokeWidth="1.5"
                            className="w-full"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center md:items-start group w-48 text-center md:text-left my-8 md:my-0"
                            style={{
                                transform: (() => {
                                    // Match the Y-coordinates of the SVG path
                                    // Center is 300. 
                                    // 100 is -200px (Up)
                                    // 500 is +200px (Down)

                                    // Mobile reset
                                    if (typeof window !== 'undefined' && window.innerWidth < 768) return 'none';

                                    switch (index) {
                                        case 0: return 'translateY(0px)';    // Y=300
                                        case 1: return 'translateY(-200px)'; // Y=100
                                        case 2: return 'translateY(0px)';    // Y=300
                                        case 3: return 'translateY(200px)';  // Y=500
                                        case 4: return 'translateY(0px)';    // Y=300
                                        default: return 'none';
                                    }
                                })(),
                            }}
                        >
                            {/* The Dot */}
                            <div className="relative mb-4 md:mb-6 flex justify-center md:justify-start w-full">
                                <svg width="14" height="14" className="overflow-visible">
                                    <circle
                                        ref={(el) => { dotsRef.current[index] = el; }}
                                        cx="7" cy="7" r="5"
                                        className="fill-arctic-linen stroke-nordic-charcoal stroke-2"
                                    />
                                    {/* Pulse effect */}
                                    <circle
                                        cx="7" cy="7" r="14"
                                        className={`fill-birchwood/20 scale-0 opacity-0 transition-all duration-500 origin-center
                                            ${activeStep === index ? 'scale-100 opacity-100' : 'group-hover:scale-100 group-hover:opacity-100'}
                                        `}
                                    />
                                </svg>
                            </div>

                            <h3 className={`font-display text-lg tracking-wide mb-2 transition-transform duration-300
                                ${activeStep === index ? '-translate-y-1' : 'group-hover:-translate-y-1'}
                            `}>
                                {step.label}
                            </h3>
                            <p className={`text-sm text-nordic-charcoal/60 font-light translate-y-2 transition-all duration-500 line-clamp-2
                                ${activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 group-hover:translate-y-0'}
                            `}>
                                {step.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </section>
        </div>
    );
};
