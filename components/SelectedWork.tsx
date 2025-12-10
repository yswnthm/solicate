import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';

gsap.registerPlugin(ScrollTrigger);

const projects: Project[] = [
    { id: 1, title: 'Aarhus Arkitekterne', role: 'Brand Identity', year: '2023', image: 'https://picsum.photos/800/600?random=1' },
    { id: 2, title: 'Oslo Light', role: 'E-Commerce', year: '2023', image: 'https://picsum.photos/800/600?random=2' },
    { id: 3, title: 'Vest Land', role: 'Digital Product', year: '2024', image: 'https://picsum.photos/800/600?random=3' },
    { id: 4, title: 'Copenhagen Ports', role: 'System Design', year: '2024', image: 'https://picsum.photos/800/600?random=4' },
];

export const SelectedWork: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            if (!track) return;

            // Calculate the total width to scroll
            // Using a function to recalculate on resize is ideal, but for this demo standard setup works

            const getScrollAmount = () => {
                let trackWidth = track.scrollWidth;
                return -(trackWidth - window.innerWidth);
            };

            const tween = gsap.to(track, {
                x: getScrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: () => `+=${track.scrollWidth - window.innerWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full overflow-hidden bg-arctic-linen flex items-center relative">
            {/* Label */}
            <div className="absolute top-12 left-6 md:left-12 z-20">
                <div className="text-xs uppercase tracking-widest text-nordic-charcoal/50">
                    Selected Work (01—04)
                </div>
            </div>

            <div ref={trackRef} className="flex gap-24 px-12 md:px-24 w-max h-full items-center">
                {/* Intro Spacer */}
                <div className="w-[10vw] shrink-0" />

                {projects.map((project) => (
                    <div key={project.id} className="group relative w-[70vw] md:w-[40vw] shrink-0 flex flex-col gap-6 interactive cursor-none">
                        <div className="relative aspect-[4/3] overflow-hidden bg-faded-stone/20">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                            />
                        </div>
                        <div className="flex justify-between items-baseline border-t border-soft-pewter pt-4 transition-colors duration-300 group-hover:border-nordic-charcoal">
                            <div>
                                <h3 className="font-display text-lg md:text-xl text-nordic-charcoal">{project.title}</h3>
                                <span className="text-sm text-nordic-charcoal/60">{project.role}</span>
                            </div>
                            <span className="text-sm font-mono text-nordic-charcoal/40">{project.year}</span>
                        </div>
                    </div>
                ))}

                {/* Visual Line at the end */}
                <div className="w-[20vw] shrink-0 flex items-center justify-start pl-12">
                    <svg width="180" height="12" className="overflow-visible">
                        <circle cx="4" cy="6" r="3" className="fill-transparent stroke-nordic-charcoal/30 stroke-1" />
                        <line x1="12" y1="6" x2="180" y2="6" className="stroke-nordic-charcoal/30 stroke-1" />
                    </svg>
                </div>

                {/* Outro Spacer */}
                <div className="w-[5vw] shrink-0" />
            </div>
        </section>
    );
};
