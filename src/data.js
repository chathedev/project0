const createSvgDataUri = (svgString) => `data:image/svg+xml,${encodeURIComponent(svgString)}`

const createSponsorLogo = (label, base, accent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="240" height="120" rx="28" ry="28" fill="#ffffff" />
      <rect x="6" y="6" width="228" height="108" rx="24" ry="24" fill="url(#grad)" opacity="0.85" />
      <text x="120" y="72" font-family="Archivo, sans-serif" font-size="44" font-weight="700" text-anchor="middle" fill="#0b1b2a" letter-spacing="6">${label}</text>
    </svg>
  `
  return createSvgDataUri(svg)
}

export const heroHighlights = [
  { label: 'Grundat', value: '1958' },
  { label: 'Arena', value: 'HHC Arena' },
  { label: 'Gemenskap', value: 'Handboll med hjärta' },
]

export const pillars = [
  {
    title: 'Elithandboll på nära håll',
    description: 'Upplev tempo, teknik och taktik från första parkett – där hela Härnösand fylls av energi.',
  },
  {
    title: 'Utveckling i alla led',
    description: 'Från bollskola till seniorlag. Vi bygger framtidens spelare med omtanke, glädje och disciplin.',
  },
  {
    title: 'Klubben som staden samlas kring',
    description: 'Här möts familjer, företag och vänner. Alltid med hjärta för sporten och Höga Kusten.',
  },
]

export const supportOptions = [
  {
    label: 'Biljetter',
    description: 'Säkra din plats till nästa matchkväll. Enkel bokning och digitala biljetter.',
    action: 'Köp biljetter',
    href: '#',
  },
  {
    label: 'Medlemskap',
    description: 'Bli en del av klubbgemenskapen med exklusiva nyheter och förtur till event.',
    action: 'Bli medlem',
    href: '#',
  },
  {
    label: 'Volontärteam',
    description: 'Hjälp oss skapa magiska matchdagar. Vi välkomnar dig bakom kulisserna.',
    action: 'Anmäl intresse',
    href: '#',
  },
]

export const sponsors = [
  { name: 'NORDIX', image: createSponsorLogo('NX', '#f5f9ff', '#2dd5a2') },
  { name: 'HÖGA', image: createSponsorLogo('HK', '#fff4ec', '#ff7b2f') },
  { name: 'BALTIC', image: createSponsorLogo('BC', '#e6f4ff', '#158f6f') },
  { name: 'COAST', image: createSponsorLogo('CO', '#f0fff6', '#2dd5a2') },
  { name: 'ARENA', image: createSponsorLogo('AR', '#fff5dd', '#ffb347') },
]

export const socialLinks = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
]
