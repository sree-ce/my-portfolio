import type { ReactNode } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Info } from 'lucide-react'
import { Link } from 'react-router'
import { m as motion } from 'motion/react'
import type { Project } from '../../data/types'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import { easeOutSoft } from '../../utils/motion'
import { Container } from '../layout/Container'
import { Reveal } from '../ui/Reveal'
import { ProjectVisual } from './ProjectVisual'
import { StackList } from './StackList'

interface ProjectCaseStudyLayoutProps {
  project: Project
  projectIndex: number
  nextProject: Project
}

const tableOfContents = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'role', label: 'My role' },
  { id: 'features', label: 'Key features' },
  { id: 'challenges', label: 'Challenges' },
] as const

type SectionId = (typeof tableOfContents)[number]['id']

function CaseSection({ id, title, children }: { id: SectionId; title: string; children: ReactNode }) {
  return (
    <Reveal>
      <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-line pt-8">
        <h2 id={`${id}-heading`} className="text-title font-medium">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </section>
    </Reveal>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[1rem_1fr] gap-x-2 leading-relaxed">
          <span aria-hidden="true" className="mt-[0.75em] h-px w-2 bg-accent" />
          <span className="text-fg/85">{item}</span>
        </li>
      ))}
    </ul>
  )
}

const introMotion = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOutSoft, delay },
})

export function ProjectCaseStudyLayout({ project, projectIndex, nextProject }: ProjectCaseStudyLayoutProps) {
  useDocumentMeta(`${project.name}: ${project.tagline}`, project.summary)
  const projectNumber = String(projectIndex + 1).padStart(2, '0')

  return (
    <article>
      <header className="pt-28 pb-12 md:pt-36 md:pb-16">
        <Container>
          <motion.div {...introMotion(0)}>
            <Link
              to="/#projects"
              className="group inline-flex items-center gap-2 rounded-full py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              <ArrowLeft
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-x-0.5 motion-reduce:transform-none"
              />
              All projects
            </Link>
          </motion.div>

          <motion.p {...introMotion(0.05)} className="eyebrow mt-10 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-accent">Case study {projectNumber}</span>
            <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            <span>{project.category}</span>
          </motion.p>
          <motion.h1 {...introMotion(0.1)} className="mt-6 text-display font-medium">
            {project.name}
          </motion.h1>
          <motion.p {...introMotion(0.15)} className="mt-3 text-title text-muted">
            {project.tagline}
          </motion.p>

          <motion.dl
            {...introMotion(0.2)}
            className="mt-12 grid gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <dt className="eyebrow">Role</dt>
              <dd className="mt-2 text-fg">{project.role}</dd>
            </div>
            <div className="lg:col-span-3">
              <dt className="eyebrow">Type</dt>
              <dd className="mt-2 text-fg">{project.category}</dd>
            </div>
            <div className="sm:col-span-2 lg:col-span-6">
              <dt className="eyebrow">Stack</dt>
              <dd className="mt-3">
                <StackList items={project.stack} />
              </dd>
            </div>
          </motion.dl>
        </Container>
      </header>

      <Container>
        <motion.figure {...introMotion(0.3)}>
          <ProjectVisual
            kind={project.visual}
            className="aspect-[4/3] rounded-2xl border border-line sm:aspect-[16/9] lg:aspect-[2/1]"
          />
          <figcaption className="mt-3 text-sm text-subtle">
            Illustrative visual based on the project’s features. Not a screenshot of the product.
          </figcaption>
        </motion.figure>

        {project.note && (
          <aside
            aria-label="Project note"
            className="mt-10 flex gap-4 rounded-xl border border-line bg-surface p-5 text-[0.95rem] leading-relaxed text-muted sm:p-6"
          >
            <Info size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
            <p>{project.note}</p>
          </aside>
        )}

        <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
          <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="eyebrow">On this page</p>
              <ul className="mt-4 space-y-1 border-l border-line">
                {tableOfContents.map((tocItem) => (
                  <li key={tocItem.id}>
                    <Link
                      to={`#${tocItem.id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
                    >
                      {tocItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="space-y-20 lg:col-span-8 lg:col-start-5">
            <CaseSection id="overview" title="Overview">
              <p className="text-lead text-muted text-pretty">{project.overview}</p>
            </CaseSection>

            <CaseSection id="context" title="Context">
              <p className="text-lg leading-relaxed text-muted text-pretty">{project.context}</p>
            </CaseSection>

            <CaseSection id="role" title="My role">
              <p className="text-lg text-fg">{project.role}</p>
              <h3 className="eyebrow mt-8 mb-4">Responsibilities</h3>
              <Bullets items={project.responsibilities} />
            </CaseSection>

            <CaseSection id="features" title="Key features">
              <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
                {project.features.map((feature, featureIndex) => (
                  <li key={feature} className="flex items-baseline gap-3 bg-bg p-5">
                    <span aria-hidden="true" className="font-mono text-xs text-accent">
                      {String(featureIndex + 1).padStart(2, '0')}
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
                {project.features.length % 2 === 1 && <li aria-hidden="true" className="hidden bg-bg sm:block" />}
              </ul>
            </CaseSection>

            <CaseSection id="challenges" title="Challenges & implementation">
              <ol className="space-y-12">
                {project.challenges.map((challenge, challengeIndex) => (
                  <li key={challenge.title} className="grid gap-4 sm:grid-cols-[3rem_1fr]">
                    <span aria-hidden="true" className="font-mono text-sm text-accent sm:pt-1">
                      {String(challengeIndex + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight">{challenge.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted text-pretty">{challenge.context}</p>
                      <h4 className="eyebrow mt-6 mb-4">What I did</h4>
                      <Bullets items={challenge.approach} />
                    </div>
                  </li>
                ))}
              </ol>
            </CaseSection>

            {project.links && project.links.length > 0 && (
              <Reveal>
                <ul className="flex flex-wrap gap-3 border-t border-line pt-8">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                      >
                        {link.label}
                        <ArrowUpRight size={15} aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </div>
      </Container>

      <nav aria-label="More projects" className="border-t border-line">
        <Container className="flex flex-col gap-10 py-16 md:flex-row md:items-end md:justify-between md:py-24">
          <Link
            to="/#projects"
            className="group order-2 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg md:order-1"
          >
            <ArrowLeft
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-0.5 motion-reduce:transform-none"
            />
            Back to all projects
          </Link>
          <Link to={`/projects/${nextProject.slug}`} className="group order-1 md:order-2 md:text-right">
            <span className="eyebrow">Next case study</span>
            <span className="mt-3 flex items-center gap-3 text-heading font-medium transition-colors group-hover:text-accent md:justify-end">
              {nextProject.name}
              <ArrowRight
                className="size-[0.7em] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </span>
            <span className="mt-2 block text-muted">{nextProject.tagline}</span>
          </Link>
        </Container>
      </nav>
    </article>
  )
}
