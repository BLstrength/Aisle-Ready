import './ContactForm.css'

export default function ContactForm() {
  return (
    <section className="cta-section" id="contact">
      <h2 className="section-title">Let's Get You <em>Aisle Ready</em></h2>
      <p className="section-sub">Fill out the form and we'll reach out to set up your free call and first training session.</p>

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
  )
}
