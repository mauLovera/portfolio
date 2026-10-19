//* === Components === *//
import SplitText from '@/components/common/motion/SplitText/SplitText'

//* === Styles & Utils === *//
import styles from './SectionHeader.module.scss'

export default function SectionHeader() {
  return (
    <SplitText as="h2" className={styles.container} trigger="inView" text="About" />
  )
}
