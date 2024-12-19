import React from 'react';
import './Home.css';
import Girlcoder from '../assets/girlcoder.png'

const Home = () => {
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
  };

  const skills = [
    {
      name: "HTML5/CSS3",
      icon: "fab fa-html5",
      level: "90",
      category: "Advanced",
      description: "Semantic markup & modern CSS layouts"
    },
    {
      name: "JavaScript",
      icon: "fab fa-js",
      level: "85",
      category: "Advanced",
      description: "ES6+ features & DOM manipulation"
    },
    {
      name: "React.js",
      icon: "fab fa-react",
      level: "85",
      category: "Advanced",
      description: "Component-based development"
    },
    {
      name: "Responsive Design",
      icon: "fas fa-mobile-alt",
      level: "90",
      category: "Advanced",
      description: "Mobile-first approach"
    },
    {
      name: "Java",
      icon: "fab fa-java",
      level: "75",
      category: "Intermediate",
      description: "Core Java & OOP concepts"
    },
    {
      name: "MySQL",
      icon: "fas fa-database",
      level: "70",
      category: "Intermediate",
      description: "Database design & queries"
    },
    {
      name: "Version Control",
      icon: "fab fa-git-alt",
      level: "85",
      category: "Advanced",
      description: "Git workflow & collaboration"
    },
    {
      name: "Web Design",
      icon: "fas fa-palette",
      level: "85",
      category: "Advanced",
      description: "UI fundamentals & design principles"
    }
  ];

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hello, I'm</span>
            <h1 data-text="Mushba Siddiqui">Mushba Siddiqui</h1>
            <h2>Frontend Developer</h2>
            <p>
              Passionate about crafting responsive and intuitive web experiences 
              with modern technologies and clean code practices.
            </p>
            <div className="cta-buttons">
              <a 
                href="#projects" 
                className="btn primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Let's Connect
              </a>
            </div>
          
            <div className="social-links">
              <a href="https://github.com/MushbaSiddiqui" target="_blank" 
              rel="noopener noreferrer" aria-label="GitHub Profile" className='github'>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mushba-siddiqui-605806183/" target="_blank" 
              rel="noopener noreferrer" aria-label="LinkedIn Profile" className='linkedin'>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="blob-animation"></div>
            <img src={Girlcoder} alt="Girl Coder"/>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <p>Currently enhancing my frontend development skills through hands-on internship experience</p>
          </div>
          <div className="skills-wrapper">
            {skills.map((skill, index) => (
              <div 
                className="skill-card" 
                key={skill.name}
                style={{"--delay": `${index * 0.1}s`}}
                data-category={skill.category}
              >
                <div className="skill-content">
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                    <div className="skill-level">
                      <div className="skill-progress" style={{"--level": `${skill.level}%`}}>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 