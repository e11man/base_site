import { useState, useEffect } from 'react';
import SplitText from '../SplitText';
import RotatingText from '../../RotatingText/RotatingText';
import { heroContent } from '../../content';
import './Hero.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  // Set loaded state after component mounts for entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Remove unused function since we handle this in the RotatingText onNext prop

  return (
    <section className={`hero ${isLoaded ? 'hero--loaded' : ''}`} id="hero">
      <div className="hero__content">
        <div className="hero__text-container">
          <div className="hero__title-wrapper">
            <span className="hero__title-prefix">We help businesses </span>
            <RotatingText
               texts={['transform', 'innovate', 'create', 'build', 'grow', 'succeed']}
               mainClassName="hero__rotating-text"
               splitLevelClassName="hero__rotating-word"
               elementLevelClassName="hero__rotating-char"
               staggerFrom="first"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -20, opacity: 0 }}
               staggerDuration={0.03}
               transition={{ type: "spring", damping: 18, stiffness: 250, duration: 0.8 }}
               rotationInterval={3500}
               splitBy="characters"
               loop={true}
               auto={true}
               onNext={() => setTitleAnimationComplete(true)}
             />
            <span className="hero__title-suffix"> their future</span>
          </div>
          
          {titleAnimationComplete && (
            <div className="hero__subtitle-container">
              <SplitText
                text={heroContent.subtitle}
                className="hero__subtitle"
                delay={30}
                duration={0.5}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-50px"
              />
            </div>
          )}
          
          {titleAnimationComplete && (
            <div className="hero__cta-container">
              <a 
                href={heroContent.ctaLink} 
                className="hero__cta-button"
                style={{ 
                  animationDelay: '0.8s',
                  opacity: titleAnimationComplete ? 1 : 0 
                }}
              >
                {heroContent.cta}
              </a>
            </div>
          )}
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