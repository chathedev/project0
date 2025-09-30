import { useEffect } from 'react'
import './App.css'

const showcaseItems = [
  {
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    alt: 'Designers collaborating',
    caption: 'Focus Labs accelerated their discovery cycle by 3× with Breeze canvases.'
  },
  {
    img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80',
    alt: 'Creative studio interior',
    caption: 'Lumen Studio keeps remote teams aligned with instant shareable snapshots.'
  },
  {
    img: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=800&q=80',
    alt: 'Work session with tablet',
    caption: 'The Atelier refined client presentations with guided storytelling flows.'
  }
]

function App() {
  useEffect(() => {
    const animated = document.querySelectorAll('[data-animate]')

    if (!('IntersectionObserver' in window)) {
      animated.forEach(el => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    animated.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const year = new Date().getFullYear()

  return (
    <div className="page">
      <div className="floating-shapes" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className="hero" id="top">
        <nav className="nav">
          <span className="logo">Breeze</span>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#showcase">Showcase</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="primary-btn" href="#contact">
            Request Access
          </a>
        </nav>

        <div className="hero-content" data-animate>
          <p className="eyebrow">Experience the future of light design</p>
          <h1>Ideas feel effortless when the flow is right.</h1>
          <p className="hero-subtitle">
            Breeze helps creative teams capture, refine, and share concepts in seconds—without the drag of complicated tooling.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#features">
              Explore Breeze
            </a>
            <a className="ghost-btn" href="#showcase">
              See it in action
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="features" data-animate>
          <div className="section-heading">
            <p className="eyebrow">Powerful simplicity</p>
            <h2>Designed to stay out of your way but ahead of your ideas.</h2>
          </div>
          <div className="grid features-grid">
            <article className="card">
              <h3>Live canvases</h3>
              <p>Sketch, annotate, and adapt ideas together in real time with buttery-smooth collaboration.</p>
            </article>
            <article className="card">
              <h3>Smart snapshots</h3>
              <p>Capture milestones instantly and share polished updates that look great on any device.</p>
            </article>
            <article className="card">
              <h3>Guided flow</h3>
              <p>Built-in storyboarding nudges your team through the right questions so nothing falls through the cracks.</p>
            </article>
          </div>
        </section>

        <section className="section split" id="about" data-animate>
          <div className="split-text">
            <p className="eyebrow">Made for makers</p>
            <h2>Everything you need to launch, nothing you don’t.</h2>
            <p>
              Breeze trims complexity down to the essentials. No bloated dashboards, just a calming space for shipping beautiful work faster.
            </p>
            <ul className="pill-list">
              <li>Fast onboarding</li>
              <li>Cloud synced</li>
              <li>Secure by default</li>
              <li>Instant sharing</li>
            </ul>
            <a className="primary-btn" href="#contact">
              Join the beta
            </a>
          </div>
          <div className="split-visual">
            <div className="mockup-card">
              <p className="mockup-title">Canvas Flow</p>
              <div className="mockup-body">
                <div className="mockup-track">
                  <div className="mockup-chip">Wireframes</div>
                  <div className="mockup-chip">Moodboards</div>
                  <div className="mockup-chip">Live notes</div>
                </div>
                <div className="mockup-frame">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <p className="mockup-caption">Invite-only. Updates stream in as you create.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="showcase" data-animate>
          <div className="section-heading">
            <p className="eyebrow">Showcase</p>
            <h2>Trusted by teams building tomorrow’s products.</h2>
          </div>
          <div className="grid showcase-grid">
            {showcaseItems.map(item => (
              <figure className="showcase-card" key={item.alt}>
                <img src={item.img} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section testimonials" aria-label="Testimonials" data-animate>
          <div className="section-heading">
            <p className="eyebrow">What people are saying</p>
            <h2>Effortless momentum from day one.</h2>
          </div>
          <div className="grid testimonials-grid">
            <blockquote className="card">
              <p>
                “We moved from messy briefings to crystal clarity. Breeze makes every touchpoint feel considered.”
              </p>
              <cite>— Jordan Lee, Creative Director at Pine &amp; Co.</cite>
            </blockquote>
            <blockquote className="card">
              <p>
                “Our ideas look polished without hours of clean-up. The team actually enjoys sharing updates now.”
              </p>
              <cite>— Mari Okada, Product Lead at Halo Studios</cite>
            </blockquote>
          </div>
        </section>

        <section className="section pricing" aria-label="Pricing" data-animate>
          <div className="section-heading">
            <p className="eyebrow">Flexible plans</p>
            <h2>Choose the momentum that fits your team.</h2>
          </div>
          <div className="grid pricing-grid">
            <article className="card">
              <p className="plan-name">Starter</p>
              <p className="plan-price">Free</p>
              <ul>
                <li>Unlimited personal canvases</li>
                <li>Export as PDF or PNG</li>
                <li>Community templates</li>
              </ul>
              <a className="ghost-btn" href="#contact">
                Get started
              </a>
            </article>
            <article className="card highlight">
              <p className="plan-name">Studio</p>
              <p className="plan-price">
                $29<span>/month</span>
              </p>
              <ul>
                <li>Team workspaces</li>
                <li>Realtime collaboration</li>
                <li>Advanced permissions</li>
              </ul>
              <a className="primary-btn" href="#contact">
                Start studio trial
              </a>
            </article>
            <article className="card">
              <p className="plan-name">Enterprise</p>
              <p className="plan-price">Let&apos;s talk</p>
              <ul>
                <li>Custom integrations</li>
                <li>Dedicated success partner</li>
                <li>Security reviews</li>
              </ul>
              <a className="ghost-btn" href="#contact">
                Connect with us
              </a>
            </article>
          </div>
        </section>

        <section className="section" id="contact" data-animate>
          <div className="contact-card">
            <h2>Ready to amplify your team&apos;s flow?</h2>
            <p>Tell us about your projects and we’ll set up early access that fits your rhythm.</p>
            <form className="contact-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Taylor Morgan" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="you@studio.com" required />
              </div>
              <div className="form-row">
                <label htmlFor="team-size">Team size</label>
                <select id="team-size" name="team-size" defaultValue="1-5">
                  <option value="1-5">1-5</option>
                  <option value="6-15">6-15</option>
                  <option value="16-50">16-50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="message">What are you building?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="We craft experiences for bold consumer brands..."
                />
              </div>
              <button className="primary-btn" type="submit">
                Request beta access
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="logo">Breeze</span>
        <div className="footer-links">
          <a href="#top">Back to top</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
        </div>
        <p>© {year} Breeze Labs. Crafted with calm energy.</p>
      </footer>
    </div>
  )
}

export default App
