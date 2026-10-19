//* === Components === *//
import SectionHeader from './SectionHeader/SectionHeader'
import Description from './Description/Description'

//* === Styles & Utils === *//
import styles from './About.module.scss'
import {
  letterAnimation,
  lineAnimation,
  buttonAnimation,
  stagger,
} from '@/lib/motion'

const letterTimeline = stagger(0.05)

export default function About() {
  const text: string[] = ['About']
  return (
    <section className={styles.container}>
      <SectionHeader
        text={text}
        animation={letterAnimation}
        timeline={letterTimeline}
      />
      <Description
        animation={{ lineAnimation, buttonAnimation }}
        timeline={letterTimeline}
      />
    </section>
  )
}
