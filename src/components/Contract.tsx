import React, { useState } from 'react';

const Contract: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0x1234...5678').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }).catch(() => {
      // Fallback visual feedback even if clipboard fails
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-1 sm:space-x-2 bg-[#0E1630]/40 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-lg px-3 sm:px-4 py-1 sm:py-2 hover:bg-[#0D213F]/60 transition-all duration-300">
        <span className="text-[#67E8F9] font-bold text-xs sm:text-sm lg:text-base tracking-wider whitespace-nowrap">
          Contract:
        </span>
        <button
          onClick={handleCopy}
          className="text-[#67E8F9] hover:text-white font-bold text-xs sm:text-sm lg:text-base tracking-wider transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(103,232,249,0.6)] cursor-pointer"
          title="Click to copy contract address"
        >
          0x1234...5678
        </button>
      </div>

      {/* Copy toast */}
      {copied && (
        <div
          role="status"
          aria-live="polite"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 rounded-lg bg-[#0E1630]/95 border border-[#0EA5E9]/40 text-[#67E8F9] text-sm shadow-[0_10px_30px_rgba(103,232,249,0.2)] animate-slide-up z-10"
        >
          Copied contract!
        </div>
      )}
    </div>
  );
};

export default Contract;
