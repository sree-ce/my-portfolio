import type { JSX } from 'react'
import type { ProjectVisualKind } from '../../data/types'
import { classNames } from '../../utils/classNames'

const panelClass = 'fill-surface stroke-line-strong'
const tileClass = 'fill-surface-2 stroke-line-strong'
const labelClass = 'fill-fg'
const metaClass = 'fill-subtle font-mono'

function renderHrmsIllustration() {
  const approvalSteps = [
    { y: 74, title: 'Leave request', state: 'Submitted' },
    { y: 168, title: 'Review', state: 'Pending', active: true },
    { y: 262, title: 'Approved', state: 'Done', done: true },
  ]
  const roleNames = ['Employee', 'Manager', 'HR', 'Admin']
  const permissionColumns = ['View', 'Edit', 'Approve', 'Admin']
  const permissionGrants = [
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 1, 1, 0],
    [1, 1, 1, 1],
  ]
  return (
    <>
      <rect x="36" y="44" width="248" height="312" rx="12" className={panelClass} />
      <text x="56" y="66" className={metaClass} fontSize="10" letterSpacing="1.2">
        APPROVAL FLOW
      </text>
      <path d="M160 138 V168 M160 232 V262" className="stroke-line-strong" strokeDasharray="3 4" />
      {approvalSteps.map((step) => (
        <g key={step.title}>
          <rect
            x="56"
            y={step.y}
            width="208"
            height="64"
            rx="8"
            className={step.active ? 'fill-accent-soft stroke-accent' : tileClass}
          />
          <circle cx="82" cy={step.y + 32} r="11" className={step.done ? 'fill-accent' : 'fill-fg/12'} />
          {step.done && (
            <path
              d={`M77 ${step.y + 32} l3.5 3.5 l6.5 -7`}
              fill="none"
              className="stroke-accent-fg"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <text x="104" y={step.y + 29} className={labelClass} fontSize="13" fontWeight="500">
            {step.title}
          </text>
          <text x="104" y={step.y + 46} className={metaClass} fontSize="10">
            {step.state}
          </text>
        </g>
      ))}

      <rect x="304" y="44" width="260" height="312" rx="12" className={panelClass} />
      <text x="324" y="66" className={metaClass} fontSize="10" letterSpacing="1.2">
        ROLES & PERMISSIONS
      </text>
      {permissionColumns.map((column, columnIndex) => (
        <text key={column} x={410 + columnIndex * 40} y="104" textAnchor="middle" className={metaClass} fontSize="9">
          {column}
        </text>
      ))}
      {roleNames.map((role, roleIndex) => (
        <g key={role}>
          <line
            x1="324"
            x2="544"
            y1={128 + roleIndex * 52}
            y2={128 + roleIndex * 52}
            className="stroke-line"
          />
          <text x="324" y={158 + roleIndex * 52} className="fill-muted" fontSize="12">
            {role}
          </text>
          {permissionGrants[roleIndex].map((isGranted, columnIndex) => (
            <rect
              key={columnIndex}
              x={401 + columnIndex * 40}
              y={144 + roleIndex * 52}
              width="18"
              height="18"
              rx="4"
              className={isGranted ? 'fill-accent' : 'fill-none stroke-line-strong'}
            />
          ))}
        </g>
      ))}
    </>
  )
}

function renderStreetLogicIllustration() {
  const uploads = [
    { progress: 1, status: 'Complete' },
    { progress: 0.64, status: '64%' },
    { progress: 0.4, status: 'Retrying', isRetrying: true },
    { progress: 0, status: 'Queued' },
  ]
  return (
    <>
      <rect x="64" y="40" width="472" height="320" rx="12" className={panelClass} />
      <text x="88" y="74" className={labelClass} fontSize="14" fontWeight="500">
        Video uploads
      </text>
      <text x="512" y="74" textAnchor="end" className={metaClass} fontSize="10" letterSpacing="1.2">
        LARGE FILES
      </text>
      <line x1="88" x2="512" y1="92" y2="92" className="stroke-line" />
      {uploads.map((upload, uploadIndex) => {
        const rowY = 110 + uploadIndex * 60
        return (
          <g key={upload.status}>
            <rect x="88" y={rowY} width="34" height="42" rx="5" className={tileClass} />
            <path d={`M100 ${rowY + 14} v14 l11 -7 z`} className="fill-fg/40" />
            <rect x="138" y={rowY + 8} width={150 - uploadIndex * 18} height="6" rx="3" className="fill-fg/35" />
            <rect x="138" y={rowY + 26} width="300" height="6" rx="3" className="fill-fg/10" />
            {upload.progress > 0 && (
              <rect
                x="138"
                y={rowY + 26}
                width={300 * upload.progress}
                height="6"
                rx="3"
                className={upload.isRetrying ? 'fill-fg/35' : 'fill-accent'}
              />
            )}
            {upload.isRetrying && (
              <path
                d={`M${505} ${rowY + 6} a7 7 0 1 1 -6 -3.4 M${499} ${rowY + 0.5} v4.2 h4.2`}
                fill="none"
                className="stroke-muted"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
            <text
              x="512"
              y={rowY + 32}
              textAnchor="end"
              className={upload.progress === 1 ? 'fill-accent font-mono' : metaClass}
              fontSize="10.5"
            >
              {upload.status}
            </text>
          </g>
        )
      })}
    </>
  )
}

function renderBingoIllustration() {
  const boardRows = ['1101', '0112', '1011', '0101']
  return (
    <>
      <rect x="64" y="44" width="304" height="312" rx="12" className={panelClass} />
      <text x="88" y="72" className={metaClass} fontSize="10" letterSpacing="1.2">
        EVENT BOARD
      </text>
      {boardRows.map((row, rowIndex) =>
        row.split('').map((cell, columnIndex) => {
          const cellX = 88 + columnIndex * 66
          const cellY = 90 + rowIndex * 64
          const cellKey = `${rowIndex}-${columnIndex}`
          if (cell === '0') {
            return (
              <rect
                key={cellKey}
                x={cellX}
                y={cellY}
                width="56"
                height="56"
                rx="6"
                className="fill-none stroke-line-strong"
                strokeDasharray="3 4"
              />
            )
          }
          if (cell === '2') {
            return (
              <g key={cellKey}>
                <rect x={cellX} y={cellY} width="56" height="56" rx="6" className="fill-accent-soft stroke-accent" />
                <path
                  d={`M${cellX + 28} ${cellY + 19} v18 M${cellX + 19} ${cellY + 28} h18`}
                  className="stroke-accent"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            )
          }
          return (
            <g key={cellKey}>
              <rect x={cellX} y={cellY} width="56" height="56" rx="6" className={tileClass} />
              <circle cx={cellX + 38} cy={cellY + 17} r="5" className="fill-fg/25" />
              <path
                d={`M${cellX + 8} ${cellY + 46} l14 -16 l10 10 l7 -6 l11 12 z`}
                className="fill-fg/20"
              />
            </g>
          )
        }),
      )}

      <rect x="396" y="132" width="156" height="136" rx="12" className={panelClass} />
      <rect x="416" y="152" width="28" height="20" rx="4" className="fill-fg/15" />
      <text x="416" y="200" className="fill-muted" fontSize="12">
        One-time
      </text>
      <text x="416" y="220" className={labelClass} fontSize="15" fontWeight="500">
        Payment
      </text>
      <rect x="416" y="232" width="64" height="22" rx="11" className="fill-accent-soft stroke-accent" />
      <text x="448" y="247" textAnchor="middle" className="fill-accent font-mono" fontSize="10">
        Paid
      </text>
    </>
  )
}

function renderHumsumIllustration() {
  const cardYPositions = [60, 150, 240]
  return (
    <>
      {cardYPositions.map((cardY, cardIndex) => (
        <g key={cardY}>
          <rect x="48" y={cardY} width="268" height="76" rx="10" className={panelClass} />
          <circle
            cx="78"
            cy={cardY + 28}
            r="13"
            className={cardIndex === 0 ? 'fill-accent-soft stroke-accent' : 'fill-fg/12'}
          />
          {cardIndex === 0 && (
            <path d={`M72 ${cardY + 33} c0 -9 7 -12 12 -12 c0 8 -5 13 -12 12 z`} className="fill-accent" />
          )}
          <rect x="102" y={cardY + 20} width={120 - cardIndex * 20} height="6" rx="3" className="fill-fg/40" />
          <rect x="102" y={cardY + 34} width="70" height="5" rx="2.5" className="fill-fg/20" />
          <rect x="66" y={cardY + 54} width={200 - cardIndex * 30} height="5" rx="2.5" className="fill-fg/15" />
        </g>
      ))}

      <rect
        x="348"
        y="44"
        width="212"
        height="312"
        rx="12"
        className="fill-none stroke-line-strong"
        strokeDasharray="3 5"
      />
      <text x="366" y="70" className={metaClass} fontSize="10" letterSpacing="1.2">
        COMPONENTS
      </text>
      <rect x="366" y="86" width="176" height="128" rx="8" className={panelClass} />
      <text x="382" y="108" className={metaClass} fontSize="10">
        Feed
      </text>
      <rect x="382" y="120" width="144" height="36" rx="6" className={tileClass} />
      <rect x="382" y="164" width="144" height="36" rx="6" className={tileClass} />
      <text x="396" y="143" className="fill-muted font-mono" fontSize="10">
        PostCard
      </text>
      <text x="396" y="187" className="fill-muted font-mono" fontSize="10">
        PostCard
      </text>
      <rect x="366" y="226" width="176" height="112" rx="8" className={panelClass} />
      <text x="382" y="248" className={metaClass} fontSize="10">
        Profile
      </text>
      <rect x="382" y="262" width="144" height="10" rx="5" className="fill-fg/15" />
      <rect x="382" y="290" width="68" height="30" rx="15" className="fill-accent-soft stroke-accent" />
      <rect x="458" y="290" width="68" height="30" rx="15" className={tileClass} />
      <text x="416" y="309" textAnchor="middle" className="fill-accent font-mono" fontSize="10">
        Button
      </text>
      <text x="492" y="309" textAnchor="middle" className="fill-muted font-mono" fontSize="10">
        Button
      </text>
    </>
  )
}

const illustrationRenderers: Record<ProjectVisualKind, () => JSX.Element> = {
  hrms: renderHrmsIllustration,
  streetlogic: renderStreetLogicIllustration,
  bingo: renderBingoIllustration,
  humsum: renderHumsumIllustration,
}

interface ProjectVisualProps {
  kind: ProjectVisualKind
  className?: string
  interactive?: boolean
}

export function ProjectVisual({ kind, className, interactive = false }: ProjectVisualProps) {
  return (
    <div className={classNames('relative overflow-hidden bg-surface-2/60', className)}>
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"
      />
      <svg
        viewBox="0 0 600 400"
        aria-hidden="true"
        className={classNames(
          'relative h-full w-full px-3 pt-11 pb-3 sm:px-6 sm:pb-6',
          interactive &&
            'transition-transform duration-700 ease-out-soft group-hover:scale-[1.03] motion-reduce:transform-none',
        )}
      >
        {illustrationRenderers[kind]()}
      </svg>
      <span className="eyebrow absolute top-4 left-4 rounded-full border border-line bg-bg/70 px-2.5 py-1 text-[0.65rem] backdrop-blur">
        Illustrative
      </span>
    </div>
  )
}
