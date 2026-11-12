/**
 * All portfolio content lives here: edit this file to add or change projects,
 * awards, partners and skills. Images are paths under /public.
 */

export type Accent = 'fuchsia' | 'gold' | 'steel' | 'tan' | 'ink' | 'saints' | 'rise' | 'lis' | 'mint' | 'lilac' | 'cie'

export type Photo = { src: string; alt: string }

export type Video = {
  id: string
  title: string
  /** Shorts are vertical (9:16); regular videos are 16:9. */
  vertical?: boolean
}

export type EventHighlight = {
  title: string
  year: string
  role: string
  description: string
  photo: Photo
  fit?: 'contain' | 'cover'
}

export type ProjectSection = {
  heading: string
  role?: string
  body?: string
  bullets?: string[]
  photos?: Photo[]
  videos?: Video[]
  events?: EventHighlight[]
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
  gallery?: Photo[]
  logo?: string
  stats?: { value: string; label: string }[]
  sections: ProjectSection[]
}

const img = (name: string) => `/img/${name}`

export const skills: { label: string; blurb: string; accent: Accent }[] = [
  {
    label: 'Community Management',
    blurb: 'Creating meaningful connections through community events, experiences, and activations that bring players and fans together.',
    accent: 'mint',
  },
  {
    label: 'Marketing & Social Media',
    blurb: 'Campaign strategy, platform management, and content planning that grow reach, engagement, and community interest.',
    accent: 'gold',
  },
  {
    label: 'Live Production',
    blurb: 'Technical direction, producing, observing, and broadcast support for polished live esports coverage.',
    accent: 'steel',
  },
  {
    label: 'Events & Activations',
    blurb: 'Planning and executing live events and community experiences that connect players and fans.',
    accent: 'fuchsia',
  },
  {
    label: 'Graphic Design',
    blurb: 'Gameday posts, promotional graphics, event branding, and broadcast visuals tailored to esports audiences.',
    accent: 'lilac',
  },
  {
    label: 'Content',
    blurb: 'Short-form video, storytelling, and player-focused content that captures the energy of each community.',
    accent: 'tan',
  },
]

export const toolkit = ['Canva', 'Adobe Creative Cloud', 'CapCut', 'OBS Studio']

