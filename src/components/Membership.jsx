import { motion } from 'framer-motion'
import { membershipOptions } from '../data.js'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  }),
}

function Membership() {
  return (
    <section className="membership" id="medlemskap">
      <motion.div className="membership__intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ visible: { transition: { staggerChildren: 0.16 } } }}>
        <motion.p className="section-kicker" variants={fadeUp}>
          Medlemskap & support
        </motion.p>
        <motion.h2 variants={fadeUp}>Bli en del av handbollens hjärta</motion.h2>
        <motion.p className="section-sub" variants={fadeUp}>
          Från läktaren till planen – tillsammans bygger vi Sveriges mest engagerade klubbkultur. Välj den
          nivå som passar dig och kliv in i gemenskapen.
        </motion.p>
        <motion.div className="membership__cta" variants={fadeUp}>
          <a className="btn btn--primary" href="#">
            Gå med idag
          </a>
          <a className="btn btn--ghost" href="#">
            Kontakta oss
          </a>
        </motion.div>
      </motion.div>

      <motion.div className="membership__grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {membershipOptions.map((option, index) => (
          <motion.article
            key={option.label}
            className={`membership-card${option.highlight ? ' membership-card--highlight' : ''}`}
            custom={index}
            variants={fadeUp}
          >
            <h3>{option.label}</h3>
            <p>{option.description}</p>
            <div className="membership-card__footer">
              <span className="membership-card__price">{option.price}</span>
              <button className="btn btn--minimal" type="button">
                Läs mer
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Membership
