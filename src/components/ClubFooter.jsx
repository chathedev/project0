import { socialLinks } from '../data.js'

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M7 3c-2.21 0-4 1.79-4 4v10c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H7zm0 2h10c1.11 0 2 .89 2 2v10c0 1.11-.89 2-2 2H7c-1.11 0-2-.89-2-2V7c0-1.11.89-2 2-2zm10 1a1 1 0 100 2 1 1 0 000-2zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M13 3c-2.761 0-5 2.239-5 5v3H6v4h2v7h4v-7h3l1-4h-4V8c0-.552.448-1 1-1h3V3h-3z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M21.58 7.2a2.4 2.4 0 00-1.69-1.69C18.04 5 12 5 12 5s-6.04 0-7.89.51A2.4 2.4 0 002.42 7.2 25.5 25.5 0 002 12a25.5 25.5 0 00.42 4.8 2.4 2.4 0 001.69 1.69C5.96 19 12 19 12 19s6.04 0 7.89-.51a2.4 2.4 0 001.69-1.69A25.5 25.5 0 0022 12a25.5 25.5 0 00-.42-4.8zm-11 7.66V9.14l4.63 2.86z" />
    </svg>
  ),
}

function ClubFooter() {
  return (
    <footer className="club-footer">
      <div className="club-footer__bridge" aria-hidden="true" />
      <div className="club-footer__grid">
        <div>
          <p className="section-kicker">Härnösands HF</p>
          <h2>Vi är Höga Kustens handboll</h2>
          <p className="club-footer__lead">
            Följ oss för highlights, behind the scenes och kärleken till sporten. Handboll med hjärta – varje
            dag, året runt.
          </p>
          <div className="club-footer__socials">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label}>
                {icons[item.icon]}
              </a>
            ))}
          </div>
        </div>

        <div className="club-footer__info">
          <div>
            <h3>Kontakt</h3>
            <p>info@harnosandshf.se</p>
            <p>+46 (0)611-123 45</p>
            <p>Box 195, 871 25 Härnösand</p>
          </div>
          <div>
            <h3>HHC Arena</h3>
            <p>Varvsallén 15</p>
            <p>Öppet: 16:00–22:00 (vardagar)</p>
            <p>Matchdag: 2 timmar före avkast</p>
          </div>
        </div>

        <div className="club-footer__cta">
          <h3>Vill du bli partner?</h3>
          <p>Skicka ett mail så sätter vi ihop en spelplan för ert engagemang.</p>
          <a className="btn btn--ghost" href="#partners">
            Partnerpaket
          </a>
        </div>
      </div>

      <div className="club-footer__legal">
        <span>© {new Date().getFullYear()} Härnösands HF. All rights reserved.</span>
        <span>
          Webbplats av <strong>Gröna Hjärtslaget</strong>
        </span>
      </div>
    </footer>
  )
}

export default ClubFooter
