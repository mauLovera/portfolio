import styles from './Description.module.scss'
import { m } from 'framer-motion'
import { lineAnimation, stagger } from '@/lib/motion'

const timeline = stagger(0.1, 0.1)
import Link from 'next/link'

interface Props {
  description: string
  deployment?: string
  github?: string
  linkedIn?: string
}

export default function Description({
  description,
  deployment,
  github,
  linkedIn
}: Props) {
  return (
    <m.p
      className={styles.container}
      variants={timeline}
      animate="animate"
      initial="initial"
    >
      <m.span variants={lineAnimation}>{description}</m.span>

      {deployment && github && (
        <>
          <m.span className={styles.links} variants={lineAnimation}>
            <Link href={deployment ? deployment : '/'} className={styles.link}>
              Deployment
            </Link>
            <Link href={github ? github : '/'} className={styles.link}>
              GitHub
            </Link>
          </m.span>
        </>
      )}

      {linkedIn && github && (
        <>
          <m.span className={styles.links} variants={lineAnimation}>
            <Link href={linkedIn ? linkedIn : '/'} className={styles.link}>
              LinkedIn
            </Link>
            <Link href={github ? github : '/'} className={styles.link}>
              GitHub
            </Link>
          </m.span>
        </>
      )}
    </m.p>
  )
}
