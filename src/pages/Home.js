import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-tag">Wedding Fitness Coaching</div>
          <h1>Look and feel your <em>best</em> on your wedding day.</h1>
          <p>Personalized fitness and nutrition coaching built around your wedding date. Strength, confidence, and results — from an elite-level coach.</p>
          <div className="hero-actions">
            <Link to="/services" className="btn-primary">View Programs</Link>
            <a href="#contact" className="btn-ghost">Book a Free Consult</a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how">
        <div className="how-header">
          <h2 className="section-title">What you can <em>expect</em></h2>
          <p className="section-sub">A simple, proven process to get you aisle-ready on your timeline.</p>
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
            <label>Email <span className="req">*</span></label>
            <input type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label>Phone Number <span className="req">*</span></label>
            <input type="tel" placeholder="e.g. +1 555 000 0000" />
          </div>
          <div>
            <label>Wedding Date</label>
            <input type="date" />
          </div>
          <div>
            <label>Service Interested In <span className="req">*</span></label>
            <select defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>1-on-1 Personal Training</option>
              <option>Wedding Countdown Program</option>
              <option>Bridal Party Package</option>
              <option>Macro Coaching</option>
            </select>
          </div>
          <div>
            <label>Tell us about your goals <span className="req">*</span></label>
            <textarea rows="3" placeholder="What are you hoping to achieve before your wedding day?" />
          </div>
          <div className="form-submit">
            <button type="button">Send Message</button>
          </div>
        </div>

        <p className="cta-note">Just a real conversation about your goals — no pressure, no obligation.</p>
      </section>

    </main>
  )
}
