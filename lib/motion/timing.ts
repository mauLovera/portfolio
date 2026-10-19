import { duration } from './tokens'

//* === Timing helpers === *//
// Derive when things happen from the content, instead of hand-calculating delays.

export interface Timing {
  // Seconds before the first child starts
  delay?: number
  // Seconds between children
  stagger: number
}

// When the child at `index` starts animating
export const staggerStart = (index: number, { delay = 0, stagger }: Timing) =>
  delay + index * stagger

// When the last of `count` staggered children finishes
export const staggerEnd = (
  count: number,
  timing: Timing,
  childDuration: number = duration.base
) => staggerStart(Math.max(count - 1, 0), timing) + childDuration
