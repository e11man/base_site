import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Transform Your Business with Expert Solutions</h1>
          <p>
            We help companies navigate digital transformation, optimize performance, 
            and achieve sustainable growth through innovative strategies and cutting-edge technology.
          </p>
          <div className="hero-buttons">
            <button className="button">Get Started Now</button>
            <button className="button button--secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;