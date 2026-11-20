import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { AnimatePresence, m as motion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { site } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { classNames } from '../../utils/classNames'
import { easeOutSoft } from '../../utils/motion'
import { buttonClassNames } from '../ui/button'
import { LogoMark } from '../ui/icons'
import { ResumeLink } from '../ui/ResumeLink'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Container } from './Container'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isScrolled = useScrolled()
  const activeSectionId = useActiveSection(sectionIds, isHome)
  const [menuState, setMenuState] = useState({ open: false, path: pathname })
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const isMenuOpen = menuState.open && menuState.path === pathname
  const setMenuOpen = (open: boolean) => setMenuState({ open, path: pathname })
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return
    const mainElement = document.getElementById('main')
    const footerElement = document.querySelector('footer')
    const previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    mainElement?.setAttribute('inert', '')
    footerElement?.setAttribute('inert', '')
    mobileMenuRef.current?.querySelector<HTMLElement>('a, button')?.focus()

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuState((state) => ({ ...state, open: false }))
        menuButtonRef.current?.focus()
      }
    }
    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const closeMenuOnDesktop = () => desktopQuery.matches && setMenuState((state) => ({ ...state, open: false }))

    document.addEventListener('keydown', handleEscapeKey)
    desktopQuery.addEventListener('change', closeMenuOnDesktop)
    return () => {
      document.body.style.overflow = previousBodyOverflow
      mainElement?.removeAttribute('inert')
      footerElement?.removeAttribute('inert')
      document.removeEventListener('keydown', handleEscapeKey)
      desktopQuery.removeEventListener('change', closeMenuOnDesktop)
    }
  }, [isMenuOpen])

  const isSolid = isScrolled || isMenuOpen

  return (
    <>
      <header
        className={classNames(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
          isSolid ? 'border-line bg-bg/80 backdrop-blur-xl' : 'border-transparent bg-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-[0.95rem] font-medium tracking-tight"
            aria-label={`${site.name}, home`}
          >
            <LogoMark />
            <span>{site.name}</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSectionId === item.id
                return (
                  <li key={item.id}>
                    <Link
                      to={`/#${item.id}`}
                      aria-current={isActive ? 'location' : undefined}
                      className={classNames(
                        'relative rounded-full px-3.5 py-2 text-sm transition-colors',
                        isActive ? 'text-fg' : 'text-muted hover:text-fg',
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={classNames(
                          'absolute inset-x-3.5 bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ease-out-soft',
                          isActive ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <ResumeLink className={classNames(buttonClassNames('secondary', 'sm'), 'hidden md:inline-flex')}>
              Resume
              <ArrowUpRight size={15} aria-hidden="true" />
            </ResumeLink>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg md:hidden"
          >
            <Container className="flex min-h-full flex-col justify-between py-8">
              <nav aria-label="Mobile">
                <ul className="divide-y divide-line border-y border-line">
                  {navItems.map((item, itemIndex) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * itemIndex, duration: 0.35, ease: easeOutSoft }}
                    >
                      <Link
                        to={`/#${item.id}`}
                        onClick={closeMenu}
                        className="flex items-baseline justify-between py-5 text-3xl font-medium tracking-tight"
                      >
                        {item.label}
                        <span className="eyebrow">0{itemIndex + 1}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="mt-10 flex flex-col gap-3">
                <ResumeLink className={buttonClassNames('primary')} onClick={closeMenu}>
                  Download resume
                </ResumeLink>
                <a href={`mailto:${site.email}`} className={buttonClassNames('secondary')}>
                  {site.email}
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
