import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__label">AI-Native Transformation &middot; Prague &amp; Global</p>
          <h1 className="hero__title">
            Stop Talking About AI.<br />
            <span className="hero__highlight">Start Shipping It.</span>
          </h1>
          <p className="hero__subtitle">
            Most organizations don't have an AI problem. They have a translation
            problem — between leadership ambition and working systems, between
            strategy and measurable results.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
        <div className="hero__metrics">
          <div className="hero__metric">
            <span className="hero__metric-value">25+</span>
            <span className="hero__metric-label">Years Enterprise<br/>Experience</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-value">20%</span>
            <span className="hero__metric-label">Cost Reduction<br/>in 30 Days</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-value">AI-First</span>
            <span className="hero__metric-label">We Build With AI,<br/>Not Just Talk About It</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-value">100+</span>
            <span className="hero__metric-label">Negotiations Closed<br/>Successfully</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-value">Global</span>
            <span className="hero__metric-label">Prague-Based,<br/>Worldwide Delivery</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-value">10x</span>
            <span className="hero__metric-label">ROI on AI<br/>Investments</span>
          </div>
        </div>
      </div>
    </section>
  )
}
