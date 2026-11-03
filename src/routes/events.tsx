import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { events, eventsByYear } from '../data/events'
import { pageMeta } from '../lib/site'

export const Route = createFileRoute('/events')({
  head: () =>
    pageMeta('Every event', 'A full history of every esports event, broadcast and campaign Alexa has worked on since 2022.'),
  component: EventsPage,
})

function EventsPage() {
  const groups = eventsByYear()
  const orgs = new Set(events.map((e) => e.org)).size

  return (
    <article className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          hash="work"
          className="inline-flex items-center gap-2 border-2 border-ink bg-cream px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={14} aria-hidden="true" /> All projects
        </Link>
        <p className="eyebrow mt-10">The full list</p>
        <h1 className="display mt-3 text-[clamp(3.5rem,10vw,8rem)]">
          Every event <span className="font-serif normal-case italic text-fuchsia-hot">I’ve worked</span>
        </h1>
        <dl className="mt-10 flex flex-wrap gap-4">
          {[
            ['Events', events.length],
            ['Organizations', orgs],
            ['Years', groups.length > 0 ? '2022–2026' : '—'],
          ].map(([label, value]) => (
            <div key={label} className="brutal-sm bg-cream px-5 py-3">
              <dt className="font-mono text-[11px] uppercase tracking-widest">{label}</dt>
              <dd className="display text-5xl">{value}</dd>
            </div>
          ))}
        </dl>

        {groups.map(([year, list]) => (
          <section key={year} className="mt-20" aria-labelledby={`y-${year}`}>
            <h2 id={`y-${year}`} className="display -rotate-1 inline-block bg-ink px-4 py-1 text-5xl text-cream">
              {year}
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {list.map((e) => (
                <li key={e.name} className="brutal flex flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/70">
                        {e.date} · {e.org}
                      </p>
                      <h3 className="mt-1 text-xl font-bold leading-tight">{e.name}</h3>
                    </div>
                    {e.attendance && (
                      <span className="shrink-0 rotate-2 border-2 border-ink bg-gold px-2 py-1 text-center font-mono text-xs font-bold">
                        {e.attendance}
                        <span className="block text-[10px] uppercase">attended</span>
                      </span>
                    )}
                  </div>
                  <p className="font-serif text-lg italic">{e.category}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {e.roles.map((r) => (
                      <li key={r} className="border-2 border-ink bg-fuchsia px-2 py-0.5 font-mono text-[11px] font-bold uppercase">
                        {r}
                      </li>
                    ))}
                  </ul>
                  {e.notes && <p className="text-sm text-ink/70">{e.notes}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  )
}
