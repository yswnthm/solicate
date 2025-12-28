import React, { useState } from 'react';
import { JournalEntry } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const entries: JournalEntry[] = [
  {
    id: 'j1',
    title: 'Digital Ecology',
    type: 'Philosophy',
    date: 'Dec 14',
    excerpt: 'Building sustainable digital ecosystems that grow with your business.',
    content: (
      <>
        <p className="mb-6">We view software not as static artifacts but as living organisms. A "launch" is merely a birth; the real work lies in nurturing the system as it interacts with real users and evolving market conditions.</p>
        <p className="mb-6">Our approach to "Digital Ecology" prizes resilience over rigidity. We build component systems that can adapt, scale, and reconfigure themselves without crumbling under technical debt.</p>
        <p>This mindset shifts the focus from "pixel perfection" to "systemic health," ensuring that your digital presence remains robust and relevant for years, not just weeks.</p>
      </>
    )
  },
  {
    id: 'j2',
    title: 'The Craft of Motion',
    type: 'Interaction',
    date: 'Nov 28',
    image: 'https://picsum.photos/600/800?random=40',
    content: (
      <>
        <p className="mb-6">Motion is often treated as garnish—sprinkled on at the end to make things "pop." At Solicate, we treat motion as a core material of the interface.</p>
        <div className="grid grid-cols-2 gap-4 my-8">
          <img src="https://picsum.photos/400/600?random=110" className="w-full h-auto object-cover rounded-lg" />
          <img src="https://picsum.photos/400/600?random=111" className="w-full h-auto object-cover rounded-lg mt-8" />
        </div>
        <p>Meaningful transitions provide context. They explain where an element came from and where it's going. They reduce cognitive load by smoothing the mental gap between states. We choreograph every interaction to feel weightless yet substantial.</p>
      </>
    )
  },
  {
    id: 'j3',
    title: 'Beyond the Grid',
    type: 'Design',
    date: 'Nov 12',
    excerpt: 'Breaking free from standard layouts to tell better stories.',
    content: (
      <>
        <p className="mb-6">The web has standardized around the 12-column grid. While effective, it can lead to a homogenization of experience. We strive to break the grid meaningfully—not for the sake of chaos, but to direct attention.</p>
        <p>By contrasting rigid structure with organic placement, we create visual tension that guides the eye. It's about finding the balance between predictability (usability) and surprise (delight).</p>
      </>
    )
  },
  {
    id: 'j4',
    title: 'Engineering Trust',
    type: 'Technology',
    date: 'Nov 08',
    image: 'https://picsum.photos/600/800?random=41',
    content: (
      <>
        <p className="mb-6">Trust is the currency of the digital age. It is earned in milliseconds—by how fast a page loads, how securely data is handled, and how reliably a transaction completes.</p>
        <div className="aspect-video w-full overflow-hidden rounded-xl my-6 bg-gray-100">
          <img src="https://picsum.photos/800/450?random=210" className="w-full h-full object-cover" />
        </div>
        <p>Our engineering standards are rigorous because we know that a broken link is a broken promise. We obsess over performance budgets, accessibility compliances, and secure architectures so your users can focus on your value, not your infrastructure.</p>
      </>
    )
  },
  {
    id: 'j5',
    title: 'The Human Loop',
    type: 'Strategy',
    date: 'Nov 01',
    excerpt: 'Why AI will never replace the empathy of a human designer.',
    content: (
      <>
        <p className="mb-6">As definitive artificial intelligence integrates into our workflows, the premium on human empathy skyrockets. We use AI to automate the mundane, liberating our minds to tackle the meaningful.</p>
        <p>We design for humans, with humans. No algorithm can predict the subtle emotional response to a brand story or the cultural nuance of a campaign. We remain proudly, stubbornly human-centric.</p>
      </>
    )
  },
];

