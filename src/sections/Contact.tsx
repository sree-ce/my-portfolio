import { useEffect, useState, type ReactNode } from 'react'
import { ArrowUpRight, Check, Copy, Download, MapPin } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { buttonClassNames } from '../components/ui/button'
import { GitHubIcon, LinkedInIcon } from '../components/ui/icons'
import { Reveal } from '../components/ui/Reveal'
import { ResumeLink } from '../components/ui/ResumeLink'
import { site } from '../data/site'

const contactChannels = [
  {
    label: 'LinkedIn',
    detail: 'linkedin.com/in/sreekuttymr',
    href: site.linkedin,
    icon: <LinkedInIcon />,
  },
  {
    label: 'GitHub',
    detail: 'github.com/sree-ce',
    href: site.github,
    icon: <GitHubIcon />,
  },
] as const

function ChannelMark({ icon, interactive = false }: { icon: ReactNode; interactive?: boolean }) {
  return (
    <span
      className={`flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong ${
        interactive
          ? 'text-muted transition-colors group-hover:border-accent group-hover:text-accent'
          : 'text-accent'
      }`}
    >
      {icon}
    </span>
  )
}

function ChannelRow({
  icon,
  label,
  detail,
  trailing,
}: {
  icon: ReactNode
  label: string
  detail: string
  trailing?: ReactNode
}) {
  return (
    <>
      <ChannelMark icon={icon} interactive />
      <span className="min-w-0">
        <span className="block text-sm font-medium text-fg">{label}</span>
        <span className="mt-0.5 block truncate text-xs text-muted">{detail}</span>
      </span>
      <span className="ml-auto text-subtle transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent motion-reduce:transform-none">
        {trailing ?? <ArrowUpRight size={16} aria-hidden="true" />}
      </span>
    </>
  )
}

const channelClassName = 'group flex items-center gap-3 px-6 py-4 transition-colors hover:bg-bg'

export function Contact() {
  const [isEmailCopied, setIsEmailCopied] = useState(false)
  const canCopyEmail = typeof navigator !== 'undefined' && Boolean(navigator.clipboard)

  useEffect(() => {
    if (!isEmailCopied) return
    const resetTimer = setTimeout(() => setIsEmailCopied(false), 2200)
    return () => clearTimeout(resetTimer)
  }, [isEmailCopied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setIsEmailCopied(true)
    } catch {
      setIsEmailCopied(false)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <Container className="relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent">08</span>
            <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            <span>Contact</span>
          </p>
          <h2 id="contact-heading" className="mt-4 max-w-[20ch] text-heading font-medium text-balance">
            Have an interesting opportunity?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted text-pretty">
            I’m open to exploring opportunities where I can contribute, grow and build meaningful software.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex flex-col gap-5 px-6 py-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="eyebrow">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-xl font-medium tracking-tight break-words text-fg transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`mailto:${site.email}`} className={buttonClassNames('primary', 'sm')}>
                Email me
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              {canCopyEmail && (
                <button type="button" onClick={copyEmail} className={buttonClassNames('secondary', 'sm')}>
                  {isEmailCopied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                  {isEmailCopied ? 'Copied' : 'Copy address'}
                  <span className="sr-only"> email address</span>
                </button>
              )}
              <span role="status" className="sr-only">
                {isEmailCopied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>
          </div>

          <ul
            className={`divide-y divide-line border-t border-line lg:grid lg:divide-y-0 ${
              __RESUME_AVAILABLE__ ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
            }`}
          >
            <li className="flex items-center gap-3 px-6 py-4 lg:border-r lg:border-line">
              <ChannelMark icon={<MapPin size={16} aria-hidden="true" />} />
              <span className="min-w-0">
                <span className="block text-sm font-medium text-fg">{site.location}</span>
                <span className="mt-0.5 block text-xs text-muted">{site.jobTitle}</span>
              </span>
            </li>
            {contactChannels.map((channel) => (
              <li key={channel.label} className="lg:border-r lg:border-line lg:last:border-r-0">
                <a href={channel.href} target="_blank" rel="noreferrer" className={channelClassName}>
                  <ChannelRow icon={channel.icon} label={channel.label} detail={channel.detail} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            {__RESUME_AVAILABLE__ && (
              <li className="lg:border-r lg:border-line lg:last:border-r-0">
                <ResumeLink className={channelClassName}>
                  <ChannelRow icon={<Download size={16} aria-hidden="true" />} label="Resume" detail="Download as PDF" />
                </ResumeLink>
              </li>
            )}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
