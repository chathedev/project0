import { socialLinks } from '../data.js'

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M7 3a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7zm0 2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2zm10 .5a1 1 0 100 2 1 1 0 000-2zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M13 3a5 5 0 00-5 5v3H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3V3h-3z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M21.58 7.2a2.4 2.4 0 00-1.69-1.69C18.04 5 12 5 12 5s-6.04 0-7.89.51A2.4 2.4 0 002.42 7.2 25.5 25.5 0 002 12c0 1.6.15 3.2.42 4.8a2.4 2.4 0 001.69 1.69C5.96 19 12 19 12 19s6.04 0 7.89-.51a2.4 2.4 0 001.69-1.69A25.5 25.5 0 0022 12c0-1.6-.15-3.2-.42-4.8zM10.58 9.14L15.21 12l-4.63 2.86V9.14z" />
    </svg>
  ),
}

function ClubFooter() {
  return (
    <footer className="club-footer">
      <div className="club-footer__shell">
        <div>
          <p className="section-kicker">Kontakta oss</p>
          <h2>Häng med på resan</h2>
          <p className="club-footer__lead">
            Följ Härnösands HF för highlights, bakom kulisserna och möjligheten att bli del av gemenskapen.
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
            <h3>Klubbkansliet</h3>
            <p>info@harnosandshf.se</p>
            <p>+46 (0)611-123 45</p>
            <p>Box 195, 871 25 Härnösand</p>
          </div>
          <div>
            <h3>HHC Arena</h3>
            <p>Varvsallén 15</p>
            <p>Vardagar: 16.00–22.00</p>
            <p>Matchdag: 2 timmar före avkast</p>
          </div>
        </div>

        <div className="club-footer__cta">
          <h3>Vill du bli partner?</h3>
          <p>Hör av dig så skapar vi ett paket som passar er.</p>
          <a className="btn btn--ghost" href="#partners">
            Partnerinformation
          </a>
        </div>
      </div>

      <div className="club-footer__bridge" aria-hidden="true" />
      <div className="club-footer__legal">
        <span>© {new Date().getFullYear()} Härnösands HF</span>
        <span>Designad för Höga Kustens handboll</span>
      </div>
    </footer>
  )
}

export default ClubFooter
