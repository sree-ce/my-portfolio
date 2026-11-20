import type { ReactNode } from 'react'
import { site } from '../../data/site'

interface ResumeLinkProps {
  className?: string
  children: ReactNode
  onClick?: () => void
}

export function ResumeLink({ className, children, onClick }: ResumeLinkProps) {
  if (!__RESUME_AVAILABLE__) return null
  return (
    <a href={site.resumePath} download={site.resumeFileName} className={className} onClick={onClick}>
      {children}
      <span className="sr-only"> (PDF)</span>
    </a>
  )
}
