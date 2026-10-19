//* === Components === *//
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'

//* === Styles & Utils === *//
import styles from './Description.module.scss'
import { m } from 'framer-motion'
import { projects } from '@/lib/projects'
import { lineAnimation, stagger } from '@/lib/motion'

const timeline = stagger(0.05)

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
            <m.h2 variants={timeline} initial='initial' whileInView={'animate'} viewport={{ once: true }}>
              <m.span variants={lineAnimation} >
                {title}
              </m.span>
            </m.h2>
            <RiArrowRightCircleFill className={styles.arrow} />
          </div>
        </Link>
        <p>{description}</p>
        <p>{tech}</p>
      </div>
    </div>
  )
}
