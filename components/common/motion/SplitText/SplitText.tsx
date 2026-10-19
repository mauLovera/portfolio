//* === Styles & Utils === *//
import { m } from 'framer-motion'
import styles from './SplitText.module.scss'
import {
  group,
  reveal,
  stagger,
  staggerEnd,
  triggerProps,
  wipe,
  type Timing,
  type Trigger,
} from '@/lib/motion'

const tags = { h1: m.h1, h2: m.h2, h3: m.h3, p: m.p, span: m.span }

const letter = reveal()

export interface Word {
  text: string
  className?: string
  // Draws a line under the word once every letter has landed
  underline?: boolean
}

interface Props {
  // A plain string is split on spaces; pass words to style or underline one
  text: string | Word[]
  as?: keyof typeof tags
  trigger?: Trigger
  timing?: Timing
  className?: string
  id?: string
}

// Reveals text letter by letter out of a mask. Screen readers get the whole
// text as one label instead of individual letters.
export default function SplitText({
  text,
  as = 'span',
  trigger = 'mount',
  timing = { stagger: stagger.letter },
  className,
  id,
}: Props) {
  const words: Word[] =
    typeof text === 'string'
      ? text.split(' ').map((word) => ({ text: word }))
      : text
  const label = words.map((word) => word.text).join(' ')
  const letterCount = words.reduce((sum, word) => sum + word.text.length, 0)

  // Spans can't carry a label, so the parent should label them instead
  const Tag = tags[as] as typeof m.h2

  return (
    <Tag
      className={`${styles.split} ${className ?? ''}`}
      id={id}
      aria-label={as === 'span' ? undefined : label}
      variants={group(timing)}
      {...triggerProps(trigger)}
    >
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          className={`${styles.word} ${word.className ?? ''}`}
          aria-hidden
        >
          {[...word.text].map((char, charIdx) => (
            <m.span key={charIdx} className={styles.letter} variants={letter}>
              {char}
            </m.span>
          ))}
          {word.underline && (
            <m.span
              className={styles.underline}
              variants={wipe(staggerEnd(letterCount, timing))}
            />
          )}
        </span>
      ))}
    </Tag>
  )
}
