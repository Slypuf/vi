import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useAnimation';

// Individual Slide Component
interface SlideProps {
  gif: string;
  alt: string;
  text: string;
  tweetText: string;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ gif, alt, text, tweetText, isActive }) => {
  return (
    <div className={`transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'}`}>
      <div className="relative pb-12 sm:pb-16 lg:pb-20">
        <img 
          src={gif}
          alt={alt}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="img-responsive rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer touch-manipulation"
          onClick={() => {
            const link = document.createElement('a');
            link.href = gif;
            link.download = gif.split('/').pop() || 'download.gif';
            link.click();
          }}
        />
        <button 
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, '_blank')}
          className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 btn-responsive-sm bg-[#0E1630]/80 hover:bg-[#0D213F]/90 border border-[#0EA5E9]/40 hover:border-[#67E8F9]/60 text-[#67E8F9] font-bold rounded-xl transition-all duration-200 hover:scale-105 tracking-wider touch-manipulation hover:shadow-[0_0_20px_rgba(103,232,249,0.5)] flex items-center gap-1 sm:gap-2 whitespace-nowrap"
        >
          <ExternalLink className="w-3 h-3 sm:w-5 sm:h-5" />
          Tweet Me
        </button>
        <div className="w-full text-center px-2 mt-6">
          <p className="text-responsive-2xl font-bold text-[#67E8F9] tracking-wider drop-shadow-[0_0_20px_rgba(103,232,249,0.8)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const Info: React.FC = () => {
  const { containerRef, triggeredItems } = useStaggeredAnimation(10, 100);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slides = [
    {
      gif: '/jump.gif',
      alt: 'Jump Animation',
      text: 'all the way to the Dex and Cex',
      tweetText: 'all the way to the Dex and Cex 🚀 #LilVitalik #lilv #AiTrading #Crypto #BullRun'
    },
    {
      gif: '/tsu.gif',
      alt: 'Tsu Animation',
      text: 'Time to ride the tides, enough scuba diving',
      tweetText: 'Time to ride the tides, enough scuba diving 🌊 #LilVitalik #lilv #AiTrading #Crypto #BullRun'
    },
    {
      gif: '/whale.gif',
      alt: 'Whale Animation',
      text: 'Gotta Respect The Whales',
      tweetText: 'Gotta Respect The Whales 🐋 #LilVitalik #lilv #AiTrading #Crypto #BullRun'
    },
    {
      gif: '/busy.gif',
      alt: 'Busy Animation',
      text: '1 plan, 0 hopium',
      tweetText: '1 plan, 0 hopium 💪 #LilVitalik #lilv #AiTrading #Crypto #NoHopium'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="info" className="relative min-h-screen flex items-start overflow-hidden px-2 sm:px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#0EA5E9]/10" />
      
      <div className="container-large mx-auto relative w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 pt-4 sm:pt-6 lg:pt-8" ref={containerRef}>
          <h2 className={`text-responsive-3xl font-bold mb-4 sm:mb-6 tracking-wider transition-all duration-800 ${triggeredItems[0] ? 'animate-slide-up-bottom' : 'animate-initial'}`}>
            <span className="text-[#67E8F9] drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]">JOIN THE JOURNEY ,ITS TIME TO RISE</span>
          </h2>
          
          {/* Tweet Me Button for Main Title */}
          <div className={`flex justify-center mb-6 sm:mb-8 lg:mb-10 transition-all duration-800 ${triggeredItems[1] ? 'animate-slide-up-bottom' : 'animate-initial'}`}>
            <button 
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('JOIN THE JOURNEY, ITS TIME TO RISE 🚀 #LilVitalik #lilv #AiTrading #Crypto #BullRun #Moon')}`, '_blank')}
              className="btn-responsive-base bg-[#0E1630]/80 hover:bg-[#0D213F]/90 border border-[#0EA5E9]/40 hover:border-[#67E8F9]/60 text-[#67E8F9] font-bold rounded-xl transition-all duration-200 hover:scale-105 tracking-wider touch-manipulation hover:shadow-[0_0_20px_rgba(103,232,249,0.5)] flex items-center gap-2 sm:gap-3 whitespace-nowrap"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              Tweet Me
            </button>
          </div>
          
          {/* Ewverest GIF */}
          <div className={`px-2 sm:px-0 w-full max-w-[90rem] mx-auto mb-3 sm:mb-5 transition-all duration-800 ${triggeredItems[2] ? 'animate-slide-up-bottom' : 'animate-initial'}`}>
            <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
              <img 
                src="/ewverest.gif" 
                alt="Ewverest Animation" 
                loading="lazy"
                decoding="async"
                className="relative w-full h-auto object-contain lg:scale-90 lg:mx-auto"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/ewverest.gif';
                  link.download = 'ewverest.gif';
                  link.click();
                }}
              />
            </div>
          </div>
          
          {/* Divider Line below Ewverest GIF */}
          <div className={`flex justify-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-800 ${triggeredItems[3] ? 'animate-slide-up-bottom' : 'animate-initial'}`}>
            <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#67E8F9]/60 to-transparent">
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/40 to-transparent blur-sm" />
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/20 to-transparent blur-md" />
            </div>
          </div>
        </div>

        {/* Slide Container */}
        <div className={`relative mt-8 sm:mt-12 lg:mt-16 px-2 sm:px-4 transition-all duration-800 ${triggeredItems[4] ? 'animate-slide-up-bottom' : 'animate-initial'}`}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/3 z-10 text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] transition-all duration-300 hover:scale-110 touch-manipulation"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/3 z-10 text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.8)] transition-all duration-300 hover:scale-110 touch-manipulation"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </button>

          {/* Slide Content */}
          <div 
            className="relative overflow-hidden rounded-2xl touch-manipulation"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {slides.map((slide, index) => (
              <Slide
                key={index}
                gif={slide.gif}
                alt={slide.alt}
                text={slide.text}
                tweetText={slide.tweetText}
                isActive={index === currentSlide}
              />
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#67E8F9] shadow-[0_0_10px_rgba(103,232,249,0.6)]' 
                    : 'bg-[#67E8F9]/30 hover:bg-[#67E8F9]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional padding below */}
        <div className="pb-6 sm:pb-12 lg:pb-16"></div>

        {/* Footer Section */}
        <div className={`mt-16 sm:mt-20 lg:mt-24 transition-all duration-800 ${triggeredItems[8] ? 'animate-slide-up-bottom' : 'animate-initial'}`}>
          <div className="relative bg-[#0B1020]/95 backdrop-blur-lg border-t border-[#0D213F]/50 rounded-t-2xl">
            {/* Integrated thin divider at top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/60 to-transparent">
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/40 to-transparent blur-sm" />
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#67E8F9]/20 to-transparent blur-md" />
            </div>
            <div className="container-responsive">
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
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 touch-manipulation"
                  />
                  <img 
                    src="/x.png" 
                    alt="X" 
                    loading="lazy"
                    decoding="async"
                    onClick={() => window.open('https://x.com', '_blank')}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 touch-manipulation"
                  />
                  <span className="font-bold text-responsive-xs tracking-wide text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)] leading-tight">
                    Earn for being early: Lil V presale LIVE.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Info;