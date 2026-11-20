import { classNames } from '../../utils/classNames'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md'

const baseClassName =
  'group/button inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 ease-out-soft active:scale-[0.98] motion-reduce:active:scale-100'

const variantClassNames: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-fg hover:bg-fg hover:text-bg',
  secondary: 'border border-line-strong text-fg hover:border-fg/60 hover:bg-surface',
  ghost: 'text-muted hover:text-fg',
}

const sizeClassNames: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-12 px-6 text-[0.95rem]',
}

export function buttonClassNames(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className?: string) {
  return classNames(
    baseClassName,
    variantClassNames[variant],
    variant === 'ghost' ? 'h-12 px-1 text-[0.95rem]' : sizeClassNames[size],
    className,
  )
}
