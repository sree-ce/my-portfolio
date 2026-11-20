import { Section } from '../components/layout/Section'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        index="05"
        label="Skills"
        title="The stack behind my work."
        description="Grouped by area, without ratings: the technologies and practices I work with."
      />

      <div className="border-b border-line">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title}>
            <div className="grid gap-4 border-t border-line py-8 md:py-10 lg:grid-cols-12 lg:gap-8">
              <h3 className="flex items-baseline gap-3 lg:col-span-3">
                <span className="font-mono text-xs text-accent" aria-hidden="true">
                  {String(groupIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-medium tracking-tight">{group.title}</span>
              </h3>
              <ul className="flex flex-wrap items-baseline gap-x-2 gap-y-2 lg:col-span-9">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skill} className="flex items-baseline gap-2 text-xl tracking-tight text-fg/90 sm:text-2xl">
                    {skill}
                    {skillIndex < group.skills.length - 1 && (
                      <span aria-hidden="true" className="font-light text-line-strong">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
