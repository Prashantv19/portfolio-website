// src/components/Certificates/Certificates.jsx
import { useEffect, useRef } from 'react';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import { certificates } from '../../data/portfolioData';
import './Certificates.css';

const Certificates = () => {
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
    <section className="certs-section" id="certificates" ref={sectionRef}>
      <div className="section-wrapper">
        <p className="section-label reveal">04 / Certificates</p>
        <h2 className="section-title reveal">My <span>Credentials</span></h2>

        <div className="certs-grid">
          {certificates.map((cert) => (
            <div className="cert-card reveal" key={cert.id}>
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-overlay">
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-view-btn">
                    <FiExternalLink size={18} /> View Certificate
                  </a>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-icon-row">
                  <div className="cert-award-icon">
                    <FiAward size={18} />
                  </div>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;