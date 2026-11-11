/** Resolve local public assets for both GitHub Pages and the custom domain.
 *
 * Some components pass paths that were already resolved through this helper.
 * Avoid prefixing the GitHub Pages base path twice.
 */
export function assetUrl(path: string) {
  // Keep external URLs and data URLs untouched.
  if (/^(?:https?:|data:|blob:)/i.test(path)) return path

  const base = import.meta.env.BASE_URL.replace(/\/+$/, '')
  const pathname = `/${path.replace(/^\/+/, '')}`

  // A path already starting with the site base must not be prefixed again.
  if (!base || pathname === base || pathname.startsWith(`${base}/`)) {
    return pathname
  }

  return `${base}${pathname}`
}
