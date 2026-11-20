export const easeOutSoft = [0.22, 1, 0.36, 1] as const

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
