import { useState } from 'react';
import portfolioData from '../data/portfolio.json';

export default function Contact() {
  const { personal, contact } = portfolioData;
  const [formState, setFormState] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateField = (name, value) => {
    if (!value.trim()) return true; // has error
    if (name === 'email' && !validateEmail(value)) return true;
    return false;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let hasError = false;

    Object.entries(formState).forEach(([key, val]) => {
      const invalid = validateField(key, val);
      newErrors[key] = invalid;
      if (invalid) hasError = true;
    });

    setErrors(newErrors);

    if (!hasError) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitted(true);
      }, 1500);
    }
  };

  return (
    <section id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <div className="contact-meta">
            <h2>{contact.heading}</h2>
            <p>{contact.description}</p>
          </div>

          <div className="contact-methods">
            <a href={`mailto:${personal.email}`} className="contact-method">
              <div className="method-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="method-text">
                <div className="method-label">Direct Mail</div>
                <div className="method-value">{personal.email}</div>
              </div>
            </a>

            <div className="contact-method">
              <div className="method-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="method-text">
                <div className="method-label">Location</div>
                <div className="method-value">{personal.location}</div>
              </div>
            </div>
          </div>

          <div className="socials-wrapper">
            <h5 className="socials-title">Social Links</h5>
            <div className="social-links">
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer"
                className="social-link" aria-label="GitHub Profile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="social-link" aria-label="LinkedIn Profile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href={personal.social.blogger} target="_blank" rel="noopener noreferrer"
                className="social-link" aria-label="Blogger Profile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.976 0-2.776-2.25-5.026-5.024-5.026zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-panel glass-panel">
          {!submitted ? (
            <form id="portfolio-contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="form-name">Your Name</label>
                  <input
                    className={`form-input ${errors.name ? 'invalid' : ''}`}
                    type="text" id="form-name" name="name"
                    placeholder="John Doe" required
                    value={formState.name}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                  <span className="form-error">Please enter your name</span>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="form-email">Your Email</label>
                  <input
                    className={`form-input ${errors.email ? 'invalid' : ''}`}
                    type="email" id="form-email" name="email"
                    placeholder="john@example.com" required
                    value={formState.email}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                  <span className="form-error">Please enter a valid email address</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-subject">Subject</label>
                <input
                  className={`form-input ${errors.subject ? 'invalid' : ''}`}
                  type="text" id="form-subject" name="subject"
                  placeholder="Consulting Inquiry / Project Offer" required
                  value={formState.subject}
                  onChange={handleChange} onBlur={handleBlur}
                />
                <span className="form-error">Please specify a subject</span>
              </div>

              <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                <label className="form-label" htmlFor="form-message">Message</label>
                <textarea
                  className={`form-input ${errors.message ? 'invalid' : ''}`}
                  id="form-message" name="message"
                  placeholder="Hi Vidubha, I would love to talk about our database scaling challenges..."
                  required
                  value={formState.message}
                  onChange={handleChange} onBlur={handleBlur}
                />
                <span className="form-error">Please enter your message details</span>
              </div>

              <div className="submit-container">
                <button type="submit" className="btn btn-primary" id="form-submit-btn"
                  disabled={submitting} style={submitting ? { opacity: 0.7 } : {}}>
                  {submitting ? (
                    <>
                      Sending...
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25"></circle>
                        <path d="M4 12a8 8 0 0 1 8-8"></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="form-success-message" id="form-success-message" style={{ display: 'block' }}>
              <div className="success-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll read your query and respond back within 24 hours.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
