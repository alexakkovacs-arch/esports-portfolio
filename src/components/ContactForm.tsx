import { useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { site } from '../lib/site'
import { assetUrl } from '../lib/assets'

export function ContactForm() {
  const [draftOpened, setDraftOpened] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const name = String(fields.get('name') ?? '').trim()
    const email = String(fields.get('email') ?? '').trim()
    const message = String(fields.get('message') ?? '').trim()
    if (!name || !email || !message) return
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)
    window.open(`mailto:${site.email}?subject=${subject}&body=${body}`, '_self')
    // A static site cannot confirm delivery. Explain that the visitor must send.
    setDraftOpened(true)
  }

  return (
    <div className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
      <img
        src={assetUrl('/img/shapes/splat-pink.svg')}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 w-64 opacity-90"
      />
      <img
        src={assetUrl('/img/shapes/flower-gold.svg')}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 bottom-10 w-48 animate-float [--r:10deg]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-3 text-7xl sm:text-8xl">
            Let’s <span className="font-serif normal-case italic text-fuchsia-hot">collab</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Got an event, a broadcast or a brand that needs some energy? Tell me
            about it and I’ll get back to you.
          </p>
          <ul className="mt-10 space-y-4 font-mono text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="brutal-sm inline-flex items-center gap-3 bg-fuchsia px-4 py-3 font-bold hover:-translate-y-0.5">
                <Mail size={16} aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li className="flex gap-4 pt-2">
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="underline decoration-fuchsia-hot decoration-2 underline-offset-4">LinkedIn</a>
              <a href={site.social.x} target="_blank" rel="noreferrer" className="underline decoration-fuchsia-hot decoration-2 underline-offset-4">X / Twitter</a>
            </li>
          </ul>
        </div>
        <div className="brutal rotate-1 bg-white p-6 sm:p-10">
          {draftOpened ? (
            <div className="py-8 text-center">
              <Mail aria-hidden="true" className="mx-auto mb-4 size-10 text-fuchsia-hot" />
              <h2 className="display mb-3 text-5xl">One more step</h2>
              <p role="status" className="mb-6">
                Your email app should have opened a draft. Please press Send there to deliver your message. If it did not open, use the email link alongside this form.
              </p>
              <button
                type="button"
                className="contact-button btn btn-pink"
                onClick={() => setDraftOpened(false)}
              >
                Write another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <fieldset className="min-w-0 space-y-6">
                <legend className="sr-only">Your message</legend>
                <div>
                  <label htmlFor="name" className="eyebrow mb-2 block font-bold">Name</label>
                  <input id="name" name="name" autoComplete="name" required maxLength={100} className="contact-input" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow mb-2 block font-bold">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className="contact-input" placeholder="you@team.gg" />
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow mb-2 block font-bold">Message</label>
                  <textarea id="message" name="message" required maxLength={5000} rows={6} className="contact-input" placeholder="Your message…" />
                </div>
                <button type="submit" className="contact-button btn btn-pink">
                  <Send aria-hidden="true" size={16} /> Open email draft
                </button>
                <p className="text-sm text-ink/70">
                  This opens your email app; your message is not sent until you press Send.
                </p>
              </fieldset>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
