import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

// GitHub Pages has no server-side routing. Publish an HTML entry point for
// every known route so direct links and refreshes work with a 200 response.
const index = await readFile('dist/index.html', 'utf8')
const portfolio = await readFile('src/data/portfolio.ts', 'utf8')
const slugs = [...portfolio.matchAll(/slug: '([^']+)'/g)].map((m) => m[1])
const routes = ['contact', 'events', ...slugs.map((slug) => `work/${slug}`)]

for (const route of routes) {
  const dir = join('dist', route)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'index.html'), index)
}

await writeFile('dist/404.html', index)
console.log(`Generated ${routes.length} static route entry points.`)
