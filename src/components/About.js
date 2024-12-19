import React from 'react';
import './About.css';

const About = () => {
  const experiences = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      description: "Building responsive web applications using React.js and modern JavaScript. Currently focusing on component-based architecture and state management.",
      skills: ["React.js", "JavaScript", "HTML5/CSS3", "Responsive Design"]
    },
    {
      title: "Web Development",
      icon: "fas fa-laptop-code",
      description: "Creating clean and maintainable code with focus on best practices and modern development workflows.",
      skills: ["Git", "VS Code", "npm", "Web APIs"]
    },
    {
      title: "UI Development",
      icon: "fas fa-paint-brush",
      description: "Implementing user interfaces with attention to detail and responsive design principles.",
      skills: ["CSS3", "Bootstrap", "Responsive Design", "Cross-browser Compatibility"]
    }
  ];

  return (
    <div className="about">
      <div className="about-hero">
        <div className="about-content">
          <h1>About Me</h1>
          <p className="lead">Frontend Developer Intern passionate about creating web experiences</p>
          <div className="about-text">
            <p>
              As a Frontend Developer Intern, I am actively learning and implementing modern web development technologies.
              With a strong foundation in HTML, CSS, and JavaScript, I am now focusing on mastering React.js and related technologies.
              I am passionate about writing clean code and creating responsive user interfaces.
            </p>
          </div>
        </div>
      </div>

      <div className="crafting-section">
        <div className="section-content">
          <h2>Current Journey</h2>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Months Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">React Components</span>
            </div>
          </div>
        </div>
      </div>

      <div className="expertise-section">
        <div className="section-content">
          <h2>Learning & Growing</h2>
          <div className="expertise-grid">
            {experiences.map((exp, index) => (
              <div 
                className="expertise-card" 
                key={exp.title}
                style={{"--delay": `${index * 0.2}s`}}
              >
                <div className="expertise-icon">
                  <i className={exp.icon}></i>
                </div>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <div className="expertise-skills">
                  {exp.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="learning-note">
            <p>🌱 Currently enhancing my skills through hands-on internship experience</p>
            <p>📚 Learning React.js and modern frontend development practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 