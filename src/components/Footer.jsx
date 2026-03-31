import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-raim">RAIM</span>
            <span className="footer__logo-text">Consulting Group</span>
          </div>
          <p className="footer__tagline">
            AI-Native Transformation | Agentic AI Design &amp; Build | AI-Augmented Operations
            <br/>
            Enterprise Experience | Negotiation Experience | Negotiation Training
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h4>AI-Native</h4>
            <a href="#services">AI-Native Transformation</a>
            <a href="#services">Agentic AI Design & Build</a>
            <a href="#services">AI-Augmented Operations</a>
          </div>
          <div className="footer__col">
            <h4>Enterprise-Native</h4>
            <a href="#enterprise-services">Enterprise Experience</a>
            <a href="#enterprise-services">Negotiation Experience</a>
            <a href="#enterprise-services">Negotiation Training</a>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>&copy; {new Date().getFullYear()} RAIM Consulting Group. All rights reserved.</p>

          </div>
          <p>Prague, Czech Republic</p>
        </div>
      </div>
    </footer>
  )
}
