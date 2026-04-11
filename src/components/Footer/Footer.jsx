// src/components/Footer/Footer.jsx
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const footerLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Resume',       href: '#resume' },
  { label: 'Contact',      href: '#contact' },
];

const Footer = () => {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Top row */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" onClick={scrollToTop}>PV</a>
            <p className="footer-tagline">
              Software Developer · Java · MERN Stack<br />
              Open to Internships &amp; Opportunities
            </p>
          </div>

          <nav className="footer-nav">
            {footerLinks.map((link) => (
              
               <a key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            <p className="footer-socials-title">Connect</p>
            <div className="footer-social-links">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <span>Prashant Vishwakarma</span>. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <FiHeart size={13} className="heart-icon" /> using React.js
          </p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;