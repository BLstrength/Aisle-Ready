import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/logo.png" alt="Aisle Ready Fitness" />
      </Link>

      <div className={`navbar-links${open ? ' open' : ''}`}>
        <Link to="/" className={pathname === '/' ? 'active' : ''} onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className={pathname === '/about' ? 'active' : ''} onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" className={pathname === '/services' ? 'active' : ''} onClick={() => setOpen(false)}>Packages</Link>
        <a href="/#contact" className="contact-btn" onClick={() => setOpen(false)}>Say I Do</a>
      </div>

      <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(o => !o)}>
        <span className="ham-bar" />
        <span className="ham-bar" />
        <span className="ham-bar" />
      </button>
    </nav>
  )
}
