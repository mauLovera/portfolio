import type { Variants } from 'framer-motion'

//* === Shared Framer Motion variants === *//

// Cubic-bezier x values must stay within 0–1; the old -0.05 was invalid
export const ease = [0.6, 0.01, 0.05, 0.95] as const

export const stagger = (staggerChildren: number, delayChildren = 0): Variants => ({
  animate: {
    transition: { staggerChildren, delayChildren },
  },
})

// Only set `delay` when asked: an explicit child delay (even 0) overrides the
// parent's staggerChildren/delayChildren, so letters would animate all at once
export const rise = (y: number, duration = 1, delay?: number): Variants => ({
  initial: { y },
  animate: {
    y: 0,
    transition: delay === undefined ? { ease, duration } : { ease, duration, delay },
  },
})

export const lineAnimation = rise(200)
export const letterAnimation = rise(400)

export const buttonAnimation: Variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: { ease, duration: 1, delay: 0.5 },
  },
}

export const underlineAnimation = (delay: number): Variants => ({
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { ease, duration: 0.8, delay },
  },
})
