const createSvgDataUri = (svgString) => `data:image/svg+xml,${encodeURIComponent(svgString)}`

const createPlayerBadge = (id, primary, accent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400">
      <defs>
        <linearGradient id="bg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${primary}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
        <radialGradient id="light${id}" cx="50%" cy="20%" r="60%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.55" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="400" rx="48" ry="48" fill="#050608" />
      <rect width="320" height="400" rx="48" ry="48" fill="url(#bg${id})" opacity="0.82" />
      <circle cx="160" cy="140" r="120" fill="url(#light${id})" />
      <path d="M120 290 Q160 210 200 290" stroke="#ffffff" stroke-width="16" stroke-linecap="round" fill="none" opacity="0.6" />
      <path d="M100 160 C105 120 125 100 160 100 C195 100 215 120 220 160" stroke="#ffffff" stroke-width="18" stroke-linecap="round" fill="none" opacity="0.7" />
      <circle cx="160" cy="180" r="48" fill="#050608" opacity="0.18" />
      <circle cx="160" cy="180" r="32" fill="#ffffff" opacity="0.2" />
      <g stroke="#ffffff" stroke-width="10" stroke-linecap="round" opacity="0.5">
        <line x1="90" y1="330" x2="230" y2="330" />
        <line x1="110" y1="360" x2="210" y2="360" />
      </g>
    </svg>
  `
  return createSvgDataUri(svg)
}

const createSponsorLogo = (label, base, accent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="240" height="120" rx="28" ry="28" fill="#07090c" />
      <rect x="6" y="6" width="228" height="108" rx="24" ry="24" fill="url(#grad)" opacity="0.86" />
      <text x="120" y="72" font-family="Archivo, sans-serif" font-size="44" font-weight="700" text-anchor="middle" fill="#f4f7f8" letter-spacing="6">${label}</text>
    </svg>
  `
  return createSvgDataUri(svg)
}

export const news = [
  {
    title: 'Seger i hemmapremiären',
    excerpt:
      'Fullsatta läktare och ett inferno av grönt och orange när Härnösands HF tog en viktig seger mot Uppsala med 32-27.',
    date: '10 april 2024',
    link: '#',
  },
  {
    title: 'Nya träningsfaciliteter på plats',
    excerpt:
      'Med modern teknik och energiåtervinning står nu klubbens nya hall klar – byggd för framtidens handbollstalanger.',
    date: '4 april 2024',
    link: '#',
  },
  {
    title: 'Juniorlaget till elitcupen',
    excerpt:
      'Efter en stark säsong står juniorlaget redo att mäta sig med landets bästa klubbar i Höga Kusten Cup.',
    date: '28 mars 2024',
    link: '#',
  },
]

export const matches = [
  {
    opponent: 'Sundsvall Flames',
    competition: 'Division 1 Norra',
    date: '13 april 2024',
    time: '19:00',
    venue: 'HHC Arena',
    status: 'Kommande',
  },
  {
    opponent: 'Umeå Waves',
    competition: 'Svenska Cupen, gruppspel',
    date: '20 april 2024',
    time: '17:30',
    venue: 'Hägglunds Arena',
    status: 'Borta',
  },
  {
    opponent: 'Hudiksvall Hawks',
    competition: 'Division 1 Norra',
    date: '27 april 2024',
    time: '18:00',
    venue: 'HHC Arena',
    status: 'Derby',
  },
  {
    opponent: 'Stockholm Unity',
    competition: 'Träningsmatch',
    date: '1 maj 2024',
    time: '15:00',
    venue: 'HHC Arena',
    status: 'Försäsong',
  },
]

export const players = [
  {
    name: 'Elin Bergström',
    position: 'M9 • Kapten',
    number: 9,
    image: createPlayerBadge('a', '#2dd5a2', '#89b8f8'),
    bio: 'Spelfördelare med blick för de spektakulära assisten och matchavgörande avslut.'
  },
  {
    name: 'Selma Nylander',
    position: 'V6',
    number: 17,
    image: createPlayerBadge('b', '#ff7b2f', '#2dd5a2'),
    bio: 'Explosiv kantspelare som kombinerar snabbhet med kliniska avslut i trånga vinklar.'
  },
  {
    name: 'Nora Blomqvist',
    position: 'M6',
    number: 5,
    image: createPlayerBadge('c', '#1a7f63', '#ffb347'),
    bio: 'Försvarsankare och linjespelare med fysik, fingerkänsla och en orubblig vinnarskalle.'
  },
  {
    name: 'Saga Holm',
    position: 'H9',
    number: 13,
    image: createPlayerBadge('d', '#89b8f8', '#ff7b2f'),
    bio: 'Teknisk skytt som levererar långskott med precision och timing utöver det vanliga.'
  },
  {
    name: 'Nova Hallenberg',
    position: 'MV',
    number: 1,
    image: createPlayerBadge('e', '#2dd5a2', '#050608'),
    bio: 'Reflexsnabb målvakt med publikfavorit-status och en räddningsradie som skrämmer motståndarna.'
  },
  {
    name: 'Ida Viklund',
    position: 'V9',
    number: 23,
    image: createPlayerBadge('f', '#ffb347', '#89b8f8'),
    bio: 'Ostoppbar i genombrotten och står för moral och energi när matcherna vänder.'
  },
]

export const sponsors = [
  { name: 'NORDIX', image: createSponsorLogo('NX', '#1a7f63', '#2dd5a2') },
  { name: 'HÖGA', image: createSponsorLogo('HK', '#ff7b2f', '#ffb347') },
  { name: 'BALTIC', image: createSponsorLogo('BC', '#89b8f8', '#2dd5a2') },
  { name: 'COAST', image: createSponsorLogo('CO', '#2dd5a2', '#050608') },
  { name: 'ARENA', image: createSponsorLogo('AR', '#1a7f63', '#89b8f8') },
]

export const membershipOptions = [
  {
    label: 'Säsongskort 24/25',
    description: 'Säkra din plats på alla hemmamatcher, exklusiva medlemskvällar och klubbkänsla deluxe.',
    price: '2 495 kr',
    highlight: true,
  },
  {
    label: 'Stödmedlem',
    description: 'Var med och bygg framtidens handboll i Härnösand med nyhetsbrev och VIP-förköp.',
    price: '495 kr',
  },
  {
    label: 'Ungdomsmedlem',
    description: 'Träningar, camps och mentorskap av elitspelare. För spelare upp till 18 år.',
    price: '995 kr',
  },
]

export const socialLinks = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
]
