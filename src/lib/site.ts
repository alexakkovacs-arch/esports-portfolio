export const site = {
  name: 'Alexa Kovacevich',
  shortName: 'Alexa',
  role: 'Esports events, production & marketing',
  location: 'Windsor, Ontario',
  email: 'alexakkovacs@gmail.com',
  description:
    'Portfolio of Alexa Kovacevich, a freelance creative in Windsor, Ontario working on esports events, live broadcast production, branding and social media.',
  social: {
    linkedin: 'https://www.linkedin.com/in/alexa-kovacevich-856a60251/',
    x: 'https://x.com/lollexkk',
    instagram: 'https://www.instagram.com/reel/DG6GU2RvFzD/',
  },
}

export function pageMeta(title: string, description: string) {
  const fullTitle = `${title} | ${site.name}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
    ],
  }
}
