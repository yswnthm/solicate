import React, { useRef } from 'react';
import MuxPlayer from "@mux/mux-player-react";
import { Project } from '../types';

const projects: Project[] = [
    {
        id: 1,
        title: 'Amtams',
        role: 'Hometreats Bakery Shop',
        year: '2025',
        image: '/images/amtams-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://amtams.solicate.pecup.in',
        playbackId: '6SzwPC3JhX023IB1Uy4k301qgBKvWqEVKYeEEatjKygeI',
        description: 'A cozy digital storefront for artisanal baked goods, featuring warm aesthetics and seamless ordering.'
    },
    // {
    //     id: 2,
    //     title: 'Chlorophyll',
    //     role: 'Organic Laboratory',
    //     year: '2025',
    //     image: '/images/chlorophyll-img.png',
    //     aspectRatio: 'aspect-video',
    //     link: 'https://chlorophyll.solicate.pecup.in',
    //     playbackId: 'Pzu8MmdZbCkG173BqyFv3DWSGtO02OrN02woMeGdvJRX8',
    //     description: 'An immersive platform for an organic laboratory, highlighting sustainable practices through visual storytelling.'
    // },
    {
        id: 3,
        title: 'Kajal',
        role: 'UGC Portfolio',
        year: '2025',
        image: '/images/kajal-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://kajal.solicate.in',
        playbackId: '9UTutoAr02u1oS02yDpS00ZfGfYlwSOaj02OtqzUXzzFnnQ',
        description: 'A dynamic portfolio showcasing user-generated content with a focus on bold typography and fluid transitions.'
    },
    // {
    //     id: 4,
    //     title: 'Kernelspace',
    //     role: 'Technical Lab',
    //     year: '2025',
    //     image: '/images/kernelspace-img.png',
    //     aspectRatio: 'aspect-video',
    //     link: 'https://kernelspace.solicate.pecup.in',
    //     playbackId: 'VnfaCxXQPMQVNYoIGUDBYPVewBbqmuM00vksMSuhBXdw',
    //     description: 'A cutting-edge interface for a tech lab, emphasizing precision, data visualization, and modern design principles.'
    // },
    {
        id: 5,
        title: 'Vaani',
        role: 'Music Studio',
        year: '2025',
        image: '/images/vaani-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://vaani.solicate.pecup.in',
        playbackId: '8RNpU01rebBYdeGxyUa52HJSPPDBfjQFJJHEv9KV00RgE',
        description: 'A sonic visual experience for a music studio, capturing the essence of sound through rhythmically paced motion.'
    },
    {
        id: 6,
        title: 'Lumina',
        role: 'Photography Studio',
        year: '2026',
        image: '/images/lumina-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://lumina.solicate.in',
        description: 'A curated visual narrative for a photography studio, focusing on light, composition, and moments captured in time.'
    },
    {
        id: 7,
        title: 'Evolve',
        role: 'Real Estate Company',
        year: '2025',
        image: '/images/evolve-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://evolve.solicate.in',
        description: 'A modern real estate platform exploring architectural elegance and seamless property discovery.'
    },
    {
        id: 8,
        title: 'Prism',
        role: 'Wedding Event Planner',
        year: '2025',
        image: '/images/prism-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://prism.solicate.in',
        description: 'An enchanting digital experience for wedding planning, blending organizational clarity with celebratory aesthetics.'
    },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [isMobile, setIsMobile] = React.useState(true);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const videoRef = useRef<any>(null);
    const timeoutRef = useRef<any>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handleMouseEnter = () => {
        // Clear any existing timeout just in case
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // Set delay before playing
        timeoutRef.current = setTimeout(() => {
            if (videoRef.current?.play) {
                setIsPlaying(true);
                videoRef.current.play();
            }
        }, 3500);
    };

    const handleMouseLeave = () => {
        // Cancel play if mouse leaves before timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setIsPlaying(false);
        if (videoRef.current?.pause) {
            videoRef.current.pause();
            if (videoRef.current.currentTime) {
                videoRef.current.currentTime = 0;
            }
        }
    };

    return (
        <div
            className="w-full flex justify-center pb-12 md:pb-24 md:sticky"
            style={{
                zIndex: index + 1,
                top: isMobile ? 'auto' : `calc(6rem + ${index * 1.5}rem)`
            }}
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full md:w-[70vw] lg:w-[60vw] bg-[#EEECE7] rounded-md overflow-hidden border border-black/5 shadow-sm transition-transform duration-500 hover:scale-[1.01]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={`relative ${project.aspectRatio || 'aspect-[16/9]'} overflow-hidden bg-faded-stone/20`}>
                    {/* Video Layer */}
                    {project.playbackId && (
                        <MuxPlayer
                            playbackId={project.playbackId}
                            metadata={{
                                video_id: `video-${project.id}`,
                                video_title: project.title,
                                viewer_user_id: "user-id-007",
                            }}
                            streamType="on-demand"
                            autoPlay={false}
                            controls={false}
                            muted
                            loop
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ aspectRatio: '16/9', '--controls': 'none' } as React.CSSProperties}
                            ref={videoRef}
                        />
                    )}

                    {/* Image Layer */}
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${isPlaying ? 'opacity-0' : 'opacity-100 group-hover:scale-105 transition-transform'}`}
                    />
                </div>

                <div className="p-8 flex flex-col md:flex-row justify-between items-start gap-6 bg-[#EEECE7]">
                    <div className="max-w-md">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-display text-2xl text-nordic-charcoal">{project.title}</h3>
                            <div className="h-px flex-1 bg-nordic-charcoal/10 min-w-[20px]" />
                        </div>
                        <span className="text-sm font-medium text-nordic-charcoal/70 block mb-3">{project.role}</span>
                        {project.description && (
                            <p className="text-sm text-nordic-charcoal/60 leading-relaxed">
                                {project.description}
                            </p>
                        )}
                    </div>
                    <span className="text-sm font-mono text-nordic-charcoal/40 pt-1">{project.year}</span>
                </div>
            </a>
        </div>
    );
};

export const SelectedWork: React.FC = () => {
    return (
        <section id="selected-work" className="w-full bg-arctic-linen py-24 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto mb-20">
                <div className="text-xs uppercase tracking-widest text-nordic-charcoal/50 mb-4">
                    Selected Work (01—{String(projects.length).padStart(2, '0')})
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-nordic-charcoal max-w-2xl leading-tight">
                    Projects that define our approach to clarity and craft.
                </h2>
            </div>

            <div className="flex flex-col items-center pb-24">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}

            </div>
        </section>
    );
};
