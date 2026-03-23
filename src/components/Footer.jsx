import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">R</span>
            <span className="footer__logo-text">RAIM Consulting Group</span>
          </div>
          <p className="footer__tagline">
            AI-Native Transformation | Agentic AI Design &amp; Build | Procurement Intelligence
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h4>Services</h4>
            <a href="#services">AI-Native Transformation</a>
            <a href="#services">Agentic AI Design & Build</a>
            <a href="#services">AI-Augmented Procurement</a>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#approach">Our Approach</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} RAIM Consulting Group s.r.o. All rights reserved.</p>
          <p>Prague, Czech Republic</p>
        </div>
      </div>
    </footer>
  )
}
