import React from 'react';
import './web.css';

const Web = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="container">
          <div className="logo-nav-wrapper">
            <div className="logo">
              <h1>TechNow Solutions</h1>
            </div>
            <nav>
              <ul className="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div className="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Transforming Business Through Technology</h2>
            <p>Innovative IT solutions that drive your digital transformation.</p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">Explore Services</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About TechNow Solutions</h2>
            <p>We are a forward-thinking IT solutions provider dedicated to empowering businesses through technology.</p>
          </div>
          <div className="about-details">
            <div className="about-card mission">
              <i className="fas fa-rocket"></i>
              <h3>Our Mission</h3>
              <p>Empower businesses with innovative, reliable, and scalable IT solutions tailored to their unique needs.</p>
            </div>
            <div className="about-card vision">
              <i className="fas fa-eye"></i>
              <h3>Our Vision</h3>
              <p>To be a globally recognized IT partner driving digital transformation and business success.</p>
            </div>
            <div className="about-card values">
              <i className="fas fa-heart"></i>
              <h3>Our Values</h3>
              <p>Our values include Innovation, Customer-Centricity, Integrity, and Excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive IT solutions designed to accelerate your business growth.</p>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <i className="fas fa-cloud"></i>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and migration services.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-lock"></i>
              <h3>Cybersecurity</h3>
              <p>Advanced security solutions to protect your digital assets.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-network-wired"></i>
              <h3>Network Management</h3>
              <p>Comprehensive network design and optimization.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Custom Software</h3>
              <p>Tailored software development for unique business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Ready to transform your business? Let's discuss your IT needs.</p>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 TechNow Solutions. All Rights Reserved.</p>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Web;
