//* === Components === *//
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'

//* === Styles & Utils === *//
import { m, Variants } from 'framer-motion'
import styles from './Description.module.scss'

interface Props {
  timeline: Variants
  animation: {
    lineAnimation: Variants
    buttonAnimation: Variants
  }
}

export default function Description({ timeline, animation }: Props) {
  return (
    <div className={styles.container}>
      <m.p
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <m.span variants={animation.lineAnimation}>
          Hello, I{"'"}m a full stack web developer with a passion for
          programming and an eye for design.
        </m.span>
      </m.p>
      <m.p
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <m.span variants={animation.lineAnimation}>
          When I{"'"}m not programming, you can find me with a guitar in hand,
          trekking through the city, or building sand castles with moats.
        </m.span>
      </m.p>
      <m.p
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <m.span
          variants={animation.lineAnimation}
          className={styles.accent}
        >
          <Link href="/about" className={styles.accent}>
            <span>More</span>
            <m.span
              className={styles.arrow}
              variants={animation.buttonAnimation}
            >
              <RiArrowRightCircleFill />
            </m.span>
          </Link>
        </m.span>
      </m.p>
    </div>
  )
}
