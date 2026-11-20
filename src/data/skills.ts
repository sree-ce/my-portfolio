export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript ES6+',
      'Redux Toolkit',
      'RTK Query',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'REST API Development'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'TypeORM', 'Amazon RDS'],
  },
  {
    title: 'Cloud & AWS',
    skills: ['AWS Lambda', 'Amazon EC2', 'Amazon S3', 'AWS Amplify'],
  },
  {
    title: 'Tools & Practices',
    skills: [
      'Git',
      'GitHub',
      'CI/CD',
      'Code Reviews',
      'Agile Development',
      'Clean Code',
      'Technical Mentoring',
      'Team Coordination',
    ],
  },
]
