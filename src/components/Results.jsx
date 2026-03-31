import './Results.css'

export default function Results() {
  return (
    <section className="section section-dark" id="results">
      <div className="container">
        <div className="section-header">
          <span className="section-label" style={{ color: '#a78bfa' }}>Proven Results</span>
          <h2>We Measure Success in Production, Not Presentations</h2>
          <p>
            Real outcomes from real engagements. We bring integrity and commercial
            accountability to every project.
          </p>
        </div>
        <div className="results__showcase">
          <div className="results__card results__card--featured">
            <span className="results__card-label">Case Highlight</span>
            <div className="results__card-stat">20%</div>
            <p className="results__card-title">Operational Cost Reduction</p>
            <p className="results__card-desc">
              Achieved through AI workflow redesign for an enterprise client —
              delivered within 30 days of engagement. Not a pilot. Not a POC.
              Production results.
            </p>
          </div>
          <div className="results__card results__card--featured">
            <span className="results__card-label">Case Highlight</span>
            <div className="results__card-stat">3x Faster</div>
            <p className="results__card-title">Contract Negotiation Cycles</p>
            <p className="results__card-desc">
              Negotiation cycles reduced from 12 weeks to 4 using agentic AI
              workflows for a Fortune 500 manufacturer. Speed without
              sacrificing deal quality.
            </p>
          </div>
          <div className="results__values">
            <div className="results__value">
              <div className="results__value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div>
                <h3>Integrity First</h3>
                <p>We only take on engagements where we can deliver measurable impact. If AI isn't the right answer, we'll tell you.</p>
              </div>
            </div>
            <div className="results__value">
              <div className="results__value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <div>
                <h3>No Intermediaries</h3>
                <p>Direct access to seasoned professionals who understand both business strategy and AI engineering.</p>
              </div>
            </div>
            <div className="results__value">
              <div className="results__value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div>
                <h3>Production, Not PowerPoint</h3>
                <p>We ship working systems. Every recommendation comes with a path to implementation.</p>
              </div>
            </div>
            <div className="results__value">
              <div className="results__value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h3>Speed to Value</h3>
                <p>From kickoff to production in weeks, not quarters. We eliminate the discovery-to-deployment gap that kills most AI initiatives.</p>
              </div>
            </div>
            <div className="results__value">
              <div className="results__value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h3>Battle-Tested Frameworks</h3>
                <p>Every methodology we use has been forged in real enterprise environments. No academic theory — only approaches proven under pressure.</p>
              </div>
            </div>
            <div className="results__value">
              <div className="results__value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 01-3.46 0"/>
                </svg>
              </div>
              <div>
                <h3>Knowledge Transfer Built In</h3>
                <p>We don't create dependency. Every engagement leaves your team stronger, with the skills and playbooks to sustain results independently.</p>
              </div>
            </div>
            <div className="results__value">
              <div className="results__value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <div>
                <h3>Cross-Industry Pattern Recognition</h3>
                <p>25+ years across information technologies, consulting, logistics, manufacturing, and global supply chains means we spot opportunities others miss — and avoid pitfalls they repeat.</p>
              </div>
            </div>
            <div className="results__value">
              <div className="results__value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                  <path d="M15 18l6-6-6-6"/>
                  <path d="M3 18l6-6-6-6"/>
                </svg>
              </div>
              <div>
                <h3>Innovation and Development</h3>
                <p>We continuously push the boundaries of what's possible — building custom AI solutions, experimenting with emerging technologies, and turning bold ideas into production-ready tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
