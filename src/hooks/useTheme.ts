import { useCallback, useEffect, useState } from 'react'
import { prefersReducedMotion } from '../utils/motion'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const lightSchemeQuery = '(prefers-color-scheme: light)'

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    return
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useEffect(() => {
    const schemeQuery = window.matchMedia(lightSchemeQuery)
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (readStoredTheme()) return
      const systemTheme: Theme = event.matches ? 'light' : 'dark'
      applyTheme(systemTheme)
      setTheme(systemTheme)
    }
    schemeQuery.addEventListener('change', handleSystemThemeChange)
    return () => schemeQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    saveTheme(nextTheme)
    const applyNextTheme = () => {
      applyTheme(nextTheme)
      setTheme(nextTheme)
    }
    if (document.startViewTransition && !prefersReducedMotion()) {
      document.startViewTransition(applyNextTheme)
    } else {
      applyNextTheme()
    }
  }, [theme])

  return { theme, toggleTheme }
}
