//* === Components === *//
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import Reveal from '@/components/common/motion/Reveal/Reveal'

//* === Styles & Utils === *//
import styles from './Row.module.scss'

interface Props {
  title: string
  tech: string[]
  path: string
  mouseEnter: (text: string) => void
  mouseExit: () => void
}

export default function Row({ title, tech, path, mouseEnter, mouseExit }: Props) {
  return (
    <Link
      href={path}
      className={styles.container}
      onMouseEnter={() => mouseEnter(title)}
      onMouseLeave={mouseExit}
    >
      <Reveal as="span" className={styles.titleContainer}>
        <Reveal.Item className={styles.title}>{title}</Reveal.Item>
      </Reveal>
      <Reveal as="span" className={styles.techContainer}>
        <Reveal.Item className={styles.tech}>{tech}</Reveal.Item>
      </Reveal>
      <Reveal as="span" className={styles.button}>
        <Reveal.Pop className={styles.arrow}>
          <RiArrowRightCircleFill />
        </Reveal.Pop>
      </Reveal>
    </Link>
  )
}
