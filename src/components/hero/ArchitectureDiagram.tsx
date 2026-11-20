import { m as motion } from 'motion/react'
import { easeOutSoft } from '../../utils/motion'

const layers = [
  { y: 24, order: '01', name: 'Interface', technologies: 'React · TypeScript' },
  { y: 206, order: '02', name: 'Services', technologies: 'Node.js · NestJS' },
  { y: 388, order: '03', name: 'Data', technologies: 'PostgreSQL · TypeORM' },
] as const

const interfaceNodes = [
  { x: 40, label: 'Views' },
  { x: 180, label: 'Components' },
  { x: 320, label: 'State' },
] as const

const serviceNodes = [
  { x: 70, label: 'REST API' },
  { x: 260, label: 'Business logic' },
] as const

const connectorPaths = [
  'M100 138 V200 H145 V262',
  'M240 138 V200 H145 V262',
  'M380 138 V200 H335 V262',
  'M220 290 H260',
  'M145 318 V380 H200 V441',
  'M335 318 V380 H280 V441',
] as const

const junctionDots = [
  [100, 138],
  [240, 138],
  [380, 138],
  [145, 262],
  [335, 262],
] as const

const fadeInUp = (delay: number) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOutSoft, delay },
})

export function ArchitectureDiagram() {
  return (
    <figure className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/60">
        <div
          aria-hidden="true"
          className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
        <svg
          viewBox="0 0 480 560"
          role="img"
          aria-label="Illustration of a web application in three layers: interface, services and data, connected from top to bottom."
          className="relative block h-auto w-full"
        >
          {layers.map((layer, layerIndex) => (
            <motion.g key={layer.name} {...fadeInUp(0.25 + layerIndex * 0.12)}>
              <rect
                x="16"
                y={layer.y}
                width="448"
                height="150"
                rx="12"
                className="fill-bg/40 stroke-line-strong"
                strokeDasharray="3 5"
              />
              <text x="36" y={layer.y + 28} className="fill-subtle font-mono" fontSize="10.5" letterSpacing="1.5">
                {layer.order} {layer.name.toUpperCase()}
              </text>
              <text x="444" y={layer.y + 28} textAnchor="end" className="fill-muted font-mono" fontSize="10.5">
                {layer.technologies}
              </text>
            </motion.g>
          ))}

          {connectorPaths.map((connectorPath) => (
            <path key={connectorPath} d={connectorPath} fill="none" className="stroke-line-strong" strokeWidth="1.25" />
          ))}
          {connectorPaths.map((connectorPath, connectorIndex) => (
            <motion.path
              key={`flow-${connectorPath}`}
              d={connectorPath}
              fill="none"
              className="stroke-accent"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.9 + connectorIndex * 0.12 }}
            />
          ))}

          <motion.g {...fadeInUp(0.45)}>
            {interfaceNodes.map((node) => (
              <g key={node.label}>
                <rect x={node.x} y="82" width="120" height="56" rx="8" className="fill-surface-2 stroke-line-strong" />
                <rect x={node.x + 14} y="96" width="22" height="4" rx="2" className="fill-fg/25" />
                <text x={node.x + 14} y="124" className="fill-fg" fontSize="13" fontWeight="500">
                  {node.label}
                </text>
              </g>
            ))}
          </motion.g>

          <motion.g {...fadeInUp(0.6)}>
            {serviceNodes.map((node, nodeIndex) => (
              <g key={node.label}>
                <rect
                  x={node.x}
                  y="262"
                  width="150"
                  height="56"
                  rx="8"
                  className={nodeIndex === 0 ? 'fill-accent-soft stroke-accent' : 'fill-surface-2 stroke-line-strong'}
                />
                <text x={node.x + 75} y="295" textAnchor="middle" className="fill-fg" fontSize="13" fontWeight="500">
                  {node.label}
                </text>
              </g>
            ))}
          </motion.g>

          <motion.g {...fadeInUp(0.75)}>
            <path d="M156 452 V500 A84 12 0 0 0 324 500 V452" className="fill-surface-2 stroke-line-strong" />
            <ellipse cx="240" cy="452" rx="84" ry="12" className="fill-surface stroke-line-strong" />
            <path d="M156 474 A84 12 0 0 0 324 474" fill="none" className="stroke-line" />
            <text x="240" y="494" textAnchor="middle" className="fill-fg" fontSize="13" fontWeight="500">
              PostgreSQL
            </text>
          </motion.g>

          {junctionDots.map(([dotX, dotY]) => (
            <motion.circle key={`${dotX}-${dotY}`} cx={dotX} cy={dotY} r="2.5" className="fill-accent" {...fadeInUp(1.1)} />
          ))}
        </svg>
      </div>
      <figcaption className="eyebrow mt-4 flex items-center justify-between gap-4">
        <span>Fig. 01: Interface to database</span>
        <span className="hidden sm:inline">Full-stack scope</span>
      </figcaption>
    </figure>
  )
}
