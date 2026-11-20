import { useParams } from 'react-router'
import { ProjectCaseStudyLayout } from '../../components/projects/ProjectCaseStudyLayout'
import { getProject, projects } from '../../data/projects'
import { NotFound } from '../NotFound'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFound message="There’s no case study at this address." />

  const projectIndex = projects.indexOf(project)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <ProjectCaseStudyLayout
      key={project.slug}
      project={project}
      projectIndex={projectIndex}
      nextProject={nextProject}
    />
  )
}
