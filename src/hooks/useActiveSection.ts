import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[], enabled = true): string | null {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSectionId(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    sectionElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sectionIds, enabled])

  return enabled ? activeSectionId : null
}
