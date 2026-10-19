//* === Components === *//
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ActiveLink from '@/components/common/ActiveLink/ActiveLink'

//* === Styles & Utils === *//
import { AnimatePresence, m } from 'framer-motion'
import { MouseEvent, useEffect, useRef } from 'react'
import styles from './MobileMenu.module.scss'
import { ease, rise, stagger } from '@/lib/motion'

//* === Variants === *//
const overlay = {
  initial: { clipPath: 'inset(0 0 100% 0)' },
  animate: { clipPath: 'inset(0 0 0% 0)', transition: { ease, duration: 0.6 } },
  exit: { clipPath: 'inset(0 0 100% 0)', transition: { ease, duration: 0.5 } },
}
const list = stagger(0.08, 0.25)
const linkAnimation = rise(120, 0.8)

interface Props {
  open: boolean
  onClose: () => void
  numberOfProjects: number
}

export default function MobileMenu({ open, onClose, numberOfProjects }: Props) {
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    closeButton.current?.focus()
    document.body.style.overflow = 'hidden'

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    // The menu is hidden on desktop, so close it if the window grows past the breakpoint
    const desktop = window.matchMedia('(min-width: 940px)')
    function handleResize(e: MediaQueryListEvent) {
      if (e.matches) onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    desktop.addEventListener('change', handleResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      desktop.removeEventListener('change', handleResize)
    }
  }, [open, onClose])

  // Close after any link click, including a link to the page you're already on
  function handleClick(e: MouseEvent<HTMLElement>) {
    if ((e.target as HTMLElement).closest('a')) onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <m.div
          id="mobile-menu"
          className={styles.container}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          variants={overlay}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={handleClick}
        >
          <div className={styles.top}>
            <Link href="/">Mauricio Lovera</Link>
            <button ref={closeButton} type="button" onClick={onClose}>
              Close
            </button>
          </div>

          <m.ul className={styles.links} variants={list}>
            {[
              { text: 'Home', url: '' },
              { text: 'Projects', url: 'projects', amount: numberOfProjects },
              { text: 'About', url: 'about' },
              { text: 'Contact', url: 'contact' },
            ].map((link) => (
              <li key={link.url}>
                <m.span variants={linkAnimation}>
                  <ActiveLink {...link} />
                </m.span>
              </li>
            ))}
          </m.ul>

          <div className={styles.icons}>
            <Link href={'https://github.com/mauLovera'} aria-label="GitHub">
              <FaGithub />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/mauriciolovera001/'}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
