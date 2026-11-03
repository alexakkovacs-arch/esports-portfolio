/**
 * All portfolio content lives here: edit this file to add or change projects,
 * awards, partners and skills. Images are paths under /public.
 */

export type Accent = 'fuchsia' | 'gold' | 'steel' | 'tan' | 'ink'

export type Photo = { src: string; alt: string }

export type Video = {
  id: string
  title: string
  /** Shorts are vertical (9:16); regular videos are 16:9. */
  vertical?: boolean
}

export type ProjectSection = {
  heading: string
  role?: string
  body?: string
  bullets?: string[]
  photos?: Photo[]
  videos?: Video[]
}

export type Project = {
  slug: string
  title: string
  org: string
  roles: string[]
  tags: string[]
  summary: string
  accent: Accent
  cover: Photo
  logo?: string
  stats?: { value: string; label: string }[]
  sections: ProjectSection[]
}

const img = (name: string) => `/img/${name}`

export const skills: { label: string; blurb: string; accent: Accent }[] = [
  {
    label: 'Graphic Design',
    blurb: 'Gameday posters, roster drops, promotion graphics and broadcast GFX.',
    accent: 'fuchsia',
  },
  {
    label: 'Social Media Management',
    blurb: 'Content strategy, scheduling and community across every platform.',
    accent: 'gold',
  },
  {
    label: 'Live Production',
    blurb: 'Technical direction, producing, observing and live broadcasts.',
    accent: 'steel',
  },
  {
    label: 'Content',
    blurb: 'Short-form video and player stories that show what a program is like.',
    accent: 'tan',
  },
  {
    label: 'Events',
    blurb: 'From 600-person festivals to LAN finals: planning, vendors, run-of-show.',
    accent: 'fuchsia',
  },
  {
    label: 'Community Management',
    blurb: 'Discord servers, player comms and the fans who keep showing up.',
    accent: 'gold',
  },
]

export const toolkit = ['Canva', 'Adobe Creative Cloud', 'CapCut', 'OBS Studio']

