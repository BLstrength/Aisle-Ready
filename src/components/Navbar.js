import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Aisle Ready</Link>
      <div className="navbar-links">
        <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
        <a href="mailto:contact@aisleready.com" className="contact-btn">Contact Us</a>
      </div>
    </nav>
  )
}
