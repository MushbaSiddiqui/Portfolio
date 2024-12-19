import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Resume from './Resume';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>
            <div className="logo">
              <span className="logo-text">M</span>
              <span className="logo-dot"></span>
            </div>
            <span className="brand-text">Mushba<span className="text-accent">Dev</span></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <div className="menu-items">
            <a 
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <i className="fas fa-home"></i>
              <span className="menu-text">Home</span>
            </a>
            <a 
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              <i className="fas fa-user"></i>
              <span className="menu-text">About</span>
            </a>
            <a 
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              <i className="fas fa-code"></i>
              <span className="menu-text">Projects</span>
            </a>
            <a 
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              <i className="fas fa-envelope"></i>
              <span className="menu-text">Contact</span>
            </a>
          </div>
          <div className="nav-cta">
            <button 
              className="resume-btn"
              onClick={() => setIsResumeOpen(true)}
            >
              <i className="fas fa-file-alt"></i>
              <span>Resume</span>
            </button>
          </div>
        </div>

        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <Resume 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </nav>
  );
};

export default Navbar; 