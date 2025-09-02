import React from 'react';
import { useStaggeredAnimation } from '../hooks/useAnimation';

const About: React.FC = () => {
  const { containerRef, triggeredItems } = useStaggeredAnimation(8, 120);

  const download = (path: string, filename: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden px-2 sm:px-4 md:px-6"
    >
      {/* subtle gradient wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/10 via-transparent to-[#8B5CF6]/10"
        aria-hidden="true"
      />

      <div className="container-medium mx-auto relative w-full">
        <div
          className="text-center space-responsive-lg py-8 sm:py-12 lg:py-16"
          ref={containerRef}
        >
          <div className="space-responsive-base">
            {/* LIL V TRADES THE BLOCKCHAIN */}
            <div
              className={`text-center mt-4 sm:mt-5 lg:mt-6 transition-all duration-800 ${
                triggeredItems[0] ? 'animate-slide-up-bottom' : 'animate-initial'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#67E8F9] tracking-wider drop-shadow-[0_0_20px_rgba(103,232,249,0.8)] hover:scale-110 transition-transform duration-300 cursor-default">
                LIL V TRADES THE BLOCKCHAIN
              </h2>
            </div>

            {/* Hi GIF */}
            <div
              className={`w-full transition-all duration-800 ${
                triggeredItems[1] ? 'animate-slide-up-bottom' : 'animate-initial'
              }`}
            >
              <img
                src="/hi.gif"
                alt="Lil V greeting animation"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer touch-manipulation"
                onClick={() => download('/hi.gif', 'hi.gif')}
              />
            </div>

            {/* Who/What prompt */}
            <div
              className={`text-center mt-6 sm:mt-8 lg:mt-10 transition-all duration-800 ${
                triggeredItems[2] ? 'animate-slide-up-bottom' : 'animate-initial'
              }`}
            >
              <p className="text-responsive-2xl font-bold text-[#67E8F9] tracking-wider drop-shadow-[0_0_20px_rgba(103,232,249,0.8)] hover:scale-110 transition-transform duration-300 cursor-default">
                Who or what is Lil V?
              </p>
            </div>

            {/* Intro copy */}
            <div
              className={`bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-responsive-base transition-all duration-500 hover:bg-[#0D213F]/40 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] ${
                triggeredItems[3] ? 'animate-slide-up-bottom' : 'animate-initial'
              }`}
            >
              <div className="space-responsive-base text-left sm:text-center">
                <p className="text-responsive-base text-[#67E8F9] leading-relaxed tracking-wide drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  <span className="font-bold text-responsive-lg text-white drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]">
                    Lil V
                  </span>{' '}
                  is the AI alt-coin trader who printed his own meta. He hunts liquidity, front-runs narrative lag, and executes with zero hesitation. He isn’t joining a category—he’s aiming to sit on top of every chart.
                </p>

                <p className="text-responsive-base text-[#67E8F9] leading-relaxed tracking-wide drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  Charts are the symptom; flow is the cause.{' '}
                  <span className="font-bold text-white">Lil V</span> reads the
                  tape, maps traps before they spring, and turns order-flow
                  truth into clean entries and exits—then shows you how it’s
                  done.
                </p>

                <p className="text-responsive-base text-[#67E8F9] leading-relaxed tracking-wide drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  <span className="font-bold text-responsive-lg text-white drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]">
                    Join $LILV and watch the magic happen.
                  </span>
                  <br />
                  On-chain strategy, automated buybacks, periodic airdrops.{' '}
                  <span className="font-bold text-white">Get in now.</span>
                </p>

                {/* Get $LILV Button */}
                <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get $LILV (opens in a new tab)"
                    className="btn-responsive-lg bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#67E8F9] text-[#0B1020] font-bold rounded-xl transition-all duration-300 hover:scale-105 tracking-wider touch-manipulation hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#38BDF8]/70"
                  >
                    Get $LILV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Text above Trump GIF */}
          <div
            className={`text-center mt-6 sm:mt-8 lg:mt-10 transition-all duration-800 ${
              triggeredItems[4] ? 'animate-slide-up-bottom' : 'animate-initial'
            }`}
          >
            <p className="text-responsive-2xl font-bold text-[#67E8F9] tracking-wider drop-shadow-[0_0_20px_rgba(103,232,249,0.8)] transition-transform duration-300 hover:scale-110 cursor-default">
              AI makes everything faster, better — tremendous.
            </p>
          </div>

          {/* Trump GIF */}
          <div
            className={`flex justify-center mt-8 sm:mt-12 lg:mt-16 transition-all duration-800 ${
              triggeredItems[5] ? 'animate-slide-up-bottom' : 'animate-initial'
            }`}
          >
            <img
              src="/trump.gif"
              alt="Trump saying a positive line about AI"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="img-responsive rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer touch-manipulation"
              onClick={() => download('/trump.gif', 'trump.gif')}
            />
          </div>

          {/* Text above Throne GIF */}
          <div
            className={`text-center mt-6 sm:mt-8 lg:mt-10 transition-all duration-800 ${
              triggeredItems[6] ? 'animate-slide-up-bottom' : 'animate-initial'
            }`}
          >
            <p className="text-responsive-2xl font-bold text-[#67E8F9] tracking-wider drop-shadow-[0_0_20px_rgba(103,232,249,0.8)] transition-transform duration-300 hover:scale-110 cursor-default">
              before we can usher in the new, the old must be put to rest
            </p>
          </div>

          {/* Throne GIF */}
          <div
            className={`flex justify-center mt-8 sm:mt-12 lg:mt-16 transition-all duration-800 ${
              triggeredItems[7] ? 'animate-slide-up-bottom' : 'animate-initial'
            }`}
          >
            <img
              src="/throne.gif"
              alt="Lil V on a throne animation"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="img-responsive rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer touch-manipulation"
              onClick={() => download('/throne.gif', 'throne.gif')}
            />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;
