import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  
  // Set loaded state after component mounts for entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll events with requestAnimationFrame for performance
  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Super smooth transition with a very low scroll threshold
          setIsScrolled(lastScrollY.current > 30);
          
          // Calculate scroll progress for the progress bar
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = Math.min(Math.max(lastScrollY.current / totalHeight, 0), 1);
          setScrollProgress(progress);
          
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isLoaded ? 'navbar--loaded' : ''}`} ref={navbarRef}>
      <div className="navbar__progress-bar" style={{ width: `${scrollProgress * 100}%` }}></div>
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="/" aria-label="Home">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="navbar__logo-svg">
              <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 30C14.477 30 10 25.523 10 20C10 14.477 14.477 10 20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30Z" fill="url(#paint0_linear)"/>
              <path d="M50 10H55L65 30H59L57 26H48L46 30H40L50 10ZM55 22L52.5 17L50 22H55Z" fill="currentColor"/>
              <path d="M67 10H73V25H85V30H67V10Z" fill="currentColor"/>
              <path d="M87 10H93V30H87V10Z" fill="currentColor"/>
              <path d="M105 16H97V10H120V16H112V30H106V16H105Z" fill="currentColor"/>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6E8EFB"/>
                  <stop offset="1" stopColor="#A777E3"/>
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>

        <nav className="navbar__nav">
          <ul className="navbar__links">
            <li><a href="#" className="navbar__link">Home</a></li>
            <li><a href="#" className="navbar__link">About</a></li>
            <li><a href="#" className="navbar__link">Services</a></li>
            <li><a href="#" className="navbar__link">Portfolio</a></li>
          </ul>
        </nav>

        <div className="navbar__actions">
          <a href="#" className="navbar__cta-button">Contact Us</a>
          <button 
            className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="navbar__mobile-menu-container">
          <nav className="navbar__mobile-nav">
            <ul className="navbar__mobile-links">
              <li><a href="#" className="navbar__mobile-link">Home</a></li>
              <li><a href="#" className="navbar__mobile-link">About</a></li>
              <li><a href="#" className="navbar__mobile-link">Services</a></li>
              <li><a href="#" className="navbar__mobile-link">Portfolio</a></li>
              <li><a href="#" className="navbar__mobile-link navbar__mobile-cta">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="navbar__backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}