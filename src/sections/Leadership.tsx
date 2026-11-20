import { Section } from '../components/layout/Section'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { practices } from '../data/leadership'

export function Leadership() {
  return (
    <Section id="leadership" raised>
      <SectionHeading
        id="leadership"
        index="06"
        label="Engineering & leadership"
        title="How I work beyond the code."
        description="As a senior engineer, much of the job is helping the team ship: clear ownership, steady coordination and honest feedback."
      />

      <ul className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice, practiceIndex) => {
          const PracticeIcon = practice.icon
          return (
            <li key={practice.title} className="border-r border-b border-line">
              <Reveal delay={(practiceIndex % 3) * 0.06} className="flex h-full flex-col p-7 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full border border-line-strong text-accent">
                    <PracticeIcon size={19} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-subtle" aria-hidden="true">
                    {String(practiceIndex + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-medium tracking-tight">{practice.title}</h3>
                <p className="mt-3 leading-relaxed text-muted text-pretty">{practice.description}</p>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
