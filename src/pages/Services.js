import './Services.css'

const packages = [
  {
    tier: 'Silver Package',
    features: [
      '3 in-person training sessions per week',
      'Weekly nutrition plans',
      'Daily check-ins',
      'Minimum 3-month commitment',
    ],
    featured: false,
  },
  {
    tier: 'Gold Package',
    features: [
      '5 in-person training sessions per week',
      'Weekly nutrition plans',
      'Daily check-ins',
      'Minimum 3-month commitment',
    ],
    featured: true,
  },
]

export default function Services() {
  return (
    <main className="services">

      <section className="services-header">
        <div className="page-tag">Packages & Pricing</div>
        <h1 className="page-title">Choose your <em>package</em></h1>
        <p className="services-sub">Every package is built around your wedding date, your body, and your goals. Minimum 3-month commitment, then month to month.</p>
      </section>

      <section className="services-grid-section">
        <div className="services-grid services-grid--2col">
          {packages.map((p, i) => (
            <div className={`service-card${p.featured ? ' featured' : ''}`} key={i}>
              {p.featured && <div className="popular-badge">Most Popular</div>}
              <div className="prog-name">{p.tier}</div>
              <ul className="prog-features">
                {p.features.map((f, j) => (
                  <li className="prog-feature" key={j}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="prog-cta">Say I Do</a>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