const JournalRow: React.FC<{
  entry: JournalEntry;
  index: number;
  onClick: () => void;
}> = ({ entry, index, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group border-b border-[#2E2E2E]/10 p-6 md:p-12 min-h-[50vh] flex flex-col justify-center transition-colors duration-500 hover:bg-[#E5E2DD] cursor-pointer`}
    >
      <div className="flex justify-between items-baseline mb-8">
        <span className="font-sans-ui text-xs text-[#2E2E2E]/40 uppercase tracking-widest">0{index + 1}</span>
        <div className="flex gap-4 font-sans-ui text-xs text-[#2E2E2E]/50 uppercase tracking-widest">
          <span>{entry.type}</span>
          <span>{entry.date}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
        <div className="flex-1">
          <h3 className="font-serif-display text-3xl md:text-5xl text-[#2E2E2E] mb-4 group-hover:text-[#A88C5D] transition-colors duration-300">
            {entry.title}
          </h3>
          {entry.excerpt && (
            <p className="font-sans-ui text-base text-[#2E2E2E]/70 max-w-md">
              {entry.excerpt}
            </p>
          )}
        </div>

        {entry.image && (
          <div className="w-full md:w-1/2 overflow-hidden aspect-[4/3] relative">
            {/* "Roll up" effect simulation with simple hover or just static for now, as sticky is the main feature */}
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const JournalOverlay: React.FC<{ entry: JournalEntry; onClose: () => void }> = ({ entry, onClose }) => {
  // Lock body scroll when overlay is open
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
        className="w-full md:w-[60vw] lg:w-[50vw] h-full bg-[#EEECE7] shadow-2xl overflow-y-auto p-8 md:p-16 flex flex-col relative overscroll-contain"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2 rounded-full hover:bg-black/5 transition-colors"
        >
          <X size={24} className="text-[#2E2E2E]" />
        </button>

        <div className="mt-12 mb-8">
          <div className="flex gap-4 font-sans-ui text-xs text-[#2E2E2E]/50 uppercase tracking-widest mb-4">
            <span>{entry.type}</span>
            <span>{entry.date}</span>
          </div>
          <h2 className="font-serif-display text-4xl md:text-6xl text-[#2E2E2E] mb-8 leading-tight">
            {entry.title}
          </h2>

          {entry.image && (
            <div className="w-full aspect-video overflow-hidden rounded-lg mb-8">
              <img src={entry.image} alt={entry.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="font-sans-ui text-lg text-[#2E2E2E]/80 leading-relaxed max-w-2xl">
            {entry.content}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Journal: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedEntry = entries.find(e => e.id === selectedId);

  return (
    <section id="journal" className="relative w-full bg-[#EEECE7] rounded-b-[3rem]">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sticky Left Column */}
        <div className="w-full md:w-1/3 md:h-screen md:sticky md:top-0 p-6 md:p-12 flex flex-col justify-between border-r border-[#2E2E2E]/10">
          <div>
            <div className="text-xs uppercase tracking-widest text-nordic-charcoal/50 mb-4">
              Journal
            </div>
            <h2 className="font-serif-display text-5xl md:text-6xl text-[#2E2E2E] leading-tight max-w-sm">
              Thoughts & <br /><span className="italic text-[#A88C5D]">Fragments</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <p className="font-sans-ui text-sm text-[#2E2E2E]/60 max-w-xs">
              A collection of essays, rapid experiments, and visual notes from our agency practice.
            </p>
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="w-full md:w-2/3">
          {entries.map((entry, index) => (
            <JournalRow
              key={entry.id}
              entry={entry}
              index={index}
              onClick={() => setSelectedId(entry.id)}
            />
          ))}

          {/* Footer spacer for the scrolling section */}
          <div className="h-32 flex items-center justify-center border-t border-[#2E2E2E]/10">
            <span className="font-sans-ui text-xs text-[#2E2E2E]/40 uppercase tracking-widest">End of Journal</span>
          </div>
        </div>
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedId && selectedEntry && (
          <JournalOverlay entry={selectedEntry} onClose={() => setSelectedId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};