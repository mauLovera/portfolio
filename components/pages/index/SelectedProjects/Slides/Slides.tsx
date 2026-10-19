//* === Components === *//
import Image from 'next/image'

//* === Styles & Utils === *//
import styles from './Slides.module.scss'

// Must match the rows in ../List/List.tsx
const slides = [
  { title: 'Manto Angelico', src: '/images/project-images/manto angelico.png' },
  { title: 'Reactdoor', src: '/images/project-images/reactdoor.png' },
  { title: 'Grimoire', src: '/images/project-images/grimoire.png' },
  { title: 'Swirl', src: '/images/project-images/swirl.png' },
]

interface Props {
  focus: string
}

export default function Slides({ focus }: Props) {
  return (
    <div className={styles.container}>
      {slides.map(({ title, src }) => (
        <Image
          key={title}
          fill
          // Hidden until hovered, so lazy loading meant a fast hover found nothing loaded
          loading="eager"
          sizes="(max-width: 780px) 1px, 50vw"
          alt={`${title} screenshot`}
          src={src}
          className={`${styles.image} ${
            focus === title.toLowerCase() ? styles.active : ''
          }`}
        />
      ))}
    </div>
  )
}
