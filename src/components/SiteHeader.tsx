import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { site } from '../lib/site'

const anchors = [
  { hash: 'skills', label: 'Skills' },
  { hash: 'work', label: 'Work' },
  { hash: 'awards', label: 'Awards' },
  { hash: 'partners', label: 'Who I’ve worked with' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="group flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full bg-fuchsia font-display text-lg text-ink transition-transform group-hover:rotate-12"
          >
            AK
          </span>
          <span className="font-display text-xl uppercase tracking-wide">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {anchors.map((a) => (
              <li key={a.hash}>
                <Link
                  to="/"
                  hash={a.hash}
                  className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-fuchsia hover:text-ink"
                >
                  {a.label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Link
                to="/contact"
                className="inline-block rotate-[-2deg] border-2 border-cream bg-fuchsia px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:rotate-0"
              >
                Let’s collab
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center border-2 border-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t-2 border-cream/20 md:hidden"
        >
          <ul className="flex flex-col px-4 py-3">
            {anchors.map((a) => (
              <li key={a.hash}>
                <Link
                  to="/"
                  hash={a.hash}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-3xl uppercase"
                >
                  {a.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-3xl uppercase text-fuchsia"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
