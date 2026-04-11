// src/components/About/About.jsx
import { useEffect, useRef } from 'react';
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './About.css';

const stats = [
  { number: '3+', label: 'Projects Built' },
  { number: '4',  label: 'Certificates' },
  { number: '10+', label: 'Technologies' },
  { number: 'CS',  label: 'Undergrad Student' },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="section-wrapper">
        <p className="section-label reveal">01 / About</p>
        <h2 className="section-title reveal">Who I <span>Am</span></h2>

        <div className="about-grid">
          {/* Photo */}
          <div className="about-photo-col reveal">
            <div className="about-photo-wrapper">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="about-photo"
              />
              <div className="photo-accent-ring" />
              <div className="photo-accent-dot" />
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <p className="about-bio reveal">{personalInfo.bio1}</p>
            <p className="about-bio reveal">{personalInfo.bio2}</p>

            <div className="about-info-row reveal">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">{personalInfo.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="info-value info-link">
                  {personalInfo.email}
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Role</span>
                <span className="info-value">Software Developer</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value status-open">
                  <span className="status-dot" /> Open to Opportunities
                </span>
              </div>
            </div>

            <div className="about-actions reveal">
              <a href={personalInfo.resumeLink} className="btn-primary" download>
                <FiDownload size={16} /> Download Resume
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-secondary">
                <FiGithub size={16} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
                <FiLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats reveal">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;