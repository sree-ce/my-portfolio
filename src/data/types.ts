export type ProjectVisualKind = 'hrms' | 'streetlogic' | 'bingo' | 'humsum'

export interface ProjectChallenge {
  title: string
  context: string
  approach: string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  summary: string
  role: string
  category: string
  stack: string[]
  visual: ProjectVisualKind
  overview: string
  context: string
  responsibilities: string[]
  features: string[]
  challenges: ProjectChallenge[]
  note?: string
  links?: ProjectLink[]
}
