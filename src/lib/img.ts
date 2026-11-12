import { assetUrl } from './assets'

/** GitHub Pages serves the existing optimized public images as static files. */
export function cdn(src: string, _width: number, _quality = 78) {
  return assetUrl(src)
}

/** Responsive CDN srcsets are not available on static hosting. */
export function srcSet(_src: string, _widths: number[]) {
  return undefined
}
