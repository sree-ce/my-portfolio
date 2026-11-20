import { classNames } from '../../utils/classNames'

export function StackList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul aria-label="Technologies" className={classNames('flex flex-wrap gap-1.5', className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] leading-none text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
