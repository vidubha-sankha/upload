import { useState } from 'react';
import portfolioData from '../data/portfolio.json';

/* ── Project SVG Visuals ── */
/* These are complex presentation SVGs kept in code, not in JSON */

function ProjectVisual1() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none"
      xmlns="http://www.w3.org/2000/svg" style={{ background: '#0a0f1d', padding: '15px' }}>
      <rect width="400" height="250" rx="8" fill="#0c1322" />
      <rect x="15" y="15" width="240" height="220" rx="6" fill="#020617" stroke="rgba(255,255,255,0.05)" />
      <path d="M70 235 L120 120 M170 235 L130 120" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <rect x="80" y="150" width="80" height="45" fill="none" stroke="#ef4444" strokeWidth="2" />
      <rect x="80" y="136" width="75" height="14" fill="#ef4444" />
      <text x="84" y="146" fill="#ffffff" fontFamily="'JetBrains Mono', monospace" fontSize="7" fontWeight="bold">Pothole 92%</text>
      <rect x="30" y="180" width="45" height="35" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2" />
      <rect x="30" y="169" width="52" height="11" fill="#3b82f6" />
      <text x="33" y="177" fill="#ffffff" fontFamily="'JetBrains Mono', monospace" fontSize="6" fontWeight="bold">Crack 88%</text>
      <path d="M125 105 L135 105 M130 100 L130 110" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="130" cy="105" r="15" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
      <text x="135" y="95" fill="#10b981" fontFamily="'JetBrains Mono', monospace" fontSize="6" fontWeight="bold">SCANNING</text>
      <rect x="265" y="15" width="120" height="220" rx="6" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
      <text x="275" y="32" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.5">YOLOv8 INFERENCE</text>
      <rect x="273" y="42" width="104" height="32" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <text x="279" y="52" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="7">FRAME RATE</text>
      <text x="279" y="69" fill="#10b981" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="bold">32.4 FPS</text>
      <rect x="273" y="80" width="104" height="32" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <text x="279" y="90" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="7">LATENCY</text>
      <text x="279" y="107" fill="#f8fafc" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="bold">28.0 ms</text>
      <text x="275" y="130" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="7" fontWeight="600">CLASS COUNTS</text>
      <text x="275" y="146" fill="#f8fafc" fontFamily="'Outfit', sans-serif" fontSize="8">Potholes: <tspan fill="#ef4444" fontWeight="bold">2</tspan></text>
      <text x="275" y="158" fill="#f8fafc" fontFamily="'Outfit', sans-serif" fontSize="8">Cracks: <tspan fill="#3b82f6" fontWeight="bold">1</tspan></text>
      <line x1="273" y1="170" x2="377" y2="170" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <text x="275" y="184" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="7" fontWeight="600">TELEMETRY LOG</text>
      <text x="275" y="196" fill="#94a3b8" fontFamily="'JetBrains Mono', monospace" fontSize="7">Lat: 6.9271° N</text>
      <text x="275" y="206" fill="#94a3b8" fontFamily="'JetBrains Mono', monospace" fontSize="7">Lon: 79.8612° E</text>
      <text x="275" y="222" fill="#3b82f6" fontFamily="'Outfit', sans-serif" fontSize="7" fontWeight="bold">LOGGED TO DB</text>
      <circle cx="365" cy="219" r="3" fill="#3b82f6">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function ProjectVisual2() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none"
      xmlns="http://www.w3.org/2000/svg" style={{ background: '#0a0f1d', padding: '15px' }}>
      <rect width="400" height="250" rx="8" fill="#0c1322" />
      <rect x="15" y="15" width="370" height="22" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
      <circle cx="28" cy="26" r="3.5" fill="#ef4444" />
      <circle cx="38" cy="26" r="3.5" fill="#f59e0b" />
      <circle cx="48" cy="26" r="3.5" fill="#10b981" />
      <text x="65" y="29" fill="#94a3b8" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="bold">hsms_dispatcher_v1.0</text>
      <rect x="15" y="47" width="175" height="188" rx="6" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
      <text x="25" y="60" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.5">PENDING BOOKINGS</text>
      <rect x="23" y="70" width="159" height="50" rx="4" fill="rgba(239,68,68,0.05)" stroke="rgba(239,68,68,0.15)" />
      <text x="31" y="83" fill="#fca5a5" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="bold">#1024 - AC Repair</text>
      <rect x="127" y="75" width="48" height="11" rx="2" fill="#ef4444" />
      <text x="151" y="83" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="7" fontWeight="bold" textAnchor="middle">EMERGENCY</text>
      <text x="31" y="96" fill="#94a3b8" fontFamily="'Outfit', sans-serif" fontSize="8">Customer: Eldon S. (Age 72)</text>
      <text x="31" y="108" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="7">Priority: High (Heat Wave)</text>
      <rect x="23" y="126" width="159" height="46" rx="4" fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.1)" />
      <text x="31" y="139" fill="#fde047" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="bold">#1025 - Electrical</text>
      <text x="31" y="151" fill="#94a3b8" fontFamily="'Outfit', sans-serif" fontSize="8">Customer: Mary K.</text>
      <text x="31" y="162" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="7">Priority: Medium (Outlets dead)</text>
      <rect x="23" y="178" width="159" height="46" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" />
      <text x="31" y="191" fill="#e2e8f0" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="bold">#1026 - Leaking Pipe</text>
      <text x="31" y="203" fill="#94a3b8" fontFamily="'Outfit', sans-serif" fontSize="8">Customer: Robert H.</text>
      <text x="31" y="214" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="7">Priority: Low</text>
      <rect x="200" y="47" width="185" height="188" rx="6" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
      <text x="210" y="60" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.5">DISPATCH &amp; LIFECYCLE</text>
      <rect x="208" y="70" width="169" height="50" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <text x="216" y="83" fill="#f8fafc" fontFamily="'Outfit', sans-serif" fontSize="9" fontWeight="bold">Dave M. (Plumbing/AC)</text>
      <text x="216" y="95" fill="#10b981" fontFamily="'Outfit', sans-serif" fontSize="8">★ 4.9 Rating</text>
      <rect x="280" y="88" width="48" height="11" rx="2" fill="#10b981" fillOpacity="0.15" />
      <text x="304" y="96" fill="#10b981" fontFamily="'Outfit', sans-serif" fontSize="7" fontWeight="bold" textAnchor="middle">AVAILABLE</text>
      <text x="216" y="108" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="7">Active Jobs today: 2 / 5 max</text>
      <text x="210" y="139" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.5">REAL-TIME TRACKING</text>
      <g transform="translate(208, 153)">
        <line x1="8" y1="12" x2="160" y2="12" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        <line x1="8" y1="12" x2="110" y2="12" stroke="url(#timeline-glow)" strokeWidth="2" />
        <circle cx="8" cy="12" r="5" fill="#00f2fe" />
        <circle cx="8" cy="12" r="8" stroke="#00f2fe" strokeWidth="1" strokeOpacity="0.4" />
        <text x="8" y="28" fill="#94a3b8" fontFamily="'Outfit', sans-serif" fontSize="7" textAnchor="middle">Booked</text>
        <circle cx="59" cy="12" r="5" fill="#00f2fe" />
        <circle cx="59" cy="12" r="8" stroke="#00f2fe" strokeWidth="1" strokeOpacity="0.4" />
        <text x="59" y="28" fill="#94a3b8" fontFamily="'Outfit', sans-serif" fontSize="7" textAnchor="middle">Assigned</text>
        <circle cx="110" cy="12" r="5" fill="#00f2fe" />
        <circle cx="110" cy="12" r="8" stroke="#00f2fe" strokeWidth="1" strokeOpacity="0.4" />
        <text x="110" y="28" fill="#f8fafc" fontFamily="'Outfit', sans-serif" fontSize="7" fontWeight="bold" textAnchor="middle">In Progress</text>
        <circle cx="161" cy="12" r="4" fill="#334155" />
        <text x="161" y="28" fill="#475569" fontFamily="'Outfit', sans-serif" fontSize="7" textAnchor="middle">Done</text>
      </g>
      <defs>
        <linearGradient id="timeline-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="100%" stopColor="#8a2be2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ProjectVisual3() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none"
      xmlns="http://www.w3.org/2000/svg" style={{ background: '#0a0f1d', padding: '15px' }}>
      <rect width="400" height="250" rx="8" fill="#0c1322" />
      <rect x="15" y="15" width="120" height="15" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="265" y="15" width="120" height="15" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="15" y="45" width="110" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <text x="25" y="65" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.5">CURRENT MRR</text>
      <text x="25" y="83" fill="#00f2fe" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="bold">$142,500</text>
      <rect x="145" y="45" width="110" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <text x="155" y="65" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.5">AVG LTV</text>
      <text x="155" y="83" fill="#f8fafc" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="bold">$3,420</text>
      <rect x="275" y="45" width="110" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <text x="285" y="65" fill="#64748b" fontFamily="'Outfit', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.5">CAC METRIC</text>
      <text x="285" y="83" fill="#8a2be2" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="bold">$280</text>
      <rect x="15" y="110" width="370" height="120" rx="6" fill="rgba(15,23,42,0.4)" stroke="rgba(255,255,255,0.05)" />
      <text x="25" y="125" fill="#94a3b8" fontFamily="'Outfit', sans-serif" fontSize="9" fontWeight="600">MRR Monthly Net Growth Trend</text>
      <line x1="40" y1="145" x2="360" y2="145" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <line x1="40" y1="180" x2="360" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <line x1="40" y1="210" x2="360" y2="210" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <path d="M40 210 L 80 180 L 120 190 L 160 170 L 200 150 L 240 160 L 280 135 L 320 145 L 360 125 L 360 210 Z" fill="url(#proj3-purple-glow)" />
      <path d="M40 210 L 80 180 L 120 190 L 160 170 L 200 150 L 240 160 L 280 135 L 320 145 L 360 125" fill="none" stroke="#8a2be2" strokeWidth="2" />
      <circle cx="360" cy="125" r="4" fill="#00f2fe" />
      <defs>
        <linearGradient id="proj3-purple-glow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8a2be2" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const PROJECT_VISUALS = {
  1: <ProjectVisual1 />,
  2: <ProjectVisual2 />,
  3: <ProjectVisual3 />,
};

