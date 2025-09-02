import React, { useState, useRef, useEffect, useCallback } from 'react';
import Contract from './Contract';

// Section IDs that match the actual DOM structure
type SectionId = 'hero' | 'about' | 'sauce' | 'extras';

const LINKS: { id: SectionId; label: string }[] = [
  { id: 'hero',  label: 'Home' },
  { id: 'about', label: 'LilV' },
  { id: 'sauce', label: 'The Sauce' },
  { id: 'extras', label: 'Extras' },
];

interface NavigationProps {
  onNavigate?: (sectionId: SectionId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<SectionId>('hero');
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Professional navigation function - simple and reliable
  const navigateToSection = useCallback((id: SectionId) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Close mobile menu
    setIsMenuOpen(false);
    
    // Update active state immediately
    setActive(id);
    
    // Get navbar height for proper offset
    const navHeight = navRef.current?.getBoundingClientRect().height || 64;
    
    // Calculate target position
    const rect = element.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - navHeight - 16;
    
    // Smooth scroll to section
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
    
    // Adjust for navbar offset
    setTimeout(() => {
      window.scrollBy(0, -navHeight - 16);
    }, 100);
    
    // Call parent navigation handler if provided
    if (onNavigate) {
      onNavigate(id);
    }
  }, [onNavigate]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Intersection Observer for active section detection
  useEffect(() => {
    const setupObserver = () => {
      const sections = LINKS
        .map((l) => document.getElementById(l.id))
        .filter(Boolean) as HTMLElement[];
      
      if (sections.length === 0) {
        setTimeout(setupObserver, 100);
        return;
      }
      
      const navHeight = navRef.current?.getBoundingClientRect().height || 64;
      
      const observer = new IntersectionObserver(
        (entries) => {
          let bestSection: SectionId | null = null;
          let bestScore = 0;
          
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect;
              const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
              const score = visibleHeight / rect.height;
              
              if (score > bestScore) {
                bestScore = score;
                bestSection = entry.target.id as SectionId;
              }
            }
          });
          
          if (bestSection && bestSection !== active) {
            setActive(bestSection);
          }
        },
        {
          root: null,
          rootMargin: `-${navHeight + 16}px 0px -20% 0px`,
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        }
      );

      sections.forEach((s) => observer.observe(s));
      
      return () => observer.disconnect();
    };
    
    const timer = setTimeout(setupObserver, 300);
    return () => clearTimeout(timer);
  }, [active]);

  // CSS classes
  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#67E8F9]/50 focus:ring-offset-[#0B1020]';
  
  const linkClass = (id: SectionId) =>
    `${linkBase} ${
      active === id
        ? 'text-white bg-[#0D213F]/50 ring-2 ring-[#67E8F9]/50 animate-pulse'
        : 'text-[#67E8F9] hover:text-white hover:bg-[#0D213F]/30'
    }`;

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B1020]/95 backdrop-blur-lg border-b border-[#0D213F]/50 shadow-lg"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logos + Contract */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/dexs.png"
              alt="Dexscreener"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => window.open('https://dexscreener.com', '_blank')}
            />
            <img
              src="/x.png"
              alt="X"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => window.open('https://x.com', '_blank')}
            />
            <div className="block">
              <Contract />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => navigateToSection(id)}
                className={linkClass(id)}
                aria-current={active === id ? 'page' : undefined}
                aria-label={`Navigate to ${label} section`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#67E8F9] hover:text-white p-2 rounded-md hover:bg-[#0D213F]/30 transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-[#0B1020]/95 backdrop-blur-lg border-t border-[#0D213F]/50 shadow-lg animate-slide-down"
        >
          <div className="px-4 py-3 space-y-2">
            {LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => navigateToSection(id)}
                className={`block w-full text-left ${linkClass(id)} text-base`}
                aria-label={`Navigate to ${label} section`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom border accent */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#67E8F9]/60 to-transparent" />
    </nav>
  );
};

export default Navigation;
