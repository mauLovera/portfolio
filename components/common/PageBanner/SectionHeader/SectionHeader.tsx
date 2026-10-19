import { m } from 'framer-motion'

//* === Styles & Utils === *//
import styles from './SectionHeader.module.scss'
import { letterAnimation, stagger } from '@/lib/motion'

const timeline = stagger(0.1, 0.1)

interface Props {
  title: string
}

export default function SectionHeader({ title }: Props) {
  const text: string[] = [`${title}`]
  return (
    <m.h1
      aria-label={title}
      className={styles.container}
      id={title.length > 10 ? styles.large : ''}
      variants={timeline}
      animate="animate"
      initial="initial"
    >
      {[...text[0]].map((letter, idx) => (
        <m.span aria-hidden key={idx} variants={letterAnimation}>
          {letter}
        </m.span>
      ))}
    </m.h1>
  )
}
