import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { journey } from '../data/journey'
import { classNames } from '../utils/classNames'

export function Journey() {
  return (
    <Section id="journey">
      <SectionHeading
        id="journey"
        index="02"
        label="Journey"
        title="How I got here."
        description="From learning software development to starting my career, and then into a senior role."
      />

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-[11px] right-[16.6%] left-[16.6%] hidden h-px bg-line-strong md:block"
        />
        <ol className="grid md:grid-cols-3 md:gap-8">
          {journey.map((step, stepIndex) => (
            <li
              key={step.title}
              className={classNames(
                'relative border-l border-line-strong pb-12 pl-8 md:border-l-0 md:pb-0 md:pl-0',
                stepIndex === journey.length - 1 && 'pb-0',
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  'absolute top-0 left-0 flex size-[23px] -translate-x-1/2 items-center justify-center rounded-full border bg-bg md:relative md:mb-8 md:translate-x-0',
                  step.current ? 'border-accent' : 'border-line-strong',
                )}
              >
                <span className={classNames('size-2 rounded-full', step.current ? 'bg-accent' : 'bg-subtle')} />
              </span>

              <Reveal delay={stepIndex * 0.08}>
                <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-accent">{String(stepIndex + 1).padStart(2, '0')}</span>
                  <span>{step.phase}</span>
                  {step.current && (
                    <span className="rounded-full border border-accent/40 bg-accent-soft px-2 py-0.5 text-[0.62rem] tracking-wider text-accent">
                      Now
                    </span>
                  )}
                </p>
                <h3 className="mt-4 text-title font-medium">{step.title}</h3>
                <p className="mt-2 text-sm text-fg/80">{step.place}</p>
                {step.period && <p className="mt-1 font-mono text-sm text-muted">{step.period}</p>}
                <p className="mt-4 max-w-sm leading-relaxed text-muted text-pretty">{step.description}</p>
                {step.note && (
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-subtle text-pretty">{step.note}</p>
                )}
                {step.href && (
                  <Link
                    to={step.href}
                    className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-fg"
                  >
                    See the role
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className="text-accent transition-transform group-hover/link:translate-x-0.5 motion-reduce:transform-none"
                    />
                  </Link>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
