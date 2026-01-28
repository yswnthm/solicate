import React, { useState } from 'react';
import { testimonials, Testimonial } from '../data/testimonials';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TestimonialRow: React.FC<{
    testimonial: Testimonial;
    index: number;
    onClick: () => void;
}> = ({ testimonial, index, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`group border-b border-[#2E2E2E]/10 p-6 md:p-12 min-h-[40vh] flex flex-col justify-center transition-colors duration-500 hover:bg-[#F2F0EB] cursor-pointer`}
        >
            <div className="flex justify-between items-baseline mb-8">
                <span className="font-sans-ui text-xs text-[#2E2E2E]/40 uppercase tracking-widest">0{index + 1}</span>
                <div className="flex gap-4 font-sans-ui text-xs text-[#2E2E2E]/50 uppercase tracking-widest">
                    <span>{testimonial.company}</span>
                    <span>{testimonial.role}</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                <div className="flex-1">
                    {/* Using the quote as the main title, similar to Journal's title */}
                    <h3 className="font-serif-display text-2xl md:text-4xl text-[#2E2E2E] mb-6 group-hover:text-[#A88C5D] transition-colors duration-300 leading-tight">
                        "{testimonial.quote}"
                    </h3>
                    <div className="flex items-center gap-3">
                        {testimonial.image && (
                            <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-8 h-8 rounded-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        )}
                        {testimonial.instagram ? (
                            <a
                                href={testimonial.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="font-sans-ui text-sm text-[#2E2E2E]/70 font-medium uppercase tracking-wider hover:text-[#A88C5D] transition-colors duration-300"
                            >
                                — {testimonial.author}
                            </a>
                        ) : (
                            <p className="font-sans-ui text-sm text-[#2E2E2E]/70 font-medium uppercase tracking-wider">
                                — {testimonial.author}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


// Copied overlay logic from Journal, adapted for Testimonials if needed, 
// though testimonials usually don't have deep content. 
// Keeping it simple for now as a "Detail View" is not strictly specified but good for consistency.
const TestimonialOverlay: React.FC<{ testimonial: Testimonial; onClose: () => void }> = ({ testimonial, onClose }) => {
    React.useEffect(() => {
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
                data-lenis-prevent
                className="w-full md:w-[50vw] h-full bg-[#EEECE7] shadow-2xl flex flex-col relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 p-2 rounded-full hover:bg-black/5 transition-colors z-10"
                >
                    <X size={24} className="text-[#2E2E2E]" />
                </button>

                <div className="flex-1 overflow-y-auto p-8 md:p-16 overscroll-contain">
                    <div className="max-w-xl min-h-full flex flex-col justify-center my-auto">
                        <div className="mb-12">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-[#A88C5D]/20 mb-8">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" fill="currentColor" />
                            </svg>
                            <h2 className="font-serif-display text-3xl md:text-5xl text-[#2E2E2E] leading-tight">
                                "{testimonial.quote}"
                            </h2>
                        </div>

                        {testimonial.feedbacks && testimonial.feedbacks.length > 0 && (
                            <div className="space-y-6 mb-12">
                                <h3 className="font-sans-ui text-xs text-[#2E2E2E]/40 uppercase tracking-widest">Detailed Conversation</h3>
                                {testimonial.feedbacks.map((feedback, idx) => (
                                    <div key={idx} className="bg-white/40 p-6 rounded-2xl border border-white/50 backdrop-blur-sm">
                                        <p className="font-sans-ui text-lg text-[#2E2E2E]/80 leading-relaxed">
                                            "{feedback}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* Links Section */}
                        {(testimonial.website || testimonial.instagram) && (
                            <div className="mt-8 space-y-4">
                                <h3 className="font-sans-ui text-xs text-[#2E2E2E]/40 uppercase tracking-widest mb-4">Links</h3>

                                {testimonial.website && (
                                    <a
                                        href={testimonial.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block relative overflow-hidden"
                                    >
                                        <div className="flex items-center gap-4 px-6 py-4 bg-white/60 hover:bg-white/80 border border-[#2E2E2E]/10 rounded-full transition-all duration-300 hover:scale-[1.02]">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A88C5D]/10 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#A88C5D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-sans-ui text-xs text-[#2E2E2E]/50 uppercase tracking-widest mb-0.5">Website is live</p>
                                                <p className="font-sans-ui text-sm text-[#2E2E2E] font-medium truncate group-hover:text-[#A88C5D] transition-colors">
                                                    {testimonial.website.replace(/^https?:\/\//, '')}
                                                </p>
                                            </div>
                                            <svg className="w-4 h-4 text-[#2E2E2E]/30 flex-shrink-0 group-hover:text-[#A88C5D] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </a>
                                )}

                                {testimonial.instagram && (
                                    <a
                                        href={testimonial.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block relative overflow-hidden"
                                    >
                                        <div className="flex items-center gap-4 px-6 py-4 bg-white/60 hover:bg-white/80 border border-[#2E2E2E]/10 rounded-full transition-all duration-300 hover:scale-[1.02]">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A88C5D]/10 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#A88C5D]" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-sans-ui text-xs text-[#2E2E2E]/50 uppercase tracking-widest mb-0.5">Instagram</p>
                                                <p className="font-sans-ui text-sm text-[#2E2E2E] font-medium truncate group-hover:text-[#A88C5D] transition-colors">
                                                    @{testimonial.instagram.split('/').filter(Boolean).pop()?.replace('_', '') || 'profile'}
                                                </p>
                                            </div>
                                            <svg className="w-4 h-4 text-[#2E2E2E]/30 flex-shrink-0 group-hover:text-[#A88C5D] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </a>
                                )}
                            </div>
                        )}
                        <div className="flex items-center gap-6 border-t border-[#2E2E2E]/10 pt-8">
                            {testimonial.image && (
                                <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full object-cover" />
                            )}
                            <div>
                                {testimonial.instagram ? (
                                    <a
                                        href={testimonial.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-serif-display text-2xl text-[#2E2E2E] mb-1 hover:text-[#A88C5D] transition-colors duration-300 inline-block"
                                    >
                                        {testimonial.author}
                                    </a>
                                ) : (
                                    <h4 className="font-serif-display text-2xl text-[#2E2E2E] mb-1">
                                        {testimonial.author}
                                    </h4>
                                )}
                                <p className="font-sans-ui text-sm text-[#A88C5D] uppercase tracking-widest">
                                    {testimonial.role} @ {testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const Testimonials: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedTestimonial = testimonials.find(t => t.id === selectedId);

    return (
        <section id="testimonials" className="relative w-full bg-arctic-linen rounded-b-[3rem] z-10">
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Sticky Left Column */}
                <div className="w-full md:w-1/3 md:h-screen md:sticky md:top-0 p-6 md:p-12 flex flex-col justify-between border-r border-white/10 bg-nordic-charcoal rounded-bl-[3rem]">
                    <div>
                        <div className="text-xs uppercase tracking-widest text-white/50 mb-4">
                            Testimonials
                        </div>
                        <h2 className="font-serif-display text-5xl md:text-6xl text-white leading-tight max-w-sm">
                            Voices from the <br />
                            <span className="italic text-[#C7BBA3]">collaboration</span>
                        </h2>
                    </div>

                    <div className="hidden md:block">
                        <p className="font-sans-ui text-sm text-white/60 max-w-xs">
                            Real feedback from partners who dared to reimagine their digital presence with us.
                        </p>
                    </div>
                </div>

                {/* Scrolling Right Column */}
                <div className="w-full md:w-2/3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialRow
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                            onClick={() => setSelectedId(testimonial.id)}
                        />
                    ))}

                    {/* Footer spacer */}
                    <div className="h-32 flex items-center justify-center border-t border-[#2E2E2E]/10">
                        <span className="font-sans-ui text-xs text-[#2E2E2E]/40 uppercase tracking-widest">End of Testimonials</span>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedId && selectedTestimonial && (
                    <TestimonialOverlay
                        testimonial={selectedTestimonial}
                        onClose={() => setSelectedId(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
