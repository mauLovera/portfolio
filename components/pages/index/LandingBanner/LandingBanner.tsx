//* === Components === *//
import SplitText from '@/components/common/motion/SplitText/SplitText'
import Reveal from '@/components/common/motion/Reveal/Reveal'

//* === Styles & Utils === *//
import styles from './LandingBanner.module.scss'
import { hero, intro } from '@/lib/intro'

export default function LandingBanner() {
  return (
    <section className={styles.container}>
      <h1 aria-label={`${hero.greeting} ${hero.name} ${hero.lines.join(' ')}`}>
        <SplitText
          className={styles.top}
          timing={intro.letters}
          text={[
            { text: hero.greeting },
            { text: hero.name, className: styles.accent, underline: true },
          ]}
        />
        <Reveal
          as="span"
          className={styles.bottom}
          trigger="mount"
          timing={intro.lines}
          aria-hidden
        >
          {hero.lines.map((line) => (
            <Reveal.Item key={line} speed="slow">
              {line}
            </Reveal.Item>
          ))}
        </Reveal>
      </h1>
    </section>
  )
}
