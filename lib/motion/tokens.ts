//* === Motion tokens === *//
// The only place raw motion values live. Components reference these by name,
// the same way styles reference the palette.

export const ease = {
  // Strong ease-out used for every reveal on the site
  out: [0.6, 0.01, 0.05, 0.95],
} as const

// Seconds
export const duration = {
  fast: 0.6,
  medium: 0.8,
  base: 1,
  slow: 1.2,
} as const

// Seconds between siblings
export const stagger = {
  letter: 0.05,
  heroLetter: 0.1,
  line: 0.1,
} as const

// Seconds secondary content (an arrow, a form) waits after its primary content starts
export const delay = {
  follow: 0.5,
} as const

export const distance = {
  // Percent of the element's own height, so it clears its mask at any font size
  reveal: '110%',
  // Pixels, for elements that fade in rather than rise out of a mask
  nudge: 24,
} as const

export type Duration = keyof typeof duration
