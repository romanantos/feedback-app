import './About.css'

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2>Built on 25+ Years of Enterprise Experience</h2>
        </div>
        <div className="about__bio-section">
          <p>
            RAIM Consulting Group was founded in 2025 by Roman Antos, bringing
            over two decades of enterprise procurement expertise from global
            organizations including DHL, combined with deep hands-on experience
            in AI systems design and deployment.
          </p>
          <p>
            We address a fundamental gap in the market: most consulting firms
            either understand AI technology or understand business operations,
            but rarely both. RAIM bridges that gap — we speak the language of
            the boardroom and the codebase.
          </p>
          <p>
            Our clients range from startups building their first AI capabilities
            to mid-market companies undergoing transformation and enterprises
            seeking external expertise with credibility. What they all have in
            common: they want results, not reports.
          </p>
          <div className="about__tags">
            <span>AI-Native Transformation</span>
            <span>Agentic AI</span>
            <span>Procurement Intelligence</span>
            <span>Enterprise Strategy</span>
            <span>Workflow Automation</span>
            <span>IT Infrastructure</span>
            <span>Data Centers</span>
            <span>Prague & Global</span>
          </div>
        </div>
        <div className="about__team">
          <div className="about__profile">
            <div className="about__avatar">
              <img src="/roman-antos.jpg" alt="Roman Antos" />
            </div>
            <h3>Roman Antos</h3>
            <p className="about__role">Managing Partner</p>
            <p className="about__desc">
              22+ years in enterprise procurement at DHL and global organizations.
              Deep hands-on experience in AI systems design and deployment.
            </p>
            <div className="about__links">
              <a
                href="https://www.linkedin.com/in/roman-antos/"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:roman.antos@raimconsulting.com" className="about__social" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 7l-10 7L2 7"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="about__profile">
            <div className="about__avatar">
              <img src="/filip-groschl.jpg" alt="Filip Gröschl" />
            </div>
            <h3>Filip Gröschl</h3>
            <p className="about__role">Managing Partner</p>
            <p className="about__desc">
              25+ years leading IT infrastructure and Data Center sourcing at DHL across 220+ countries.
              Expert in strategic IT procurement, cloud services, and business-technology alignment.
            </p>
            <div className="about__links">
              <a
                href="https://www.linkedin.com/in/filipgroschl/"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:filip@waizard.eu" className="about__social" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 7l-10 7L2 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
