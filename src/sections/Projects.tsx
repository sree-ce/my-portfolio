import { Section } from '../components/layout/Section'
import { ProjectGrid } from '../components/projects/ProjectGrid'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        index="03"
        label="Selected work"
        title="Projects I’ve built and owned."
        description="Work spanning full-stack feature ownership, frontend leadership and third-party integrations. These are internal and client products, so the visuals are illustrative rather than screenshots."
      />
      <ProjectGrid projects={projects} />
    </Section>
  )
}
