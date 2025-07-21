import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHamburgerAnimating, setIsHamburgerAnimating] = useState(false);
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const mobileMenuRef = useRef(null);
  
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

  // Prevent body scroll when mobile menu is open - Fixed approach
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Focus management for accessibility
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const firstLink = mobileMenuRef.current.querySelector('.navbar__mobile-link');
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 200);
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu clicked, current state:', isMobileMenuOpen); // Debug log
    setIsHamburgerAnimating(true);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    // Reset animation state after transition
    setTimeout(() => setIsHamburgerAnimating(false), 500);
  };

  const handleMobileLinkClick = (e) => {
    e.preventDefault();
    console.log('Mobile link clicked'); // Debug log
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    console.log('Close mobile menu'); // Debug log
    setIsMobileMenuOpen(false);
  };

  // Navigation items data
  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
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

          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__links">
              {navigationItems.slice(0, 4).map((item, index) => (
                <li key={item.label}>
                  <a href={item.href} className="navbar__link">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <a href="#contact" className="navbar__cta-button">Contact Us</a>
            <button 
              className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''} ${isHamburgerAnimating ? 'animating' : ''}`} 
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
            >
              <span className="navbar__mobile-toggle-line navbar__mobile-toggle-line--top"></span>
              <span className="navbar__mobile-toggle-line navbar__mobile-toggle-line--middle"></span>
              <span className="navbar__mobile-toggle-line navbar__mobile-toggle-line--bottom"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="navbar__backdrop" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
        ref={mobileMenuRef}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="navbar__mobile-menu-container">
          {/* Mobile menu header */}
          <div className="navbar__mobile-header">
            <div className="navbar__mobile-logo">
              <svg width="100" height="32" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 30C14.477 30 10 25.523 10 20C10 14.477 14.477 10 20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30Z" fill="url(#paint0_linear_mobile)"/>
                <path d="M50 10H55L65 30H59L57 26H48L46 30H40L50 10ZM55 22L52.5 17L50 22H55Z" fill="#333"/>
                <path d="M67 10H73V25H85V30H67V10Z" fill="#333"/>
                <path d="M87 10H93V30H87V10Z" fill="#333"/>
                <path d="M105 16H97V10H120V16H112V30H106V16H105Z" fill="#333"/>
                <defs>
                  <linearGradient id="paint0_linear_mobile" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6E8EFB"/>
                    <stop offset="1" stopColor="#A777E3"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <button 
              className="navbar__mobile-close"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile navigation */}
          <nav className="navbar__mobile-nav" aria-label="Mobile navigation">
            <ul className="navbar__mobile-links">
              {navigationItems.map((item, index) => (
                <li key={item.label} style={{ '--delay': `${index * 0.1}s` }}>
                  <a 
                    href={item.href} 
                    className="navbar__mobile-link"
                    onClick={handleMobileLinkClick}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                  >
                    <span className="navbar__mobile-link-icon">
                      {index === 0 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {index === 2 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {index === 3 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {index === 4 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                    <span className="navbar__mobile-link-text">{item.label}</span>
                    <span className="navbar__mobile-link-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA Section */}
          <div className="navbar__mobile-cta-section">
            <a 
              href="#contact" 
              className="navbar__mobile-cta-button"
              onClick={handleMobileLinkClick}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              <span className="navbar__mobile-cta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44818 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06588 2.16708 8.43499 2.48353C8.80409 2.79999 9.04725 3.23945 9.10999 3.72C9.22399 4.68007 9.45898 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.541 19.3199 14.776 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}