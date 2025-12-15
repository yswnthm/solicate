import React from 'react';
import { JournalEntry } from '../types';

const entries: JournalEntry[] = [
  { id: 'j1', title: 'The Silence of Stone', type: 'Essay', date: 'Oct 12', excerpt: 'Why permanence matters in a digital age.' },
  { id: 'j2', title: 'Kyoto Morning', type: 'Visual', date: 'Oct 08', image: 'https://picsum.photos/600/800?random=30' },
  { id: 'j3', title: 'Light as Material', type: 'Essay', date: 'Sep 29', excerpt: 'Exploring the intangibles of spatial design.' },
  { id: 'j4', title: 'Studio Process', type: 'Visual', date: 'Sep 15', image: 'https://picsum.photos/600/800?random=31' },
  { id: 'j5', title: 'Future Artifacts', type: 'Essay', date: 'Aug 30', excerpt: 'Designing for archeologists of the future.' },
];

export const Journal: React.FC = () => {
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
              A collection of essays, rapid experiments, and visual notes from our studio practice.
            </p>
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="w-full md:w-2/3">
          {entries.map((entry, index) => (
            <JournalRow key={entry.id} entry={entry} index={index} />
          ))}

          {/* Footer spacer for the scrolling section */}
          <div className="h-32 flex items-center justify-center border-t border-[#2E2E2E]/10">
            <span className="font-sans-ui text-xs text-[#2E2E2E]/40 uppercase tracking-widest">End of Journal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const JournalRow: React.FC<{ entry: JournalEntry; index: number }> = ({ entry, index }) => {
  return (
    <div className={`group border-b border-[#2E2E2E]/10 p-6 md:p-12 min-h-[50vh] flex flex-col justify-center transition-colors duration-500 hover:bg-[#E5E2DD]`}>
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