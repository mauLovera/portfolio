//* === Components === *//
import SplitText from '@/components/common/motion/SplitText/SplitText'

//* === Styles & Utils === *//
import styles from './SectionHeader.module.scss'
import { stagger } from '@/lib/motion'

interface Props {
  title: string
}

export default function SectionHeader({ title }: Props) {
  return (
    <SplitText
      as="h1"
      className={styles.container}
      id={title.length > 10 ? styles.large : undefined}
      timing={{ stagger: stagger.heroLetter }}
      text={title}
    />
  )
}
