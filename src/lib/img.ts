/**
 * Serve images from /public/img through the Netlify Image CDN so pages never
 * ship the full-resolution originals. SVGs are vector, so they pass through.
 */
export function cdn(src: string, width: number, quality = 78) {
  if (src.endsWith('.svg')) return src
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp&q=${quality}`
}

export function srcSet(src: string, widths: number[]) {
  if (src.endsWith('.svg')) return undefined
  return widths.map((w) => `${cdn(src, w)} ${w}w`).join(', ')
}