export const projects: Project[] = [
  {
    slug: 'st-clair-saints',
    title: 'St. Clair Saints',
    org: 'St. Clair College Esports',
    roles: ['Marketing, Events and Broadcast Coordinator'],
    tags: ['Community Events', 'Marketing', 'Creative Direction', 'Broadcast'],
    summary:
      'Building community through campus events, player experiences, creative campaigns and live esports production at St. Clair College.',
    accent: 'saints',
    logo: img('logos/st-clair-saints.png'),
    cover: {
      src: img('sgs-group.jpg'),
      alt: 'Event staff and attendees posing for a group photo in the St. Clair esports venue',
    },
    sections: [
      {
        heading: 'Events & Community',
        role: 'Event planning, community experiences and activations',
        body: 'I bring players and fans together through in-person experiences: festivals, collegiate competitions, and student-led gaming events. Alongside large events, I have organized TFT and ARAM tournaments, League of Legends Worlds watch parties, and other community activities that help students connect. I also support Winter WonderLAN and lead esports camp activities.',
        events: [
          {
            title: 'Sakura Anime Fest',
            year: '2026',
            role: 'Event Director',
            description: 'Directed an anime and gaming festival for 610+ attendees and 25+ vendors, coordinating the budget, vendors, staffing and on-site operations.',
            photo: { src: img('sakura-crowd.jpg'), alt: 'Sakura Anime Fest attendees exploring the vendor hall' },
          },
          {
            title: 'The Summoning',
            year: '2026',
            role: 'Event Planning · Tournament Operations · Marketing',
            description: 'Helped organize the tournament experience and supported social media, graphics and video content for an event with approximately 1,000 attendees.',
            photo: { src: img('logos/the-summoning.png'), alt: 'The Summoning esports event logo' },
            fit: 'contain',
          },
          {
            title: 'Saints Gauntlet Series',
            year: '2024–2026',
            role: 'Branding · Tournament Operations · Broadcast',
            description: 'Led branding and promotional content for the series while supporting tournament operations and broadcasts, including graphics, livestream coverage and student community events.',
            photo: { src: img('saints-group.jpg'), alt: 'St. Clair Saints players and staff together on a blue-lit esports stage' },
          },
          {
            title: 'Student Events',
            year: '2024–2026',
            role: 'Community Events · Tournament Organizing · Student Engagement',
            description: 'Organized and supported campus gaming activities that bring students together, including Teamfight Tactics (TFT) tournaments, League of Legends ARAM tournaments, Worlds watch parties and other esports community gatherings.',
            photo: { src: img('saints-tft-group.jpg'), alt: 'Students gathered together at a St. Clair College Teamfight Tactics tournament' },
          },
        ],
        photos: [
          { src: img('scc-camp-session.webp'), alt: 'Leading a content creation activity with students during a St. Clair esports camp' },
          { src: img('scc-tft-organizing.webp'), alt: 'Organizing and supporting participants during a St. Clair Teamfight Tactics tournament' },
          { src: img('scc-lan-of-the-dead.webp'), alt: 'LAN of the Dead student event staff gathered together at St. Clair College' },
        ],
      },
      {
        heading: 'Creative Direction',
        body: 'Leading semester-based creative direction and shaping brand visuals to stay ahead of emerging esports trends.',
        photos: [
          { src: img('saints-roster-cod.jpg'), alt: 'Comic-style Call of Duty varsity roster graphic' },
          { src: img('saints-roster-lol.jpg'), alt: 'Comic-style League of Legends NACE roster graphic' },
          { src: img('saints-gameday.jpg'), alt: 'Green gameday graphic for St. Clair College vs Maryville University' },
          { src: img('saints-cwadz-gameday.jpg'), alt: 'Call of Duty Varsity Premier gameday poster featuring CWADZ' },
          { src: img('saints-recap.jpg'), alt: 'Season recap collage of Saints social graphics' },
          { src: img('saints-super-conference.jpg'), alt: 'NACE Super Conference League of Legends schedule poster' },
          { src: img('sgs-poster.jpg'), alt: 'Saints Gauntlet Series event branding poster' },
          { src: img('sgs-live-now.jpg'), alt: 'Saints Gauntlet Series live broadcast announcement' },
          { src: img('saints-champions.jpg'), alt: 'Saints Gauntlet Series Call of Duty champions graphic' },
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
        role: 'Featured Creative Project · Player Storytelling',
        body: 'This project was a creative first for me. I had never made a story-driven esports video quite like this before, so I challenged myself to explore new skills and techniques to bring Jazzyk1ns’ journey to life. Instead of focusing only on gameplay highlights, I wanted to tell a more personal story about the player, their growth and the moments that shaped their journey. It was an opportunity to step outside my usual workflow, experiment creatively and grow as a storyteller.',
        videos: [{ id: 'TTIxacKXDOE', title: 'The Journey: Jazzyk1ns — Featured Creative Piece' }],
      },
      {
        heading: 'Broadcast & Production',
        body: 'Behind the scenes, I support the live experience through technical direction, production planning, broadcast coordination and player-focused coverage.',
        photos: [
          { src: img('saints-arena.jpg'), alt: 'St. Clair esports arena during a live event' },
          { src: img('saints-control-room.jpg'), alt: 'Broadcast control room monitors during a Saints production' },
          { src: img('saints-production-desk.jpg'), alt: 'Production desk with switcher and multiview monitors' },
          { src: img('saints-playoffs.jpg'), alt: 'Playoffs stage lit in blue with players at their stations' },
          { src: img('saints-welcome-woody.jpg'), alt: 'Winthrop University esports broadcast desk with casters and team graphics' },
          { src: img('saints-group-green.jpg'), alt: 'Event staff and players group photo under green lights' },
          { src: img('sgs-stream.jpg'), alt: 'Saints Gauntlet Series stream production layout' },
        ],
      },
    ],
  },
  {
    slug: 'na-rise-na-premier',
    title: 'NA Rise + NA Premier',
    org: 'esclub.gg',
    roles: ['Head of Marketing'],
    tags: ['Player-First Marketing', 'Social Media', 'Community Management', 'Tournament Operations'],
    summary:
      'As Head of Marketing at esclub.gg, I put players first by turning league statistics, results and competitive storylines into social content that celebrates the community behind NA Rise, LQL and NA Premier.',
    accent: 'rise',
    logo: img('logos/na-rise-original.svg'),
    cover: {
      src: img('na-rise-format-explainer.webp'),
      alt: 'esclub.gg NA Rise tournament format explainer, designed to communicate the competition structure to players',
    },
    stats: [
      { value: '88', label: 'Team participations · All competitions' },
    ],
    gallery: [
      { src: img('esclub-club-broadcasts.webp'), alt: 'esclub.gg club broadcasts page featuring official streams and community co-streamers' },
      { src: img('esclub-player-statistics.webp'), alt: 'esclub.gg NA Premier statistics dashboard with player performance, team rankings and competitive leaderboards' },
      { src: img('esclub-top-laners.webp'), alt: 'NA Premier Top 5 top laners social graphic featuring player rankings and performance scores' },
      { src: img('esclub-premier-results.webp'), alt: 'esclub.gg NA Premier Week 2 match results social media graphic' },
    ],
    sections: [
      {
        heading: 'Building the Community',
        role: 'Head of Marketing · esclub.gg',
        body: 'esclub.gg takes a player-first approach to competitive League of Legends through organized community leagues and tournaments, including NA Rise, LQL and NA Premier. As Head of Marketing on a four-person team, I help players feel recognized and connected by promoting their achievements, sharing clear league information and building excitement around the people behind each match.',
        bullets: [
          'Lead player outreach, tournament announcements and community-facing communications.',
          'Highlight competitors, achievements and community storylines through social media.',
          'Coordinate with creators and co-streamers while helping players navigate tournament information and updates.',
        ],
      },
      {
        heading: 'Listening to Players',
        role: 'Player feedback · NA Rise',
        body: 'A strong community should help shape the events it plays in. For NA Rise, I helped gather feedback from participants and supported a captain vote on the playoff structure. The team used that input to revise the format and communicate the decision back to players.',
        bullets: [
          'Collected participant feedback and helped facilitate a captain-led vote on the playoff format.',
          'Supported a revised playoff approach based on the community’s preferences.',
          'Helped keep participants informed about tournament rules, updates and expectations.',
        ],
      },
      {
        heading: 'Putting Players First Through Stats',
        role: 'League statistics · Player recognition · Social storytelling',
        body: 'The esclub.gg website brings together competitive match results, individual performance statistics, team standings and player rankings. My role is not building the website or developing its statistics systems; I use the information they provide to create social media content that puts players in the spotlight. From Top 5 laners and weekly results to standout performances, these posts turn numbers into stories that recognize competitors and encourage the community to follow along.',
        bullets: [
          'Use the website’s player statistics and rankings to develop performance spotlights and Top 5 social graphics.',
          'Share weekly match results and competitive updates that give teams and players visibility.',
          'Promote official broadcasts and community co-streams so players and fans can connect with the action.',
        ],
      },
    ],
  },
  {
    slug: 'league-impact-series',
    title: 'League Impact Series',
    org: 'Inclusive League of Legends Competition',
    roles: ['Technical Director — Grand Finals LAN', 'Marketing & Social Media', 'Tournament Operations'],
    tags: ['Community Engagement', 'Marketing', 'Live Events', 'Broadcast Production'],
    summary:
      'Supported an inclusive League of Legends competition through marketing, tournament operations and group-stage broadcasts, and served as Technical Director for the Grand Finals LAN at St. Clair College.',
    accent: 'lis',
    logo: img('logos/league-impact-series.svg'),
    cover: {
      src: img('lis-community-group.webp'),
      alt: 'League Impact Series players, staff and community members together at the in-person Grand Finals',
    },
    gallery: [
      { src: img('lis-community-interview.webp'), alt: 'League Impact Series community interview during the LAN finals' },
      { src: img('lis-community-hug.webp'), alt: 'Players and community members sharing an emotional moment at League Impact Series' },
      { src: img('lis-trophies.webp'), alt: 'League Impact Series 2026 championship trophies on display at the finals' },
      { src: img('lis-grand-finals-viewing.webp'), alt: 'Attendees watching League Impact Series Grand Finals live at the esports venue' },
      { src: img('lis-fans-bunwin.webp'), alt: 'League Impact Series supporters with a handmade Bun Win poster and plush toy at the live finals' },
      { src: img('lis-community-group.webp'), alt: 'Players, staff and attendees together at the League Impact Series Grand Finals' },
    ],
    sections: [
      {
        heading: 'Building a Community',
        role: 'Community engagement · Player experience',
        body: 'League Impact Series created competitive opportunities for players from marginalized gaming communities while connecting League of Legends communities across North America and LATAM. I helped support the experience beyond the matches through community-facing communications, tournament coordination and collaboration with the people bringing the competition together.',
        bullets: [
          'Supported clear tournament information and player-facing updates throughout the competition.',
          'Worked alongside organizers, talent and production staff to help create a welcoming, professional competitive experience.',
          'Helped connect the online tournament to an in-person community moment at the Grand Finals.',
        ],
      },
      {
        heading: 'Marketing & Social Media',
        role: 'Social strategy · Content · Promotion',
        body: 'I developed a social media marketing plan for League Impact Series and supported its promotion throughout the competition. My focus was making the tournament easy to follow, giving participants visibility, and keeping fans connected to the action.',
        bullets: [
          'Developed the tournament’s social media plan, including content around teams, players, schedules and match coverage.',
          'Supported promotional posts, event updates and live social coverage as the tournament progressed.',
          'Coordinated with tournament staff, broadcast talent and co-streamers to keep communications aligned with the event.',
        ],
      },
      {
        heading: 'Grand Finals LAN',
        role: 'Technical Director · Grand Finals LAN · Event organizing',
        body: 'I was the Technical Director for the League Impact Series Grand Finals LAN at St. Clair College’s esports venue. Alongside that responsibility, I helped bring the in-person event together through planning, staffing and production preparation. Seeing players, staff and fans connect in person was one of the most meaningful parts of the experience.',
        bullets: [
          'Helped coordinate the venue, event setup, staffing schedules and production readiness.',
          'Supported tournament administration, on-site operations and the live event experience.',
          'Served as Technical Director for the Grand Finals LAN broadcast, overseeing the live technical execution.',
        ],
      },
    ],
  },
  {
    slug: 'cie',
    title: 'Canadian Intercollegiate Exhibition',
    org: 'Canadian Intercollegiate Exhibition',
    roles: ['Social Lead', 'Broadcast Producer', 'Technical Director'],
    tags: ['Social Media Strategy', 'Bilingual Marketing', 'Community Engagement', 'Live Event Coverage', 'Broadcast Production'],
    summary:
      'Led bilingual English and French social media strategy and event coverage for CIE 2026, including sponsor-related social deliverables, while producing and technical directing collegiate esports broadcasts.',
    accent: 'cie',
    logo: img('logos/cie.png'),
    cover: {
      src: img('cie-2026-cover.webp'),
      alt: 'CIE 2026 Canadian Intercollegiate Exhibition We Are Coming Back promotional poster',
    },
    gallery: [
      {
        src: img('cie-registration-french.webp'),
        alt: 'French-language CIE League of Legends promotion announcing that registration closes in seven days',
      },
      {
        src: img('cie-industry-night.webp'),
        alt: 'CIE Industry Night Trail-Blazers Student Leaders in Esports panel announcement',
      },
      {
        src: img('cie-volunteers.webp'),
        alt: 'CIE 2026 Thank You Volunteers graphic featuring event staff and volunteer contributors',
      },
    ],
    sections: [
      {
        heading: 'Social Direction & Marketing',
        role: 'Social Lead · May 2026',
        body: 'As Social Lead for CIE 2026, I oversaw the event’s social media strategy, content planning and live coverage for a national collegiate esports exhibition. I worked with organizers, creatives and broadcast staff on tournament promotion, announcements, event programming and publishing sponsor-related social content.',
        bullets: [
          'Planned and scheduled campaigns from pre-event registration promotion through live event updates and results.',
          'Coordinated social deliverables with tournament, creative and broadcast teams.',
          'Directed promotional graphics, announcements and schedules, and helped fulfill sponsor deliverables through social media posts.',
        ],
      },
      {
        heading: 'Bilingual Social Strategy',
        role: 'English & French · Inclusive Community Marketing',
        body: 'I implemented a bilingual-friendly social media strategy that featured content in both English and French to celebrate Canada’s bilingual identity. By sharing tournament announcements, promotional graphics and event updates in both languages, I worked to make CIE’s communications more welcoming and accessible to French-speaking and English-speaking esports communities across Canada.',
        bullets: [
          'Incorporated both English- and French-language posts into the event’s social media communications.',
          'Created and shared French-language tournament information alongside English-language promotion.',
          'Used inclusive messaging to recognize Canada’s bilingual communities and encourage participation.',
        ],
      },
      {
        heading: 'Live Event Coverage & Community',
        role: 'Multi-Game Coverage · Industry Night · Volunteer Recognition',
        body: 'I helped audiences follow CIE across League of Legends, VALORANT, Overwatch and Rocket League with schedules, results, streaming information and live updates. Beyond competition, I also participated in the Industry Night student leaders panel and highlighted the volunteers who helped bring the exhibition to life.',
        bullets: [
          'Shared game-day schedules, live-now announcements, match results and event highlights.',
          'Supported promotion of Industry Night programming and spoke on the Trail-Blazers student leadership panel.',
          'Recognized the organizers, volunteers and community members behind the event.',
        ],
      },
      {
        heading: 'Broadcast Production',
        role: 'Broadcast Producer · Technical Director',
        body: 'Alongside social media and community engagement, I served as a Broadcast Producer and Technical Director for CIE 2026, including directing League of Legends broadcasts. I collaborated with production teams and event organizers to support live show execution and the viewing experience across multiple competitive titles.',
        bullets: [
          'Produced and technical directed live esports broadcasts, including League of Legends coverage.',
          'Coordinated with the broadcast crew and event staff on show flow and production schedules.',
          'Supported broadcast operations across a multi-game collegiate esports exhibition.',
        ],
      },
      {
        heading: 'Sponsor Deliverables & Activations',
        role: 'Social Media Deliverables · BMO Title Sponsor',
        body: 'I helped fulfill CIE’s sponsor deliverables through scheduled social media posts and promotional content, including posts featuring BMO, the event’s title sponsor. My work focused on publishing and supporting agreed promotional materials for the event.',
        bullets: [
          'Supported BMO title-sponsor deliverables by posting promotional content, including financial literacy programming.',
          'Helped publish social posts promoting partner activities, including a ONEofZERO gaming mouse giveaway during CIE streams.',
          'Included sponsor-related posts in the event’s social media publishing schedule.',
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
      src: img('clol-logo-white.png'),
      alt: 'White College League of Legends official wordmark',
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
          { src: img('clol-live-broadcast.webp'), alt: 'CLOL Championship live League of Legends match between CAL and UTM with player stats and broadcast graphics' },
          { src: img('clol-overlay.jpg'), alt: 'CLOL Championship broadcast overlay featuring casters and champion select' },
          { src: img('clol-thank-you.jpg'), alt: 'College League of Legends thank-you graphic and production credits' },
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

]

// Featured event stays on the homepage without appearing as a standalone project.
export const featuredEvent: Project =   {
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
          { src: img('sakura-crowd.jpg'), alt: 'Attendees in the Sakura Anime Fest vendor hall' },
          { src: img('sakura-friends.jpg'), alt: 'Alexa and a friend holding Sakura Anime Fest keepsakes' },
          { src: img('sakura-community-mixer.webp'), alt: 'Sakura Anime Fest attendees gathering and connecting in the event hall' },
          { src: img('sakura-cosplay-crowd.webp'), alt: 'Cosplayers enjoying Sakura Anime Fest in the gaming lounge' },
          { src: img('sakura-staff-team.webp'), alt: 'Sakura Anime Fest 2026 event staff and volunteer team posing together' },
          { src: img('sakura-cosplay-activities.webp'), alt: 'Cosplayers and attendees taking part in activities at Sakura Anime Fest 2026' },
        ],
      },
    ],
  }

export type Award = {
  result: 'Winner' | 'Finalist'
  title: string
  recipient: string
  year: number
}

export const awards: Award[] = [
  { result: 'Winner', title: 'NACE Student Leadership Award', recipient: 'Alexa Kovacevich', year: 2026 },
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
  saints: 'bg-saints',
  rise: 'bg-rise',
  steel: 'bg-steel',
  tan: 'bg-tan',
  lis: 'bg-lis',
  cie: 'bg-cie',
  mint: 'bg-mint',
  lilac: 'bg-lilac',
  ink: 'bg-ink',
}
