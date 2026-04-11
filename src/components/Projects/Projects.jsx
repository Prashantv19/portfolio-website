// src/components/Projects/Projects.jsx
import { useEffect, useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="section-wrapper">
        <p className="section-label reveal">03 / Projects</p>
        <h2 className="section-title reveal">What I've <span>Built</span></h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className={`project-card reveal ${project.featured ? 'featured' : ''}`} key={project.id}>
              {project.featured && <div className="featured-badge">⭐ Featured</div>}

              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="overlay-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn">
                        <FiGithub size={20} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="overlay-btn overlay-btn-live">
                        <FiExternalLink size={20} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-body">
                <div className="project-num">0{i + 1}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <FiGithub size={16} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link project-link-live">
                      <FiExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;