export const projects: Project[] = [
  {
    slug: 'st-clair-saints',
    title: 'St. Clair Saints',
    org: 'St. Clair College Esports',
    roles: ['Marketing, Broadcast and Events Coordinator'],
    tags: ['Creative Direction', 'Content', 'Production', 'Events'],
    summary:
      'Creative direction, content, live production and events for the St. Clair College varsity esports program.',
    accent: 'gold',
    logo: img('logos/st-clair-saints.png'),
    cover: {
      src: img('saints-group.jpg'),
      alt: 'St. Clair Saints players and staff posing together on a blue-lit stage',
    },
    sections: [
      {
        heading: 'Creative Direction',
        body: 'Leading semester-based creative direction and shaping brand visuals to stay ahead of emerging esports trends.',
        photos: [
          { src: img('saints-roster-cod.jpg'), alt: 'Comic-style Call of Duty varsity roster graphic' },
          { src: img('saints-roster-lol.jpg'), alt: 'Comic-style League of Legends NACE roster graphic' },
          { src: img('saints-gameday.jpg'), alt: 'Green gameday graphic for St. Clair College vs Maryville University' },
          { src: img('saints-cwadz-gameday.jpg'), alt: 'Call of Duty Varsity Premier gameday poster featuring CWADZ' },
          { src: img('saints-welcome-woody.jpg'), alt: 'Valorant Varsity Premier "Welcome Woody" player announcement' },
          { src: img('saints-super-conference.jpg'), alt: 'NACE Super Conference League of Legends schedule poster' },
        ],
      },
      {
        heading: 'Content',
        body: 'Using storytelling and visuals to capture the program’s energy and connect with the community.',
        videos: [
          { id: '8S6EmuUYN9o', title: 'St. Clair Saints short #1', vertical: true },
          { id: 'bn-JHVOXMss', title: 'St. Clair Saints short #2', vertical: true },
          { id: 'EWmf9uWOs8k', title: 'St. Clair Saints short #3', vertical: true },
          { id: 'SR30dTTaqF8', title: 'St. Clair Saints short #4', vertical: true },
          { id: 'uQTSxI4xPgM', title: 'St. Clair Saints short #5', vertical: true },
        ],
      },
      {
        heading: 'The Journey: Jazzyk1ns',
        body: 'Showcasing Jazzyk1ns’ growth through gameplay, community moments, and milestones, this video tells a compelling story of skill, struggle and passion.',
        videos: [{ id: 'TTIxacKXDOE', title: 'The Journey: Jazzyk1ns' }],
      },
      {
        heading: 'Production and Events',
        body: 'Handling multiple roles in St. Clair Saints events, including planning, live production, tournament coordination, content and ensuring smooth and engaging experiences for players and the community.',
        photos: [
          { src: img('saints-arena.jpg'), alt: 'St. Clair esports arena during a live event' },
          { src: img('saints-control-room.jpg'), alt: 'Broadcast control room monitors during a Saints production' },
          { src: img('saints-production-desk.jpg'), alt: 'Production desk with switcher and multiview monitors' },
          { src: img('saints-playoffs.jpg'), alt: 'Playoffs stage lit in blue with players at their stations' },
          { src: img('saints-recap.jpg'), alt: 'Season recap collage of Saints social graphics' },
          { src: img('saints-group-green.jpg'), alt: 'Event staff and players group photo under green lights' },
        ],
      },
    ],
  },
  {
    slug: 'saints-gauntlet-series',
    title: 'Saints Gauntlet Series',
    org: 'St. Clair Saints',
    roles: ['Branding Lead', 'Socials', 'TO', 'Broadcast'],
    tags: ['Branding', 'Socials', 'Tournament Ops', 'Broadcast'],
    summary:
      'Built the identity for the Saints Gauntlet Series and worked on broadcast and tournament operations across its events.',
    accent: 'steel',
    logo: img('logos/sgs.png'),
    cover: {
      src: img('sgs-poster.jpg'),
      alt: '"Who will rule the Gauntlet?" Saints Gauntlet Series event poster',
    },
    sections: [
      {
        heading: 'Branding and Socials',
        role: 'Branding Lead, Socials',
        body: 'Directed branding and social media, building a cohesive identity for Saints Gauntlet Series.',
        photos: [
          { src: img('sgs-poster.jpg'), alt: '"Who will rule the Gauntlet?" event poster' },
          { src: img('sgs-live-now.jpg'), alt: '"Live Now" Saints Gauntlet Series stream graphic' },
          { src: img('saints-champions.jpg'), alt: 'Saints Gauntlet Series Call of Duty champions graphic' },
          { src: img('saints-tft.jpg'), alt: 'Saints Teamfight Tactics tournament stream graphic' },
        ],
      },
      {
        heading: 'TO and Broadcast',
        role: 'Tournament Ops, Broadcast',
        body: 'Worked on broadcast observing and supported tournament operations across SGS events.',
        photos: [
          { src: img('sgs-stream.jpg'), alt: 'Saints Gauntlet Series stream layout with team photo' },
          { src: img('sgs-group.jpg'), alt: 'Gauntlet Series competitors and staff on stage' },
          { src: img('saints-tft-group.jpg'), alt: 'Players posing at the Teamfight Tactics tournament' },
        ],
      },
    ],
  },
  {
    slug: 'na-rise-na-premier',
    title: 'NA Rise + NA Premier',
    org: 'Division ONE',
    roles: ['Technical Director', 'Socials Director'],
    tags: ['Technical Direction', 'Socials', 'Campaigns'],
    summary:
      'Led a St. Clair student team taking over production for Division ONE, and helped launch the league’s first season on social.',
    accent: 'fuchsia',
    logo: img('logos/division-one.png'),
    cover: {
      src: img('d1-promoted-toasty.jpg'),
      alt: 'Division ONE "Promoted" graphic for League of Legends player Toasty',
    },
    sections: [
      {
        heading: 'Technical Director',
        body: 'Lead an initiative between a group of students at SCC and D1 to take over production for Division ONE Spring Split 2026.',
        photos: [
          { src: img('d1-right-back.jpg'), alt: 'Division ONE "We’ll be right back" broadcast screen' },
          { src: img('clol-gameplay.jpg'), alt: 'League of Legends broadcast gameplay with overlay' },
        ],
      },
      {
        heading: 'Socials Director',
        body: 'Helped launch Division ONE’s inaugural season by creating content, supporting campaigns, and growing its social media presence.',
        photos: [
          { src: img('d1-promoted-toasty.jpg'), alt: '"Promoted" graphic for Toasty' },
          { src: img('d1-promoted-glyph.jpg'), alt: '"Promoted" graphic for Valorant player Glyph' },
          { src: img('d1-promoted-cryogen.jpg'), alt: '"Promoted" graphic for Cryogen' },
        ],
      },
    ],
  },
  {
    slug: 'league-impact-series',
    title: 'League Impact Series',
    org: 'Collegiate League of Legends',
    roles: ['Broadcast Lead'],
    tags: ['Broadcast', 'Talent', 'Tournament Ops'],
    summary:
      'Led the League of Legends Grand Finals broadcast with talent, student staff and tournament operations.',
    accent: 'tan',
    cover: {
      src: img('clol-grand-finals.jpg'),
      alt: 'Grand Finals caster cam layout with two commentators',
    },
    sections: [
      {
        heading: 'Grand Finals Broadcast',
        body: 'Led the League of Legends Grand Finals broadcast, collaborating with Talent, Student Staff and Tournament Operations.',
        photos: [
          { src: img('clol-grand-finals.jpg'), alt: 'Grand Finals caster cam layout' },
          { src: img('na-player-highlight.jpg'), alt: 'Player highlight broadcast graphic for Wilson' },
          { src: img('na-post-game-stats.jpg'), alt: 'Post-game stats broadcast graphic' },
          { src: img('lis-group.jpg'), alt: 'Event attendees group photo at a LAN venue' },
        ],
      },
    ],
  },
  {
    slug: 'cie',
    title: 'CIE',
    org: 'Canadian Intercollegiate Exhibition',
    roles: ['Production & Events'],
    tags: ['Live Events', 'Production'],
    summary:
      'A national exhibition bringing Canadian college esports programs to one stage.',
    accent: 'fuchsia',
    logo: img('logos/cie.png'),
    cover: {
      src: img('cie-stage.jpg'),
      alt: 'Presenters on a pink-lit stage in front of an audience',
    },
    sections: [
      {
        heading: 'Canadian Intercollegiate Exhibition',
        body: 'Live event and production work for the Canadian Intercollegiate Exhibition.',
        photos: [
          { src: img('cie-stage.jpg'), alt: 'Presenters on stage at the exhibition' },
          { src: img('group-blue-stage.jpg'), alt: 'Competitors and staff group photo on a blue-lit stage' },
        ],
      },
    ],
  },
  {
    slug: 'clol-championships',
    title: 'CLOL Championships',
    org: 'College League of Legends',
    roles: ['Technical Director', 'Producer'],
    tags: ['Technical Direction', 'Producing', 'Broadcast'],
    summary:
      'Ran broadcast and technical direction for the CLOL Championship 2025, a double-elimination Bo5 event.',
    accent: 'steel',
    logo: img('logos/college-lol.png'),
    cover: {
      src: img('clol-overlay.jpg'),
      alt: 'College League of Legends broadcast overlay with player cams',
    },
    sections: [
      {
        heading: 'Technical Director | Producer',
        bullets: [
          'Oversaw broadcast and technical direction for the CLOL Championship 2025',
          'Collaborated with casters, observers, and production crew to deliver live broadcasts',
          'Worked within a double-elimination, Bo5 competitive format environment',
        ],
        photos: [
          { src: img('clol-overlay.jpg'), alt: 'Championship broadcast overlay' },
          { src: img('clol-thank-you.jpg'), alt: 'College League of Legends "Thank you" end screen' },
          { src: img('alexa-broadcast-desk.jpg'), alt: 'Alexa on the broadcast desk during NACL playoffs' },
          { src: img('na-varsity-cam.jpg'), alt: 'Player cam during a varsity broadcast' },
        ],
      },
    ],
  },
  {
    slug: 'cupid-esports',
    title: 'Cupid Esports',
    org: 'CUPID Esports',
    roles: ['Social Media', 'GFX', 'Community Management'],
    tags: ['Social Growth', 'GFX', 'Community'],
    summary:
      'Rebuilt Cupid Esports’ socials and visual identity, driving +1,381% engagement and +4,165% profile visits.',
    accent: 'fuchsia',
    logo: img('logos/cupid.png'),
    stats: [
      { value: '+1,381%', label: 'Engagement' },
      { value: '+4,165%', label: 'Profile visits' },
    ],
    cover: {
      src: img('cupid-gameday.jpg'),
      alt: 'Pink Cupid Esports WSCI gameday poster',
    },
    sections: [
      {
        heading: 'Social Media / GFX / Community Management',
        bullets: [
          'Scaled social media presence, driving +1,381% engagement and +4,165% profile visits',
          'Led Creative Direction and produced Graphic and Video Content',
          'Developed and executed content strategy across multiple platforms',
          'Managed day-to-day community interactions, strengthening audience retention',
        ],
        photos: [
          { src: img('cupid-gameday.jpg'), alt: 'WSCI 2026 gameday poster' },
          { src: img('cupid-victory.jpg'), alt: 'Cupid Esports victory graphic' },
          { src: img('cupid-standings.jpg'), alt: 'WSCI group stage standings graphic' },
          { src: img('cupid-team-gameday.jpg'), alt: 'Knockout stage team gameday graphic' },
          { src: img('cupid-roster.jpg'), alt: 'NACL qualifiers roster announcement' },
          { src: img('cupid-one-more-series.jpg'), alt: '"One more series" NACL promotion graphic' },
          { src: img('cupid-watch-party.jpg'), alt: 'NACL OQS watch party announcement' },
          { src: img('cupid-gameday-art.jpg'), alt: 'Illustrated pink gameday graphic' },
          { src: img('cupid-honeyfruit.jpg'), alt: '"How we eat our honeyfruit" gameplay explainer graphic' },
        ],
      },
    ],
  },
  {
    slug: 'sakura-anime-fest',
    title: 'Sakura Anime Fest',
    org: 'Sakura Anime Fest',
    roles: ['Event Director'],
    tags: ['Event Direction', 'Vendors', 'Operations'],
    summary:
      'Directed a 600+ attendee anime festival with 25+ vendors, from budget and scheduling through event-day execution.',
    accent: 'fuchsia',
    logo: img('logos/sakura-anime-fest.png'),
    stats: [
      { value: '600+', label: 'Attendees' },
      { value: '100k+', label: 'Impressions' },
      { value: '25+', label: 'Vendors' },
    ],
    cover: {
      src: img('sakura-crowd.jpg'),
      alt: 'Crowds of cosplayers and attendees filling the Sakura Anime Fest vendor hall',
    },
    sections: [
      {
        heading: 'Event Director',
        bullets: [
          'Led planning & execution for 600+ attendee event',
          'Managed vendors (25+) and on-site logistics',
          'Oversaw budget, scheduling, and operations',
          'Coordinated staff and event-day execution',
        ],
        photos: [
          { src: img('sakura-crowd.jpg'), alt: 'Attendees in the vendor hall' },
          { src: img('sakura-friends.jpg'), alt: 'Alexa and a friend holding a Sakura Anime Fest trophy' },
          { src: img('lan-of-the-dead.jpg'), alt: '"LAN of the Dead" event group photo under red lights' },
        ],
      },
    ],
  },
]

