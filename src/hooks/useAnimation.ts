import { useEffect, useRef, useState } from 'react';

interface UseAnimationOptions {
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const useAnimation = (options: UseAnimationOptions = {}) => {
  const { delay = 0, threshold = 0.1, triggerOnce = true } = options;
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggered || !triggerOnce) {
            setTimeout(() => {
              setIsVisible(true);
              setHasTriggered(true);
            }, delay);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold, triggerOnce, hasTriggered]);

  return { elementRef: elementRef as React.RefObject<HTMLElement>, isVisible };
};

export const useStaggeredAnimation = (count: number, baseDelay: number = 100) => {
  const [triggeredItems, setTriggeredItems] = useState<boolean[]>(new Array(count).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations with staggered delays
          triggeredItems.forEach((_, index) => {
            setTimeout(() => {
              setTriggeredItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, baseDelay * index);
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [count, baseDelay, triggeredItems]);

  return { containerRef, triggeredItems };
};

export const useAppLoadedAnimation = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    const handleAppLoaded = () => {
      setIsAppLoaded(true);
    };

    // Check if app is already loaded
    if ((window as any).__APP_LOADING__ === false) {
      setIsAppLoaded(true);
    } else {
      window.addEventListener('app-loaded', handleAppLoaded);
    }

    return () => {
      window.removeEventListener('app-loaded', handleAppLoaded);
    };
  }, []);

  return isAppLoaded;
};

export const useCollapsibleAnimation = (sectionIds: string[], baseDelay: number = 150) => {
  const [animatedSections, setAnimatedSections] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('🎬 Collapsible sections container in view, starting animations...');
          // Trigger animations with staggered delays for each section
          sectionIds.forEach((sectionId, index) => {
            setTimeout(() => {
              console.log(`✨ Animating section: ${sectionId}`);
              setAnimatedSections(prev => {
                const newSet = new Set(prev);
                newSet.add(sectionId);
                return newSet;
              });
            }, baseDelay * index);
          });
        }
      },
      {
        threshold: 0.15, // Slightly higher threshold for better trigger timing
        rootMargin: '0px 0px -80px 0px' // Adjusted margin for earlier triggering
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [sectionIds, baseDelay]);

  return { containerRef, animatedSections };
};
