import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Transform Your Business
            <span>With Modern Solutions</span>
          </h1>
          <p>
            We help companies navigate digital transformation, optimize performance, 
            and achieve sustainable growth through innovative strategies and cutting-edge technology.
          </p>
          <div className="hero-buttons">
            <button className="button button--accent">
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="button button--secondary">
              Watch Demo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
            </button>
          </div>
          
          <div className="hero-features">
            <div className="hero-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Trusted by 500+ companies</span>
            </div>
            <div className="hero-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>98% client satisfaction</span>
            </div>
            <div className="hero-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>24/7 expert support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;