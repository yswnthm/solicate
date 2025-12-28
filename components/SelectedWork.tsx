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
    {
        id: 2,
        title: 'Chlorophyll',
        role: 'Organic Laboratory',
        year: '2025',
        image: '/images/chlorophyll-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://chlorophyll.solicate.pecup.in',
        playbackId: 'Pzu8MmdZbCkG173BqyFv3DWSGtO02OrN02woMeGdvJRX8',
        description: 'An immersive platform for an organic laboratory, highlighting sustainable practices through visual storytelling.'
    },
    {
        id: 3,
        title: 'Kajal',
        role: 'UGC Portfolio',
        year: '2025',
        image: '/images/kajal-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://kajal.solicate.pecup.in',
        playbackId: '9UTutoAr02u1oS02yDpS00ZfGfYlwSOaj02OtqzUXzzFnnQ',
        description: 'A dynamic portfolio showcasing user-generated content with a focus on bold typography and fluid transitions.'
    },
    {
        id: 4,
        title: 'Kernelspace',
        role: 'Technical Lab',
        year: '2025',
        image: '/images/kernelspace-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://kernelspace.solicate.pecup.in',
        playbackId: 'VnfaCxXQPMQVNYoIGUDBYPVewBbqmuM00vksMSuhBXdw',
        description: 'A cutting-edge interface for a tech lab, emphasizing precision, data visualization, and modern design principles.'
    },
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
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const videoRef = useRef<any>(null);

    const handleMouseEnter = () => {
        if (videoRef.current?.play) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current?.pause) {
            videoRef.current.pause();
            if (videoRef.current.currentTime) {
                videoRef.current.currentTime = 0;
            }
        }
    };

    return (
        <div
            className="sticky top-24 w-full flex justify-center pb-24"
            style={{ zIndex: index + 1 }}
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
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${project.playbackId ? 'group-hover:opacity-0' : 'group-hover:scale-105 transition-transform'}`}
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

            <div className="flex flex-col items-center">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}

                {/* 'Add Yours' Card */}
                <div
                    className="sticky top-24 w-full flex justify-center pb-24"
                    style={{ zIndex: projects.length + 1 }}
                >
                    <div className="w-full md:w-[70vw] lg:w-[60vw] aspect-[16/9] bg-[#EEECE7] rounded-md border border-dashed border-nordic-charcoal/20 flex flex-col items-center justify-center gap-6 group cursor-pointer transition-colors hover:border-nordic-charcoal/40">
                        <svg width="220" height="48" className="overflow-visible">
                            <line x1="0" y1="24" x2="180" y2="24" className="stroke-nordic-charcoal/30 stroke-1" />
                            <circle cx="186" cy="24" r="6" className="fill-transparent stroke-nordic-charcoal/30 stroke-1" />
                            <circle
                                cx="186" cy="24" r="24"
                                style={{ transformOrigin: '186px 24px' }}
                                className="fill-birchwood/20 scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                            />
                        </svg>
                        <span className="font-display text-xl text-nordic-charcoal/40 italic transition-colors duration-300 group-hover:text-nordic-charcoal/80">
                            Add Yours here :D
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
