// src/components/Hero/Hero.jsx
import { useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('.hero-animate');
    items?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
      el.classList.add('animate-in');
    });
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg-glow" />
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-label hero-animate">
            <span className="label-dot" />
            Available for Internship
          </p>

          <h1 className="hero-name hero-animate">
            Hi, I'm <br />
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="hero-tagline hero-animate">{personalInfo.tagline}</p>
          <p className="hero-sub hero-animate">{personalInfo.subTagline}</p>

          <div className="hero-btns hero-animate">
            <a href="#projects" className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View My Work
            </a>
            <a href="#contact" className="btn-secondary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Hire Me
            </a>
          </div>

          <div className="hero-socials hero-animate">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual hero-animate">
          <div className="avatar-wrapper">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <img src={personalInfo.profileImage} alt={personalInfo.name} />
              </div>
            </div>
            <div className="float-badge badge-1">☕ Java</div>
            <div className="float-badge badge-2">⚛️ React</div>
            <div className="float-badge badge-3">🔷 OOPs</div>
            <div className="float-badge badge-4">🌐 MERN</div>
          </div>
        </div>
      </div>

      <a className="scroll-down" href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <FiArrowDown size={20} />
        <span>Scroll Down</span>
      </a>
    </section>
  );
};

export default Hero;