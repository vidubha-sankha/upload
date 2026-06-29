import portfolioData from '../data/portfolio.json';

export default function About() {
  const { personal, about } = portfolioData;

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Overview</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}

            <div className="stats-grid">
              {about.stats.map((stat, i) => (
                <div key={i} className="stat-card glass-panel">
                  <div className="stat-num">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-wrapper">
              <img
                src={personal.photo}
                alt={`Illustration of ${personal.name} ${personal.lastName}, ${personal.title}, working at his desk with analytical tools and books`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
