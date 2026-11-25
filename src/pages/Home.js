import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import '../components/ContactForm.css'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbycbVs5mKlvxCfXNMh6JGtC9EITq7CLjtImyu0qxAiNbw4d0x3YROdxAkj_sqqaKsQXAg/exec'

const EMPTY = { firstName: '', lastName: '', phone: '', email: '', weddingDate: '', goals: '' }

export default function Home() {
  const [mode, setMode] = useState('inperson')
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handle(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(form),
      })
      setStatus('success')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

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
              <li>{mode === 'inperson' ? '5 private in-person training sessions per week' : '5 day training plan per week'}</li>
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

      {/* CTA / Contact */}
      <section className="cta-section" id="contact">
        <h2 className="section-title">Let's Get You <em>Aisle Ready</em></h2>
        <p className="section-sub">Fill out the form and we'll reach out to set up your free call and first training session.</p>

        {status === 'success' ? (
          <div className="form-success">
            <div className="form-success-icon">✓</div>
            <h3>You're on your way!</h3>
            <p>Bobby will be in touch shortly to set up your free consultation.</p>
            <button className="btn-primary" onClick={() => setStatus('idle')}>Submit Another</button>
          </div>
        ) : (
          <form className="contact-form-card" onSubmit={submit}>
            <div className="form-row-2">
              <div>
                <label>First Name <span className="req">*</span></label>
                <input name="firstName" type="text" placeholder="First name" value={form.firstName} onChange={handle} required />
              </div>
              <div>
                <label>Last Name <span className="req">*</span></label>
                <input name="lastName" type="text" placeholder="Last name" value={form.lastName} onChange={handle} required />
              </div>
            </div>
            <div>
              <label>Phone Number <span className="req">*</span></label>
              <input name="phone" type="tel" placeholder="e.g. +1 555 000 0000" value={form.phone} onChange={handle} required />
            </div>
            <div>
              <label>Email <span className="req">*</span></label>
              <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handle} required />
            </div>
            <div>
              <label>Wedding Date</label>
              <input name="weddingDate" type="text" placeholder="MM/DD/YYYY" value={form.weddingDate} onChange={handle} />
            </div>
            <div>
              <label>Tell us about your goals <span className="req">*</span></label>
              <textarea name="goals" rows="3" placeholder="What are you hoping to achieve before your wedding day?" value={form.goals} onChange={handle} required />
            </div>
            {status === 'error' && (
              <p className="form-error">Something went wrong — please try again or reach out directly.</p>
            )}
            <div className="form-submit">
              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Say I Do'}
              </button>
            </div>
          </form>
        )}

        <p className="cta-note">Just a real conversation about your goals — no pressure, no obligation.</p>
      </section>

    </main>
  )
}
