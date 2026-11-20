import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { prefersReducedMotion } from '../../utils/motion'

export function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    const isPageChange = previousPathname.current !== pathname
    previousPathname.current = pathname
    const scrollBehavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : isPageChange ? 'instant' : 'smooth'

    if (hash) {
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        target?.scrollIntoView({ behavior: scrollBehavior, block: 'start' })
      })
      return () => cancelAnimationFrame(frame)
    }

    if (isPageChange) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.getElementById('main')?.focus({ preventScroll: true })
    }
  }, [pathname, hash, key])

  return null
}
