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
        <h1 className="page-title">Our <em>Packages</em></h1>
        <p className="services-sub">Choose the package that fits your lifestyle. Both are built around your wedding date with your goals in mind.</p>
      </section>

      <section className="services-packages-section">
        <div className="packages-grid">
          <div className="pkg-card">
            <div className="pkg-tier">Silver Package</div>
            <ul className="pkg-features">
              <li>3 in-person training sessions per week</li>
              <li>Weekly nutrition plans</li>
              <li>Daily check-ins</li>
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
          <div className="pkg-card pkg-card--gold">
            <div className="pkg-tier">Gold Package</div>
            <ul className="pkg-features">
              <li>5 in-person training sessions per week</li>
              <li>Weekly nutrition plans</li>
              <li>Daily check-ins</li>
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
        </div>
        <p className="packages-footnote">*Minimum 3-month commitment required for all packages.</p>
      </section>

    </main>
  )
}
