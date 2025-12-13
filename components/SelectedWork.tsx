import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';

gsap.registerPlugin(ScrollTrigger);

const projects: Project[] = [
    { id: 1, title: 'Amtams', role: 'Hometreats Bakery Shop', year: '2023', image: '/images/amtams-img.png', video: '/videos/amtams.mp4', aspectRatio: 'aspect-video', link: 'https://amtams.solicate.pecup.in' },
    { id: 2, title: 'Chlorophyll', role: 'Organic Laboratory', year: '2023', image: '/images/chlorophyll-img.png', video: '/videos/chlorophyll.mp4', aspectRatio: 'aspect-video', link: 'https://chlorophyll.solicate.pecup.in' },
    { id: 3, title: 'Kajal', role: 'UGC Portfolio', year: '2024', image: '/images/kajal-img.png', video: '/videos/kajal.mp4', aspectRatio: 'aspect-video', link: 'https://kajal.solicate.pecup.in' },
    { id: 4, title: 'Kernelspace', role: 'Technical Lab', year: '2024', image: '/images/kernelspace-img.png', video: '/videos/kernelspace.mp4', aspectRatio: 'aspect-video', link: 'https://kernelspace.solicate.pecup.in' },
    { id: 5, title: 'Vaani', role: 'Music Studio', year: '2024', image: '/images/vaani-img.png', video: '/videos/vaani.mp4', aspectRatio: 'aspect-video', link: 'https://vaani.solicate.pecup.in' },
];

export const SelectedWork: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
                    end: () => `+=${track.scrollWidth - window.innerWidth + 200}`, // Added 200px buffer
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
                    Selected Work (01—05)
                </div>
            </div>

            <div ref={trackRef} className="flex gap-24 px-12 md:px-24 w-max h-full items-center">
                {/* Intro Spacer */}
                <div className="w-[10vw] shrink-0" />

                {projects.map((project, index) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-[70vw] md:w-[40vw] shrink-0 flex flex-col gap-6 interactive cursor-none"
                        onMouseEnter={() => {
                            const video = videoRefs.current[index];
                            if (video) video.play();
                        }}
                        onMouseLeave={() => {
                            const video = videoRefs.current[index];
                            if (video) {
                                video.pause();
                                video.currentTime = 0;
                            }
                        }}
                    >
                        <div className={`relative ${project.aspectRatio || 'aspect-[4/3]'} overflow-hidden bg-faded-stone/20`}>
                            {/* Video Layer (Bottom) */}
                            {project.video && (
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    src={project.video}
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}

                            {/* Image Layer (Top) */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${project.video ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`}
                            />
                        </div>
                        <div className="flex justify-between items-baseline border-t border-soft-pewter pt-4 transition-colors duration-300 group-hover:border-nordic-charcoal">
                            <div>
                                <h3 className="font-display text-lg md:text-xl text-nordic-charcoal">{project.title}</h3>
                                <span className="text-sm text-nordic-charcoal/60">{project.role}</span>
                            </div>
                            <span className="text-sm font-mono text-nordic-charcoal/40">{project.year}</span>
                        </div>
                    </a>
                ))}

                {/* Visual Line at the end - Now treated as a card */}
                <div className="w-[70vw] md:w-[40vw] shrink-0 flex items-center justify-center gap-6 group cursor-pointer relative">
                    <svg width="220" height="48" className="overflow-visible">
                        <line x1="0" y1="24" x2="180" y2="24" className="stroke-nordic-charcoal/30 stroke-1" />

                        {/* Dot */}
                        <circle cx="186" cy="24" r="6" className="fill-transparent stroke-nordic-charcoal/30 stroke-1" />

                        {/* Process-style Expanding Halo */}
                        <circle
                            cx="186" cy="24" r="24"
                            style={{ transformOrigin: '186px 24px' }}
                            className="fill-birchwood/20 scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                        />
                    </svg>
                    <span className="font-display text-xl text-nordic-charcoal/40 italic transition-colors duration-300 group-hover:text-nordic-charcoal/80">Add Yours Here :D</span>
                </div>

                {/* Outro Spacer - Increased to keep the end visible longer */}
                <div className="w-[20vw] shrink-0" />
            </div>
        </section>
    );
};
