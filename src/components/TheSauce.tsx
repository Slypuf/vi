import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SauceSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const SauceSection: React.FC<SauceSectionProps> = ({ id, title, children, isOpen, onToggle }) => {
  return (
    <div className="mb-6">
      {/* Section Header */}
      <div 
        onClick={() => onToggle(id)}
        className="cursor-pointer bg-[#0E1630]/60 border border-[#67E8F9]/40 rounded-2xl p-6 hover:bg-[#0E1630]/80 hover:border-[#67E8F9]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(103,232,249,0.3)]"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] tracking-wider">
            {title}
          </h3>
          <div className="transition-transform duration-300">
            {isOpen ? (
              <ChevronUp className="w-8 h-8 text-[#67E8F9]" />
            ) : (
              <ChevronDown className="w-8 h-8 text-[#67E8F9]" />
            )}
          </div>
        </div>
      </div>

      {/* Collapsible Content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`pt-6 ${isOpen ? 'translate-y-0' : '-translate-y-4'} transition-transform duration-500`}>
          {children}
          
          {/* Collapse Arrow at Bottom */}
          {isOpen && (
            <div className="flex justify-center mt-8">
              <div 
                onClick={() => onToggle(id)}
                className="cursor-pointer bg-[#0E1630]/60 border border-[#67E8F9]/40 rounded-full p-3 hover:bg-[#0E1630]/80 hover:border-[#67E8F9]/60 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(103,232,249,0.3)]"
                title="Collapse section"
              >
                <ChevronUp className="w-6 h-6 text-[#67E8F9]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface TheSauceProps {
  openSection?: string | null;
  onSectionChange?: (sectionId: string | null) => void;
}

export interface TheSauceRef {
  openSection: (id: string) => void;
}

const TheSauce = forwardRef<TheSauceRef, TheSauceProps>(({ openSection, onSectionChange }, ref) => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  const CAROUSEL_GIFS = [
    { src: '/ai.gif', alt: 'AI Animation', name: 'AI Trading Edge' },
    { src: '/eco.gif', alt: 'Eco Animation', name: 'Ecosystem' },
    { src: '/token.gif', alt: 'Token Animation', name: 'Tokenomics' },
    { src: '/throne.gif', alt: 'Throne Animation', name: 'Manifesto' },
    { src: '/bank.gif', alt: 'Bank Animation', name: 'Bank' },
  ];

  // Handle external control via props
  useEffect(() => {
    if (openSection !== undefined) {
      if (openSection) {
        setOpenSections(new Set([openSection]));
      } else {
        setOpenSections(new Set());
      }
    }
  }, [openSection]);

  // Auto-slide GIF carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_GIFS.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  const toggleSection = (id: string) => {
    const newOpenSections = new Set<string>();
    
    // If the clicked section is already open, close it
    if (openSections.has(id)) {
      // Close the section (leave set empty)
      // Scroll back to "The Sauce" section when collapsing
      setTimeout(() => {
        const sauceSection = document.getElementById('sauce');
        if (sauceSection) {
          sauceSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    } else {
      // Close any previously open section and open the new one
      newOpenSections.add(id);
      
      // Scroll to the expanded section to ensure it's visible
      setTimeout(() => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    }
    
    setOpenSections(newOpenSections);
    
    // Notify parent component if callback is provided
    if (onSectionChange) {
      onSectionChange(newOpenSections.size > 0 ? id : null);
    }
  };

  // Function to programmatically open a section (for external control)
  const openSpecificSection = (id: string) => {
    setOpenSections(new Set([id]));
    if (onSectionChange) {
      onSectionChange(id);
    }
  };

  // Expose the function to parent components
  useImperativeHandle(ref, () => ({
    openSection: openSpecificSection
  }));

  return (
    <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16 py-8 sm:py-12 lg:py-16">
      {/* Main Title */}
      <div className="mb-12">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wider mb-8">
          <span className="text-[#67E8F9] drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]">The Sauce</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-[#67E8F9]/80 max-w-4xl mx-auto leading-relaxed">
          Discover the secret ingredients that make Lil V the ultimate AI-powered trading ecosystem
        </p>
      </div>

      {/* Collapsible Sections */}
      <div className="max-w-6xl mx-auto">
        {/* AI Trading Edge - Enhanced with full data */}
        <SauceSection
          id="ai-trading-edge"
          title="AI Trading Edge"
          isOpen={openSections.has('ai-trading-edge')}
          onToggle={toggleSection}
        >
          <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-8">
            <div className="space-y-8">
              <div className="flex justify-center mb-6">
                <img 
                  src="/ai.gif" 
                  alt="AI Animation" 
                  className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/ai.gif';
                    link.download = 'ai.gif';
                    link.click();
                  }}
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-lg sm:text-xl lg:text-2xl text-[#67E8F9] leading-relaxed tracking-wide drop-shadow-[0_0_15px_rgba(103,232,249,0.6)]">
                  By processing tick data, news, and on-chain flows in real time, a self-executing AI finds hidden patterns and regime shifts—and acts on them. It auto-backtests, tunes parameters, and simulates risk to deploy only stress-tested strategies; execution algos autonomously route orders across venues, reduce slippage, and adapt to liquidity; round-the-clock monitoring enforces stop/risk rules and automatically intervenes—tightening/trailing stops, hedging, scaling, pausing, or exiting positions—so you focus on strategy. Outcome: tighter entries, cleaner exits, and a more disciplined, data-driven edge.
                </p>
                
                {/* Enhanced AI Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-[#67E8F9] mb-4">What the AI Actually Does</h4>
                    <div className="space-y-3 text-left">
                      <div>
                        <h5 className="font-semibold text-white mb-2">Objective</h5>
                        <p className="text-[#67E8F9]/80 text-sm">Convert market microstructure + news into one job: capture asymmetric moves with controlled drawdowns.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">Inputs (Continuously Measured)</h5>
                        <ul className="text-[#67E8F9]/80 text-sm space-y-1">
                          <li>• Price & Volume (multi-TF)</li>
                          <li>• Order Flow: CVD, aggressor imbalance</li>
                          <li>• Liquidity Heatmap & FVGs</li>
                          <li>• Volatility Regimes & News Impact</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-[#67E8F9] mb-4">Autonomous Decisions</h4>
                    <div className="space-y-3 text-left">
                      <div>
                        <h5 className="font-semibold text-white mb-2">Trading Logic</h5>
                        <ul className="text-[#67E8F9]/80 text-sm space-y-1">
                          <li>• Direction: Long/Short/Flat</li>
                          <li>• Sizing: Risk-based with caps</li>
                          <li>• Timing: ETA-to-Reversal windows</li>
                          <li>• Execution: Native exchange orders</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">Risk Framework</h5>
                        <ul className="text-[#67E8F9]/80 text-sm space-y-1">
                          <li>• Max Leverage: ≤3× notional</li>
                          <li>• Portfolio Exposure: ≤60%</li>
                          <li>• Circuit Breakers & Timelocks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SauceSection>

        {/* Ecosystem - Enhanced with full 7-phase data */}
        <SauceSection
          id="ecosystem"
          title="Ecosystem"
          isOpen={openSections.has('ecosystem')}
          onToggle={toggleSection}
        >
          <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-8">
            <div className="space-y-8">
              <div className="flex justify-center mb-6">
                <img 
                  src="/eco.gif" 
                  alt="Eco Animation" 
                  className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/eco.gif';
                    link.download = 'eco.gif';
                    link.click();
                  }}
                />
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] mb-8">
                How the Lil V Ecosystem Works
              </h3>
              
              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Phase 1: Buy $LILV</h4>
                  <p className="text-[#67E8F9]/80">Tap Connect Wallet → Buy $LILV on your DEX of choice. Hold in your wallet to qualify for rewards.</p>
                </div>
                
                {/* Phase 2 */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Phase 2: Hold to Qualify</h4>
                  <p className="text-[#67E8F9]/80">Holders are eligible for airdrops funded by Lil V's next-gen AI trading system. Snapshots published on the dashboard. Longer holding = more consistent eligibility.</p>
                </div>
                
                {/* Phase 3 */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Phase 3: Taxes → Main Trading Wallet</h4>
                  <p className="text-[#67E8F9]/80">A small buy/sell tax (set on launch and visible on the site) routes automatically to the Lil V Main Trading Wallet. The wallet address and live balance are displayed on the dashboard.</p>
                </div>
                
                {/* Phase 4 */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Phase 4: AI Trading Generates Yield</h4>
                  <p className="text-[#67E8F9]/80">Lil V's AI reads order flow and on-chain signals, then trades from the Main Trading Wallet. All positions, PnL, and risk metrics are streamed to a public dashboard for transparency.</p>
                </div>
                
                {/* Phase 5 */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Phase 5: Profits Are Allocated</h4>
                  <p className="text-[#67E8F9]/80 mb-4">Profits from trading are split into two buckets:</p>
                  <div className="pl-4 space-y-2">
                    <p className="text-[#67E8F9]/80"><span className="font-bold text-white">Buybacks:</span> market purchases of $LILV to support liquidity and reduce sell pressure.</p>
                    <p className="text-[#67E8F9]/80"><span className="font-bold text-white">Airdrops:</span> periodic distributions to eligible $LILV holders.</p>
                  </div>
                </div>
                
                {/* Phase 6 */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Phase 6: Automated Buybacks</h4>
                  <p className="text-[#67E8F9]/80">When thresholds are met (time, PnL, or price bands), the system executes on-chain buybacks using trusted routers/aggregators. Every tx is verifiable on the explorer and mirrored on the dashboard.</p>
                </div>
                
                {/* Phase 7 */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Phase 7: Airdrops to Holders</h4>
                  <p className="text-[#67E8F9]/80">After each cycle, the airdrop pool is finalized. Holders can Connect Wallet → Claim on the site. Claims are typically paid in $LILV (or a stablecoin if specified on the dashboard). Expiration windows and gas tips are shown before claim.</p>
                </div>
                
                {/* Bank GIF */}
                <div className="flex justify-center my-8">
                  <img 
                    src="/bank.gif" 
                    alt="Bank Animation" 
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
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Live Transparency</h4>
                  <p className="text-[#67E8F9]/80">All wallet addresses, trading activity, PnL, buyback transactions, and airdrop distributions are publicly viewable on the dashboard. The community can verify every step of the process in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </SauceSection>

        {/* Tokenomics - Enhanced with full allocation data */}
        <SauceSection
          id="tokenomics"
          title="Tokenomics"
          isOpen={openSections.has('tokenomics')}
          onToggle={toggleSection}
        >
          <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-8">
            <div className="space-y-8">
              <div className="flex justify-center mb-6">
                <img 
                  src="/token.gif" 
                  alt="Token Animation" 
                  className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/token.gif';
                    link.download = 'token.gif';
                    link.click();
                  }}
                />
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#67E8F9]/80 mb-4">
                  Simple, Fair, Sustainable
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/70 max-w-3xl mx-auto">
                  We're keeping the structure straightforward so everyone has a fair chance to participate.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-[#67E8F9] mb-4">Total Supply</h4>
                  <p className="text-4xl font-bold text-white">1,000,000,000</p>
                  <p className="text-[#67E8F9]/80 mt-2">$LILV Tokens</p>
                </div>
                
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-[#67E8F9] mb-4">Tax Structure</h4>
                  <div className="space-y-2">
                    <p className="text-lg text-white">Buy Tax: <span className="text-[#67E8F9]">5%</span></p>
                    <p className="text-lg text-white">Sell Tax: <span className="text-[#67E8F9]">5%</span></p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Tokenomics */}
              <div className="space-y-6">
                {/* Presale */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3 text-center">Presale — 12.5%</h4>
                  <p className="text-[#67E8F9]/80 text-center">Allocated at a fixed rate of 0.5% of total supply per 1 ETH contributed, up to the 12.5% cap. If total demand exceeds the cap, allocations will be adjusted to stay within it.</p>
                </div>
                
                {/* Influencer Marketing */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3 text-center">Influencer Marketing — 10%</h4>
                  <p className="text-[#67E8F9]/80 text-center">Deployed gradually to fund long-term creator partnerships and sustained awareness campaigns.</p>
                </div>
                
                {/* Team & Operations */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3 text-center">Team & Operations — 5%</h4>
                  <p className="text-[#67E8F9]/80 text-center">Reserved for essential overheads and day-to-day operations.</p>
                </div>
                
                {/* Market Making & Trading Wallet */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3 text-center">Market Making & Trading Wallet — 25%</h4>
                  <p className="text-[#67E8F9]/80 text-center">Set aside to provide liquidity and maintain orderly markets; a portion may be strategically converted and deployed to the trading wallet in line with our market-making and investment policy.</p>
                </div>
              </div>
              
              {/* Tax Allocation */}
              <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-[#67E8F9] mb-4 text-center">Tax Allocation</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#67E8F9]">60%</p>
                    <p className="text-[#67E8F9]/80">Main Trading Wallet</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#67E8F9]">25%</p>
                    <p className="text-[#67E8F9]/80">Liquidity Pool</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#67E8F9]">15%</p>
                    <p className="text-[#67E8F9]/80">Development & Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SauceSection>

        {/* Manifesto - Enhanced with full comprehensive data */}
        <SauceSection
          id="manifesto"
          title="Manifesto"
          isOpen={openSections.has('manifesto')}
          onToggle={toggleSection}
        >
          <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-8">
            <div className="space-y-8">
              <div className="flex justify-center mb-6">
                <img 
                  src="/throne.gif" 
                  alt="Throne Animation" 
                  className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/throne.gif';
                    link.download = 'throne.gif';
                    link.click();
                  }}
                />
              </div>
              
              <div className="space-y-6 text-left max-w-4xl mx-auto">
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Our Vision</h4>
                  <p className="text-[#67E8F9]/80 leading-relaxed">
                    To democratize access to institutional-grade AI trading technology, creating a sustainable ecosystem where holders benefit from the future of automated finance.
                  </p>
                </div>
                
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Our Mission</h4>
                  <p className="text-[#67E8F9]/80 leading-relaxed">
                    Build the most transparent, profitable, and community-driven AI trading system in the crypto space, where every holder becomes a stakeholder in the future of finance.
                  </p>
                </div>
                
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-3">Our Promise</h4>
                  <p className="text-[#67E8F9]/80 leading-relaxed">
                    Complete transparency in all trading operations, real-time PnL tracking, and automatic profit distribution to holders through strategic buybacks and airdrops.
                  </p>
                </div>
                
                {/* Enhanced Manifesto Content */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-4">What the AI Actually Does</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-white mb-2">Objective</h5>
                      <p className="text-[#67E8F9]/80 text-sm">Convert market microstructure + news into one job: capture asymmetric moves with controlled drawdowns.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-2">Inputs (Continuously Measured)</h5>
                      <ul className="text-[#67E8F9]/80 text-sm space-y-1">
                        <li>• Price & Volume (multi-TF)</li>
                        <li>• Order Flow: CVD, aggressor imbalance, trade intensity</li>
                        <li>• Liquidity Heatmap: resting bid/ask walls, depth clusters</li>
                        <li>• FVGs (fair-value gaps) and VWAP bands</li>
                        <li>• Volatility Regimes: squeezes/expansions, risk-on/off</li>
                        <li>• News & Macro: headlines ranked 1–5 by impact and time-decayed</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-2">Decisions (Autonomously Made)</h5>
                      <ul className="text-[#67E8F9]/80 text-sm space-y-1">
                        <li>• Direction: Long / Short / Flat</li>
                        <li>• Sizing: Risk-based position sizes with caps</li>
                        <li>• Timing: Uses ETA-to-Reversal windows and PRZ levels</li>
                        <li>• Execution: Places, scales, and trails with exchange-native orders</li>
                        <li>• De-risking: Cuts exposure on volatility spikes or stale data</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Features */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-4">What Holders See (Live Dashboard)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="text-[#67E8F9]/80 text-sm space-y-1">
                      <li>• Treasury Balance & Exchange Equity</li>
                      <li>• Open Positions & PnL</li>
                      <li>• Closed Trades Log</li>
                      <li>• Equity Curve & Drawdown</li>
                    </ul>
                    <ul className="text-[#67E8F9]/80 text-sm space-y-1">
                      <li>• Risk Panel & Circuit-Breaker Status</li>
                      <li>• Alpha Context & News Rank</li>
                      <li>• Buyback & Airdrop History</li>
                      <li>• Model Changelog</li>
                    </ul>
                  </div>
                </div>
                
                {/* Controls & Safeguards */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-4">Controls & Safeguards</h4>
                  <ul className="text-[#67E8F9]/80 text-sm space-y-1">
                    <li>• Multi-Sig for Treasury (signers disclosed)</li>
                    <li>• Withdrawal-Disabled API Keys on exchanges</li>
                    <li>• Read-Only Proofs & Audit Trails</li>
                    <li>• Emergency Kill-Switch & Circuit Breakers</li>
                    <li>• Independent Monitoring & Data Quality Checks</li>
                  </ul>
                </div>
                
                {/* FAQs */}
                <div className="bg-[#0E1630]/60 border border-[#0EA5E9]/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-[#67E8F9] mb-4">Frequently Asked Questions</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[#67E8F9] font-semibold mb-1 text-sm">Does the AI guarantee profit?</p>
                      <p className="text-[#67E8F9]/80 text-sm">No. It's a probabilistic, risk-managed system. Drawdowns happen. The focus is process + transparency.</p>
                    </div>
                    <div>
                      <p className="text-[#67E8F9] font-semibold mb-1 text-sm">Can the team touch funds?</p>
                      <p className="text-[#67E8F9]/80 text-sm">Treasury is multi-sig. Trading uses restricted API keys (no withdrawals). All operations follow posted schedules.</p>
                    </div>
                    <div>
                      <p className="text-[#67E8F9] font-semibold mb-1 text-sm">How do holders benefit?</p>
                      <p className="text-[#67E8F9]/80 text-sm">Through buybacks (supporting $LILV), airdrops to eligible holders, and compounding retained earnings buffer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SauceSection>
      </div>

      {/* Auto-Sliding GIF Carousel */}
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] mb-4">
            Visual Journey
          </h3>
          <p className="text-lg sm:text-xl text-[#67E8F9]/80">
            Experience the Lil V universe through our animated collection
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Carousel Display */}
          <div className="relative">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-8">
              <div className="flex justify-center mb-6">
                <img 
                  src={CAROUSEL_GIFS[currentGifIndex].src}
                  alt={CAROUSEL_GIFS[currentGifIndex].alt}
                  className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = CAROUSEL_GIFS[currentGifIndex].src;
                    link.download = CAROUSEL_GIFS[currentGifIndex].name;
                    link.click();
                  }}
                />
              </div>
              
              {/* Current GIF Info */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-[#67E8F9] mb-2">
                  {CAROUSEL_GIFS[currentGifIndex].name}
                </h4>
                <p className="text-[#67E8F9]/80 text-sm">
                  Click to download • Auto-cycles every 3 seconds
                </p>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {CAROUSEL_GIFS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGifIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentGifIndex
                      ? 'bg-[#67E8F9] scale-125 shadow-[0_0_10px_rgba(103,232,249,0.6)]'
                      : 'bg-[#67E8F9]/30 hover:bg-[#67E8F9]/60'
                  }`}
                  title={`Go to ${CAROUSEL_GIFS[index].name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

TheSauce.displayName = 'TheSauce';

export default TheSauce;
