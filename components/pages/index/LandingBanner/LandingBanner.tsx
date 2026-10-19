//* === Styles & Utils === *//
import styles from './LandingBanner.module.scss'
import { motion, type Variants } from 'framer-motion'

//* === Variants === //
const banner: Variants  = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}
const letterAnimation: Variants  = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

const lineAnimation: Variants  = {
  initial: { y: 650 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
      delay: 2,
    },
  },
}

export default function LandingBanner() {
  return (
    <section className={styles.container}>
      <motion.h1 variants={banner}>
        <TopRow />
        <BottomRows />
      </motion.h1>
    </section>
  )
}

function TopRow() {
  const text: string[] = ["I'm", 'Mauricio.']

  return (
    <motion.span
      className={styles.top}
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {[...text[0]].map((letter, idx) => (
        <motion.span key={idx} variants={letterAnimation}>
          {letter}
        </motion.span>
      ))}

      {[...text[1]].map((letter, idx) => (
        <motion.span
          key={idx}
          variants={letterAnimation}
          className={styles.accent}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

function BottomRows() {
  const text: string[] = ['A full stack web', 'developer based', 'in the US.']

  return (
    <motion.span
      className={styles.bottom}
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {[...text].map((letter, idx) => (
        <motion.span key={idx} variants={lineAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
