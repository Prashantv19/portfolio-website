// src/components/Resume/Resume.jsx
import { useEffect, useRef } from 'react';
import { FiDownload, FiEye, FiCode, FiLayers, FiDatabase } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Resume.css';

const highlights = [
  { icon: <FiCode size={22} />,     label: 'Languages',  value: 'Java, JavaScript, HTML, CSS' },
  { icon: <FiLayers size={22} />,   label: 'Frameworks', value: 'React, Node, Express, Spring Boot' },
  { icon: <FiDatabase size={22} />, label: 'Databases',  value: 'MySQL, MongoDB, Firebase' },
];

const Resume = () => {
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
    <section className="resume-section" id="resume" ref={sectionRef}>
      <div className="section-wrapper">
        <p className="section-label reveal">05 / Resume</p>
        <h2 className="section-title reveal">My <span>Resume</span></h2>

        <div className="resume-container">
          {/* Left — info */}
          <div className="resume-left">
            <p className="resume-desc reveal">
              A Computer Science student with strong backend skills in Java and full-stack
              experience with the MERN stack. Download my resume to get a complete overview
              of my education, skills, and projects.
            </p>

            <div className="resume-highlights reveal">
              {highlights.map((h) => (
                <div className="resume-highlight-card" key={h.label}>
                  <div className="rh-icon">{h.icon}</div>
                  <div>
                    <p className="rh-label">{h.label}</p>
                    <p className="rh-value">{h.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-actions reveal">
              <a href={personalInfo.resumeLink} download className="btn-primary resume-btn">
                <FiDownload size={18} /> Download Resume
              </a>
              <a href={personalInfo.resumeLink} target="_blank" rel="noreferrer" className="btn-secondary resume-btn">
                <FiEye size={18} /> Preview
              </a>
            </div>
          </div>

          {/* Right — decorative card */}
          <div className="resume-right reveal">
            <div className="resume-card">
              <div className="resume-card-header">
                <div className="resume-avatar">PV</div>
                <div>
                  <p className="resume-card-name">{personalInfo.name}</p>
                  <p className="resume-card-role">Software Developer</p>
                </div>
              </div>
              <div className="resume-card-divider" />
              <div className="resume-card-rows">
                <div className="resume-card-row">
                  <span className="rcr-label">Degree</span>
                  <span className="rcr-value">B.Tech — CS</span>
                </div>
                <div className="resume-card-row">
                  <span className="rcr-label">Focus</span>
                  <span className="rcr-value">Backend & Full-Stack</span>
                </div>
                <div className="resume-card-row">
                  <span className="rcr-label">Status</span>
                  <span className="rcr-value status-green">
                    <span className="status-dot" /> Open to Work
                  </span>
                </div>
                <div className="resume-card-row">
                  <span className="rcr-label">Email</span>
                  <span className="rcr-value rcr-email">{personalInfo.email}</span>
                </div>
              </div>
              <div className="resume-card-footer">
                <span className="rcf-tag">Java</span>
                <span className="rcf-tag">MERN</span>
                <span className="rcf-tag">OOPs</span>
                <span className="rcf-tag">DSA</span>
                <span className="rcf-tag">Spring Boot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;