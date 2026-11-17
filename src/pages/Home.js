import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-photo-placeholder">
          <span>Hero Photo</span>
        </div>
        <div className="hero-content">
          <h1>Look and Feel Your Best<br />on Your Wedding Day</h1>
          <p>Personalized fitness training designed specifically for brides and grooms. Start your journey to aisle-ready confidence.</p>
          <div className="hero-btns">
            <Link to="/services" className="btn-primary">View Services</Link>
            <a href="mailto:contact@aisleready.com" className="btn-secondary">Get Started</a>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="photo-section">
        <h2>Your Transformation Starts Here</h2>
        <div className="photo-grid">
          {[1, 2, 3].map(i => (
            <div className="photo-placeholder" key={i}>
              <span>Photo {i}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Book a free consultation and let's build your wedding-day fitness plan.</p>
        <a href="mailto:contact@aisleready.com" className="btn-primary">Contact Us</a>
      </section>
    </main>
  )
}
