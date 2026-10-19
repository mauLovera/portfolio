//* === Components === *//
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'

//* === Styles & Utils === *//
import styles from './Description.module.scss'
import Reveal from '@/components/common/motion/Reveal/Reveal'
import { projects } from '@/lib/projects'

interface Props {
  title: string
  description: string
  tech: string
}

export default function Description({ title, description, tech }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.projectNumber}>
          <span className={styles.ascendingNumber}></span>
          <span>/00-{projects.length}</span>
        </div>
        <Link href={`/projects/${title.toLowerCase().replace(/ /g, '-')}`}>
          <div className={styles.title} >
            <Reveal as="h2">
              <Reveal.Item>{title}</Reveal.Item>
            </Reveal>
            <RiArrowRightCircleFill className={styles.arrow} />
          </div>
        </Link>
        <p>{description}</p>
        <p>{tech}</p>
      </div>
    </div>
  )
}
