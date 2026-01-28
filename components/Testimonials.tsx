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
                                className="w-8 h-8 rounded-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-300"
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
