import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMoonitVisible, setIsMoonitVisible] = useState(false);

  // Simple visibility trigger for hero content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Show content after 500ms delay

    return () => clearTimeout(timer);
  }, []);

  // Scroll-based trigger for MOONIT.gif
  useEffect(() => {
    const handleScroll = () => {
      // Trigger after just 10px scroll for better responsiveness
      if (window.scrollY > 10) {
        setIsMoonitVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also trigger on initial load after a delay as fallback
    const fallbackTimer = setTimeout(() => {
      setIsMoonitVisible(true);
    }, 2000); // Show after 2 seconds if no scroll

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section
      className="relative min-h-[100svh] sm:min-h-[85svh] lg:min-h-[100svh] flex items-stretch justify-center overflow-hidden"
    >
      <div className="relative z-1000 w-full max-w-6xl mx-auto h-full flex flex-col">
        {/* TOP TITLE IMAGE */}
        <div className={`w-full max-w-[440px] sm:max-w-sm md:max-w-lg lg:max-w-2xl px-2 sm:px-4 mx-auto mb-2 sm:mb-4 lg:mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <img
            src="/TITLE-VITALIK.png"
            alt="Lil Vitalik Title"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="w-full h-auto object-contain mx-auto "
          />
        </div>

        {/* Wave Image */}
        <div className={`px-2 sm:px-0 w-full max-w-[90rem] mx-auto mb-3 sm:mb-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
            <img
              src="/wave.gif"
              alt="Animated trading waves"
              loading="lazy"
              decoding="async"
              className="relative w-full h-auto object-contain lg:scale-90 lg:mx-auto rounded-lg sm:rounded-xl"
            />
          </div>
        </div>

        {/* Main tagline */}
        <p className={`text-center text-3xl sm:text-4xl lg:text-6xl font-bold text-[#67E8F9] tracking-wider drop-shadow-[0_0_25px_rgba(103,232,249,0.9)] hover:scale-110 transition-transform duration-300 cursor-default mb-4 sm:mb-6 px-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Advanced AI Trading Algorithm, Tokenized
        </p>

        {/* Action Buttons */}
        <div className={`flex justify-center gap-4 mb-8 sm:mb-12 lg:mb-16 flex-wrap transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get $LILV (opens in a new tab)"
            className="btn-responsive-lg bg-[#0B1020] border border-[#67E8F9]/50 text-[#67E8F9] font-bold rounded-xl transition-all duration-300 hover:bg-[#0E1630] hover:scale-105 tracking-wider touch-manipulation hover:shadow-[0_0_25px_rgba(103,232,249,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#38BDF8]/70 px-8 sm:px-12 lg:px-16"
          >
            Get $LILV
          </a>
        </div>

        {/* Secondary tagline */}
        <p className={`text-center text-3xl sm:text-4xl lg:text-6xl font-bold text-[#67E8F9] tracking-wider drop-shadow-[0_0_25px_rgba(103,232,249,0.9)] hover:scale-110 transition-transform duration-300 cursor-default mb-4 sm:mb-6 px-4 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Hold $LILV, Earn Passive Income
        </p>

        <div className={`text-center max-w-2xl mx-auto mb-8 sm:mb-8 lg:mb-14 px-4 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg sm:text-2xl lg:text-3xl text-[#67E8F9]/90 drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
            On-chain strategy, automated buybacks, periodic airdrops.{' '}
            <span className="font-bold text-white">LilVitalik</span>
          </p>
        </div>

        {/* Floating Scroll Symbol */}
        <div className={`flex justify-center mb-6 sm:mb-8 lg:mb-10 transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="animate-bounce">
            <svg 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>

        {/* MOONIT GIF */}
        <div className="w-full max-w-[90rem] mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
          <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
            <img
              src="/MOONIT.gif"
              alt="MOONIT Animation"
              loading="lazy"
              decoding="async"
              className="relative w-full h-auto object-contain transition-opacity duration-1000"
              style={{ opacity: isMoonitVisible ? 1 : 0 }}
            />
          </div>
        </div>

        <div className="flex-1" />
      </div>
    </section>
  );
};

export default Hero;