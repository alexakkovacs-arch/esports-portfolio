/** Resolve public assets for both lexkk.com and the GitHub Pages repository preview. */
export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^[/]+/, '')}`
}
