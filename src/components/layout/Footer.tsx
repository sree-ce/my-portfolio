import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router'
import { site } from '../../data/site'
import { GitHubIcon, LinkedInIcon, LogoMark } from '../ui/icons'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size={20} />
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. Designed and built by me.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <GitHubIcon />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <LinkedInIcon />
          </a>
          <span aria-hidden="true" className="mx-2 h-5 w-px bg-line-strong" />
          <Link
            to="#top"
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none"
            />
          </Link>
        </div>
      </Container>
    </footer>
  )
}
