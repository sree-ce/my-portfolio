import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'
import { Container } from '../components/layout/Container'
import { buttonClassNames } from '../components/ui/button'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export function NotFound({ message = 'This page doesn’t exist or may have moved.' }: { message?: string }) {
  useDocumentMeta('Page not found')

  return (
    <Container className="flex min-h-[80dvh] flex-col justify-center pt-28 pb-20">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-6 text-display font-medium">Page not found.</h1>
      <p className="mt-6 max-w-md text-lead text-muted">{message}</p>
      <div className="mt-10">
        <Link to="/" className={buttonClassNames('primary')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </Container>
  )
}
