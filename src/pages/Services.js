import { useState } from 'react'
import './Services.css'

export default function Services() {
  const [mode, setMode] = useState('inperson')
  return (
    <main className="services">

      <section className="services-header">
        <div className="page-tag">Packages & Pricing</div>
        <h1 className="page-title">Our <em>Packages</em></h1>
        <p className="services-sub">Choose the package that fits your lifestyle. Both are built around your wedding date with your goals in mind.</p>
      </section>

      <section className="services-packages-section">
        <div className="pkg-toggle">
          <button
            className={`pkg-toggle-btn${mode === 'inperson' ? ' active' : ''}`}
            onClick={() => setMode('inperson')}
          >In Person</button>
          <button
            className={`pkg-toggle-btn${mode === 'online' ? ' active' : ''}`}
            onClick={() => setMode('online')}
          >Online</button>
        </div>
        <div className="packages-grid">
          <div className="pkg-card">
            <div className="pkg-bf-badge">Black Friday Sale</div>
            <div className="pkg-tier">Silver Package</div>
            <div className="pkg-price-wrapper">
              <span className="pkg-price-original">{mode === 'inperson' ? '$1,100' : '$550'}/mo</span>
              <div className="pkg-price">{mode === 'inperson' ? '$1,000' : '$500'}<span>/mo</span></div>
            </div>
            <ul className="pkg-features">
              <li>{mode === 'inperson' ? '3 private in-person training sessions per week' : '3 day training plan per week'}</li>
              <li>Custom weekly nutrition plan, adjusted as you progress</li>
              <li>Same day replies from your coach, 7 days a week</li>
              <li>Starting assessment: measurements, photos, and posture</li>
              <li>Progress check-ins every 4 weeks, with updated measurements and photos</li>
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
          <div className="pkg-card pkg-card--gold">
            <div className="pkg-bf-badge">Black Friday Sale</div>
            <div className="pkg-tier">Gold Package</div>
            <div className="pkg-price-wrapper">
              <span className="pkg-price-original">{mode === 'inperson' ? '$1,750' : '$875'}/mo</span>
              <div className="pkg-price">{mode === 'inperson' ? '$1,600' : '$800'}<span>/mo</span></div>
            </div>
            <p className="pkg-includes">Everything in Silver, plus:</p>
            <ul className="pkg-features">
              <li>{mode === 'inperson' ? '5 private in-person training sessions per week, instead of 3' : '5 day training plan per week, instead of 3'}</li>

              <li>Fully custom meal plan with recipes and macro targets</li>
              <li>Photo ready posture coaching</li>
              <li>Final week peaking plan for energy, a fuller look and less bloating</li>
              {mode === 'inperson' && <li>1 complimentary session for a partner or friend</li>}
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
        </div>
        <p className="packages-footnote">*Minimum 3-month commitment required for all packages.</p>
        <p className="packages-footnote packages-footnote--bf">Black Friday sale pricing is limited to the first 3 sign ups.</p>
      </section>

    </main>
  )
}
