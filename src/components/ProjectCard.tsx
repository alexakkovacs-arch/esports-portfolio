import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { accentBg, type Project } from '../data/portfolio'
import { Img } from './Img'

const tilts = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1']

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className={`brutal brutal-hover group relative block ${tilts[index % tilts.length]}`}
    >
      <div className="flex min-h-14 items-stretch border-b-[3px] border-ink">
        <span className="flex w-14 shrink-0 items-center justify-center border-r-[3px] border-ink bg-cream font-mono text-sm font-bold">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className={`flex min-w-0 flex-1 items-center px-3 py-2 font-mono text-[11px] font-bold uppercase leading-snug tracking-wider ${accentBg[project.accent]} ${project.accent === 'ink' ? 'text-cream' : 'text-ink'}`}
        >
          {project.roles[0]}
        </span>
      </div>
      <div className="relative aspect-[4/5] overflow-hidden border-b-[3px] border-ink bg-ink">
        {project.slug === 'league-impact-series' && (
          <Img
            src={project.cover.src}
            alt=""
            aria-hidden="true"
            width={520}
            className="absolute inset-0 size-full scale-125 object-cover opacity-45 blur-xl"
          />
        )}
        <Img
          src={project.cover.src}
          alt={project.cover.alt}
          width={520}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className={`relative size-full transition-transform duration-500 group-hover:scale-105 ${project.slug === 'clol-championships' ? 'object-contain p-6' : project.slug === 'league-impact-series' ? 'object-contain' : 'object-cover'}`}
        />
      </div>
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <h3 className={`display ${project.slug === "cie" ? "text-2xl leading-[1] sm:text-3xl" : "text-3xl"}`}>{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">
            {project.summary}
          </p>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-fuchsia transition-transform group-hover:rotate-45">
          <ArrowUpRight size={18} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
