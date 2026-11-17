export default function Footer() {
  return (
    <footer style={{ padding: '2rem', textAlign: 'center', background: '#f9f9f9', borderTop: '1px solid #eee', color: '#666', fontSize: '0.9rem' }}>
      <p>&copy; {new Date().getFullYear()} Aisle Ready. All rights reserved.</p>
    </footer>
  )
}
