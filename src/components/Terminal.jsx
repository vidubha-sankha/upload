import { useState, useEffect, useRef } from 'react';

export default function Terminal({ script, output }) {
  const [lines, setLines] = useState([]);
  const [scriptIdx, setScriptIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [showViz, setShowViz] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let sIdx = 0;
    let cIdx = 0;
    let currentLines = [];

    function tick() {
      if (sIdx >= script.length) {
        setTimeout(() => {
          setShowOutput(true);
          setTimeout(() => setShowViz(true), 800);
        }, 500);
        return;
      }

      const item = script[sIdx];
      const delay = item.type === 'comment' ? 30 : 60;

      if (cIdx === 0) {
        currentLines = [...currentLines, { type: item.type, text: '' }];
        setLines([...currentLines]);
      }

      if (cIdx < item.text.length) {
        currentLines[currentLines.length - 1] = {
          type: item.type,
          text: item.text.slice(0, cIdx + 1),
        };
        setLines([...currentLines]);
        cIdx++;
        setTimeout(tick, delay);
      } else {
        sIdx++;
        cIdx = 0;
        setTimeout(tick, 600);
      }
    }

    setTimeout(tick, 1000);
  }, [script]);

  return (
    <div className="terminal-window float-anim">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
        </div>
        <div className="terminal-title">query_pipeline.py</div>
        <div style={{ width: '42px' }}></div>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div key={i} className="terminal-line">
            <span className="terminal-prompt">&gt;&gt;&gt; </span>
            <span className={line.type === 'comment' ? 'terminal-comment' : 'terminal-code'}>
              {line.text}
            </span>
          </div>
        ))}

        {showOutput && (
          <div className="terminal-line terminal-output" style={{ whiteSpace: 'pre' }}>
            {output}
          </div>
        )}

        {showViz && (
          <div className={`terminal-visualization ${showViz ? 'active' : ''}`}>
            <div className="visualization-title">Visualization Output: Average CLV Comparison</div>
            <svg width="100%" height="100px" viewBox="0 0 350 100" className="terminal-chart"
              xmlns="http://www.w3.org/2000/svg">
              <line x1="80" y1="15" x2="80" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
              <line x1="80" y1="85" x2="330" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

              <rect x="80" y="25" width="0" height="20" rx="3" fill="#00f2fe">
                <animate attributeName="width" from="0" to="210" dur="1.2s" fill="freeze"
                  calcMode="spline" keySplines="0.1 0.8 0.2 1" keyTimes="0;1" />
              </rect>
              <text x="70" y="38" fill="#94a3b8" fontFamily="monospace" fontSize="8"
                textAnchor="end">Active</text>
              <text x="295" y="38" fill="#f8fafc" fontFamily="monospace" fontSize="8"
                fontWeight="bold">$3,420</text>

              <rect x="80" y="55" width="0" height="20" rx="3" fill="#8a2be2">
                <animate attributeName="width" from="0" to="72" dur="1.2s" fill="freeze"
                  calcMode="spline" keySplines="0.1 0.8 0.2 1" keyTimes="0;1" />
              </rect>
              <text x="70" y="68" fill="#94a3b8" fontFamily="monospace" fontSize="8"
                textAnchor="end">Churned</text>
              <text x="160" y="68" fill="#94a3b8" fontFamily="monospace" fontSize="8">$1,180</text>
            </svg>
          </div>
        )}

        <div className="terminal-line">
          <span className="terminal-prompt">&gt;&gt;&gt;</span>
          <span className="terminal-code"></span>
          <span className="terminal-cursor"></span>
        </div>
      </div>
    </div>
  );
}
