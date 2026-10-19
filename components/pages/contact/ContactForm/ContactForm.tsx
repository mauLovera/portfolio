//* === Components === *//
import { RiArrowRightCircleFill } from 'react-icons/ri'

//* === Styles & Utils === *//
import styles from './ContactForm.module.scss'
import { m } from 'framer-motion'
import { FormEvent, useState } from 'react'
import { delay, fadeUp, group, stagger, triggerProps } from '@/lib/motion'

// Fields follow the page banner in
const fields = group({ delay: delay.follow, stagger: stagger.line })

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error)
      form.reset()
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <m.form
      className={styles.container}
      onSubmit={handleSubmit}
      variants={fields}
      {...triggerProps('mount')}
    >
      <m.label className={styles.field} variants={fadeUp}>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" maxLength={200} required />
      </m.label>
      <m.label className={styles.field} variants={fadeUp}>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" maxLength={320} required />
      </m.label>
      <m.label
        className={`${styles.field} ${styles.wide}`}
        variants={fadeUp}
      >
        <span>Message</span>
        <textarea name="message" rows={6} maxLength={5000} required />
      </m.label>

      {/* Honeypot for bots; hidden from people and screen readers */}
      <input
        className={styles.honeypot}
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <m.div className={styles.footer} variants={fadeUp}>
        <button type="submit" disabled={status === 'sending'}>
          <span>{status === 'sending' ? 'Sending' : 'Send'}</span>
          <RiArrowRightCircleFill />
        </button>
        <p className={styles.status} role="status">
          {status === 'sent' && 'Thanks! I’ll get back to you soon.'}
          {status === 'error' && <span className={styles.error}>{error}</span>}
        </p>
      </m.div>
    </m.form>
  )
}
