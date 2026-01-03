import React from 'react';
import { Project } from '../types';

const otherProjects: Project[] = [
    {
        id: 2,
        title: 'Chlorophyll',
        role: 'Organic Laboratory',
        year: '2025',
        image: '/images/chlorophyll-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://chlorophyll.solicate.pecup.in',
        description: 'An immersive platform for an organic laboratory, highlighting sustainable practices through visual storytelling.'
    },
    {
        id: 4,
        title: 'Kernelspace',
        role: 'Technical Lab',
        year: '2025',
        image: '/images/kernelspace-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://kernelspace.solicate.pecup.in',
        description: 'A cutting-edge interface for a tech lab, emphasizing precision, data visualization, and modern design principles.'
    }
];

const OtherWorkCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-4 w-full"
        >
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-stone-200">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                    <h3 className="font-display text-lg text-nordic-charcoal group-hover:underline decoration-1 underline-offset-4">
                        {project.title}
                    </h3>
                    <span className="font-mono text-xs text-nordic-charcoal/40">
                        {project.year}
                    </span>
                </div>
                <span className="text-xs font-medium text-nordic-charcoal/60">
                    {project.role}
                </span>
            </div>
        </a>
    );
};

export const OtherWork: React.FC = () => {
    return (
        <section className="w-full bg-[#EEECE7] py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="block text-xs uppercase tracking-widest text-nordic-charcoal/50 mb-4">
                        Archive
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl text-nordic-charcoal max-w-xl">
                        Other significant works from our journey.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
                    {otherProjects.map((project) => (
                        <OtherWorkCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
