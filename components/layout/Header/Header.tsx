//* === Components === *//
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ActiveLink from '@/components/common/ActiveLink/ActiveLink'
import MobileMenu from './MobileMenu/MobileMenu'

//* === Styles & Utils === *//
import { m } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import styles from './Header.module.scss'
import { rise } from '@/lib/motion'

//* === Variants * === //
// Home waits for the landing banner; other pages animate in right away
const homeLine = rise(200, 1.2, 0.8)
const pageLine = rise(200, 1.2)

interface Props {
  home: boolean
  numberOfProjects: number
}

export default function Header({ home, numberOfProjects }: Props) {
  const lineAnimation = home ? homeLine : pageLine

  const [open, setOpen] = useState<boolean>(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => {
    setOpen(false)
    menuButton.current?.focus()
  }, [])

  return (
    <header className={styles.container}>
      <m.nav initial="initial" animate="animate">
        <m.div className={styles.name} variants={lineAnimation}>
          <Link href={'/'}>Mauricio Lovera</Link>
        </m.div>
        <m.div className={styles.title} variants={lineAnimation}>
          <span>Full Stack Web Developer</span>
          <Link href={'https://github.com/mauLovera'} aria-label="GitHub">
            <FaGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/mauriciolovera001/'} aria-label="LinkedIn">
            <FaLinkedin />
          </Link>
        </m.div>
        <m.div className={styles.links} variants={lineAnimation}>
          <ActiveLink text="Home" url="" />
          <ActiveLink text="Projects" url="projects" amount={numberOfProjects} />
          <ActiveLink text="About" url="about" />
          <ActiveLink text="Contact" url="contact" />
        </m.div>
        <m.div className={styles.menu} variants={lineAnimation}>
          <button
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </m.div>
      </m.nav>
      <MobileMenu
        open={open}
        onClose={closeMenu}
        numberOfProjects={numberOfProjects}
      />
    </header>
  )
}
