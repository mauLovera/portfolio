//* === Components === *//
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'

//* === Styles & Utils === *//
import styles from './Row.module.scss'
import { m, Variants } from 'framer-motion'

interface Props {
  title: string
  tech: string[]
  path: string
  timeline: Variants
  animation: {
    lineAnimation: Variants
    buttonAnimation: Variants
  }
  mouseEnter: (text: string) => void
  mouseExit: () => void
}

export default function Row({
  title,
  tech,
  path,
  timeline,
  animation,
  mouseEnter,
  mouseExit,
}: Props) {
  return (
    <Link
      href={path}
      className={styles.container}
      onMouseEnter={() => mouseEnter(title)}
      onMouseLeave={mouseExit}
    >
      <m.span
        className={styles.titleContainer}
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <m.span
          variants={animation.lineAnimation}
          className={styles.title}
        >
          {title}
        </m.span>
      </m.span>
      <m.span
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
        className={styles.techContainer}
      >
        <m.span variants={animation.lineAnimation} className={styles.tech}>
          {tech}
        </m.span>
      </m.span>
      <m.span
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
        className={styles.button}
      >
        <m.span
          variants={animation.buttonAnimation}
          className={styles.arrow}
        >
          <RiArrowRightCircleFill />
        </m.span>
      </m.span>
    </Link>
  )
}
