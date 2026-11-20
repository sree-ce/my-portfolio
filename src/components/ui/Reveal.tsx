import type { ReactNode } from 'react'
import { m as motion } from 'motion/react'
import { easeOutSoft } from '../../utils/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, ease: easeOutSoft, delay }}
    >
      {children}
    </motion.div>
  )
}
