import './About.css'

export default function About() {
  return (
    <main className="about">

      {/* Page Hero */}
      <section className="about-hero">
        <div className="page-tag">About Your Coach</div>
        <h1 className="page-title">Bobby Lawson — <em>Aisle Ready Fitness</em></h1>
        <div className="about-body">
          <p>Bobby Lawson is an experienced strength and fitness coach who has spent years helping people build real, lasting results. He brings that same commitment and discipline to every client he coaches — including the ones training for one of the most important days of their lives.</p>
          <p>Aisle Ready Fitness was built on a simple belief: that brides and grooms deserve the same quality of coaching that high-performing athletes get. Not generic workouts. Not fad diets. A real plan, built around your wedding date, your body, and your life.</p>
          <p>Whether you have 3 months or a full year, Bobby will design a training and nutrition program that gets you feeling strong, confident, and completely yourself when you walk down the aisle.</p>
        </div>
      </section>

      {/* Approach */}
      <section className="approach-section">
        <div className="approach-header">
          <h2 className="section-title">The <em>approach</em></h2>
          <p className="section-sub">Real coaching built on real results — not templates or guesswork.</p>
        </div>
        <div className="approach-grid">
          <div className="approach-card">
            <div className="approach-icon">🏋️</div>
            <h3>Strength-First Training</h3>
            <p>Every program is built around functional strength — the kind that changes how you look, move, and feel in your dress or suit on wedding day.</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">🥗</div>
            <h3>Nutrition Guidance</h3>
            <p>No crash diets. Macro coaching aligned to your training and your timeline, so you're fueled and feeling great when it counts.</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">📋</div>
            <h3>Accountability Coaching</h3>
            <p>Weekly check-ins, program adjustments, and direct access to Bobby throughout your entire wedding countdown.</p>
          </div>
        </div>
      </section>

    </main>
  )
}
