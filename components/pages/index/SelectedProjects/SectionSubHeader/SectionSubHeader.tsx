//* === Components === *//
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'

//* === Styles & Utils === *//
import { m, Variants } from 'framer-motion'
import styles from './SectionSubHeader.module.scss'

interface Props {
  timeline: Variants
  animation: {
    lineAnimation: Variants
    buttonAnimation: Variants
  }
}

export default function SectionSubHeader({ timeline, animation }: Props) {
  const text: string[] = [
    'Below is a few of my most recent projects. ',
    'To view all of my work, head over to the ',
    'projects page.',
  ]
  return (
    <m.p
      variants={timeline}
      initial="initial"
      whileInView={'animate'}
      viewport={{ once: true }}
      className={styles.container}
    >
      <m.span variants={animation.lineAnimation}>
        {text[0]}
        {text[1]}
        <Link href={'/projects'} className={styles.accent}>
          {text[2]}
          <m.span
            className={styles.arrow}
            variants={animation.buttonAnimation}
          >
            <RiArrowRightCircleFill />
          </m.span>
        </Link>
      </m.span>
    </m.p>
  )
}
