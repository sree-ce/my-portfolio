import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import type { Project } from '../../data/types'
import { classNames } from '../../utils/classNames'
import { ProjectVisual } from './ProjectVisual'
import { StackList } from './StackList'

export type ProjectCardLayout = 'feature' | 'stacked' | 'wide'

interface ProjectCardProps {
  project: Project
  projectIndex: number
  layout: ProjectCardLayout
  className?: string
}

const layoutClasses: Record<ProjectCardLayout, { root: string; visual: string; body: string }> = {
  feature: {
    root: 'lg:grid lg:grid-cols-12',
    visual: 'aspect-[3/2] lg:col-span-7 lg:aspect-auto lg:min-h-[480px] lg:border-r lg:border-line',
    body: 'lg:col-span-5 lg:p-10',
  },
  stacked: {
    root: 'flex flex-col',
    visual: 'aspect-[3/2]',
    body: 'flex-1',
  },
  wide: {
    root: 'lg:grid lg:grid-cols-12',
    visual: 'aspect-[3/2] lg:order-2 lg:col-span-6 lg:aspect-auto lg:min-h-[360px] lg:border-l lg:border-line',
    body: 'lg:order-1 lg:col-span-6 lg:p-10',
  },
}

export function ProjectCard({ project, projectIndex, layout, className }: ProjectCardProps) {
  const classes = layoutClasses[layout]
  const projectNumber = String(projectIndex + 1).padStart(2, '0')

  return (
    <article
      className={classNames(
        'group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong',
        'has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent',
        classes.root,
        className,
      )}
    >
      <ProjectVisual
        kind={project.visual}
        interactive
        className={classNames('border-b border-line lg:border-b-0', layout === 'stacked' && 'lg:border-b', classes.visual)}
      />

      <div className={classNames('flex flex-col p-6 sm:p-8', classes.body)}>
        <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-accent">{projectNumber}</span>
          <span>{project.category}</span>
        </p>

        <h3 className={classNames('mt-5 font-medium tracking-tight', layout === 'feature' ? 'text-title' : 'text-2xl')}>
          <Link
            to={`/projects/${project.slug}`}
            className="outline-none after:absolute after:inset-0 after:content-['']"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-[0.95rem] text-muted">{project.tagline}</p>

        <p className="mt-5 leading-relaxed text-muted text-pretty">{project.summary}</p>

        <dl className="mt-6 text-sm">
          <dt className="eyebrow">Role</dt>
          <dd className="mt-1.5 text-fg">{project.role}</dd>
        </dl>

        <StackList items={project.stack} className="mt-6" />

        <span
          aria-hidden="true"
          className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-fg"
        >
          Read case study
          <ArrowUpRight
            size={16}
            className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
          />
        </span>
      </div>
    </article>
  )
}
