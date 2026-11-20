import { useEffect } from 'react'
import { site } from '../data/site'

const defaultTitle = `${site.name} · ${site.jobTitle}`

export function useDocumentMeta(title?: string, description?: string) {
  useEffect(() => {
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = descriptionMeta?.content
    document.title = title ? `${title} · ${site.name}` : defaultTitle
    if (descriptionMeta && description) descriptionMeta.content = description

    return () => {
      document.title = defaultTitle
      if (descriptionMeta && previousDescription) descriptionMeta.content = previousDescription
    }
  }, [title, description])
}
