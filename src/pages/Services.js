import './Services.css'

const packages = [
  {
    tier: 'Silver Package',
    features: [
      '3 private in-person training sessions per week',
      'Custom weekly nutrition plan, adjusted as you progress',
      'Daily coach check-ins by text',
      'Starting assessment: measurements, photos, posture and strength',
      'Progress check-ins every 4 weeks, with updated measurements and photos',
    ],
    featured: false,
  },
  {
    tier: 'Gold Package',
    features: [
      '5 private in-person training sessions per week',
      'Priority scheduling',
      'Fully custom meal plan with recipes and macro targets',
      'Same-day replies from your coach, 7 days a week',
      'Photo-ready posture coaching for shoulders, back and arms',
      'Final-week peaking plan for energy, a fuller look and less bloating',
      '1 complimentary session for a partner, bridesmaid or mom',
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
              <li>Daily coach check-ins by text</li>
              <li>Starting assessment: measurements, photos, posture and strength</li>
              <li>Progress check-ins every 4 weeks, with updated measurements and photos</li>
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
          <div className="pkg-card pkg-card--gold">
            <div className="pkg-tier">Gold Package</div>
            <p className="pkg-includes">Everything in Silver, plus:</p>
            <ul className="pkg-features">
              <li>5 private in-person training sessions per week</li>
              <li>Priority scheduling</li>
              <li>Fully custom meal plan with recipes and macro targets</li>
              <li>Same-day replies from your coach, 7 days a week</li>
              <li>Photo-ready posture coaching for shoulders, back and arms</li>
              <li>Final-week peaking plan for energy, a fuller look and less bloating</li>
              <li>1 complimentary session for a partner, bridesmaid or mom</li>
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
        </div>
        <p className="packages-footnote">*Minimum 3-month commitment required for all packages.</p>
      </section>

    </main>
  )
}
