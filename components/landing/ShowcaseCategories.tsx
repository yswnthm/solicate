import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/projects';

export const ShowcaseCategories: React.FC = () => {
    return (
        <section id="selected-work" className="w-full bg-arctic-linen py-24 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto mb-20">
                <div className="text-xs uppercase tracking-widest text-nordic-charcoal/50 mb-4">
                    Selected Work
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-nordic-charcoal max-w-2xl leading-tight">
                    Curated portfolios across industries.
                </h2>
            </div>

            {/* Changed to 2 columns on large screens for larger cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto pb-24">
                {categories.map((category, index) => (
                    <Link
                        key={category.slug}
                        to={`/work/${category.slug}`}
                        className="group relative block aspect-[16/10] overflow-hidden rounded-md bg-[#EEECE7] border border-black/5 shadow-sm transition-transform duration-500 hover:scale-[1.005]"
                    >
                        <div className="absolute inset-0 bg-faded-stone/20">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <h3 className="font-display text-3xl text-white group-hover:text-white/90 transition-colors mb-3">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-base text-white/80 leading-relaxed font-light">
                                {category.description.split(', ').map((item, i) => (
                                    <span key={i} className="whitespace-nowrap">
                                        {item}{i < category.description.split(', ').length - 1 && <span className="opacity-40 mx-1.5">•</span>}
                                    </span>
                                ))}
                            </div>
                            <div className="h-px w-0 bg-white/50 mt-5 transition-all duration-500 group-hover:w-full" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
