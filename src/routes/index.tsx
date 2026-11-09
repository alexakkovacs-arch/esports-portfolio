import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, Mail, MapPin, Phone, Trophy } from 'lucide-react'
import { site, pageMeta } from '../lib/site'
import {
  accentBg,
  awardBodies,
  awards,
  featuredSlug,
  getProject,
  partners,
  projects,
  skills,
  toolkit,
} from '../data/portfolio'
import { Img } from '../components/Img'
import { assetUrl } from '../lib/assets'
import { Marquee } from '../components/Marquee'
import { ProjectCard } from '../components/ProjectCard'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => pageMeta('Esports events, production & marketing', site.description),
})

function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={skills.map((s) => s.label)}
        className="-rotate-1 scale-[1.02] bg-fuchsia"
      />
      <Skills />
      <Featured />
      <Work />
      <Awards />
      <Partners />
      <ContactCta />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Floating anti-design shapes */}
      <img
        src={assetUrl('/img/shapes/burst-blue.svg')}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 w-48 animate-spin-slow opacity-90 sm:w-64"
      />
      <img
        src={assetUrl('/img/shapes/flower-gold.svg')}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-6 w-40 animate-float [--r:12deg] sm:w-56"
      />
      <img
        src={assetUrl('/img/shapes/blob-tan.svg')}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[46%] top-6 hidden w-16 rotate-12 lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:pt-20">
        <div className="relative z-10">
          <p className="eyebrow inline-flex items-center gap-2 border-2 border-ink bg-white px-3 py-1.5">
            <MapPin size={14} aria-hidden="true" /> {site.location}
          </p>

          <h1 className="display mt-6 text-[clamp(3.75rem,12vw,9rem)]">
            <span className="block">Alexa</span>
            <span className="outline-text block -mt-2 sm:-mt-4">Kovacevich</span>
          </h1>

          <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed">
            <p>
              <span className="font-serif text-3xl italic">I’m a freelance creative!</span>
            </p>
            <p>
              I bring <span className="highlight font-semibold">bold ideas</span> to
              life across esports events, live broadcast and marketing, from
              the gameday poster to the grand finals stream.
            </p>
            <p className="display text-4xl sm:text-5xl">
              Design. <span className="text-fuchsia-hot">Events.</span> Production.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/" hash="work" className="btn btn-pink">
              See my work <ArrowDown size={16} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn btn-ink">
              Let’s collaborate <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mt-8">
          <img
            src={assetUrl('/img/shapes/splat-pink.svg')}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 -top-12 w-44 sm:w-56"
          />
          <figure className="brutal tape relative rotate-3 p-3">
            <Img
              src={assetUrl('/img/alexa-speaking.jpg')}
              alt="Alexa Kovacevich speaking at a podium at the St. Clair College Centre for the Arts"
              width={460}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 420px, 85vw"
              className="aspect-[4/5] w-full object-cover object-[40%_top]"
            />
            <figcaption className="mt-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
              <span>On the mic</span>
              <span>★ Winner</span>
            </figcaption>
          </figure>

          <div className="absolute -left-6 top-10 z-10 -rotate-6 rounded-[2rem] border-[3px] border-ink bg-fuchsia px-5 py-3 shadow-[5px_5px_0_0_var(--ink)]">
            <p className="font-serif text-3xl italic leading-none">Hello! I’m Alexa!</p>
          </div>

          <img
            src={assetUrl('/img/shapes/sakura.png')}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-10 w-24 animate-float [--r:-10deg]"
          />
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="What I do" title="My Skills" />
        <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {skills.map((skill, i) => (
            <li
              key={skill.label}
              className={`brutal brutal-hover flex min-h-64 flex-col justify-between p-5 ${accentBg[skill.accent]} ${i % 2 ? 'rotate-2' : '-rotate-1'} ${i % 3 === 1 ? 'lg:translate-y-8' : ''}`}
            >
              <span className="font-mono text-sm font-bold">
                {String(i + 1).padStart(2, '0')}/
              </span>
              <div>
                <h3 className="display text-4xl">{skill.label}</h3>
                <p className="mt-3 text-sm leading-relaxed">{skill.blurb}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-20 flex flex-wrap items-center gap-3">
          <span className="eyebrow mr-2">Toolkit →</span>
          {toolkit.map((tool) => (
            <span key={tool} className="brutal-sm rounded-full px-4 py-1.5 font-mono text-xs font-bold uppercase">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Featured() {
  const project = getProject(featuredSlug)
  if (!project) return null
  const photos = project.sections[0]?.photos ?? []
  return (
    <section className="relative overflow-hidden border-y-[3px] border-ink bg-ink px-4 py-24 text-cream sm:px-6">
      <img
        src={assetUrl('/img/shapes/sakura.png')}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-16 w-80 animate-spin-slow opacity-80"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-fuchsia">Most recent · Featured event</p>
          <h2 className="display mt-4 text-7xl sm:text-8xl">
            Sakura
            <br />
            <span className="text-fuchsia">Anime Fest</span>
          </h2>
          <p className="mt-4 font-mono text-sm uppercase tracking-widest text-cream/70">
            Role: {project.roles.join(', ')}
          </p>
          <ul className="mt-8 space-y-3">
            {project.sections[0]?.bullets?.map((b) => (
              <li key={b} className="flex gap-3 text-lg">
                <span className="mt-1 text-fuchsia" aria-hidden="true">✺</span>
                {b}
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-12 text-cream/70">By the numbers:</p>
          <dl className="mt-4 grid grid-cols-3 gap-4">
            {project.stats?.map((s, i) => (
              <div
                key={s.label}
                className={`border-[3px] border-cream p-4 ${i === 1 ? 'bg-fuchsia text-ink' : ''}`}
              >
                <dt className="font-mono text-xs uppercase tracking-widest">{s.label}</dt>
                <dd className="display mt-2 text-5xl sm:text-6xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="btn btn-pink mt-10"
          >
            Read more <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="relative h-[520px] sm:h-[600px]">
          {photos[0] && (
            <figure className="absolute left-0 top-0 w-[78%] -rotate-3 border-[3px] border-cream bg-cream p-2">
              <Img src={photos[0].src} alt={photos[0].alt} width={560} sizes="(min-width: 1024px) 40vw, 80vw" className="aspect-[16/10] w-full object-cover" />
            </figure>
          )}
          {photos[1] && (
            <figure className="absolute bottom-0 right-0 w-[52%] rotate-3 border-[3px] border-cream bg-cream p-2">
              <Img src={photos[1].src} alt={photos[1].alt} width={360} sizes="(min-width: 1024px) 26vw, 50vw" className="aspect-[3/4] w-full object-cover" />
            </figure>
          )}
          {project.logo && (
            <div className="absolute bottom-16 left-2 -rotate-6 border-[3px] border-ink bg-cream px-4 py-3 shadow-[5px_5px_0_0_var(--fuchsia)]">
              <Img src={project.logo} alt="Sakura Anime Fest logo" width={220} className="w-44" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Selected work" title="Projects" />
        <p className="mt-6 max-w-2xl text-lg">
          Varsity programs, leagues, broadcasts and live events. Open any project
          to see the graphics, video and production behind it.
        </p>
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link to="/events" className="btn btn-pink -rotate-1">
            See every event I’ve worked →
          </Link>
        </div>
      </div>
    </section>
  )
}

function Awards() {
  return (
    <section
      id="awards"
      className="relative scroll-mt-24 overflow-hidden border-y-[3px] border-ink bg-fuchsia px-4 py-24 sm:px-6"
    >
      <img
        src={assetUrl('/img/shapes/burst-blue.svg')}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-16 w-72 animate-spin-slow"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionTitle eyebrow="Recognition" title="Awards and Nominations" />
          <ul className="mt-8 flex flex-wrap gap-2">
            {awardBodies.map((b) => (
              <li key={b} className="border-2 border-ink bg-cream px-3 py-1 font-mono text-xs font-bold uppercase">
                {b}
              </li>
            ))}
          </ul>
          <figure className="brutal mt-10 hidden max-w-sm -rotate-2 p-3 lg:block">
            <Img
              src={assetUrl('/img/alexa-podium.jpg')}
              alt="Alexa speaking at a podium during an awards ceremony"
              width={420}
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>

        <ol className="space-y-4">
          {awards.map((a, i) => (
            <li
              key={`${a.title}-${a.recipient}-${a.year}`}
              className={`brutal flex items-center gap-4 p-4 sm:p-5 ${i % 2 ? 'sm:translate-x-6' : ''}`}
            >
              <span
                className={`grid size-12 shrink-0 place-items-center rounded-full border-2 border-ink ${a.result === 'Winner' ? 'bg-gold' : 'bg-steel'}`}
              >
                <Trophy size={20} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest">
                  {a.result}
                </p>
                <p className="text-lg font-bold leading-tight">{a.title}</p>
                <p className="text-sm text-ink/70">{a.recipient}</p>
              </div>
              <span className="display text-4xl">{a.year}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section id="partners" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Teams, leagues & events" title="Who I’ve worked with" />
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p, i) => (
            <li
              key={p.name}
              className={`brutal-sm brutal-hover flex aspect-[4/3] items-center justify-center bg-white p-5 ${i % 3 === 0 ? '-rotate-1' : i % 3 === 1 ? 'rotate-1' : ''}`}
              title={p.name}
            >
              <Img
                src={p.logo}
                alt={`${p.name} logo`}
                width={200}
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="brutal relative mx-auto max-w-7xl overflow-hidden bg-cream p-8 sm:p-14">
        <img
          src={assetUrl('/img/shapes/pixel-hand.png')}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 right-6 hidden w-36 rotate-[-14deg] md:block"
        />
        <p className="eyebrow">Open for freelance</p>
        <h2 className="display mt-4 max-w-4xl text-6xl sm:text-8xl">
          Let’s collaborate on your <span className="highlight">next project</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={`mailto:${site.email}`} className="btn btn-pink">
            <Mail size={16} aria-hidden="true" /> {site.email}
          </a>
          <a href={site.phoneHref} className="btn bg-white">
            <Phone size={16} aria-hidden="true" /> {site.phone}
          </a>
          <Link to="/contact" className="btn btn-ink">
            Send a message <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-3 text-6xl sm:text-7xl lg:text-8xl">{title}</h2>
    </div>
  )
}
