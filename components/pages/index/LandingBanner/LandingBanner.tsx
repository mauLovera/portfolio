//* === Styles & Utils === *//
import styles from './LandingBanner.module.scss'
import { m } from 'framer-motion'
import { letterAnimation, rise, stagger, underlineAnimation } from '@/lib/motion'

//* === Variants === //
// Letters: original timing. The underline's own delay is absolute (it ignores the
// stagger), timed to start as the last letter lands: 0.4 + 11 * 0.1 + 1s
const banner = stagger(0.1, 0.4)
const lines = stagger(0.15, 1.6)
const lineAnimation = rise(650, 1.2)
const underline = underlineAnimation(2.5)

const top: string[] = ["I'm", 'Mauricio.']
const bottom: string[] = ['A full stack web', 'developer based', 'in the US.']

export default function LandingBanner() {
  return (
    <section className={styles.container}>
      <h1 aria-label={`${top.join(' ')} ${bottom.join(' ')}`}>
        <TopRow />
        <BottomRows />
      </h1>
    </section>
  )
}

function TopRow() {
  return (
    <m.span
      className={styles.top}
      variants={banner}
      initial="initial"
      animate="animate"
      aria-hidden
    >
      {[...top[0]].map((letter, idx) => (
        <m.span key={idx} variants={letterAnimation}>
          {letter}
        </m.span>
      ))}

      {/* One wrapper so the underline spans the whole word, not each letter */}
      <span className={styles.accent}>
        {[...top[1]].map((letter, idx) => (
          <m.span key={idx} variants={letterAnimation}>
            {letter}
          </m.span>
        ))}
        <m.span className={styles.underline} variants={underline} />
      </span>
    </m.span>
  )
}

function BottomRows() {
  return (
    <m.span
      className={styles.bottom}
      variants={lines}
      initial="initial"
      animate="animate"
      aria-hidden
    >
      {bottom.map((line, idx) => (
        <m.span key={idx} variants={lineAnimation}>
          {line}
        </m.span>
      ))}
    </m.span>
  )
}
