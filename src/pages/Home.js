import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [mode, setMode] = useState('inperson')

  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Feel fit, confident, and <em>Aisle Ready</em></h1>
          <p>Luxury wedding fitness and nutrition in Pittsburgh</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Say I Do</a>
            <Link to="/services" className="btn-ghost">View Packages</Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="trust-inner">
          <div className="trust-item">
            <span className="trust-num">7+</span>
            <span className="trust-label">Years of Coaching</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">1-on-1</span>
            <span className="trust-label">Personalized Programs</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">PGH</span>
            <span className="trust-label">Pittsburgh, PA</span>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="packages-section">
        <div className="packages-header">
          <h2 className="section-title">Two packages. <em>One goal.</em></h2>
          <p className="section-sub">Choose the package that fits your lifestyle. Both are built around your wedding date with your goals in mind.</p>
        </div>
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
            <div className="pkg-tier">Silver Package</div>
            <div className="pkg-price">{mode === 'inperson' ? '$1,000' : '$500'}<span>/mo</span></div>
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
            <div className="pkg-tier">Gold Package</div>
            <div className="pkg-price">{mode === 'inperson' ? '$1,650' : '$825'}<span>/mo</span></div>
            <p className="pkg-includes">Everything in Silver, plus:</p>
            <ul className="pkg-features">
              <li>{mode === 'inperson' ? '5 private in-person training sessions per week, instead of 3' : '5 day training plan per week, instead of 3'}</li>
              {mode === 'inperson' && <li>Priority scheduling</li>}
              <li>Fully custom meal plan with recipes and macro targets</li>
              <li>Photo ready posture coaching</li>
              <li>Final week peaking plan for energy, a fuller look and less bloating</li>
              {mode === 'inperson' && <li>1 complimentary session for a partner or friend</li>}
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
        </div>
        <p className="packages-footnote">*Minimum 3-month commitment required for all packages.</p>
      </section>

      {/* How It Works */}
      <section className="how">
        <div className="how-header">
          <h2 className="section-title">What you can <em>expect</em></h2>
          <p className="section-sub">A simple, proven process to get you Aisle Ready by your wedding date.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Free Consultation</h3>
            <p>We'll talk through your wedding date, goals, fitness background, and schedule to build the right plan for you.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Your Custom Program</h3>
            <p>A fully personalized training and nutrition plan built around your countdown.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Ongoing Coaching</h3>
            <p>Regular communication, in person sessions, program adjustments, and accountability every step of the way until your big day.</p>
          </div>
        </div>
      </section>

    </main>
  )
}
