import React from 'react';

const Ecosystem: React.FC = () => {
  return (
    <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16 py-8 sm:py-12 lg:py-16">
        <div>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 lg:mb-16 tracking-wider">
            <span className="text-[#67E8F9] drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]">How the Lil V Ecosystem Works</span>
          </h2>
          
          {/* Eco GIF */}
          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
            <img 
              src="/eco.gif" 
              alt="Eco Animation" 
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/eco.gif';
                link.download = 'eco.gif';
                link.click();
              }}
            />
          </div>
        </div>
        
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Step 1 */}
          <div className="space-y-4">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
              <div className="space-y-4 text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  Phase 1: Buy $LILV
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                  Tap Connect Wallet → Buy $LILV on your DEX of choice. Hold in your wallet to qualify for rewards.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
              <div className="space-y-4 text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  Phase 2: Hold to Qualify
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                  Holders are eligible for airdrops funded by Lil V's next-gen AI trading system. Snapshots published on the dashboard. Longer holding = more consistent eligibility.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-4">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
              <div className="space-y-4 text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  Phase 3: Taxes → Main Trading Wallet
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                  A small buy/sell tax (set on launch and visible on the site) routes automatically to the Lil V Main Trading Wallet. The wallet address and live balance are displayed on the dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-4">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
              <div className="space-y-4 text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  Phase 4: AI Trading Generates Yield
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                  Lil V's AI reads order flow and on-chain signals, then trades from the Main Trading Wallet. All positions, PnL, and risk metrics are streamed to a public for transparency.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="space-y-4">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
              <div className="space-y-4 text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  Phase 5: Profits Are Allocated
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed mb-4">
                  Profits from trading are split into two buckets:
                </p>
                <div className="pl-4 sm:pl-6 space-y-2">
                  <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                    <span className="font-bold text-white">Buybacks:</span> market purchases of $LILV to support liquidity and reduce sell pressure.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                    <span className="font-bold text-white">Airdrops:</span> periodic distributions to eligible $LILV holders.
                  </p>
                </div>
               
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="space-y-4">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
              <div className="space-y-4 text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  Phase 6: Automated Buybacks
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                  When thresholds are met (time, PnL, or price bands), the system executes on-chain buybacks using trusted routers/aggregators. Every tx is verifiable on the explorer and mirrored on the dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="space-y-4">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
              <div className="space-y-4 text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  Phase 7: Airdrops to Holders
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                  After each cycle, the airdrop pool is finalized. Holders can Connect Wallet → Claim on the site. Claims are typically paid in $LILV (or a stablecoin if specified on the dashboard). Expiration windows and gas tips are shown before claim.
                </p>
              </div>
            </div>
          </div>

          {/* Bank GIF above Live Transparency */}
          <div className="flex justify-center my-8 sm:my-12 lg:my-16">
            <img 
              src="/bank.gif" 
              alt="Bank Animation" 
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/bank.gif';
                link.download = 'bank.gif';
                link.click();
              }}
            />
          </div>

          {/* Live Transparency */}
          <div className="space-y-4">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] transition-all duration-300">
              <div className="space-y-4 text-center max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  Live Transparency
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                  All wallet addresses, trading activity, PnL, buyback transactions, and airdrop distributions are publicly viewable on the dashboard. The community can verify every step of the process in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Ecosystem;