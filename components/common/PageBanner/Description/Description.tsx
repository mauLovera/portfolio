//* === Components === *//
import Link from 'next/link'
import Reveal from '@/components/common/motion/Reveal/Reveal'

//* === Styles & Utils === *//
import styles from './Description.module.scss'

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
  linkedIn,
}: Props) {
  return (
    <Reveal as="p" className={styles.container} trigger="mount">
      <Reveal.Item>{description}</Reveal.Item>

      {deployment && github && (
        <Reveal.Item className={styles.links}>
          <Link href={deployment} className={styles.link}>
            Deployment
          </Link>
          <Link href={github} className={styles.link}>
            GitHub
          </Link>
        </Reveal.Item>
      )}

      {linkedIn && github && (
        <Reveal.Item className={styles.links}>
          <Link href={linkedIn} className={styles.link}>
            LinkedIn
          </Link>
          <Link href={github} className={styles.link}>
            GitHub
          </Link>
        </Reveal.Item>
      )}
    </Reveal>
  )
}
