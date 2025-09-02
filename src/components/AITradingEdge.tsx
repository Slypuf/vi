import React from 'react';

const AITradingEdge: React.FC = () => {
  return (
    <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16 py-8 sm:py-12 lg:py-16">
      
      {/* AI GIF above the AI Trading Edge frame */}
      <div className="flex justify-center">
        <img 
          src="/ai.gif" 
          alt="AI Animation" 
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/ai.gif';
            link.download = 'ai.gif';
            link.click();
          }}
        />
      </div>

      {/* AI Trading Edge - framed block */}
      <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-8 sm:p-12 lg:p-16 hover:bg-[#0D213F]/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)]">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-[0_0_20px_rgba(103,232,249,0.8)] tracking-wider text-center">
            AI Trading Edge
          </h3>
          <p className="text-lg sm:text-2xl lg:text-3xl text-[#67E8F9] leading-relaxed tracking-wide drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
            By processing tick data, news, and on-chain flows in real time, a self-executing AI finds hidden patterns and regime shifts—and acts on them. It auto-backtests, tunes parameters, and simulates risk to deploy only stress-tested strategies; execution algos autonomously route orders across venues, reduce slippage, and adapt to liquidity; round-the-clock monitoring enforces stop/risk rules and automatically intervenes—tightening/trailing stops, hedging, scaling, pausing, or exiting positions—so you focus on strategy. Outcome: tighter entries, cleaner exits, and a more disciplined, data-driven edge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AITradingEdge;
