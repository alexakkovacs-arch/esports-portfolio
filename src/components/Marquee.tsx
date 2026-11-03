import { Star } from 'lucide-react'

/**
 * Continuously scrolling ticker. The list is rendered twice side by side and
 * the track slides by exactly one copy's width, so the loop is seamless.
 * Hovering pauses it; it stops under `prefers-reduced-motion`.
 */
export function Marquee({
  items,
  className = '',
}: {
  items: string[]
  className?: string
}) {
  return (
    <div
      className={`ticker relative overflow-hidden border-y-[3px] border-ink ${className}`}
    >
      <p className="sr-only">{items.join(', ')}</p>
      <div aria-hidden="true" className="ticker-track flex w-max py-4">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-8 pr-8 font-display text-3xl uppercase whitespace-nowrap sm:text-4xl"
              >
                {item}
                <Star
                  className="size-6 shrink-0 fill-ink sm:size-7"
                  strokeWidth={1.5}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
