import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-text">M</span>
              <span className="logo-dot"></span>
            </div>
            <p>Building digital experiences with modern web technologies</p>
            <div className="social-links">
              <a href="https://github.com/MushbaSiddiqui" target="_blank"
               rel="noopener noreferrer" className="github">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mushba-siddiqui-605806183/" target="_blank" 
              rel="noopener noreferrer" className="linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <nav>
              <a href="#home" onClick={(e) => {
                e.preventDefault();
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
              }}>Home</a>
              <a href="#about" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              }}>About</a>
              <a href="#projects" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}>Projects</a>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}>Contact</a>
            </nav>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> mushbaali86@gmail.com</p>
              <p><i className="fas fa-phone"></i> +923292028468</p>
              <p><i className="fas fa-map-marker-alt"></i> Karachi, Pakistan</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} MushbaDev. All rights reserved.</p>
          </div>
          <div className="footer-meta">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 