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
      <div className="relative aspect-[4/5] overflow-hidden border-b-[3px] border-ink bg-ink">
        <Img
          src={project.cover.src}
          alt={project.cover.alt}
          width={520}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 border-2 border-ink bg-cream px-2 py-1 font-mono text-[11px] font-bold">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className={`absolute -right-2 bottom-4 rotate-3 border-2 border-ink px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${accentBg[project.accent]} ${project.accent === 'ink' ? 'text-cream' : 'text-ink'}`}
        >
          {project.roles[0]}
        </span>
      </div>
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <h3 className="display text-3xl">{project.title}</h3>
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
