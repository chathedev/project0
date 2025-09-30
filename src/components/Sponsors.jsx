import { motion } from 'framer-motion'
import { sponsors } from '../data.js'

function Sponsors() {
  const marqueeItems = [...sponsors, ...sponsors]

  return (
    <section className="sponsors" id="partners">
      <div className="section-heading section-heading--center">
        <p className="section-kicker">Partners</p>
        <h2>Stolta samarbeten i Höga Kusten</h2>
        <p className="section-sub">
          Våra partners delar passionen för handboll, ungdomar och en levande stad.
        </p>
      </div>

      <div className="sponsor-marquee" role="list" aria-label="Sponsorer">
        <motion.div
          className="sponsor-marquee__track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {marqueeItems.map((sponsor, index) => (
            <div key={`${sponsor.name}-${index}`} className="sponsor-card" role="listitem">
              <img src={sponsor.image} alt={`${sponsor.name} logotyp`} loading="lazy" />
              <span>{sponsor.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Sponsors
