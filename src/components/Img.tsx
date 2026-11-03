import type { ImgHTMLAttributes } from 'react'
import { cdn, srcSet } from '../lib/img'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string
  alt: string
  /** Largest rendered width in CSS pixels; drives the CDN variants. */
  width: number
  sizes?: string
}

/** <img> served through the Netlify Image CDN with responsive variants. */
export function Img({ src, alt, width, sizes, loading = 'lazy', ...rest }: Props) {
  const widths = [Math.round(width / 2), width, width * 2]
  return (
    <img
      src={cdn(src, width)}
      srcSet={srcSet(src, widths)}
      sizes={sizes ?? `${width}px`}
      alt={alt}
      loading={loading}
      decoding="async"
      {...rest}
    />
  )
}
