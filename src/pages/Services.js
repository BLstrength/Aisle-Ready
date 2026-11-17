import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    name: '1-on-1 Personal Training',
    price: '$200',
    per: '/ month',
    description: 'Fully customized sessions built around your wedding date, goals, and fitness level. Every workout is designed with your big day in mind.',
    features: [
      'Weekly custom strength & cardio program',
      'Warm-ups, corrective exercises & accessories',
      'Unlimited interaction via email / WhatsApp',
      'Unlimited video analysis & form review',
      'Option to add macro coaching at a discount',
    ],
    featured: true,
  },
  {
    name: 'Wedding Countdown Program',
    price: '$150',
    per: '/ month',
    description: 'A structured 12-week or 6-month program with weekly check-ins, nutrition tips, and progress tracking built around your countdown.',
    features: [
      '12-week or 6-month structured program',
      'Weekly check-in & progress tracking',
      'Nutrition tips & weekly macro targets',
      'Program adjustments as you progress',
      'Includes access to private coaching portal',
    ],
    featured: false,
  },
  {
    name: 'Bridal Party Package',
    price: '$120',
    per: '/ person / month',
    description: 'Train together with your bridal party. Group sessions that keep everyone motivated, accountable, and ready for the big day.',
    features: [
      'Group training program for 2–6 people',
      'Individual goal-setting for each member',
      'Weekly group check-ins',
      'Shared nutrition guidelines & meal ideas',
      'Minimum 2-month commitment',
    ],
    featured: false,
  },
]


export default function Services() {
  return (
    <main className="services">

      <section className="services-header">
        <div className="page-tag">Programs & Pricing</div>
        <h1 className="page-title">Choose your <em>method</em></h1>
        <p className="services-sub">Every program is built around your wedding date, your body, and your goals. Required 3-month commitment, then month to month.</p>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card${s.featured ? ' featured' : ''}`} key={i}>
              {s.featured && <div className="popular-badge">Most Popular</div>}
              <div className="prog-name">{s.name}</div>
              <p className="prog-desc">{s.description}</p>
              <div className="prog-price">{s.price} <span>{s.per}</span></div>
              <ul className="prog-features">
                {s.features.map((f, j) => (
                  <li className="prog-feature" key={j}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="prog-cta">Book a Consultation</a>
            </div>
          ))}
        </div>
      </section>


{/* CTA strip */}
      <section className="services-cta">
        <h2 className="section-title">Not sure which program is right for you?</h2>
        <p className="section-sub">Book a free 30-minute consultation and Bobby will help you find the right fit for your timeline and goals.</p>
        <a href="#contact" className="btn-primary">Book a Free Consult</a>
        <p className="services-cta-note">* Required 3-month commitment, then month to month</p>
      </section>

    </main>
  )
}
