import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  id: string
  index: string
  label: string
  title: ReactNode
  description?: ReactNode
}

export function SectionHeading({ id, index, label, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-12 lg:gap-8">
      <p className="eyebrow flex items-center gap-3 self-start lg:col-span-3 lg:pt-4">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
        <span>{label}</span>
      </p>
      <div className="lg:col-span-9">
        <h2 id={`${id}-heading`} className="max-w-[18ch] text-heading font-medium text-balance">
          {title}
        </h2>
        {description && <p className="mt-6 max-w-2xl text-lead text-muted text-pretty">{description}</p>}
      </div>
    </Reveal>
  )
}
