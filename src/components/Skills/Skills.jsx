// src/components/Skills/Skills.jsx
import { useEffect, useRef } from 'react';
import { skills } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="section-wrapper">
        <p className="section-label reveal">02 / Skills</p>
        <h2 className="section-title reveal">Tech <span>Stack</span></h2>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div className="skill-card reveal" key={group.category} style={{ '--delay': `${i * 0.1}s` }}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar — all techs in one line */}
        <div className="skills-marquee-wrapper reveal">
          <div className="skills-marquee">
            {[...skills.flatMap(g => g.items), ...skills.flatMap(g => g.items)].map((item, i) => (
              <span key={i} className="marquee-item">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;