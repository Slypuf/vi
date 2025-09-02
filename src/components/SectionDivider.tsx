import React from 'react';
import { useAnimation } from '../hooks/useAnimation';

const SectionDivider: React.FC = () => {
  const { elementRef, isVisible } = useAnimation({ delay: 100 });

  return (
    <div 
      ref={elementRef}
      className={`relative w-full h-px bg-gradient-to-r from-transparent via-[#67E8F9]/60 to-transparent transition-all duration-800 ${isVisible ? 'animate-slide-up-bottom-small' : 'animate-initial'}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/40 to-transparent blur-sm" />
      <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/20 to-transparent blur-md" />
    </div>
  );
};

export default SectionDivider;