export const featuredSlug = 'sakura-anime-fest'

export type Award = {
  result: 'Winner' | 'Finalist'
  title: string
  recipient: string
  year: number
}

export const awards: Award[] = [
  { result: 'Winner', title: 'Director’s Award', recipient: 'Alexa Kovacevich', year: 2026 },
  { result: 'Winner', title: 'Marketing Team Member of the Year', recipient: 'Alexa Kovacevich', year: 2025 },
  { result: 'Finalist', title: 'Social Media Producer of the Year', recipient: 'Alexa Kovacevich', year: 2025 },
  { result: 'Winner', title: 'Marketing Team of the Year', recipient: 'St. Clair College', year: 2025 },
  { result: 'Winner', title: 'Broadcast Team of the Year', recipient: 'St. Clair College', year: 2025 },
  { result: 'Winner', title: 'Production Team of the Year', recipient: 'St. Clair College', year: 2025 },
  { result: 'Winner', title: 'Marketing Team of the Year', recipient: 'St. Clair College', year: 2024 },
]

export const awardBodies = ['St. Clair College', 'NACE Awards', 'EsportsU Awards']

export const partners: { name: string; logo: string }[] = [
  { name: 'St. Clair Saints', logo: img('logos/st-clair-saints.png') },
  { name: 'NACE', logo: img('logos/nace.png') },
  { name: 'Division ONE', logo: img('logos/division-one.png') },
  { name: 'Cupid Esports', logo: img('logos/cupid.png') },
  { name: 'College League of Legends', logo: img('logos/college-lol.png') },
  { name: 'Saints Gauntlet Series', logo: img('logos/sgs.png') },
  { name: 'Canadian Intercollegiate Exhibition', logo: img('logos/cie.png') },
  { name: 'University Esports', logo: img('logos/university-esports.png') },
  { name: 'Toronto XP', logo: img('logos/toronto-xp.png') },
  { name: 'Fragadelphia', logo: img('logos/fragadelphia.png') },
  { name: 'NS Esports', logo: img('logos/ns-esports.png') },
  { name: 'The Summoning', logo: img('logos/the-summoning.png') },
  { name: 'VP', logo: img('logos/vp.png') },
  { name: 'Rise', logo: img('logos/rise.png') },
  { name: 'Sakura Anime Fest', logo: img('logos/sakura-anime-fest.png') },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export const accentBg: Record<Accent, string> = {
  fuchsia: 'bg-fuchsia',
  gold: 'bg-gold',
  steel: 'bg-steel',
  tan: 'bg-tan',
  ink: 'bg-ink',
}
