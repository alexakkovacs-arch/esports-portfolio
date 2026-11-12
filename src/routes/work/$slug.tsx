import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { accentBg, getProject, projects, type Video } from '../../data/portfolio'
import { pageMeta } from '../../lib/site'
import { Img } from '../../components/Img'
import { assetUrl } from '../../lib/assets'

export const Route = createFileRoute('/work/$slug')({
  loader: ({ params }) => {
    const project = getProject(params.slug)
    if (!project) throw notFound()
    return { slug: project.slug }
  },
  head: ({ loaderData }) => {
    const project = loaderData && getProject(loaderData.slug)
    return project
      ? pageMeta(project.title, project.summary)
      : pageMeta('Project not found', 'This project could not be found.')
  },
  component: ProjectPage,
})

function ProjectPage() {
  const { slug } = Route.useLoaderData()
  const project = getProject(slug)!
  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]
  const darkAccent = project.accent === 'ink'
  const isSaints = project.slug === 'st-clair-saints'

  return (
    <article className={isSaints ? 'saints-page' : undefined}>
      <header
        className={`relative overflow-hidden border-b-[3px] border-ink ${accentBg[project.accent]} ${darkAccent ? 'text-cream' : 'text-ink'}`}
      >
        <img
          src={assetUrl('/img/shapes/burst-blue.svg')}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute -right-24 -top-24 w-80 animate-spin-slow opacity-70 ${isSaints ? 'saints-burst' : ''}`}
        />
        <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:py-20">
          <div>
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center gap-2 border-2 border-ink bg-cream px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-ink"
            >
              <ArrowLeft size={14} aria-hidden="true" /> All projects
            </Link>
            <p className="eyebrow mt-10">{project.org}</p>
            <div className={isSaints ? 'mt-3 flex items-center gap-4 sm:gap-6' : 'mt-3'}>
              <h1 className={`display min-w-0 ${isSaints ? 'flex-1 text-[clamp(3.2rem,7vw,7rem)]' : 'text-[clamp(3.5rem,10vw,8rem)]'}`}>
                {project.title}
              </h1>
              {isSaints && project.logo && (
                <Img
                  src={project.logo}
                  alt="St. Clair Saints Esports logo"
                  width={200}
                  className="h-24 w-24 shrink-0 object-contain sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                />
              )}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.roles.map((r) => (
                <li
                  key={r}
                  className="border-2 border-ink bg-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-cream"
                >
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed">
              {project.summary}
            </p>
            {project.stats && (
              <dl className="mt-10 flex flex-wrap gap-4">
                {project.stats.map((s) => (
                  <div key={s.label} className="brutal-sm bg-cream px-5 py-3 text-ink">
                    <dt className="font-mono text-[11px] uppercase tracking-widest">{s.label}</dt>
                    <dd className="display text-5xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <figure className="brutal tape relative mx-auto w-full max-w-md rotate-2 p-3">
            <Img
              src={project.cover.src}
              alt={project.cover.alt}
              width={480}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6">
        {project.sections.map((section, si) => (
          <section key={section.heading} aria-labelledby={`section-${si}`}>
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
              <div>
                <span className="font-mono text-sm font-bold">
                  {String(si + 1).padStart(2, '0')}/
                </span>
                <h2 id={`section-${si}`} className="display mt-2 text-5xl sm:text-6xl">
                  {section.heading}
                </h2>
                {section.role && (
                  <p className="eyebrow mt-4">{section.role}</p>
                )}
              </div>
              <div className="text-lg leading-relaxed">
                {section.body && <p className="max-w-2xl">{section.body}</p>}
                {section.bullets && (
                  <ul className="max-w-2xl space-y-3">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className={`mt-0.5 ${isSaints ? 'text-saints-dark' : 'text-fuchsia-hot'}`} aria-hidden="true">✺</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {section.events && section.events.length > 0 && (
              <ul className="mt-12 grid gap-8 md:grid-cols-2">
                {section.events.map((event, ei) => (
                  <li
                    key={event.title}
                    className={`brutal overflow-hidden ${ei % 2 ? 'md:translate-y-4' : ''}`}
                  >
                    <div className="aspect-[16/9] overflow-hidden border-b-[3px] border-ink bg-ink">
                      <Img
                        src={event.photo.src}
                        alt={event.photo.alt}
                        width={800}
                        sizes="(min-width: 768px) 46vw, 94vw"
                        className={`h-full w-full ${event.fit === 'contain' ? 'object-contain p-6' : 'object-cover'}`}
                      />
                    </div>
                    <div className="p-6">
                      <p className="inline-flex border-2 border-ink bg-saints px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
                        {event.year}
                      </p>
                      <h3 className="display mt-4 text-3xl sm:text-4xl">{event.title}</h3>
                      <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-wider text-ink/70">
                        {event.role}
                      </p>
                      <p className="mt-4 text-base leading-relaxed">{event.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {section.videos && <VideoGrid videos={section.videos} />}

            {section.photos && section.photos.length > 0 && (
              <ul className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
                {section.photos.map((photo, pi) => (
                  <li
                    key={photo.src}
                    className={`brutal mb-6 break-inside-avoid p-2 ${pi % 3 === 0 ? '-rotate-1' : pi % 3 === 1 ? 'rotate-1' : ''}`}
                  >
                    <Img
                      src={photo.src}
                      alt={photo.alt}
                      width={480}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="w-full"
                    />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <nav aria-label="Next project" className="border-t-[3px] border-ink bg-ink text-cream">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-14 sm:px-6"
        >
          <div>
            <p className="eyebrow text-fuchsia">Next project</p>
            <p className="display mt-2 text-5xl transition-colors group-hover:text-fuchsia sm:text-7xl">
              {next.title}
            </p>
          </div>
          <span className="grid size-16 shrink-0 place-items-center rounded-full border-[3px] border-cream bg-fuchsia text-ink transition-transform group-hover:translate-x-2">
            <ArrowRight size={26} aria-hidden="true" />
          </span>
        </Link>
      </nav>
    </article>
  )
}

function VideoGrid({ videos }: { videos: Video[] }) {
  const wide = videos.filter((v) => !v.vertical)
  const shorts = videos.filter((v) => v.vertical)
  return (
    <div className="mt-12 space-y-8">
      {wide.map((v) => (
        <div key={v.id} className="brutal p-2">
          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube-nocookie.com/embed/${v.id}`}
            title={v.title}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      ))}
      {shorts.length > 0 && (
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {shorts.map((v, i) => (
            <li key={v.id} className={`brutal p-2 ${i % 2 ? 'rotate-1' : '-rotate-1'}`}>
              <iframe
                className="aspect-[9/16] w-full"
                src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
