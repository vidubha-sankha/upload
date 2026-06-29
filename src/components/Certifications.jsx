import portfolioData from '../data/portfolio.json';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-title-line"></div>
          <p className="section-subtitle">
            Professional credentials validating expertise in cloud architecture, machine learning, and data engineering.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card glass-panel">
              <div className="cert-badge-wrapper">
                <div className="cert-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="issuer-check">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>{cert.issuer}</span>
              </div>
              <div className="cert-year-badge">{cert.year}</div>
              <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="link-check">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="16 10 11 15 8 12"></polyline>
                </svg>
                <span>VIEW CERTIFICATE ↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
