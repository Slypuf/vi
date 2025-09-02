// Enhanced scroll utility with comprehensive error handling and reliable behavior
export function scrollToElementTop(el: HTMLElement, extraOffset = 0, signal?: AbortSignal): Promise<void> {
  return new Promise<void>((resolve) => {
    if (!el) {
      console.warn('Element not found for scrolling');
      return resolve();
    }
    
    // Calculate navbar height dynamically
    const navElement = document.querySelector('nav');
    const navHeight = navElement ? navElement.getBoundingClientRect().height : 64;
    
    // Get element position
    const rect = el.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const targetTop = Math.max(0, absoluteTop - navHeight + extraOffset);
    
    // Check if we're already at the target position
    const currentScrollY = window.scrollY;
    const scrollDifference = Math.abs(currentScrollY - targetTop);
    
    if (scrollDifference < 10) {
      // Already close to target, resolve immediately
      return resolve();
    }
    
    // Use smooth scrolling with fallback
    try {
      window.scrollTo({ 
        top: targetTop, 
        behavior: 'smooth' 
      });
    } catch (error) {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, targetTop);
      return resolve();
    }
    
    // Monitor scroll completion with improved logic
    let frames = 0;
    const maxFrames = 150; // Increased timeout for reliability
    let lastScrollY = currentScrollY;
    let stuckCount = 0;
    
    function checkScrollCompletion() {
      if (signal?.aborted) return resolve();
      
      frames++;
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - targetTop);
      
      // Check if scroll is stuck
      if (Math.abs(currentScrollY - lastScrollY) < 1) {
        stuckCount++;
      } else {
        stuckCount = 0;
      }
      
      lastScrollY = currentScrollY;
      
      // Consider scroll complete if:
      // 1. We're within 5px of target, OR
      // 2. Timeout reached, OR  
      // 3. Scroll is stuck for more than 10 frames
      if (scrollDifference < 5 || frames > maxFrames || stuckCount > 10) {
        resolve();
      } else {
        requestAnimationFrame(checkScrollCompletion);
      }
    }
    
    requestAnimationFrame(checkScrollCompletion);
  });
}

// Enhanced utility function specifically for navigation scrolling
export function scrollToSection(sectionId: string, extraOffset = 8): Promise<void> {
  return new Promise<void>((resolve) => {
    // First try to find the element by the exact ID
    let element = document.getElementById(sectionId);
    
    // If not found, try alternative IDs for nested sections
    if (!element) {
      switch (sectionId) {
        case 'ai-trading-edge':
          element = document.getElementById('ai-trading-edge');
          break;
        case 'ecosystem':
          element = document.getElementById('ecosystem');
          break;
        case 'tokenomics':
          element = document.getElementById('tokenomics');
          break;
        case 'manifesto':
          element = document.getElementById('manifesto');
          break;
        default:
          element = document.getElementById(sectionId);
      }
    }
    
    if (!element) {
      console.warn(`Section with id "${sectionId}" not found`);
      return resolve();
    }
    
    // Ensure the element is in the DOM and visible
    if (!element.offsetParent && element !== document.body) {
      console.warn(`Section with id "${sectionId}" is not visible`);
      return resolve();
    }
    
    // Use the enhanced scroll function
    scrollToElementTop(element, extraOffset).then(() => {
      resolve();
    }).catch((error) => {
      console.error(`Scroll failed:`, error);
      resolve();
    });
  });
}

// Utility to check if an element is in viewport
export function isElementInViewport(element: HTMLElement, threshold = 0.1): boolean {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold
  );
}

// New utility for smooth scrolling to coordinates
export function scrollToPosition(y: number, behavior: ScrollBehavior = 'smooth'): Promise<void> {
  return new Promise<void>((resolve) => {
    try {
      window.scrollTo({ top: y, behavior });
      
      // Monitor scroll completion
      let frames = 0;
      const maxFrames = 120;
      
      function checkScrollCompletion() {
        frames++;
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - y);
        
        if (scrollDifference < 5 || frames > maxFrames) {
          resolve();
        } else {
          requestAnimationFrame(checkScrollCompletion);
        }
      }
      
      requestAnimationFrame(checkScrollCompletion);
    } catch (error) {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, y);
      resolve();
    }
  });
}

// Utility to get the current scroll position
export function getCurrentScrollPosition(): number {
  return window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
}

// Utility to check if scrolling is supported
export function isSmoothScrollingSupported(): boolean {
  return 'scrollBehavior' in document.documentElement.style;
}
