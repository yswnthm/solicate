import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="bg-[#1C1C1C] text-[#EEECE7] w-full min-h-[600px] flex flex-col justify-between relative overflow-hidden pt-24 px-6 md:px-20 pb-12"
      style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0 100%)' }}
    >
      {/* Background Watermark/Noise */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[40vw] font-serif-display leading-none text-[#EEECE7]">S</h1>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#1C1C1C] to-transparent z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col items-center justify-center flex-grow py-20 min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="text-center group cursor-pointer"
        >
          <div className="mb-6 flex flex-col items-center gap-2">
            <span className="font-mono-ui text-[#A88C5D] text-xs uppercase tracking-[0.2em]">Inquiries</span>
          </div>

          <div className="relative w-fit mx-auto">
            <button
              onClick={() => setShowContactOptions(!showContactOptions)}
              className="block relative text-center mx-auto"
            >
              <h2 className="font-serif-display text-5xl md:text-[8vw] lg:text-[7vw] leading-[0.9] text-[#EEECE7]">
                Start a<br />
                <span className="text-[#A88C5D] italic opacity-80 group-hover:opacity-100 transition-opacity duration-500">Conversation</span>
              </h2>
            </button>

            <AnimatePresence>
              {showContactOptions && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowContactOptions(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 w-72 bg-[#1C1C1C] shadow-2xl p-2 rounded-lg z-50 border border-[#EEECE7]/10"
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
                          className="flex items-center gap-4 px-4 py-4 text-[#EEECE7] hover:bg-[#EEECE7]/5 rounded-md transition-colors group/item text-left"
                          onClick={() => setShowContactOptions(false)}
                        >
                          <option.icon size={18} className="text-[#A88C5D] group-hover/item:scale-110 transition-transform" />
                          <span className="font-sans-ui text-base tracking-wide">{option.label}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Footer Grid */}
      <div
        className="relative z-10 w-full max-w-[1800px] mx-auto border-t border-[#EEECE7]/10 pt-8 mt-auto"
        onMouseLeave={() => setHoveredSection(null)}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-sans-ui text-sm tracking-wide text-[#EEECE7]/60">

          <div
            className="flex flex-col gap-3 cursor-default transition-opacity duration-300 hover:opacity-100"
            onMouseEnter={() => setHoveredSection('socials')}
            style={{ opacity: hoveredSection && hoveredSection !== 'socials' ? 0.3 : 1 }}
          >
            <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Socials</span>
            <ul className="flex flex-col gap-1">
              <li><a href="https://instagram.com/solicate.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#A88C5D] transition-colors duration-300">Instagram</a></li>
              <li><a href="https://x.com/solicatetwt" target="_blank" rel="noopener noreferrer" className="hover:text-[#A88C5D] transition-colors duration-300">Twitter / X</a></li>
              <li><a href="https://cal.com/solicate" target="_blank" rel="noopener noreferrer" className="hover:text-[#A88C5D] transition-colors duration-300">Book a Call</a></li>
            </ul>
          </div>

          <div
            className="flex flex-col gap-3 cursor-default transition-opacity duration-300 hover:opacity-100"
            onMouseEnter={() => setHoveredSection('sitemap')}
            style={{ opacity: hoveredSection && hoveredSection !== 'sitemap' ? 0.3 : 1 }}
          >
            <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Sitemap</span>
            <ul className="flex flex-col gap-1">
              <li><a href="#selected-work" className="hover:text-[#A88C5D] transition-colors duration-300">Selected Work</a></li>
              <li><a href="#capabilities" className="hover:text-[#A88C5D] transition-colors duration-300">Capabilities</a></li>
              <li><a href="#process" className="hover:text-[#A88C5D] transition-colors duration-300">Process</a></li>
              <li><a href="#journal" className="hover:text-[#A88C5D] transition-colors duration-300">Journal</a></li>
            </ul>
          </div>

          <div
            className="flex flex-col gap-3 cursor-default transition-opacity duration-300 hover:opacity-100"
            onMouseEnter={() => setHoveredSection('location')}
            style={{ opacity: hoveredSection && hoveredSection !== 'location' ? 0.3 : 1 }}
          >
            <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Location</span>
            <div className="flex flex-col">
              <span className="text-[#EEECE7]">Mumbai, India</span>
              <span>19.0760° N, 72.8777° E</span>
            </div>
          </div>

          <div
            className="flex flex-col gap-3 text-left md:text-right md:items-end cursor-default transition-opacity duration-300 hover:opacity-100"
            onMouseEnter={() => setHoveredSection('time')}
            style={{ opacity: hoveredSection && hoveredSection !== 'time' ? 0.3 : 1 }}
          >
            <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Local Time</span>
            <p className="font-variant-numeric tabular-nums text-[#A88C5D] text-lg">{time}</p>
            <p className="text-[10px] uppercase tracking-widest opacity-40 mt-4 md:mt-auto">© 2026 Solicate. All Rights Reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};