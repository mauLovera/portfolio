//* === Styles & Utils === *//
import { m, Variants } from 'framer-motion'
import styles from './SectionHeader.module.scss'

interface Props {
  timeline: Variants
  animation: {
    lineAnimation: Variants
    letterAnimation: Variants
  }
}

export default function SectionHeader({ timeline, animation }: Props) {
  const text: string[] = ['Selected', ' Projects']
  return (
    <m.h2
      aria-label={text.join('')}
      variants={timeline}
      initial="initial"
      whileInView={'animate'}
      viewport={{ once : true }}
      className={styles.container}
    >
      {[...text[0]].map((letter, idx) => (
        <m.span aria-hidden key={idx} variants={animation.letterAnimation}>
          {letter}
        </m.span>
      ))}
      <span className={styles.spaced} />
      {[...text[1]].map((letter, idx) => (
        <m.span aria-hidden key={idx} variants={animation.letterAnimation}>
          {letter}
        </m.span>
      ))}
    </m.h2>
  )
}
