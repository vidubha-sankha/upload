import portfolioData from '../data/portfolio.json';

export default function Footer() {
  const { personal, footer } = portfolioData;

  const handleScrollTop = (e) => {
    e.preventDefault();
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container footer-container">
        <a href="#hero" className="footer-logo" onClick={handleScrollTop}>
          {personal.name.toUpperCase()}<span>{personal.lastName.toUpperCase()}</span>
        </a>
        <div className="copyright">{footer.copyright}</div>
      </div>
    </footer>
  );
}
