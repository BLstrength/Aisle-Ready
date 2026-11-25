import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
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
          <p className="section-sub">Choose the level that fits your lifestyle. Both are built around your wedding date with a minimum 3-month commitment.</p>
        </div>
        <div className="packages-grid">
          <div className="pkg-card">
            <div className="pkg-tier">Silver Package</div>
            <ul className="pkg-features">
              <li>3 in-person training sessions per week</li>
              <li>Weekly nutrition plans</li>
              <li>Daily check-ins</li>
              <li>Minimum 3-month commitment</li>
            </ul>
            <a href="#contact" className="btn-ghost">Say I Do</a>
          </div>
          <div className="pkg-card pkg-card--gold">
            <div className="pkg-badge">Most Popular</div>
            <div className="pkg-tier">Gold Package</div>
            <ul className="pkg-features">
              <li>5 in-person training sessions per week</li>
              <li>Weekly nutrition plans</li>
              <li>Daily check-ins</li>
              <li>Minimum 3-month commitment</li>
            </ul>
            <a href="#contact" className="btn-primary">Say I Do</a>
          </div>
        </div>
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
