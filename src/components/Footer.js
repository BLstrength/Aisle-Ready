import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src="/logo.png" alt="Aisle Ready Fitness" className="footer-logo" />
        <p className="footer-tagline">Elite coaching for your wedding day.</p>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Packages</Link>
        <a href="#contact">Contact</a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Aisle Ready Fitness. All rights reserved.</p>
    </footer>
  )
}
