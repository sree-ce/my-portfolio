export interface RoleGroup {
  title: string
  items: string[]
}

export interface Role {
  title: string
  period: string
  current?: boolean
  summary: string
  groups: RoleGroup[]
}

export interface Employer {
  name: string
  location: string
  period: string
  roles: Role[]
}

export const employer: Employer = {
  name: 'AptlyLabs India Pvt. Ltd.',
  location: 'Kochi, India',
  period: 'June 2022 – Present',
  roles: [
    {
      title: 'Senior Software Engineer',
      period: 'November 2026 – Present',
      current: true,
      summary:
        'Leading a small team while continuing to build. I coordinate day-to-day development and own major features from requirements to delivery.',
      groups: [
        {
          title: 'Leading the team',
          items: [
            'Coordinate a team of 4–5 developers, assigning tasks and tracking development progress.',
            'Review pull requests and provide technical guidance.',
            'Mentor junior developers and help them resolve technical challenges.',
            'Take part in client calls and technical discussions to understand requirements and coordinate implementation.',
          ],
        },
        {
          title: 'Building the product',
          items: [
            'Own major features from requirement analysis through implementation, debugging and delivery.',
            'Develop and maintain production web applications with React.js, TypeScript, Node.js, NestJS and PostgreSQL.',
            'Build frontend features, backend services, REST APIs, database operations and reusable UI components.',
          ],
        },
      ],
    },
    {
      title: 'Software Engineer',
      period: 'June 2022 – October 2026',
      summary:
        'Where I built my foundation in full-stack development, working on web applications across different domains.',
      groups: [
        {
          title: 'Foundation',
          items: [
            'Developed and maintained web applications using React.js, TypeScript, JavaScript, Node.js, NestJS and PostgreSQL.',
            'Built REST APIs, worked on database design and contributed to frontend architecture.',
            'Implemented third-party integrations.',
            'Took on growing ownership of features, from application fixes to end-to-end feature development.',
          ],
        },
      ],
    },
  ],
}

export const promotion = {
  label: 'Promoted to Senior Software Engineer',
  date: 'November 2026',
}
