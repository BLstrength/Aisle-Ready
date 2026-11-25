import './Services.css'

const packages = [
  {
    tier: 'Silver Package',
    features: [
      '3 private in-person training sessions per week',
      'Custom weekly nutrition plan, adjusted as you progress',
      'Same day replies from your coach, 7 days a week',
      'Starting assessment: measurements, photos, and posture',
      'Progress check-ins every 4 weeks, with updated measurements and photos',
    ],
    featured: false,
  },
  {
    tier: 'Gold Package',
    features: [
      '5 private in-person training sessions per week, instead of 3',
      'Priority scheduling',
      'Fully custom meal plan with recipes and macro targets',
      'Photo ready posture coaching',
      'Final week peaking plan for energy, a fuller look and less bloating',
      '1 complimentary session for a partner or friend',
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
              <li>3 private in-person training sessions per week</li>
              <li>Custom weekly nutrition plan, adjusted as you progress</li>
              <li>Same day replies from your coach, 7 days a week</li>
              <li>Starting assessment: measurements, photos, and posture</li>
              <li>Progress check-ins every 4 weeks, with updated measurements and photos</li>
              <li>$1000 per month in person</li>
              <li><strong>$500</strong> per month online</li>
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
          <div className="pkg-card pkg-card--gold">
            <div className="pkg-tier">Gold Package</div>
            <p className="pkg-includes">Everything in Silver, plus:</p>
            <ul className="pkg-features">
              <li>5 private in-person training sessions per week, instead of 3</li>
              <li>Priority scheduling</li>
              <li>Fully custom meal plan with recipes and macro targets</li>
              <li>Photo ready posture coaching</li>
              <li>Final week peaking plan for energy, a fuller look and less bloating</li>
              <li>1 complimentary session for a partner or friend</li>
              <li>$1650 per month in person</li>
              <li><strong>$825</strong> per month online</li>
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
        </div>
        <p className="packages-footnote">*Minimum 3-month commitment required for all packages.</p>
      </section>

    </main>
  )
}
