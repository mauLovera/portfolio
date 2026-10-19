//* === Styles & Utils === *//
import { m, Variants } from 'framer-motion'
import styles from './SectionHeader.module.scss'

interface Props {
  text: string[]
  animation: Variants
  timeline: Variants
}

export default function SectionHeader({ text, animation, timeline }: Props) {
  return (
    <m.h2
      aria-label={text.join('')}
      variants={timeline}
      initial="initial"
      whileInView={'animate'}
      viewport={{ once: true }}
      className={styles.container}
    >
      {[...text[0]].map((letter, idx) => (
        <m.span aria-hidden variants={animation} key={idx}>
          {letter}
        </m.span>
      ))}
    </m.h2>
  )
}
