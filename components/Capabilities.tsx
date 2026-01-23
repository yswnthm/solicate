import React, { useState, useEffect } from 'react';
import { Capability } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowRight, Phone, Mail, Instagram } from 'lucide-react';

const capabilities: Capability[] = [
    {
        title: 'Strategy',
        description: ['Market Position', 'Digital Roadmap', 'Content Direction'],
        fullDescription: 'We don’t believe in guessing. Our strategy phase is a deep excavation of your business soul. We find the friction points, the hidden value, and the stories that haven\'t been told.',
        deliverables: ['Brand Audits', 'Competitor Analysis', 'User Personas', 'Go-to-Market Strategy'],
        ctaText: 'Define your path'
    },
    {
        title: 'Brand',
        description: ['Visual Identity', 'Design Systems', 'Art Direction'],
        fullDescription: 'A brand is not a logo; it is a promise kept. We build visual systems that are resilient, scalable, and impossible to ignore. We craft identities that feel like they have always existed.',
        deliverables: ['Logo Design', 'Typography Systems', 'Color Palettes', 'Brand Guidelines', 'Motion Guidelines'],
        ctaText: 'Build your legacy'
    },
    {
        title: 'Web',
        description: ['Frontend Architecture', 'Creative Development', 'Headless CMS'],
        fullDescription: 'The web is an infinite canvas. We treat it with the respect it deserves. We build websites that feel like cinema—immersive, fluid, and technically flawless. Performance is our baseline; magic is our goal.',
        deliverables: ['Corporate Websites', 'E-commerce Platforms', 'WebGL Experiences', 'Interactive Storytelling'],
        ctaText: 'Launch your world'
    },
    {
        title: 'Product',
        description: ['UI/UX Design', 'Prototyping', 'User Research'],
        fullDescription: 'Tools should feel like extensions of the mind. We design digital products that reduce cognitive load and amplify human capability. We obsess over the micro-interactions that make software feel alive.',
        deliverables: ['Mobile Apps', 'SaaS Dashboards', 'Design Systems', 'Clickable Prototypes'],
        ctaText: 'Shape the tool'
    },
    {
        title: 'Systems',
        description: ['Component Libraries', 'Documentation', 'Governance'],
        fullDescription: 'Chaos is the enemy of scale. We organize entropy into elegance. We build robust component libraries and documentation sites that empower your team to build faster and more consistently.',
        deliverables: ['Storybook Implementation', 'Technical Documentation', 'Governance Models', 'Design Tokens'],
        ctaText: 'Scale with order'
    },
];

