import type { ImgHTMLAttributes, SyntheticEvent } from 'react'
import { cdn, srcSet } from '../lib/img'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string
  alt: string
  /** Largest rendered width in CSS pixels. */
  width: number
  sizes?: string
}

// Existing portfolio images remain available until replacement files are uploaded.
const coverFallbacks: Record<string, string> = {
  '/img/cie-2026-cover.webp': '/img/cie-stage.jpg',
  '/img/lis-community-group.webp': '/img/lis-group.jpg',
  '/img/clol-logo-white.png': '/img/logos/college-lol.png',
  '/img/na-rise-format-explainer.webp': '/img/d1-promoted-toasty.jpg',
}

export function Img({
  src,
  alt,
  width,
  sizes,
  loading = 'lazy',
  onError,
  ...rest
}: Props) {
  const widths = [Math.round(width / 2), width, width * 2]

  function handleError(event: SyntheticEvent<HTMLImageElement, Event>) {
    const fallback = coverFallbacks[src]
    if (fallback) {
      const fallbackUrl = cdn(fallback, width)
      if (event.currentTarget.src !== new URL(fallbackUrl, document.baseURI).href) {
        event.currentTarget.src = fallbackUrl
      }
    }
    onError?.(event)
  }

  return (
    <img
      src={cdn(src, width)}
      srcSet={srcSet(src, widths)}
      sizes={sizes ?? `${width}px`}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={handleError}
      {...rest}
    />
  )
}
