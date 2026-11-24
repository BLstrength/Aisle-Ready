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
            <Link to="/services" className="btn-ghost">View Programs</Link>
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

      {/* Timeline Hook */}
      <section className="timeline-section">
        <div className="timeline-header">
          <h2 className="section-title">A package for <em>every</em> timeline</h2>
          <p className="section-sub">These are our most common timelines, but we'll build a plan for any number of months until your big day.</p>
        </div>
        <div className="timeline-grid">
          <div className="tl-card">
            <div className="tl-months">3</div>
            <div className="tl-unit">months</div>
            <p>Focused, high-intensity prep for couples on a tighter timeline. Rapid results without cutting corners.</p>
          </div>
          <div className="tl-card">
            <div className="tl-months">6</div>
            <div className="tl-unit">months</div>
            <p>The most popular choice. Enough time to build real strength, lose body fat, and lock in lasting habits.</p>
          </div>
          <div className="tl-card tl-card--featured">
            <div className="tl-badge">Most Transformative</div>
            <div className="tl-months">9</div>
            <div className="tl-unit">months</div>
            <p>Build a truly strong, sculpted physique from the ground up. Deep habit formation and peak-day peaking.</p>
          </div>
          <div className="tl-card">
            <div className="tl-months">12</div>
            <div className="tl-unit">months</div>
            <p>The full journey — comprehensive fitness and nutrition transformation starting from day one of your engagement.</p>
          </div>
        </div>
        <p className="timeline-flex-note">Don't see your timeline? Every plan can be adjusted to any length. Just tell us your date.</p>
        <div className="timeline-cta">
          <a href="#contact" className="btn-primary">Say I Do</a>
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
            <p>A fully personalized training and nutrition plan built around your countdown — whether that's 3 months or a full year.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Ongoing Coaching</h3>
            <p>Regular check-ins, program adjustments, and accountability every step of the way until your big day.</p>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="cta-section" id="contact">
        <h2 className="section-title">Let's build your <em>plan</em></h2>
        <p className="section-sub">Fill out the form below and Bobby will be in touch to schedule your free 30-minute consultation.</p>

        <div className="contact-form-card">
          <div className="form-row-2">
            <div>
              <label>First Name <span className="req">*</span></label>
              <input type="text" placeholder="First name" />
            </div>
            <div>
              <label>Last Name <span className="req">*</span></label>
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div>
            <label>Phone Number <span className="req">*</span></label>
            <input type="tel" placeholder="e.g. +1 555 000 0000" />
          </div>
          <div>
            <label>Email <span className="req">*</span></label>
            <input type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label>Wedding Date</label>
            <input type="text" placeholder="MM/DD/YYYY" />
          </div>
          <div>
            <label>Tell us about your goals <span className="req">*</span></label>
            <textarea rows="3" placeholder="What are you hoping to achieve before your wedding day?" />
          </div>
          <div className="form-submit">
            <button type="button">Say I Do</button>
          </div>
        </div>

        <p className="cta-note">Just a real conversation about your goals — no pressure, no obligation.</p>
      </section>

    </main>
  )
}