const CapabilityOverlay: React.FC<{ capability: Capability; onClose: () => void }> = ({ capability, onClose }) => {
    const [showContactOptions, setShowContactOptions] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-end bg-black/20 backdrop-blur-sm"
        >
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full md:w-[55vw] lg:w-[45vw] h-full bg-[#EEECE7] shadow-2xl overflow-y-auto p-8 md:p-16 flex flex-col relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 p-2 rounded-full hover:bg-black/5 transition-colors group"
                >
                    <X size={24} className="text-[#2E2E2E] group-hover:scale-90 transition-transform" />
                </button>

                <div className="mt-12">
                    <span className="font-sans-ui text-xs text-[#A88C5D] uppercase tracking-widest mb-4 block">
                        Deep Dive
                    </span>
                    <h2 className="font-serif-display text-5xl md:text-7xl text-[#2E2E2E] mb-12 leading-none">
                        {capability.title}
                    </h2>

                    <div className="font-sans-ui text-lg md:text-xl text-[#2E2E2E]/80 leading-relaxed mb-16 max-w-xl">
                        {capability.fullDescription}
                    </div>

                    <div className="mb-16">
                        <h3 className="font-serif-display text-2xl text-[#2E2E2E] mb-6 border-b border-[#2E2E2E]/10 pb-4">
                            Deliverables
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {capability.deliverables?.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-[#2E2E2E]/70 font-sans-ui">
                                    <span className="w-1.5 h-1.5 bg-[#A88C5D] rounded-full" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-auto">
                        <button
                            onClick={() => setShowContactOptions(!showContactOptions)}
                            className="group flex items-center gap-4 text-[#2E2E2E] font-sans-ui uppercase tracking-widest text-sm hover:text-[#A88C5D] transition-colors"
                        >
                            <span>{capability.ctaText || 'Start a project'}</span>
                            <ArrowRight size={16} className={`transition-transform duration-300 ${showContactOptions ? 'rotate-90' : 'group-hover:translate-x-2'}`} />
                        </button>

                        <AnimatePresence>
                            {showContactOptions && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setShowContactOptions(false)} />
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute bottom-full left-0 mb-4 w-64 bg-white shadow-xl p-2 rounded-lg z-20 border border-[#2E2E2E]/5"
                                    >
                                        <div className="flex flex-col gap-1">
                                            {[
                                                { label: 'Book a call', href: 'https://cal.com/solicate', icon: Phone },
                                                { label: 'Send a mail', href: 'mailto:solicate.team@gmail.com', icon: Mail },
                                                { label: 'Send a dm', href: 'https://instagram.com/solicate.in', icon: Instagram }
                                            ].map((option, idx) => (
                                                <a
                                                    key={idx}
                                                    href={option.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 px-4 py-3 text-[#2E2E2E] hover:bg-[#EEECE7] rounded-md transition-colors group/item"
                                                    onClick={() => setShowContactOptions(false)}
                                                >
                                                    <option.icon size={16} className="text-[#A88C5D] group-hover/item:scale-110 transition-transform" />
                                                    <span className="font-sans-ui text-sm tracking-wide">{option.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Decorative large index number */}
                    <div className="absolute bottom-[-10%] right-[-10%] font-serif-display text-[20rem] text-[#2E2E2E]/5 pointer-events-none select-none">
                        {capabilities.indexOf(capability) + 1}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const Capabilities: React.FC = () => {
    const [selectedCapability, setSelectedCapability] = useState<Capability | null>(null);

    return (
        <section id="capabilities" className="relative py-32 px-6 md:px-24 bg-[#EEECE7] min-h-screen flex flex-col justify-center">
            <div className="absolute top-12 left-6 md:left-12 text-xs uppercase tracking-widest text-[#2E2E2E]/50 z-20">
                Capabilities
            </div>

            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-20">
                    <h2 className="font-serif-display text-5xl md:text-7xl text-[#2E2E2E] leading-[0.9] max-w-4xl">
                        Holistic design <br />
                        <span className="text-[#A88C5D] italic">ecosystems</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {capabilities.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedCapability(item)}
                            className={`group relative p-8 md:p-12 border border-[#2E2E2E]/10 flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:bg-[#E5E2DD] hover:border-[#2E2E2E]/20 cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}
                        >
                            <div className="mb-8">
                                <h3 className="font-serif-display text-3xl md:text-4xl text-[#2E2E2E] mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <ul className="flex flex-wrap gap-2">
                                    {item.description.map((desc, i) => (
                                        <li key={i} className="px-3 py-1 rounded-full border border-[#2E2E2E]/20 text-[#2E2E2E]/70 text-xs md:text-sm uppercase tracking-wide group-hover:border-[#2E2E2E]/40 transition-colors duration-500">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-between items-end w-full">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs text-[#A88C5D] uppercase tracking-widest">
                                    Deep Dive
                                </span>
                                <div className="w-8 h-8 rounded-full border border-[#2E2E2E]/20 flex items-center justify-center group-hover:bg-[#2E2E2E] group-hover:text-[#EEECE7] transition-all duration-500">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:rotate-45">
                                        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCapability && (
                    <CapabilityOverlay
                        capability={selectedCapability}
                        onClose={() => setSelectedCapability(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
