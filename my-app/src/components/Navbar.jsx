import { useState, useEffect, useCallback, useMemo } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    let ticking = false;
    
    const updateScrollState = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    const throttledScrollHandler = () => {
      let timeoutId;
      return () => {
        if (timeoutId) return;
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 16); // ~60fps
      };
    };

    const scrollHandler = throttledScrollHandler();
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [handleScroll]);

  // Memoize navigation links to prevent unnecessary re-renders
  const leftNavLinks = useMemo(() => (
    <div className={`nav-links ${scrolled ? 'hidden' : ''}`}>
      <a href="#how-to-ride">HOW TO RIDE</a>
      <a href="#las-vegas">LAS VEGAS</a>
    </div>
  ), [scrolled]);

  const rightNavLinks = useMemo(() => (
    <div className={`nav-links ${scrolled ? 'hidden' : ''}`}>
      <a href="#know-your-ride">KNOW YOUR RIDE</a>
      <a href="#support">SUPPORT</a>
    </div>
  ), [scrolled]);

  const ctaButton = useMemo(() => (
    <div className={`cta-button ${scrolled ? 'hidden' : ''}`}>
      <button>
        JOIN THE NEWSLETTER
        <span className="arrow">→</span>
      </button>
    </div>
  ), [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Hamburger menu for mobile */}
        <div className="hamburger-menu">
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>

        {/* Left Navigation links */}
        {leftNavLinks}

        {/* Logo - always visible */}
        <div className="logo">
          <img src="/logo.svg" alt="Logo" className="logo-image" />
        </div>

        {/* Right Navigation links */}
        {rightNavLinks}

        {/* CTA Button */}
        {ctaButton}
      </div>
    </nav>
  );
}
