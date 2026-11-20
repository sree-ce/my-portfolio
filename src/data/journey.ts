export interface JourneyStep {
  phase: string
  title: string
  place: string
  period?: string
  description: string
  note?: string
  current?: boolean
  href?: string
}

export const journey: JourneyStep[] = [
  {
    phase: 'Learning',
    title: 'Brototype',
    place: 'Ex-student',
    description:
      'An important part of how I moved into software development. I learned here through practical work, before starting my professional career.',
    note: 'A learning milestone. Not a job, and not a formal qualification.',
  },
  {
    phase: 'First role',
    title: 'Software Engineer',
    place: 'AptlyLabs India Pvt. Ltd.',
    period: 'June 2022 – October 2026',
    description:
      'Where my professional career began: developing and maintaining web applications, and taking on more of the work as I grew.',
    href: '/#experience',
  },
  {
    phase: 'Senior role',
    title: 'Senior Software Engineer',
    place: 'AptlyLabs India Pvt. Ltd.',
    period: 'November 2026 – Present',
    current: true,
    description:
      'Progressed into technical ownership, team coordination, mentoring and continued development responsibilities.',
    href: '/#experience',
  },
]
