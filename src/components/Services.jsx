import './Services.css'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'AI-Native Transformation Advisory',
    description: 'Redesign operations to embed AI into decision-making and delivery. We don\'t layer AI on top of broken processes — we redesign workflows from the ground up.',
    bullets: ['Operating model redesign', 'AI readiness assessment', 'Roadmap to production AI'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Agentic AI Design & Build',
    description: 'Deploy autonomous AI agents that actually work in production. From procurement automation to back-office workflows — built, tested, and shipped.',
    bullets: ['Procurement automation agents', 'Negotiation intelligence', 'Back-office workflow automation'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    title: 'AI-Augmented Procurement',
    description: '21 years of enterprise procurement expertise — now amplified by AI. We bring deep domain knowledge from global supply chains combined with cutting-edge AI technology.',
    bullets: ['Spend analytics & optimization', 'Supplier negotiation intelligence', 'Procurement process automation'],
  },
]

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2>Three Pillars of AI-Native Consulting</h2>
          <p>
            We combine deep enterprise experience with hands-on AI engineering
            to deliver measurable results — not slide decks.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <ul className="service-card__list">
                {service.bullets.map((b, j) => (
                  <li key={j}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3 3 7-7" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
