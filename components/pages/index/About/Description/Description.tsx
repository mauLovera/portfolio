//* === Components === *//
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import Reveal from '@/components/common/motion/Reveal/Reveal'

//* === Styles & Utils === *//
import styles from './Description.module.scss'

export default function Description() {
  return (
    <div className={styles.container}>
      <Reveal as="p">
        <Reveal.Item>
          Hello, I{"'"}m a full stack web developer with a passion for
          programming and an eye for design.
        </Reveal.Item>
      </Reveal>
      <Reveal as="p">
        <Reveal.Item>
          When I{"'"}m not programming, you can find me with a guitar in hand,
          trekking through the city, or building sand castles with moats.
        </Reveal.Item>
      </Reveal>
      <Reveal as="p">
        <Reveal.Item>
          <Link href="/about" className={styles.accent}>
            <span>More</span>
            <Reveal.Pop className={styles.arrow}>
              <RiArrowRightCircleFill />
            </Reveal.Pop>
          </Link>
        </Reveal.Item>
      </Reveal>
    </div>
  )
}
