//* === Components === *//
import Row from '../Row/Row'

//* === Styles & Utils === *//
import styles from './List.module.scss'

interface Props {
  handleMouseEnter: (text: string) => void
  handleMouseExit: () => void
}

export default function List({
  handleMouseEnter,
  handleMouseExit,
}: Props) {
  return (
    <div className={styles.container}>
      <Row
        title="Manto Angelico"
        path="/projects/manto-angelico"
        tech={['Next.js / Tailwind / TypeScript / Vercel']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
      <Row
        title="Reactdoor"
        path="/projects/reactdoor"
        tech={['Next.js / Sass / TypeScript / Vercel']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
      <Row
        title="Grimoire"
        path="/projects/grimoire"
        tech={['Next.js / Sass / JavaScript / Vercel']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
      <Row
        title="Swirl"
        path="/projects/swirl"
        tech={['Django / PostgreSQL / Docker / Heroku']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
    </div>
  )
}