/* ── GitHub Icon ── */
function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

/* ── Main Component ── */
export default function Projects() {
  const { projects, projectFilters } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTabs, setActiveTabs] = useState(() => {
    const initial = {};
    projects.forEach((p) => { initial[p.id] = 'problem'; });
    return initial;
  });

  const getCardClass = (project) => {
    if (activeFilter === 'all') return 'project-card glass-panel';
    const skills = project.category.split(',');
    if (skills.includes(activeFilter)) return 'project-card glass-panel highlighted';
    return 'project-card glass-panel dimmed';
  };

  const tabLabels = {
    problem: 'The Problem',
    process: 'My Process',
    outcome: 'Insight & Outcome',
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Selected Projects</h2>
          <div className="section-title-line"></div>
        </div>

        <div className="skills-filter-container" style={{ marginBottom: '3rem' }}>
          {projectFilters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              data-filter={f.value}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className={getCardClass(project)} data-skills={project.category}>
              <div className="project-meta">
                <div className="project-details">
                  <span className="project-index">{project.index}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech-stack">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-tabs">
                    {Object.keys(tabLabels).map((tab) => (
                      <button
                        key={tab}
                        className={`tab-btn ${activeTabs[project.id] === tab ? 'active' : ''}`}
                        onClick={() => setActiveTabs((prev) => ({ ...prev, [project.id]: tab }))}
                      >
                        {tabLabels[tab]}
                      </button>
                    ))}
                  </div>

                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      dangerouslySetInnerHTML={{ __html: project.tabs[activeTabs[project.id]] }}
                    />
                  </div>
                </div>

                <div className="project-links">
                  {project.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      {link.type === 'github' ? <GithubIcon /> : <ExternalIcon />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="project-visual-side">
                {PROJECT_VISUALS[project.id]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
