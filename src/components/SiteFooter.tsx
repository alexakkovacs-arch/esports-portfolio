import { Link } from '@tanstack/react-router'
import { site } from '../lib/site'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t-[3px] border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow text-fuchsia">Design. Events. Production.</p>
          <p className="display mt-3 text-6xl sm:text-8xl">
            Let’s make
            <br />
            it <span className="font-serif normal-case italic text-fuchsia">loud.</span>
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3 font-mono text-sm">
          <a className="hover:text-fuchsia" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="text-cream/60">{site.location}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a className="underline decoration-fuchsia decoration-2 underline-offset-4 hover:text-fuchsia" href={site.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="underline decoration-fuchsia decoration-2 underline-offset-4 hover:text-fuchsia" href={site.social.x} target="_blank" rel="noreferrer">
              X / Twitter
            </a>
            <Link className="underline decoration-fuchsia decoration-2 underline-offset-4 hover:text-fuchsia" to="/contact">
              Contact form
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <p className="mx-auto max-w-7xl px-4 py-5 font-mono text-xs text-cream/50 sm:px-6">
          © {new Date().getFullYear()} {site.name}. All work shown belongs to its respective teams and organizations.
        </p>
      </div>
    </footer>
  )
}
