import './Contact.css'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__content">
            <span className="section-label">Get in Touch</span>
            <h2>Let's Discuss Your AI Transformation</h2>
            <p>
              Whether you're exploring AI for the first time or scaling existing
              capabilities, we'd like to hear about your challenges and goals.
            </p>
            <div className="contact__methods">
              <a href="mailto:roman.antos@raimconsulting.com" className="contact__method">
                <div className="contact__method-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                </div>
                <div>
                  <span className="contact__method-label">Email</span>
                  <span className="contact__method-value">roman.antos@raimconsulting.com</span>
                </div>
              </a>
              <a href="mailto:linkedin@raimconsulting.com" className="contact__method">
                <div className="contact__method-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact__method-label">General Inquiries</span>
                  <span className="contact__method-value">linkedin@raimconsulting.com</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/raim-consulting-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__method"
              >
                <div className="contact__method-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact__method-label">LinkedIn</span>
                  <span className="contact__method-value">RAIM Consulting Group</span>
                </div>
              </a>
            </div>
          </div>
          <div className="contact__cta-card">
            <h3>Ready to Start?</h3>
            <p>
              Book a no-obligation discovery call. We'll explore where AI can
              create the most impact in your operations and whether we're the
              right fit.
            </p>
            <a href="mailto:roman.antos@raimconsulting.com?subject=Discovery%20Call%20Request" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Schedule a Discovery Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p className="contact__note">
              Prague-based, working globally. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
