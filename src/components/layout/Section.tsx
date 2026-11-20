import type { ReactNode } from 'react'
import { classNames } from '../../utils/classNames'
import { Container } from './Container'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  raised?: boolean
}

export function Section({ id, children, className, raised = false }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={classNames('py-24 md:py-32', raised && 'border-y border-line bg-surface', className)}
    >
      <Container>{children}</Container>
    </section>
  )
}
