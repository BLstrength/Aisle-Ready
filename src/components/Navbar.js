import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem 2rem', background: '#fff', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ fontWeight: 800, fontSize: '1.4rem' }}>Aisle Ready</Link>
      <div style={{ display: 'flex', gap: '1.5rem', fontWeight: 600 }}>
        <Link to="/">Home</Link>
      </div>
    </nav>
  )
}
