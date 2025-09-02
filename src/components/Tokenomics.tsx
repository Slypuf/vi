import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16 py-8 sm:py-12 lg:py-16">
        
        <div>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 lg:mb-16 tracking-wider">
            <span className="text-[#67E8F9] drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]">Tokenomics</span>
          </h2>
          
          {/* Token GIF */}
          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
            <img 
              src="/token.gif" 
              alt="Token Animation" 
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer touch-manipulation"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/token.gif';
                link.download = 'token.gif';
                link.click();
              }}
            />
          </div>
          
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#67E8F9]/80 mb-4 sm:mb-6 lg:mb-8">
            Simple, Fair, Sustainable
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/70 max-w-3xl mx-auto">
            We're keeping the structure straightforward so everyone has a fair chance to participate.
          </p>
        </div>
        
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Presale */}
          <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
            <div className="space-y-4 text-center max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                Presale — 12.5%
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                Allocated at a fixed rate of 0.5% of total supply per 1 ETH contributed, up to the 12.5% cap. If total demand exceeds the cap, allocations will be adjusted to stay within it.
              </p>
            </div>
          </div>

          {/* Influencer Marketing */}
          <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
            <div className="space-y-4 text-center max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                Influencer Marketing — 10%
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                Deployed gradually to fund long-term creator partnerships and sustained awareness campaigns.
              </p>
            </div>
          </div>

          {/* Team & Operations */}
          <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
            <div className="space-y-4 text-center max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                Team & Operations — 5%
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                Reserved for essential overheads and day-to-day operations.
              </p>
            </div>
          </div>

          {/* Market Making & Trading Wallet */}
          <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
            <div className="space-y-4 text-center max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                Market Making & Trading Wallet — 25%
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                Set aside to provide liquidity and maintain orderly markets; a portion may be strategically converted and deployed to the trading wallet in line with our market-making and investment policy.
              </p>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Tokenomics;
