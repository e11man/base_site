import { useState, useEffect } from 'react';
import SplitText from '../SplitText';
import { heroContent } from '../../content';
import './Hero.css';
import RotatingText from '../RotatingText/RotatingText';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const rotatingWords = ['innovate', 'transform', 'create', 'build', 'grow', 'succeed'];

  // Set loaded state after component mounts for entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Handle the complete loading sequence
  useEffect(() => {
    if (isLoaded) {
      // Show subtitle after title is loaded
      const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 1000);
      // Show CTA after subtitle
      const ctaTimer = setTimeout(() => setCtaVisible(true), 1500);
      
      return () => {
        clearTimeout(subtitleTimer);
        clearTimeout(ctaTimer);
      };
    }
  }, [isLoaded]);

  return (
    <section className={`hero ${isLoaded ? 'hero--loaded' : ''}`} id="hero">
      <div className="hero__content">
        <div className="hero__text-container">
          <div className="hero__title-wrapper">
            <span className="hero__title-prefix">We help businesses </span>
            <div className="hero__rotating-text-container">
              <RotatingText
                texts={rotatingWords}
                rotationInterval={3000}
                transition={{ 
                  type: "spring", 
                  damping: 20, 
                  stiffness: 200, 
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                initial={{ y: "30%", opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: "-30%", opacity: 0, scale: 0.9 }}
                animatePresenceMode="wait"
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="center"
                mainClassName="font-bold text-3xl md:text-4xl lg:text-5xl text-white bg-purple-600 px-4 py-2 rounded-lg shadow-lg"
              />
            </div>
            
          </div>
          
          <div className={`hero__subtitle-container ${subtitleVisible ? 'hero__subtitle-container--visible' : ''}`}>
            <SplitText
              text={heroContent.subtitle}
              className="hero__subtitle"
              delay={20}
              duration={0.3}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </div>
          
          <div className={`hero__cta-container ${ctaVisible ? 'hero__cta-container--visible' : ''}`}>
            <a 
              href={heroContent.ctaLink} 
              className="hero__cta-button"
            >
              {heroContent.cta}
            </a>
          </div>
        </div>
      </div>
      
      {/* Responsive decorative elements */}
      <div className="hero__background">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
        <div className="hero__shape hero__shape--4"></div>
      </div>
    </section>
  );
};

export default Hero;