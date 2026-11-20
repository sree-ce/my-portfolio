import { GitPullRequest, Layers, LifeBuoy, MessagesSquare, Route, Users, type LucideIcon } from 'lucide-react'

export interface Practice {
  title: string
  description: string
  icon: LucideIcon
}

export const practices: Practice[] = [
  {
    title: 'Feature ownership',
    description:
      'Taking features through requirement understanding, implementation, integration, debugging and delivery.',
    icon: Route,
  },
  {
    title: 'Team coordination',
    description: 'Coordinating a team of 4–5 developers, assigning tasks and tracking development activities.',
    icon: Users,
  },
  {
    title: 'Code reviews',
    description: 'Reviewing code, giving actionable feedback and keeping development consistent across the team.',
    icon: GitPullRequest,
  },
  {
    title: 'Mentoring',
    description: 'Helping junior developers work through technical challenges and grow their development skills.',
    icon: LifeBuoy,
  },
  {
    title: 'Client collaboration',
    description:
      'Joining client calls and technical discussions to understand requirements and coordinate implementation.',
    icon: MessagesSquare,
  },
  {
    title: 'Full-stack development',
    description: 'Working across frontend interfaces, backend APIs and database operations.',
    icon: Layers,
  },
]
