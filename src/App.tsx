import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { LazyMotion, MotionConfig } from 'motion/react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollManager } from './components/layout/ScrollManager'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

const ProjectPage = lazy(() => import('./pages/projects/ProjectPage'))
const loadMotionFeatures = () => import('./utils/motionFeatures').then((motionFeaturesModule) => motionFeaturesModule.default)

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadMotionFeatures} strict>
        <ScrollManager />
        <div id="top" aria-hidden="true" />
        <a
          href="#main"
          className="sr-only rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-fg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Suspense fallback={<div className="min-h-dvh" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </LazyMotion>
    </MotionConfig>
  )
}
