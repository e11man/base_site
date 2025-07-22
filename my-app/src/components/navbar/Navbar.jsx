import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container">
          <div className="navbar__container">
            <div className="navbar__logo">
              <a href="/">
                <span className="navbar__logo-text">Evolvion</span>
              </a>
            </div>

            <nav className="navbar__nav">
              <ul className="navbar__links">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="navbar__link">{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="navbar__actions">
              <a href="#contact" className="button">Get a Quote</a>
              <button 
                className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <div className="navbar__mobile-header">
          <span className="navbar__logo-text">Evolvion</span>
          <button 
            className="navbar__mobile-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6L18 18"/>
            </svg>
          </button>
        </div>
        <nav className="navbar__mobile-nav">
          <ul className="navbar__mobile-links">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="navbar__mobile-link"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="button" onClick={closeMobileMenu}>
            Get a Quote
          </a>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div className="navbar__backdrop" onClick={closeMobileMenu} />
      )}
    </>
  );
}