import { motion } from 'framer-motion'
import { supportOptions } from '../data.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  }),
}

function Support() {
  return (
    <section className="support" id="engagera-dig">
      <div className="support__shell">
        <div className="support__intro">
          <p className="section-kicker">Engagera dig</p>
          <h2>Välj hur du vill stötta klubben</h2>
          <p className="section-sub">
            Väljer du läktaren, medlemskapet eller volontärlaget? Oavsett väg är du en viktig del av Härnösands
            HF.
          </p>
        </div>

        <motion.div className="support__grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {supportOptions.map((option, index) => (
            <motion.article key={option.label} className="support__card" custom={index} variants={fadeUp}>
              <h3>{option.label}</h3>
              <p>{option.description}</p>
              <a className="btn btn--minimal" href={option.href}>
                {option.action}
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Support
