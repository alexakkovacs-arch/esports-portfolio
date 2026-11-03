import { useRef, useState, type FormEvent } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { site } from '../lib/site'

export function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'error' | 'success'
  >('idle')
  const submitting = useRef(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current || status === 'success') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    submitting.current = true
    setStatus('pending')
    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Message was not accepted')
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      submitting.current = false
    }
  }

  return (
    <div className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
      <img
        src="/img/shapes/splat-pink.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 w-64 opacity-90"
      />
      <img
        src="/img/shapes/flower-gold.svg"
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
            <li>
              <a href={site.phoneHref} className="brutal-sm inline-flex items-center gap-3 px-4 py-3 font-bold hover:-translate-y-0.5">
                <Phone size={16} aria-hidden="true" /> {site.phone}
              </a>
            </li>
            <li className="flex gap-4 pt-2">
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="underline decoration-fuchsia-hot decoration-2 underline-offset-4">LinkedIn</a>
              <a href={site.social.x} target="_blank" rel="noreferrer" className="underline decoration-fuchsia-hot decoration-2 underline-offset-4">X / Twitter</a>
            </li>
          </ul>
        </div>
        <div className="brutal rotate-1 bg-white p-6 sm:p-10">
      {status === 'success' ? (
        <div className="text-center py-8">
          <Mail aria-hidden="true" className="mx-auto mb-4 size-10 text-fuchsia-hot" />
          <h2 className="display mb-3 text-5xl">Message received</h2>
          <p role="status" className="mb-6">
            Thanks for reaching out. Your message was accepted.
          </p>
          <button
            type="button"
            className="contact-button btn btn-pink"
            onClick={() => setStatus('idle')}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          action="/contact.html"
          data-netlify="true"
          netlify-honeypot="bot-field"
          aria-busy={status === 'pending'}
          onSubmit={submit}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Leave this empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <fieldset
            disabled={status === 'pending'}
            className="min-w-0 space-y-6 disabled:opacity-70"
          >
            <legend className="sr-only">Your message</legend>
            <div>
              <label
                htmlFor="name"
                className="eyebrow mb-2 block font-bold"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                className="contact-input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="eyebrow mb-2 block font-bold"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className="contact-input"
                placeholder="you@team.gg"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="eyebrow mb-2 block font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={6}
                className="contact-input"
                placeholder="Your message…"
              />
            </div>
            <button type="submit" className="contact-button btn btn-pink">
              <Send aria-hidden="true" size={16} />
              {status === 'pending' ? 'Sending…' : 'Send message'}
            </button>
          </fieldset>
          <p role="status" className="sr-only">
            {status === 'pending' ? 'Sending your message…' : ''}
          </p>
          {status === 'error' && (
            <p role="alert" className="border-[3px] border-ink bg-gold p-4 text-sm">
              We couldn’t confirm your message. Your details are still here;
              please try again. Local previews don’t process submissions.
            </p>
          )}
        </form>
      )}
        </div>
      </div>
    </div>
  )
}
