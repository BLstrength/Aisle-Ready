import './Services.css'

const services = [
  {
    title: '1-on-1 Personal Training',
    description: 'Fully customized sessions built around your goals, timeline, and fitness level. Every workout is designed with your wedding day in mind.',
    photo: 'Photo 1',
  },
  {
    title: 'Wedding Countdown Program',
    description: 'A structured 12-week or 6-month training program with weekly check-ins, nutrition tips, and progress tracking.',
    photo: 'Photo 2',
  },
  {
    title: 'Bridal Party Package',
    description: 'Train together with your bridal party. Group sessions that keep everyone motivated and accountable.',
    photo: 'Photo 3',
  },
]

export default function Services() {
  return (
    <main className="services">
      <section className="services-header">
        <h1>Our Services</h1>
        <p>Every program is built around your wedding date, your body, and your goals.</p>
      </section>

      <section className="services-list">
        {services.map((s, i) => (
          <div className={`service-item ${i % 2 === 1 ? 'reverse' : ''}`} key={i}>
            <div className="service-photo-placeholder">
              <span>{s.photo}</span>
            </div>
            <div className="service-text">
              <h2>{s.title}</h2>
              <p>{s.description}</p>
              <a href="mailto:contact@aisleready.com" className="btn-primary">Book a Consultation</a>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
