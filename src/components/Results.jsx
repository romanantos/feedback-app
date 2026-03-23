import './Results.css'

export default function Results() {
  return (
    <section className="section section-dark" id="results">
      <div className="container">
        <div className="section-header">
          <span className="section-label" style={{ color: '#60a5fa' }}>Proven Results</span>
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
          </div>
        </div>
      </div>
    </section>
  )
}
