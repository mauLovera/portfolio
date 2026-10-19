//* === Components === *//
import SectionHeader from './SectionHeader/SectionHeader'
import Description from './Description/Description'

//* === Styles & Utils === *//
import styles from './About.module.scss'

export default function About() {
  return (
    <section className={styles.container}>
      <SectionHeader />
      <Description />
    </section>
  )
}
