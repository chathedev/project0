import { motion } from 'framer-motion'
import { heroHighlights } from '../data.js'

const heroCopy = {
  title: 'Handboll med hjärta och Höga Kusten-energi',
  lead:
    'Härnösands HF bjuder på modern handboll, öppna famnar och publikhav i grönt och orange. Upplev spelglädjen live – mitt i stadens puls.',
  primaryCta: { label: 'Se nästa hemmamatch', href: '#' },
  secondaryCta: { label: 'Upptäck medlemskap', href: '#' },
}

const heroTransitions = {
  container: {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  },
  children: {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    }),
  },
}

const clubLogo = '/harnosands-hf-logo.png'

function Hero() {
  return (
    <section className="hero" id="hem">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <motion.div className="hero__shell" initial="hidden" animate="visible" variants={heroTransitions.container}>
        <motion.div className="hero__badge" custom={0} initial="hidden" animate="visible" variants={heroTransitions.children}>
          <img src={clubLogo} alt="Härnösands HF logotyp" loading="eager" />
          <div>
            <span>Härnösands HF</span>
            <span>Handboll med hjärta</span>
          </div>
        </motion.div>

        <motion.h1 custom={1} initial="hidden" animate="visible" variants={heroTransitions.children}>
          {heroCopy.title}
        </motion.h1>

        <motion.p custom={2} initial="hidden" animate="visible" variants={heroTransitions.children}>
          {heroCopy.lead}
        </motion.p>

        <motion.div className="hero__actions" custom={3} initial="hidden" animate="visible" variants={heroTransitions.children}>
          <a className="btn btn--primary" href={heroCopy.primaryCta.href}>
            {heroCopy.primaryCta.label}
          </a>
          <a className="btn btn--ghost" href={heroCopy.secondaryCta.href}>
            {heroCopy.secondaryCta.label}
          </a>
        </motion.div>

        <motion.div className="hero__highlights" custom={4} initial="hidden" animate="visible" variants={heroTransitions.children}>
          {heroHighlights.map((item) => (
            <div key={item.label}>
              <span>{item.value}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
