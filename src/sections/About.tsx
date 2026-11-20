import { Section } from '../components/layout/Section'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const principles = [
  { title: 'Understand first', text: 'Start from the requirement and the people behind it, then decide how to build.' },
  { title: 'Build to maintain', text: 'Clean, reusable code that the next developer can pick up with confidence.' },
  { title: 'Own the outcome', text: 'Stay with a feature from implementation through debugging and delivery.' },
]

export function About() {
  return (
    <Section id="about">
      <SectionHeading id="about" index="01" label="About" title="Practical, maintainable, reliable." />

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted text-pretty lg:col-span-5 lg:col-start-4">
          <p>
            <span className="text-fg">
              My path into software began with a Diploma in Computer Engineering,
            </span>{' '}
            where building applications and working through technical problems first caught my interest.
          </p>
          <p>
            Over the past four years I’ve worked on web applications across different domains, contributing to
            frontend development, backend services, database operations and third-party integrations.
          </p>
          <p>
            Today I work across the full development lifecycle: understanding requirements, implementing features,
            reviewing code, joining technical discussions and supporting the developers around me.
          </p>
          <p>
            I keep learning and exploring better engineering practices, and I like taking responsibility for building
            applications that hold up in real use.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4">
          <aside aria-labelledby="principles-heading" className="border-t border-line-strong pt-6">
            <h3 id="principles-heading" className="eyebrow">
              How I approach the work
            </h3>
            <ol className="mt-6 space-y-6">
              {principles.map((principle, principleIndex) => (
                <li key={principle.title} className="grid grid-cols-[2rem_1fr] gap-x-2">
                  <span className="font-mono text-sm text-accent" aria-hidden="true">
                    0{principleIndex + 1}
                  </span>
                  <div>
                    <p className="font-medium text-fg">{principle.title}</p>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{principle.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </Reveal>
      </div>
    </Section>
  )
}
