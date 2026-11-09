import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ContactForm } from './ContactForm'

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('static contact form', () => {
  it('opens an email draft without claiming the message was delivered', async () => {
    const popup = vi.spyOn(window, 'open').mockImplementation(() => null)
    render(<ContactForm />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello & thanks!')
    await user.click(screen.getByRole('button', { name: 'Open email draft' }))
    expect(popup).toHaveBeenCalledWith(
      expect.stringContaining('mailto:alexakkovacs@gmail.com?subject='),
      '_self',
    )
    expect(popup.mock.calls[0][0]).toContain(encodeURIComponent('Hello & thanks!'))
    expect(screen.getByText(/Please press Send there/)).toBeTruthy()
    await user.click(screen.getByRole('button', { name: 'Write another message' }))
    expect(screen.getByLabelText('Name')).toBeTruthy()
  })
})
