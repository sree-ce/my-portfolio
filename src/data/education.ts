export interface EducationEntry {
  qualification: string
  abbreviation?: string
  institution: string
  period: string
  status?: string
  detail?: string
}

export const education: EducationEntry[] = [
  {
    qualification: 'Bachelor of Computer Applications',
    abbreviation: 'BCA',
    institution: 'Amrita Vishwa Vidyapeetham',
    period: 'Expected 2029',
    status: 'In progress',
  },
  {
    qualification: 'Diploma in Computer Engineering',
    institution: 'Government Engineering College, Chelad, Kothamangalam',
    period: '2018 – 2021',
    detail: 'GPA 9.3 / 10',
  },
]
