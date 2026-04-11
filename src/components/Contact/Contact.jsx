// src/components/Contact/Contact.jsx
import { useEffect, useRef, useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus]     = useState('');
  const [sending, setSending]   = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');
    // Simulate send — replace with EmailJS later
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="section-wrapper">
        <p className="section-label reveal">06 / Contact</p>
        <h2 className="section-title reveal">Let's <span>Talk</span></h2>

        <div className="contact-grid">
          {/* ——— LEFT INFO ——— */}
          <div className="contact-info">
            <p className="contact-intro reveal">
              I'm actively looking for internship and entry-level opportunities in
              backend or full-stack development. If you have an opening or just want
              to connect, feel free to reach out!
            </p>

            <div className="contact-items reveal">
              <a href={`mailto:${personalInfo.email}`} className="contact-item">
                <div className="contact-item-icon"><FiMail size={20} /></div>
                <div>
                  <p className="ci-label">Email</p>
                  <p className="ci-value">{personalInfo.email}</p>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon"><FiGithub size={20} /></div>
                <div>
                  <p className="ci-label">GitHub</p>
                  <p className="ci-value">github.com/yourusername</p>
                </div>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon"><FiLinkedin size={20} /></div>
                <div>
                  <p className="ci-label">LinkedIn</p>
                  <p className="ci-value">linkedin.com/in/yourusername</p>
                </div>
              </a>

              <div className="contact-item no-link">
                <div className="contact-item-icon"><FiMapPin size={20} /></div>
                <div>
                  <p className="ci-label">Location</p>
                  <p className="ci-value">India — Open to Remote</p>
                </div>
              </div>
            </div>
          </div>

          {/* ——— RIGHT FORM ——— */}
          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text" id="name" name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email" id="email" name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text" id="subject" name="subject"
                placeholder="Internship Opportunity / Project Collaboration"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows="6"
                placeholder="Tell me about the opportunity or project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary contact-submit" disabled={sending}>
              {sending
                ? <><span className="spinner" /> Sending...</>
                : <><FiSend size={16} /> Send Message</>
              }
            </button>

            {status === 'success' && (
              <div className="form-success">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;