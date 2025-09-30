import { motion } from 'framer-motion'
import { news, matches } from '../data.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  }),
}

function NewsMatches() {
  return (
    <section className="news-matches" id="aktuellt">
      <div className="section-heading">
        <p className="section-kicker">Nyheter & matcher</p>
        <h2>Senaste pulsen från Härnösands HF</h2>
        <p className="section-sub">
          Följ med bakom kulisserna, se kommande matcher och håll koll på allt som händer i klubben.
        </p>
      </div>

      <div className="news-matches__layout">
        <motion.div className="news-matches__news" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ visible: { transition: { staggerChildren: 0.18 } } }}>
          {news.map((item, index) => (
            <motion.article key={item.title} className="news-card" custom={index} variants={fadeInUp}>
              <div className="news-card__meta">
                <span>{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a className="inline-link" href={item.link}>
                Läs mer
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="news-matches__matches" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.14 } } }}>
          {matches.map((match, index) => (
            <motion.div key={`${match.opponent}-${match.date}`} className="match-card" custom={index} variants={fadeInUp}>
              <div className="match-card__header">
                <span className="match-card__status">{match.status}</span>
                <span className="match-card__competition">{match.competition}</span>
              </div>
              <h3>{match.opponent}</h3>
              <div className="match-card__info">
                <div>
                  <span className="match-card__label">Datum</span>
                  <span>{match.date}</span>
                </div>
                <div>
                  <span className="match-card__label">Tid</span>
                  <span>{match.time}</span>
                </div>
                <div>
                  <span className="match-card__label">Arena</span>
                  <span>{match.venue}</span>
                </div>
              </div>
              <button className="btn btn--minimal" type="button">
                Biljetter
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default NewsMatches
