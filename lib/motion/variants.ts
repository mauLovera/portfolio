import type { Variants } from 'framer-motion'
import { delay, distance, duration, ease, type Duration } from './tokens'
import type { Timing } from './timing'

//* === Variants === *//
// Every variant uses the same two labels, so any parent can drive any child.
// Note: an explicit `delay` on a child overrides its parent's stagger. Only
// variants that are meant to ignore the stagger (pop, wipe, timed reveals) set one.

export const HIDDEN = 'hidden'
export const VISIBLE = 'visible'

// Orchestrates children; has no visual change of its own
export const group = ({ stagger, delay: delayChildren = 0 }: Timing): Variants => ({
  [VISIBLE]: { transition: { staggerChildren: stagger, delayChildren } },
})

// Rises out of an overflow-hidden mask
export const reveal = ({
  speed = 'base',
  delay: start,
}: { speed?: Duration; delay?: number } = {}): Variants => ({
  [HIDDEN]: { y: distance.reveal },
  [VISIBLE]: {
    y: 0,
    transition: {
      ease: ease.out,
      duration: duration[speed],
      ...(start !== undefined && { delay: start }),
    },
  },
})

// Fades and nudges up; for elements that aren't masked (e.g. form fields)
export const fadeUp: Variants = {
  [HIDDEN]: { opacity: 0, y: distance.nudge },
  [VISIBLE]: {
    opacity: 1,
    y: 0,
    transition: { ease: ease.out, duration: duration.medium },
  },
}

// Scales in shortly after its parent starts (arrow icons)
export const pop: Variants = {
  [HIDDEN]: { scale: 0 },
  [VISIBLE]: {
    scale: 1,
    transition: { ease: ease.out, duration: duration.base, delay: delay.follow },
  },
}

// Draws left to right, starting at an absolute time
export const wipe = (start: number): Variants => ({
  [HIDDEN]: { scaleX: 0 },
  [VISIBLE]: {
    scaleX: 1,
    transition: { ease: ease.out, duration: duration.medium, delay: start },
  },
})

// Full-screen panel that unrolls from the top
export const curtain: Variants = {
  [HIDDEN]: { clipPath: 'inset(0 0 100% 0)' },
  [VISIBLE]: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { ease: ease.out, duration: duration.fast },
  },
  exit: {
    clipPath: 'inset(0 0 100% 0)',
    transition: { ease: ease.out, duration: duration.fast },
  },
}
