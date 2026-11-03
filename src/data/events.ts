export type EventEntry = {
  year: string
  name: string
  date: string
  org: string
  category: string
  roles: string[]
  attendance?: string
  notes?: string
}

// Columns: year | event | date | organization | category | responsibilities (;) | attendance | notes
const raw = `
2022|Club Recruitment & Promotions|Fall 2022|UWinEsports|Campaign|Social Media; Graphics; Discord Promotion||First club marketing responsibilities
2023|Winter Team Tryouts|Winter 2023|UWinEsports|Event Marketing|Social Media; Graphics; Discord Promotion||Multiple esports titles
2023|Team & Roster Announcements|Winter 2023|UWinEsports|Campaign|Graphics; Social Media; Team Communications||
2024|St. Clair March Break Camp|March 18, 2024|St. Clair College|Camp|Camp Counsellor||
2024|Sakura Anime Fest 2024|April 13, 2024|St. Clair College|LAN / Convention|Tournament Admin - Mario Kart||
2024|TXP 3|June 23, 2024|St. Clair College|Tournament / LAN|Tournament Admin; Social Media||
2024|St. Clair Summer Camp 2024|July 1, 2024|St. Clair College|Camp|Camp Counsellor||
2024|The Summoning 2024|July 20, 2024|St. Clair College|Tournament / LAN|Event Organizer||
2024|Alienware Open Gaming Lab Grand Opening|September 19, 2024|St. Clair College|Event|Social Media; Live Content||
2024|HUE Fest 2024|September 20, 2024|St. Clair College|Away Event|Social Media; Live Content||
2024|Smash Class Midterms|2024|St. Clair College|Tournament|Social Media; Live Content||
2024|League of Legends Worlds Watch Party 2024|November 2, 2024|St. Clair College|Watch Party|Event Lead; Marketing; Live Content||
2024|TXP 4|2024|St. Clair College|Tournament / LAN|Event Support; Marketing||
2024|Winter WonderLAN 2024|2024|St. Clair College|LAN|Event Lead; Marketing; Event Operations||
2024–2025|Student Bootcamps|2024–2025|St. Clair College|Recurring Events|Event Support; Marketing||3+ editions
2024–2025|Student Open Tryouts|2024–2025|St. Clair College|Recurring Events|Event Support; Marketing||3+ editions
2024–2025|Student TFT Events|2024–2025|St. Clair College|Recurring Tournaments|Event Lead; Organizing; Marketing||2 events led
2024–2025|Saints Match Watch Parties|2024–2025|St. Clair College|Recurring Events|Marketing; Event Support||
2024–2025|Saints Gaming Banquet|2024–2025|St. Clair College|Event|Social Media; Graphics; Live Content||
2025|WaterLAN|2025|St. Clair College|Away Event|Event Support||
2025|Saints Gauntlet - Call of Duty|2025|St. Clair College|Tournament / LAN|Social Media; Live Content; Setup / Teardown||
2025|Saints Gauntlet - League of Legends|2025|St. Clair College|Tournament / LAN|Social Media; Live Content; Setup / Teardown||
2025|Saints Gauntlet - Rocket League|2025|St. Clair College|Tournament / LAN|Social Media; Live Content; Setup / Teardown||
2025|Saints Gauntlet - Super Smash Bros. Ultimate|2025|St. Clair College|Tournament / LAN|Event Organizing; Social Media; Setup / Teardown||
2025|Saints Gauntlet - VALORANT|2025|St. Clair College|Tournament / LAN|Event Organizing; Social Media||
2025|Saints Gauntlet - Overwatch|2025|St. Clair College|Tournament / LAN|Event Organizing; Social Media||
2025|NACL Open Qualifiers - Team Respawned|2025|Team Respawned|Tournament|Tournament-Related Work||
2025|March Break Camp 2025|March 10–14, 2025|St. Clair College|Camp|Lead Camp Counsellor||Full week
2025|Major III LAN|2025|St. Clair College|LAN|Tournament Admin; Social Media; Live Content||
2025|No Man's LAN 2025|2025|St. Clair College|LAN|Social Media||
2025|The Summoning 2025|2025|St. Clair College|Tournament / LAN|Social Media; Marketing||
2025|St. Clair Summer Camps 2025|Summer 2025|St. Clair College|Camp Series|Lead Camp Counsellor||4 weeks
2025|Pressure Point 2025|2025|St. Clair College|Tournament / LAN|Live Content; Tournament Admin; Social Media; Setup / Teardown||
2025|Fragadelphia 19|2025|St. Clair College|Tournament / LAN|Tournament Admin; Marketing; Photo / Video; Setup / Teardown||
2025|OSEA High School Event 2025|2025|St. Clair College|School Tournament|Tournament Admin; Marketing; Setup / Teardown||
2025|LKDSB High School Event|2025|St. Clair College|School Tournament|Tournament Admin; Marketing; Setup / Teardown||
2025|Canadian Nationals Broadcasts|2025|St. Clair College|Broadcast Series|Producer; Technical Director; Social Media||
2025|CLOL Broadcast Weekends|2025|St. Clair College|Broadcast Series|Producer; Technical Director||
2025|Collegiate League of Legends Championship|2025|CLOL|Championship Broadcast|Producer; Technical Director||
2025|Regular Collegiate Broadcasts|Fall 2025|St. Clair College|Broadcast Series|Producer; Technical Director; Social Media||11+ match days
2025|Smash Class Fall Editions|Fall 2025|St. Clair College|Tournament Series|Social Media; Marketing; Live Content||3–5 editions
2025|League of Legends Worlds Watch Party 2025|2025|St. Clair College|Watch Party|Event Lead; Organizing; Marketing; Live Content; Staff Management; Setup / Teardown; Photo / Video||
2025|Winter WonderLAN 2025|2025|St. Clair College|LAN|Social Media; Live Content||
2025|TXP LAN Fall 2025|Fall 2025|St. Clair College|Tournament / LAN|Tournament Admin; Social Media; Setup / Teardown||
2025|NACE Grand Finals - League of Legends|Fall 2025|NACE|Championship Broadcast|Broadcast Director||Remote broadcast
2025–2026|League Impact Series|November 2025 onward|LIS|Tournament / Broadcast Series|Marketing; Tournament Operations; Production; B-Stream Direction; Staffing; Scheduling; Co-streamer Coordination||Multiple events and broadcast days
2025–2026|Cupid Esports Competitions|May 2025–May 2026|Cupid Esports|Tournament Marketing|Social Media; Gameday Results||
2026|Team Tryouts|2026|St. Clair College|Event|Event Support; Marketing|111|
2026|Alexa's TFT Event|2026|St. Clair College|Tournament|Event Organizing; Tournament Operations|15|
2026|Smash Class Edition 1|2026|St. Clair College|Tournament|Event Support; Marketing; Live Content|34|
2026|D1 League of Legends vs. Ohio State|2026|St. Clair College|Broadcast|Production; Broadcast Operations|20|
2026|D1 VALORANT vs. Boise State|2026|St. Clair College|Broadcast|Production; Broadcast Operations|31|
2026|Halloween LAN|2026|St. Clair College|LAN|Event Operations; Marketing|80|
2026|Smash Class Edition 2|2026|St. Clair College|Tournament|Event Support; Marketing; Live Content|37|
2026|TXP 5|2026|St. Clair College|Tournament / LAN|Event Operations; Marketing|~100|
2026|Smash Class Edition 3|2026|St. Clair College|Tournament|Event Support; Marketing; Live Content|43|
2026|Pokemon Day|2026|St. Clair College|Event|Event Operations; Marketing|300|
2026|No Man's LAN 2026|2026|St. Clair College|LAN|Event Operations; Marketing|~200|
2026|March Break Camp 2026|March 2026|St. Clair College|Camp|Lead Camp Counsellor; Activity Facilitation|20|Full week
2026|WEHSEC|2026|St. Clair College|School Tournament|Event Operations; Marketing|100|
2026|ARAM Mayhem|2026|St. Clair College|Tournament|Event Organizing; Marketing|15|
2026|Sakura Anime Fest 2026|April 11, 2026|St. Clair College|LAN / Convention|Event Organizer; Event Planning|610+|
2026|Pressure Point 2026|2026|St. Clair College|Tournament / LAN|Event Operations; Marketing|150|
2026|BJBE|2026|St. Clair College|Event|Event Operations; Marketing|40|
2026|OSEA 2026|2026|St. Clair College|School Tournament|Tournament Operations; Marketing|100|
2026|Windsor Essex Library Event|2026|St. Clair College|Community Event|Event Support||
2026|St. Louis School Event|2026|St. Clair College|School Event|Event Support||
2026|FragCS|2026|St. Clair College|Tournament / LAN|Tournament Operations; Marketing||
2026|FragR6|2026|St. Clair College|Tournament / LAN|Social Media; Marketing; Live Event Support||
2026|Summer Camp 2026|Summer 2026|St. Clair College|Camp|Lead Camp Counsellor; Event Organizing; Activity Planning; Setup / Teardown||
2026|The Summoning 2026|July 2026|St. Clair College|Tournament / LAN|Event Organizing; Tournament Operations; Social Media; Graphics; Video Editing|~1000|
2026|Division ONE Regular Broadcasts|February–April 2026|St. Clair College|Broadcast Series|Producer; Technical Director; Student Team Management||
2026|CIE 2026|May 2026|CIE|Multi-Game Tournament / Broadcast|Social Director; Producer; Technical Director; Broadcast Director||League of Legends, VALORANT, Overwatch, Rocket League
2026|AT&T Annihilator Cup|2026|DSA Group|Tournament|Tournament Administrator||
2026|Marvel Rivals Creator World Championship|2026|DSA Group|Tournament|Tournament Administrator||
2026|FC Pro World Championship - EWC B-Stream|2026|Liquid Dogs|Broadcast|Technical Director; Audio; Graphics||
2026|NA Rise|2026|esclub.gg|Tournament / Campaign|Tournament Operations; Marketing; Communications||
2026|NA Premier|2026|esclub.gg|Tournament / Campaign|Marketing; Pre-show Content; Live Updates; Graphics||
2026|Team Canada Overwatch World Cup|2026|Team Canada OWWC|Tournament Creative|Design Lead; Graphics||
2026|NACL - Contingent Esports|2026|Contingent Esports|Tournament Creative|Branding; Social Media||
2026|LAN of the Dead|2026|St. Clair College|LAN|Social Media; Live Coverage||
`

export const events: EventEntry[] = raw
  .trim()
  .split('\n')
  .map((line) => {
    const [year, name, date, org, category, roles, attendance, notes] = line.split('|')
    return {
      year,
      name,
      date,
      org,
      category,
      roles: roles.split(';').map((r) => r.trim()).filter(Boolean),
      attendance: attendance || undefined,
      notes: notes || undefined,
    }
  })

/** Events grouped by year label, newest first. */
export function eventsByYear() {
  const groups = new Map<string, EventEntry[]>()
  for (const e of events) groups.set(e.year, [...(groups.get(e.year) ?? []), e])
  return [...groups.entries()].sort((a, b) => b[0].localeCompare(a[0]))
}
