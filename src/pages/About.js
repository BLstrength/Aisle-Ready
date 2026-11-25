import './About.css'

export default function About() {
  return (
    <main className="about">

      {/* Page Hero */}
      <section className="about-hero">
        <div className="page-tag">About Your Coach</div>
        <h1 className="page-title">Meet <em>Your Coach</em></h1>
        <div className="about-body">
          <p>I'm Bobby Lawson, a Pittsburgh based coach who helps people lose weight, get stronger and feel at home in their own bodies. I started lifting as a kid, and over the years, fitness became the place where I built my own confidence. Now I help others find that same feeling.</p>
          <p>My approach is personal. I've been through my own body transformation, so I know how hard it is to start and how frustrating setbacks can be. I also know how good it feels when the results finally show. That's why I coach with patience, honesty and encouragement, and never with judgment.</p>
          <p>No experience is needed. Whether you've never set foot in a gym or you're just getting back into it, I'll meet you where you are.</p>
        </div>
      </section>

      {/* About Aisle Ready */}
      <section className="approach-section">
        <div className="approach-header">
          <h2 className="section-title">About <em>Aisle Ready Fitness</em></h2>
          <p className="section-sub">Built on one belief: everyone deserves to feel their best on their wedding day.</p>
        </div>
        <div className="about-body">
          <p>That means no intense boot camps and no crash diets. You get a plan built around your wedding date, your body and your life, and a coach who's with you at every step.</p>
          <p>Whether your wedding is 3 months away or more than a year out, Bobby will build a training and nutrition plan that gets you to your date feeling fit, confident and completely yourself.</p>
        </div>
      </section>

    </main>
  )
}
