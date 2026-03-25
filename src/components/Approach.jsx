import './Approach.css'

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'We map your current operations, identify where AI creates real leverage, and build a business case grounded in your actual data — not hypotheticals.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We architect AI-native workflows that fit your organization. No off-the-shelf frameworks — every solution is designed for your specific operational context.',
  },
  {
    number: '03',
    title: 'Build & Deploy',
    description: 'We build working AI systems and put them into production. Agentic workflows, automation pipelines, and intelligent tools — shipped, not presented.',
  },
  {
    number: '04',
    title: 'Measure & Scale',
    description: 'We track production results, optimize for ROI, and scale what works. Success is measured in cost savings, efficiency gains, and operational impact.',
  },
]

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How We Work</span>
          <h2>From Strategy to Production in Weeks, Not Quarters</h2>
          <p>
            We move fast because we build with AI, not just advise on it.
            Direct access to seasoned professionals — no layers, no intermediaries.
          </p>
        </div>
        <div className="approach__grid">
          {steps.map((step, i) => (
            <div className="approach-step" key={i}>
              <span className="approach-step__number">{step.number}</span>
              <h3 className="approach-step__title">{step.title}</h3>
              <p className="approach-step__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
