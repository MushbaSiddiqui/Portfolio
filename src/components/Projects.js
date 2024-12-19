import React from 'react';
import './Projects.css';
import gymImg from '../assets/gym.png';
import weatherImg from '../assets/weather-app.png';
import authImg from '../assets/user-auth.png';

const Projects = () => {
  const projects = [
    {
      title: "Modern Gym Website",
      description: "A comprehensive fitness platform with modern UI/UX design, featuring membership management, class scheduling, and trainer profiles.",
      image: gymImg,
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/MushbaSiddiqui/Gym-frontend",
      live: "https://gym-frontend-psi.vercel.app/",
    },
    {
      title: "Weather Application",
      description: "Real-time weather forecasting application with location-based updates, interactive maps, and detailed weather information.",
      image: weatherImg,
      technologies: ["React", "API Integration", "JavaScript", "CSS3"],
      github: "https://github.com/MushbaSiddiqui/Weather-APP",
      live: "https://weather-app-pi-steel-62.vercel.app/",
    },
    {
      title: "Authentication System",
      description: "Secure user authentication system with JWT implementation, password recovery, and protected routes.",
      image: authImg,
      technologies: ["React", "JavaScript", "JWT", "Security"],
      github: "https://github.com/MushbaSiddiqui/user-uthentication-system",
      live: "https://user-uthentication-system.vercel.app/",
    }
  ];

  return (
    <div className="projects-page" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Recent works showcasing my frontend development expertise</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={project.title}
              style={{"--delay": `${index * 0.2}s`}}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 