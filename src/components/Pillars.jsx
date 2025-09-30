import { motion } from 'framer-motion'
import { pillars } from '../data.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Pillars() {
  return (
    <section className="pillars" id="klubben">
      <div className="section-heading section-heading--center">
        <p className="section-kicker">Härnösands HF</p>
        <h2>Modernt spel. Stark kultur.</h2>
        <p className="section-sub">
          Vi kombinerar offensiv handboll med omtanke, hållbarhet och ett tydligt Höga Kusten-fokus.
        </p>
      </div>

      <motion.div className="pillars__grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
        {pillars.map((pillar, index) => (
          <motion.article key={pillar.title} className="pillars__card" custom={index} variants={fadeUp}>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Pillars
