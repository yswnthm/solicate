import React, { useState } from 'react';
import { Capability } from '../types';

const capabilities: Capability[] = [
    { title: 'Strategy', description: ['Market Position', 'Digital Roadmap', 'Content Direction'] },
    { title: 'Brand', description: ['Visual Identity', 'Design Systems', 'Art Direction'] },
    { title: 'Web', description: ['Frontend Architecture', 'Creative Development', 'Headless CMS'] },
    { title: 'Product', description: ['UI/UX Design', 'Prototyping', 'User Research'] },
    { title: 'Systems', description: ['Component Libraries', 'Documentation', 'Governance'] },
];

export const Capabilities: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="capabilities" className="relative py-24 px-6 md:px-24 bg-arctic-linen min-h-screen flex flex-col justify-center">
            <div className="absolute top-12 left-6 md:left-12 text-xs uppercase tracking-widest text-nordic-charcoal/50 z-20">
                Capabilities
            </div>

            <div className="flex flex-col w-full max-w-4xl mx-auto">
                {capabilities.map((item, index) => (
                    <div
                        key={index}
                        className="border-b border-soft-pewter last:border-b-0 group"
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`w-full text-left py-8 md:py-10 flex justify-between items-center transition-all duration-500 interactive hover:pl-2 ${activeIndex !== null && activeIndex !== index ? 'opacity-40' : 'opacity-100'}`}
                        >
                            <span className="font-display text-2xl md:text-4xl text-nordic-charcoal">{item.title}</span>
                            <span className={`text-xl transition-transform duration-500 ${activeIndex === index ? 'rotate-45 text-birchwood' : 'text-soft-pewter'}`}>
                                +
                            </span>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIndex === index ? 'max-h-64 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                        >
                            <ul className="flex flex-col md:flex-row gap-4 md:gap-12 pl-2">
                                {item.description.map((desc, i) => (
                                    <li key={i} className="flex items-center gap-2 text-nordic-charcoal/70 font-light text-sm md:text-base">
                                        <span className="w-1 h-1 bg-birchwood rounded-full" />
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
