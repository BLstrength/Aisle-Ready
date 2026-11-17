import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-logo">Aisle Ready</p>
          <p className="footer-tagline">Personal training for your wedding day.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <a href="mailto:contact@aisleready.com">Contact</a>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Aisle Ready. All rights reserved.</p>
    </footer>
  )
}
