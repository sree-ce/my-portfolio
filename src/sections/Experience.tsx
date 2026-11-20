import { ArrowUp, MapPin } from 'lucide-react'
import { Link } from 'react-router'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { employer, promotion, type Role } from '../data/experience'
import { projects } from '../data/projects'
import { classNames } from '../utils/classNames'

function RoleEntry({ role }: { role: Role }) {
  return (
    <li className="relative pl-10 sm:pl-14">
      <span
        aria-hidden="true"
        className={classNames(
          'absolute top-1.5 left-0 flex size-[15px] -translate-x-[7px] items-center justify-center rounded-full border',
          role.current ? 'border-accent bg-accent-soft' : 'border-line-strong bg-bg',
        )}
      >
        <span className={classNames('size-[5px] rounded-full', role.current ? 'bg-accent' : 'bg-subtle')} />
      </span>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="font-mono text-sm text-muted">{role.period}</p>
        {role.current && (
          <span className="rounded-full border border-accent/40 bg-accent-soft px-2.5 py-0.5 font-mono text-[0.68rem] tracking-wider text-accent uppercase">
            Current role
          </span>
        )}
      </div>
      <h3 className="mt-3 text-title font-medium">{role.title}</h3>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted text-pretty">{role.summary}</p>

      <div className={classNames('mt-8 grid gap-8', role.groups.length > 1 && 'xl:grid-cols-2 xl:gap-10')}>
        {role.groups.map((group) => (
          <div key={group.title}>
            <h4 className="eyebrow border-b border-line pb-3">{group.title}</h4>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="grid grid-cols-[1rem_1fr] gap-x-2 text-[0.95rem] leading-relaxed">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-2 bg-accent" />
                  <span className="text-fg/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </li>
  )
}

export function Experience() {
  const [currentRole, ...previousRoles] = employer.roles

  return (
    <Section id="experience">
      <SectionHeading
        id="experience"
        index="04"
        label="Experience"
        title="Four years, one company, growing responsibility."
        description="I’ve spent my career so far at AptlyLabs, growing from building features to also coordinating the team that builds them."
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="text-xl font-medium tracking-tight">{employer.name}</p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={14} aria-hidden="true" />
              {employer.location}
            </p>
            <p className="mt-1 font-mono text-sm text-muted">{employer.period}</p>

            <div className="mt-8 border-t border-line pt-6">
              <p className="eyebrow">Projects here</p>
              <ul className="mt-4 space-y-2">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-sm text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
                    >
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-9">
          <ol className="relative border-l border-line-strong" aria-label={`Roles at ${employer.name}`}>
            <RoleEntry role={currentRole} />

            <li className="relative my-12 pl-10 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute top-1/2 left-0 flex size-7 -translate-x-[14px] -translate-y-1/2 items-center justify-center rounded-full border border-accent/50 bg-bg text-accent"
              >
                <ArrowUp size={14} />
              </span>
              <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-accent">{promotion.label}</span>
                <span>{promotion.date}</span>
              </p>
            </li>

            {previousRoles.map((role) => (
              <RoleEntry key={role.title} role={role} />
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
