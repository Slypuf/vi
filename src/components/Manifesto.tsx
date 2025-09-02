import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16 py-8 sm:py-12 lg:py-16">
        <div>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 lg:mb-16 tracking-wider">
            <span className="text-[#67E8F9] drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]">Lil V is The Future of Decentralized Trading</span>
          </h2>
          
          {/* DBZ GIF */}
          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
            <img 
              src="/dbz.gif" 
              alt="DBZ Animation" 
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(103,232,249,0.3)] border border-[#0EA5E9]/20 cursor-pointer"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/dbz.gif';
                link.download = 'dbz.gif';
                link.click();
              }}
            />
          </div>
        </div>
        
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Manifesto Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="space-y-6 text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)] mb-6">
                  Lil V is The Future of Decentralized Trading
                </h3>
                <div className="space-y-6 text-center">
                  <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                    In a world where traditional finance has failed the many to serve the few, we stand as a beacon of hope. 
                    <span className="font-bold text-[#67E8F9]"> Lil V</span> represents more than just a token—it's a revolution in how we think about wealth creation, community, and the power of collective intelligence.
                  </p>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                    Our AI-powered trading agent doesn't just analyze markets—it learns, adapts, and evolves with every transaction. 
                    While others rely on human emotion and bias, we harness the power of machine learning to make data-driven decisions that benefit our entire community.
                  </p>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                    <span className="font-bold text-[#67E8F9]">Transparency is our foundation.</span> Every trade, every decision, every profit is visible to all. 
                    We believe that true decentralization means complete openness—no hidden agendas, no backroom deals, no secrets.
                  </p>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                    The traditional system has taught us to compete against each other. We choose to <span className="font-bold text-[#67E8F9]">elevate together.</span> 
                    When one holder wins, we all win. When the AI succeeds, we all prosper. This is the power of true community-driven finance.
                  </p>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                    We are not just building a token—we are building a <span className="font-bold text-[#67E8F9]">new paradigm.</span> 
                    A world where technology serves humanity, where wealth is distributed fairly, and where the future belongs to those who dare to imagine it differently.
                  </p>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed font-bold">
                    Join us. Hold with conviction. Trade with purpose. Rise with the community.
                  </p>
                  
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)] text-center mt-8">
                    This is the age of Lil V.
                  </p>
                </div>
                
                {/* What the AI Actually Does Section */}
                <div className="mt-12 sm:mt-16 lg:mt-20">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_rgba(103,232,249,0.6)] mb-6 text-center">
                    What the AI Actually Does
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Objective */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        Objective
                      </h4>
                      <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80 leading-relaxed">
                        Convert market microstructure + news into one job: capture asymmetric moves with controlled drawdowns.
                      </p>
                    </div>
                    
                    {/* Inputs */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        Inputs it measures (continuously)
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• <span className="font-semibold">Price & Volume</span> (multi-TF)</li>
                        <li>• <span className="font-semibold">Order Flow:</span> CVD, aggressor imbalance, trade intensity</li>
                        <li>• <span className="font-semibold">Liquidity Heatmap:</span> resting bid/ask walls, depth clusters</li>
                        <li>• <span className="font-semibold">FVGs</span> (fair-value gaps) and VWAP bands</li>
                        <li>• <span className="font-semibold">Volatility Regimes:</span> squeezes/expansions, risk-on/off</li>
                        <li>• <span className="font-semibold">News & Macro:</span> headlines ranked 1–5 by impact and time-decayed</li>
                      </ul>
                    </div>
                    
                    {/* Decisions */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        Decisions it makes (autonomously)
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• <span className="font-semibold">Direction:</span> Long / Short / Flat</li>
                        <li>• <span className="font-semibold">Sizing:</span> Risk-based position sizes with caps</li>
                        <li>• <span className="font-semibold">Timing:</span> Uses ETA-to-Reversal windows and PRZ levels (Potential Reversal Zones) for entries/exits</li>
                        <li>• <span className="font-semibold">Execution:</span> Places, scales, and trails with exchange-native orders (limit/market/TP/SL)</li>
                        <li>• <span className="font-semibold">De-risking:</span> Cuts exposure on volatility spikes, stale data, or circuit-breaker triggers</li>
                      </ul>
                    </div>
                    
                    {/* Risk Framework */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        Risk Framework (Hard Rules)
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• <span className="font-semibold">Max Leverage:</span> Conservative cap (e.g., ≤ 3× notional on BTC perps)</li>
                        <li>• <span className="font-semibold">Max Portfolio Exposure:</span> e.g., ≤ 60% in market at any time</li>
                        <li>• <span className="font-semibold">Per-Trade Risk:</span> Fixed % of equity; auto-calculated stops</li>
                        <li>• <span className="font-semibold">Circuit Breakers:</span> Pause on extreme slippage, feed degradation, or daily loss limit</li>
                        <li>• <span className="font-semibold">Venue Whitelist:</span> Trades only on pre-approved, liquid venues (segregated sub-accounts)</li>
                        <li>• <span className="font-semibold">Upgrade Timelock:</span> Any model/risk update is timelocked and changelogged before going live</li>
                      </ul>
                    </div>
                    
                    {/* Value Returns */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        How Value Returns to Holders
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• <span className="font-semibold">Buybacks:</span> A scheduled % of realized profits is used to buy $LV on the open market, supporting price and reducing float.</li>
                        <li>• <span className="font-semibold">Airdrops:</span> A scheduled % is distributed to eligible wallets (snapshot rules below).</li>
                        <li>• <span className="font-semibold">Policy Slider:</span> (transparent & on-chain): e.g., 50% buybacks / 30% airdrops / 20% retained earnings (buffer).</li>
                        <li>• <span className="font-semibold">Snapshots & Eligibility:</span> Minimum holding threshold, anti-sybil rules, and snapshot times are published ahead.</li>
                      </ul>
                    </div>
                    
                    {/* Dashboard */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        What Holders See (Live on the Dashboard)
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• <span className="font-semibold">Treasury Balance</span> (on-chain) & Exchange Equity (read-only proof)</li>
                        <li>• <span className="font-semibold">Open Positions:</span> symbol, side, size, average price, unrealized PnL</li>
                        <li>• <span className="font-semibold">Closed Trades Log:</span> timestamp, entry/exit, realized PnL, fees</li>
                        <li>• <span className="font-semibold">Equity Curve & Drawdown:</span> daily and cumulative</li>
                        <li>• <span className="font-semibold">Risk Panel:</span> current leverage, exposure %, VaR/limits, circuit-breaker status</li>
                        <li>• <span className="font-semibold">Alpha Context:</span> current news rank (1–5), ETA-to-reversal, PRZ levels</li>
                        <li>• <span className="font-semibold">Buyback & Airdrop History:</span> tx hashes, amounts, recipient counts</li>
                        <li>• <span className="font-semibold">Model Changelog:</span> what changed, when, and why</li>
                      </ul>
                      <p className="text-sm sm:text-base text-[#67E8F9]/60 mt-3 italic">
                        Privacy Note: The AI's strategy code and feature weights are proprietary; the results & risk stats are public.
                      </p>
                    </div>
                    
                    {/* Flow of Funds */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        Flow of Funds (Plain-English)
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• Taxes & contributions arrive at the Treasury multi-sig.</li>
                        <li>• The AI allocates risk and trades from a withdrawal-disabled sub-account linked to the Treasury.</li>
                        <li>• Profits/losses realize continuously; buffers cover fees and slippage.</li>
                        <li>• On schedule, a profit split executes: buybacks, airdrops, retained earnings.</li>
                        <li>• All movements are published with on-chain tx links and exchange proofs.</li>
                      </ul>
                    </div>
                    
                    {/* Controls & Safeguards */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        Controls & Safeguards
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• <span className="font-semibold">Multi-Sig for Treasury</span> (signers disclosed)</li>
                        <li>• <span className="font-semibold">Withdrawal-Disabled API Keys</span> on exchanges</li>
                        <li>• <span className="font-semibold">Read-Only Proofs:</span> balance attestations, trade exports, and audit trails</li>
                        <li>• <span className="font-semibold">Emergency Kill-Switch:</span> pauses new trades; preserves existing stops</li>
                        <li>• <span className="font-semibold">Geo/Compliance Filters:</span> access and contributions may be restricted by jurisdiction</li>
                        <li>• <span className="font-semibold">Independent Monitoring:</span> heartbeat + data-quality checks, with automatic de-risking</li>
                      </ul>
                    </div>
                    
                    {/* Transparency & Proof */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        Transparency & Proof
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• <span className="font-semibold">On-Chain:</span> Treasury address, buyback/airdrop txs, timelocked config changes</li>
                        <li>• <span className="font-semibold">Off-Chain:</span> Exchange sub-account statements, signed balance proofs, trade CSVs</li>
                        <li>• <span className="font-semibold">Public Metrics:</span> 30/90/365-day PnL, Sharpe, win rate, average R, max DD</li>
                        <li>• <span className="font-semibold">"No Cherry-Pick" Policy:</span> every trade recorded; no retrospective edits</li>
                      </ul>
                    </div>
                    
                    {/* Policy & Parameters */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        Policy & Parameters (Editable, Always Visible)
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• <span className="font-semibold">Tax Rate:</span> X% buys / Y% sells → Treasury</li>
                        <li>• <span className="font-semibold">Profit Allocation:</span> % buybacks / % airdrops / % retained</li>
                        <li>• <span className="font-semibold">Trading Universe:</span> BTC spot & perps (additions require timelock)</li>
                        <li>• <span className="font-semibold">Risk Limits:</span> leverage cap, daily loss limit, per-trade risk</li>
                        <li>• <span className="font-semibold">Distribution Schedule:</span> weekly/bi-weekly buybacks; monthly airdrops</li>
                        <li>• <span className="font-semibold">Snapshots:</span> cadence, minimum balance, exclusion rules for sybil activity</li>
                      </ul>
                    </div>
                    
                    {/* FAQs */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        FAQs
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9] font-semibold mb-1">Does the AI guarantee profit?</p>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">No. It's a probabilistic, risk-managed system. Drawdowns happen. The focus is process + transparency.</p>
                        </div>
                        <div>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9] font-semibold mb-1">Can the team touch funds?</p>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">Treasury is multi-sig. Trading uses restricted API keys (no withdrawals). Buybacks/airdrops follow the posted schedule and require multi-sig.</p>
                        </div>
                        <div>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9] font-semibold mb-1">What exactly is disclosed?</p>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">Everything results-based: open/closed positions, PnL, risk metrics, transaction history, and model changelogs. Secret sauce (weights/code) stays private to protect edge.</p>
                        </div>
                        <div>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9] font-semibold mb-1">How do holders benefit?</p>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">Through buybacks (supporting $LV) and airdrops allocated to eligible $LILV holders, plus the compounding retained earnings buffer that stabilizes performance.</p>
                        </div>
                        <div>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9] font-semibold mb-1">What if markets go wild?</p>
                          <p className="text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">Circuit breakers reduce exposure; the AI can go flat. Updates to risk policy are timelocked and publicly announced.</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Legal & Risk Disclosure */}
                    <div className="bg-[#0E1630]/60 backdrop-blur-sm border border-[#0EA5E9]/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#67E8F9] mb-3">
                        Legal & Risk Disclosure (Website Footer)
                      </h4>
                      <ul className="space-y-2 text-base sm:text-lg lg:text-xl text-[#67E8F9]/80">
                        <li>• Trading digital assets is risky and may result in loss of principal.</li>
                        <li>• $LV is a utility/governance token of the Lil V ecosystem and is not equity.</li>
                        <li>• The AI trader is autonomous decision support for the Treasury; nothing on this site is financial advice.</li>
                        <li>• Contributions, access, and distributions may be restricted by jurisdiction and subject to KYC/AML and tax rules.</li>
                        <li>• Historical performance does not guarantee future results.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Manifesto;
