import Navbar from './components/navbar/Navbar';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero" id="home">
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

      {/* Services Section */}
      <section className="section services">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <p className="text-center text-muted mb-md">
            We offer comprehensive solutions to help your business grow and succeed in the digital age
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Strategy & Consulting</h3>
              <p>Expert guidance to help you navigate complex business challenges and identify growth opportunities.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Digital Transformation</h3>
              <p>Modernize your operations with cutting-edge technology solutions tailored to your specific needs.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3>Performance Optimization</h3>
              <p>Maximize efficiency and ROI through data-driven insights and continuous improvement strategies.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Team Development</h3>
              <p>Build high-performing teams with our comprehensive training and development programs.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3>Market Analytics</h3>
              <p>Gain competitive advantage with deep market insights and predictive analytics capabilities.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Customer Experience</h3>
              <p>Create exceptional customer journeys that drive loyalty and sustainable business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Why Choose Evolvion</h2>
          <p className="text-center text-muted mb-md">
            We combine innovation, expertise, and dedication to deliver exceptional results
          </p>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h4>Reliable Foundation</h4>
              <p>Built on proven methodologies and best practices</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h4>Cost Effective</h4>
              <p>Maximum value with transparent pricing models</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4>Timely Delivery</h4>
              <p>On-time project completion with agile approach</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </div>
              <h4>Expert Team</h4>
              <p>Skilled professionals with diverse expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="text-center">Our Process</h2>
          <p className="text-center text-muted mb-md">
            A proven approach to deliver exceptional results
          </p>
          
          <div className="process-timeline">
            <div className="process-item">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3>Discovery</h3>
                <p>We begin by understanding your unique challenges, goals, and requirements through comprehensive analysis.</p>
              </div>
            </div>
            
            <div className="process-item">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3>Strategy</h3>
                <p>Our team develops a tailored strategy that aligns with your business objectives and market dynamics.</p>
              </div>
            </div>
            
            <div className="process-item">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3>Implementation</h3>
                <p>We execute the plan with precision, using agile methodologies to ensure flexibility and efficiency.</p>
              </div>
            </div>
            
            <div className="process-item">
              <div className="process-number">4</div>
              <div className="process-content">
                <h3>Optimization</h3>
                <p>Continuous monitoring and refinement to maximize performance and achieve sustainable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="text-center">What Our Clients Say</h2>
          <p className="text-center text-muted mb-md">
            Don't just take our word for it - hear from our satisfied clients
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Evolvion transformed our business operations completely. Their strategic approach and technical expertise helped us achieve a 40% increase in efficiency within just 6 months."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">JD</div>
                  <div className="author-info">
                    <h4>John Davidson</h4>
                    <p>CEO, TechCorp Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The team at Evolvion went above and beyond our expectations. Their innovative solutions and dedicated support made our digital transformation journey seamless."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">SC</div>
                  <div className="author-info">
                    <h4>Sarah Chen</h4>
                    <p>CTO, Global Innovations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Working with Evolvion was a game-changer for our startup. They provided not just services, but true partnership and guidance that helped us scale rapidly."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">MR</div>
                  <div className="author-info">
                    <h4>Michael Rodriguez</h4>
                    <p>Founder, StartupHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how we can help you achieve your goals and drive sustainable growth
          </p>
          <div className="cta-buttons">
            <button className="button">Get Started Now</button>
            <button className="button button--secondary">Schedule a Call</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>About Evolvion</h4>
              <p>
                We are a leading consulting firm dedicated to helping businesses thrive in the digital age through innovative solutions and strategic guidance.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <p><a href="#">Strategy & Consulting</a></p>
              <p><a href="#">Digital Transformation</a></p>
              <p><a href="#">Performance Optimization</a></p>
              <p><a href="#">Team Development</a></p>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <p><a href="#">About Us</a></p>
              <p><a href="#">Our Team</a></p>
              <p><a href="#">Case Studies</a></p>
              <p><a href="#">Careers</a></p>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: hello@evolvion.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Business Ave, Suite 100</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Evolvion. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
}
