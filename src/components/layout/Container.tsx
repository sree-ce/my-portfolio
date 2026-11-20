import type { ReactNode } from 'react'
import { classNames } from '../../utils/classNames'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={classNames('mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12', className)}>{children}</div>
}
