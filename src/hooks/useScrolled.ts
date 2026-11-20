import { useEffect, useState } from 'react'

export function useScrolled(threshold = 8): boolean {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > threshold)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}
