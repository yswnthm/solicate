import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import MuxPlayer from "@mux/mux-player-react";

export const CategoryPage: React.FC = () => {
    const { category: slug } = useParams<{ category: string }>();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const categoryInfo = categories.find(c => c.slug === slug);
    const categoryProjects = projects.filter(p => {
        // Map slug to category name in data if needed, or better, normalise data. 
        // In data/projects.ts, I put precise category strings matching the 'title' in categories array, but slugs are different.
        // Let's find the category title from the slug first.
        return categoryInfo && p.category === categoryInfo.title;
    });

    if (!categoryInfo) {
        return <div className="min-h-screen flex items-center justify-center">Category not found</div>;
    }

    return (
        <main className="relative z-10 bg-[#EEECE7] min-h-screen">
            <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-nordic-charcoal/60 hover:text-nordic-charcoal transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm font-medium tracking-wide">Back to Home</span>
                </Link>

                <div className="mb-20">
                    <h1 className="font-display text-5xl md:text-7xl text-nordic-charcoal mb-6">
                        {categoryInfo.title}
                    </h1>
                    <div className="h-px w-24 bg-nordic-charcoal/20" />
                </div>

                <div className="grid grid-cols-1 gap-24 pb-32">
                    {categoryProjects.map((project, index) => (
                        <div key={project.id} className="group">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden rounded-md bg-[#EEECE7] border border-black/5 shadow-sm mb-8">
                                {project.playbackId ? (
                                    <MuxPlayer
                                        playbackId={project.playbackId}
                                        metadata={{
                                            video_id: `video-${project.id}`,
                                            video_title: project.title,
                                        }}
                                        streamType="on-demand"
                                        autoPlay={true}
                                        muted
                                        loop
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                            </a>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <div>
                                    <h2 className="font-display text-3xl text-nordic-charcoal mb-2">{project.title}</h2>
                                    <p className="text-nordic-charcoal/60 leading-relaxed max-w-xl">{project.description}</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-sm font-bold text-nordic-charcoal/80 mb-1">{project.role}</span>
                                    <span className="block text-sm font-mono text-nordic-charcoal/40">{project.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {categoryProjects.length === 0 && (
                        <div className="text-nordic-charcoal/50 text-lg">Coming soon...</div>
                    )}
                </div>
            </div>
        </main>
    );
};
