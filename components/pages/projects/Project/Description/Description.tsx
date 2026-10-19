//* === Components === *//
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'

//* === Styles & Utils === *//
import styles from './Description.module.scss'
// TODO: Do i still need to add type prefix for bundle optimizations?
import { motion, type Variants } from 'framer-motion'
import { projects } from '@/lib/projects'

const timeline = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const lineAnimation: Variants  = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

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
            <motion.h2 variants={timeline} initial='initial' whileInView={'animate'} viewport={{ once: true }}>
              <motion.span variants={lineAnimation} >
                {title}
              </motion.span>
            </motion.h2>
            <RiArrowRightCircleFill className={styles.arrow} />
          </div>
        </Link>
        <p>{description}</p>
        <p>{tech}</p>
      </div>
    </div>
  )
}
