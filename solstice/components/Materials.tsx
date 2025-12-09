import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Material } from '../types';

const materials: Material[] = [
  {
    id: 'm1',
    name: 'Molten Glass',
    origin: 'Venice, Italy',
    description: 'Forged at 1200°C. Captures light like trapped breath.',
    texture: 'https://picsum.photos/800/800?random=10'
  },
  {
    id: 'm2',
    name: 'Charcoal Clay',
    origin: 'Kyoto, Japan',
    description: 'Aged earth mixed with pine soot. Matte silence.',
    texture: 'https://picsum.photos/800/800?random=11'
  },
  {
    id: 'm3',
    name: 'Combed Metal',
    origin: 'Berlin, Germany',
    description: 'Industrial precision meets organic imperfection.',
    texture: 'https://picsum.photos/800/800?random=12'
  },
];

export const Materials: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 md:px-20 bg-[#EEECE7]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#2E2E2E]/10 pb-8">
        <h2 className="font-serif-display text-4xl md:text-6xl text-[#2E2E2E]">Material Atlas</h2>
        <p className="font-sans-ui text-[#2E2E2E]/60 max-w-sm text-sm mt-4 md:mt-0">
          The physical vocabulary of our design practice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {materials.map((mat) => (
          <motion.div
            layoutId={`card-${mat.id}`}
            key={mat.id}
            onClick={() => setActiveId(mat.id)}
            className="group relative aspect-[3/4] overflow-hidden cursor-none bg-[#DCD9D3]"
          >
            <motion.img
              layoutId={`img-${mat.id}`}
              src={mat.texture}
              alt={mat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2]"
            />

            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#2E2E2E]/80 to-transparent text-[#EEECE7] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="font-sans-ui text-xs tracking-widest uppercase block mb-1">{mat.origin}</span>
              <h3 className="font-serif-display text-xl">{mat.name}</h3>
            </div>

            {/* Hover hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-16 h-16 rounded-full border border-[#EEECE7]/50 flex items-center justify-center backdrop-blur-sm">
                <span className="text-[#EEECE7] text-xl">+</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
              className="fixed inset-0 bg-[#2E2E2E]/90 z-50 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
              {materials.filter(m => m.id === activeId).map(mat => (
                <motion.div
                  layoutId={`card-${mat.id}`}
                  key={mat.id}
                  className="bg-[#EEECE7] w-full max-w-4xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row h-[80vh] md:h-[60vh]"
                >
                  <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                    <motion.img
                      layoutId={`img-${mat.id}`}
                      src={mat.texture}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#EEECE7]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="font-sans-ui text-[#A88C5D] text-sm uppercase tracking-widest">{mat.origin}</span>
                      <h3 className="font-serif-display text-4xl md:text-5xl text-[#2E2E2E] mt-4 mb-8">{mat.name}</h3>
                      <p className="font-sans-ui text-[#2E2E2E]/70 leading-relaxed text-lg">{mat.description}</p>
                      <button
                        onClick={() => setActiveId(null)}
                        className="mt-12 text-[#2E2E2E] border-b border-[#2E2E2E] pb-1 self-start font-sans-ui hover:opacity-60 transition-opacity"
                      >
                        Close Entry
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};