//* === Styles & Utils === *//
import { m } from 'framer-motion'
import type { ReactNode } from 'react'
import styles from './Reveal.module.scss'
import {
  group,
  pop,
  reveal,
  stagger,
  triggerProps,
  type Duration,
  type Timing,
  type Trigger,
} from '@/lib/motion'

const tags = { div: m.div, p: m.p, span: m.span, h2: m.h2, ul: m.ul }

interface RevealProps {
  children: ReactNode
  as?: keyof typeof tags
  trigger?: Trigger
  timing?: Timing
  className?: string
  'aria-hidden'?: boolean
}

// Starts its items, one after another, when `trigger` fires
function Reveal({
  children,
  as = 'div',
  trigger = 'inView',
  timing = { stagger: stagger.line },
  className,
  ...rest
}: RevealProps) {
  const Tag = tags[as] as typeof m.div

  return (
    <Tag
      className={className}
      variants={group(timing)}
      {...triggerProps(trigger)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

interface ItemProps {
  children: ReactNode
  speed?: Duration
  // Absolute start time; overrides the parent's stagger
  delay?: number
  className?: string
  maskClassName?: string
}

// A single line that rises out of its own mask
function Item({ children, speed, delay, className, maskClassName }: ItemProps) {
  return (
    <span className={`${styles.mask} ${maskClassName ?? ''}`}>
      <m.span
        className={`${styles.item} ${className ?? ''}`}
        variants={reveal({ speed, delay })}
      >
        {children}
      </m.span>
    </span>
  )
}

// Scales in shortly after its parent; for arrows and icons
function Pop({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.span className={className} variants={pop}>
      {children}
    </m.span>
  )
}

Reveal.Item = Item
Reveal.Pop = Pop

export default Reveal
