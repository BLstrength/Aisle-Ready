import './About.css'

export default function About() {
  return (
    <main className="about">
      {/* Intro */}
      <section className="about-hero">
        <div className="about-photo-placeholder large">
          <span>Trainer Photo</span>
        </div>
        <div className="about-text">
          <h1>About Aisle Ready</h1>
          <p>Your wedding day is one of the most important days of your life. Aisle Ready was built to help you show up feeling strong, confident, and completely yourself.</p>
          <p>We specialize in personalized fitness programs tailored to your wedding timeline — whether you have 3 months or a full year, we'll build a plan that works for you.</p>
        </div>
      </section>

      {/* Photo Row */}
      <section className="about-photos">
        <h2>Our Approach</h2>
        <div className="about-photo-row">
          {[1, 2].map(i => (
            <div className="about-photo-placeholder" key={i}>
              <span>Photo {i}</span>
            </div>
          ))}
        </div>
        <p className="about-caption">We combine strength training, nutrition guidance, and accountability coaching to get you results that last.</p>
      </section>
    </main>
  )
}
