import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router'
import { m as motion, type Variants } from 'motion/react'
import { Container } from '../components/layout/Container'
import { ArchitectureDiagram } from '../components/hero/ArchitectureDiagram'
import { buttonClassNames } from '../components/ui/button'
import { ResumeLink } from '../components/ui/ResumeLink'
import { site } from '../data/site'
import { easeOutSoft } from '../utils/motion'

const heroTechnologies = ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL']

const facts = [
  { label: 'Based in', value: 'Kochi, Kerala' },
  { label: 'Experience', value: '4+ years' },
  { label: 'Currently', value: 'Senior Software Engineer, AptlyLabs' },
  { label: 'Focus', value: 'Full-stack web applications' },
]

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutSoft } },
}

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div className="lg:col-span-7" variants={staggerContainer} initial="hidden" animate="show">
            <motion.p variants={fadeUpItem} className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping [animation-iteration-count:3]" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span className="text-fg">{site.jobTitle}</span>
              <span aria-hidden="true">/</span>
              <span>Kochi, India</span>
            </motion.p>

            <motion.h1 id="hero-heading" variants={fadeUpItem} className="mt-7 text-display font-medium text-balance">
              I build web applications{' '}
              <span className="text-muted">from the interface down to the database.</span>
            </motion.h1>

            <motion.p variants={fadeUpItem} className="mt-7 max-w-xl text-lead text-muted text-pretty">
              Senior Full-Stack Developer with 4+ years of experience building and maintaining modern web
              applications. I enjoy owning features end-to-end, solving technical challenges and helping teams
              deliver reliable software.
            </motion.p>

            <motion.ul
              variants={fadeUpItem}
              aria-label="Core technologies"
              className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.8rem] text-fg/80"
            >
              {heroTechnologies.map((technology, technologyIndex) => (
                <li key={technology} className="flex items-center gap-3">
                  {technologyIndex > 0 && (
                    <span aria-hidden="true" className="text-subtle">
                      ·
                    </span>
                  )}
                  {technology}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUpItem} className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/#projects" className={buttonClassNames('primary')}>
                Explore my work
                <ArrowDown
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover/button:translate-y-0.5 motion-reduce:transform-none"
                />
              </Link>
              <ResumeLink className={buttonClassNames('secondary')}>
                <Download size={16} aria-hidden="true" />
                Download resume
              </ResumeLink>
              <Link to="/#contact" className={buttonClassNames('ghost', 'md', 'ml-1')}>
                Contact me
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover/button:translate-x-0.5 motion-reduce:transform-none"
                />
              </Link>
            </motion.div>
          </motion.div>

          <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <ArchitectureDiagram />
          </div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-28 lg:grid-cols-4 lg:gap-x-10"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="border-t border-line-strong pt-4">
              <dt className="eyebrow">{fact.label}</dt>
              <dd className="mt-2 text-sm text-fg sm:text-[0.95rem]">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  )
}
