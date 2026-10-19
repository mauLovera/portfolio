import type { NextApiRequest, NextApiResponse } from 'next'

// Messages are delivered with Resend (https://resend.com). The sandbox sender
// `onboarding@resend.dev` can only deliver to the Resend account's own email,
// so sign up with the address below or verify a domain and set CONTACT_FROM_EMAIL.
const TO = process.env.CONTACT_TO_EMAIL ?? 'mauricio.maulovera@gmail.com'
const FROM = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Data = { ok: true } | { ok: false; error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  const { name, email, message, company } = req.body ?? {}

  // Honeypot: real visitors never see this field, bots fill it in
  if (company) return res.status(200).json({ ok: true })

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !EMAIL_PATTERN.test(email) ||
    !message.trim()
  ) {
    return res
      .status(400)
      .json({ ok: false, error: 'Please fill in your name, a valid email, and a message.' })
  }

  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return res.status(400).json({ ok: false, error: 'That message is a bit too long.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set')
    return res
      .status(500)
      .json({ ok: false, error: 'The contact form is not configured yet.' })
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Portfolio message from ${name.trim()}`,
      text: `From: ${name.trim()} <${email}>\n\n${message.trim()}`,
    }),
  })

  if (!response.ok) {
    console.error('Contact form: Resend error', response.status, await response.text())
    return res
      .status(502)
      .json({ ok: false, error: 'Something went wrong sending your message.' })
  }

  return res.status(200).json({ ok: true })
}
