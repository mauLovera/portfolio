//* === Components === *//
import Image from 'next/image'
import Link from 'next/link'

//* === Styles & Utils === *//
import styles from './ProjectImage.module.scss'

interface Props {
  title: string
}

export default function ProjectImage({ title }: Props) {
  return (
    <div className={styles.container}>
      <Link href={`/projects/${title.toLowerCase().replace(/ /g, '-')}`}>
        <Image
          alt={title}
          src={`/images/project-images/${title.toLowerCase()}.png`}
          fill
        ></Image>
      </Link>
    </div>
  )
}
