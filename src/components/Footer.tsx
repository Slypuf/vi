import React from 'react';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  isVisible?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isVisible = true }) => {
  return (
    <footer className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0B1020]/95 backdrop-blur-lg border-t border-[#0D213F]/50 transition-opacity duration-500 will-change-transform ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Integrated thin divider at top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/60 to-transparent">
        <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/40 to-transparent blur-sm" />
        <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/20 to-transparent blur-md" />
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-row justify-center items-center h-20 sm:h-24 lg:h-20 py-2 sm:py-3 lg:py-2">
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-3 max-w-full">
            <img 
              src="/lilvitalik-ok.png" 
              alt="Lil Vitalik Logo" 
              loading="lazy"
              decoding="async"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain flex-shrink-0"
            />
            <img 
              src="/dexs.png" 
              alt="Dexs" 
              loading="lazy"
              decoding="async"
              onClick={() => window.open('https://dexscreener.com', '_blank')}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/x.png" 
              alt="X" 
              loading="lazy"
              decoding="async"
              onClick={() => window.open('https://x.com', '_blank')}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <span className="font-bold text-xs sm:text-sm md:text-base lg:text-base tracking-wide text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)] leading-tight">
              Earn for being early: Lil V presale LIVE.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;