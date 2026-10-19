import { stagger, staggerStart, type Timing } from '@/lib/motion'

//* === Landing intro === *//
// The copy and its choreography live together because the timing is derived
// from the copy: change the name and everything downstream re-times itself.

export const hero = {
  greeting: "I'm",
  name: 'Mauricio.',
  lines: ['A full stack web', 'developer based', 'in the US.'],
}

const letterCount = (hero.greeting + hero.name).length
const letters: Timing = { delay: 0.4, stagger: stagger.heroLetter }
// The moment the last letter of the name starts to rise
const lastLetterStarts = staggerStart(letterCount - 1, letters)

export const intro = {
  letters,
  // The underline is timed by SplitText from `letters` (after the last letter lands)
  lines: { delay: lastLetterStarts, stagger: stagger.line } satisfies Timing,
  // The home page header slides in alongside the lines
  header: lastLetterStarts,
}
