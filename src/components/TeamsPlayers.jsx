import { motion } from 'framer-motion'
import { players } from '../data.js'

const cardVariants = {
  hidden: { opacity: 0, y: 32, rotateX: 6 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.1 + 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
}

function TeamsPlayers() {
  return (
    <section className="players" id="laget">
      <div className="section-heading">
        <p className="section-kicker">Lag & profiler</p>
        <h2>Spelarna som lyfter HHC Arena</h2>
        <p className="section-sub">
          En mix av egenfostrade talanger och rutinerade ledargestalter. Upptäck profilerna som ger allt i det
          gröna hjärtat.
        </p>
      </div>

      <motion.div className="players__grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {players.map((player, index) => (
          <motion.article key={player.name} className="player-card" custom={index} variants={cardVariants}>
            <div className="player-card__media" style={{ backgroundImage: `url(${player.image})` }} />
            <div className="player-card__body">
              <span className="player-card__number">#{player.number}</span>
              <h3>{player.name}</h3>
              <p className="player-card__position">{player.position}</p>
              <p className="player-card__bio">{player.bio}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default TeamsPlayers
