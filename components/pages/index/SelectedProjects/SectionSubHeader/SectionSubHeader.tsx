//* === Components === *//
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import Reveal from '@/components/common/motion/Reveal/Reveal'

//* === Styles & Utils === *//
import styles from './SectionSubHeader.module.scss'

export default function SectionSubHeader() {
  return (
    <Reveal as="p" className={styles.container}>
      <Reveal.Item>
        Below is a few of my most recent projects. To view all of my work, head
        over to the{' '}
        <Link href={'/projects'} className={styles.accent}>
          projects page.
          <Reveal.Pop className={styles.arrow}>
            <RiArrowRightCircleFill />
          </Reveal.Pop>
        </Link>
      </Reveal.Item>
    </Reveal>
  )
}
