//* === Components === *//
import SectionSubHeader from './SectionSubHeader/SectionSubHeader'
import List from './List/List'
import Slides from './Slides/Slides'
import SectionHeader from './SectionHeader/SectionHeader'

//* === Styles & Utils === *//
import styles from './SelectedProjects.module.scss'
import { useState } from 'react'

//* === Variants === *//
import {
  buttonAnimation,
  letterAnimation,
  lineAnimation,
  stagger,
} from '@/lib/motion'

const timeline = stagger(0.5)
const letterTimeline = stagger(0.025, 0.4)

export default function SelectedProjects() {
  const [focus, setFocus] = useState<string>('')
  
  function handleMouseEnter(text: string): void {
    setFocus(text.toLowerCase())
  }
  
  function handleMouseExit(): void {
    setFocus('')
  }

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <SectionHeader
          timeline={letterTimeline}
          animation={{ lineAnimation, letterAnimation }}
        />
        <SectionSubHeader
          timeline={timeline}
          animation={{ lineAnimation, buttonAnimation }}
        />
      </div>
      <div className={styles.content}>
        <Slides focus={focus} />
        <List
          animation={{ lineAnimation, buttonAnimation }}
          handleMouseEnter={handleMouseEnter}
          handleMouseExit={handleMouseExit}
          timeline={timeline}
        />
      </div>
    </section>
  )
}
