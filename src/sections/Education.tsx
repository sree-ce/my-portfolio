import { GraduationCap } from 'lucide-react'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { education } from '../data/education'

export function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education" index="07" label="Education" title="Foundations, and still learning." />

      <ul className="border-b border-line lg:ml-[25%]">
        {education.map((entry) => (
          <li key={entry.qualification} className="border-t border-line">
            <Reveal className="grid gap-4 py-8 sm:grid-cols-[1fr_auto] sm:gap-8">
              <div className="flex gap-4">
                <GraduationCap size={20} strokeWidth={1.6} aria-hidden="true" className="mt-1 shrink-0 text-subtle" />
                <div>
                  <h3 className="text-xl font-medium tracking-tight">
                    {entry.qualification}
                    {entry.abbreviation && <span className="text-muted"> ({entry.abbreviation})</span>}
                  </h3>
                  <p className="mt-1.5 text-muted">{entry.institution}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pl-9 sm:flex-col sm:items-end sm:pl-0">
                <p className="font-mono text-sm text-fg/80">{entry.period}</p>
                {entry.status && (
                  <span className="rounded-full border border-accent/40 bg-accent-soft px-2.5 py-0.5 font-mono text-[0.68rem] tracking-wider text-accent uppercase">
                    {entry.status}
                  </span>
                )}
                {entry.detail && <p className="font-mono text-sm text-muted">{entry.detail}</p>}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
