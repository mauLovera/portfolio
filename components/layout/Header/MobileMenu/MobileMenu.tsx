//* === Components === *//
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ActiveLink from '@/components/common/ActiveLink/ActiveLink'

//* === Styles & Utils === *//
import { AnimatePresence, m } from 'framer-motion'
import { MouseEvent, useEffect, useRef } from 'react'
import styles from './MobileMenu.module.scss'
import Reveal from '@/components/common/motion/Reveal/Reveal'
import { curtain, duration, stagger, triggerProps } from '@/lib/motion'

// Links start rising halfway through the curtain opening
const links = { delay: duration.fast / 2, stagger: stagger.line }

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
          variants={curtain}
          {...triggerProps('mount')}
          exit="exit"
          onClick={handleClick}
        >
          <div className={styles.top}>
            <Link href="/">Mauricio Lovera</Link>
            <button ref={closeButton} type="button" onClick={onClose}>
              Close
            </button>
          </div>

          <Reveal as="ul" className={styles.links} trigger="parent" timing={links}>
            {[
              { text: 'Home', url: '' },
              { text: 'Projects', url: 'projects', amount: numberOfProjects },
              { text: 'About', url: 'about' },
              { text: 'Contact', url: 'contact' },
            ].map((link) => (
              <li key={link.url}>
                <Reveal.Item speed="medium">
                  <ActiveLink {...link} />
                </Reveal.Item>
              </li>
            ))}
          </Reveal>

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
