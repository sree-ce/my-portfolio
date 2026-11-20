import type { Project } from '../../data/types'
import { Reveal } from '../ui/Reveal'
import { ProjectCard, type ProjectCardLayout } from './ProjectCard'

const layoutPattern: Array<{ layout: ProjectCardLayout; columnSpan: string }> = [
  { layout: 'feature', columnSpan: 'lg:col-span-12' },
  { layout: 'stacked', columnSpan: 'lg:col-span-7' },
  { layout: 'stacked', columnSpan: 'lg:col-span-5' },
  { layout: 'wide', columnSpan: 'lg:col-span-12' },
]

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-5 lg:grid-cols-12 lg:gap-6">
      {projects.map((project, projectIndex) => {
        const { layout, columnSpan } = layoutPattern[projectIndex % layoutPattern.length]
        const isEvenStackedCard = layout === 'stacked' && projectIndex % 2 === 0
        return (
          <li key={project.slug} className={columnSpan}>
            <Reveal className="h-full" delay={isEvenStackedCard ? 0.08 : 0}>
              <ProjectCard project={project} projectIndex={projectIndex} layout={layout} className="h-full" />
            </Reveal>
          </li>
        )
      })}
    </ul>
  )
}
