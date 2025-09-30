import { motion } from 'framer-motion'
import heroGraphic from '../assets/hero-motion.svg'

const heroVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const childFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

const clubLogo = '/harnosands-hf-logo.png'

const stats = [
  { label: 'Publiksnitt', value: '2 150' },
  { label: 'Akademispelare', value: '180+' },
  { label: 'Grundat', value: '1958' },
]

function Hero() {
  return (
    <section className="hero" id="toppen">
      <motion.div className="hero__aurora" initial="hidden" animate="visible" variants={heroVariant} />
      <motion.div className="hero__grid" initial="hidden" animate="visible" variants={heroVariant} />

      <motion.div className="hero__content" initial="hidden" animate="visible" variants={staggerChildren}>
        <motion.div className="hero__logo-tile" variants={childFade}>
          <img src={clubLogo} alt="Härnösands HF logotyp" loading="eager" />
          <div className="hero__logo-label">
            <span>Härnösands HF</span>
            <span className="hero__tagline">Handboll med hjärta</span>
          </div>
        </motion.div>

        <motion.h1 className="hero__title" variants={childFade}>
          Handboll med puls från Höga Kusten
        </motion.h1>

        <motion.p className="hero__lead" variants={childFade}>
          Ett hav av grönt och orange, där varje matchkväll förvandlar HHC Arena till Sveriges mest
          laddade handbollsscena.
        </motion.p>

        <motion.div className="hero__cta" variants={childFade}>
          <a className="btn btn--primary" href="#medlemskap">
            Köp biljetter
          </a>
          <a className="btn btn--ghost" href="#medlemskap">
            Bli medlem
          </a>
        </motion.div>

        <motion.div className="hero__stats" variants={childFade}>
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="hero__visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <motion.div
          className="hero__ball-trace"
          animate={{ rotate: [0, 3, -3, 0], y: [0, -10, 12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <img src={heroGraphic} alt="Handboll i rörelse med stadionljus" loading="lazy" />
      </motion.div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scrolla vidare</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

export default Hero
