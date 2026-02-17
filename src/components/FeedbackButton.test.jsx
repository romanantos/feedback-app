import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import FeedbackButton from './FeedbackButton'

describe('FeedbackButton', () => {
  it('renders the feedback button initially', () => {
    render(<FeedbackButton />)
    expect(screen.getByRole('button', { name: /give feedback/i })).toBeInTheDocument()
  })

  it('shows the feedback form when the button is clicked', async () => {
    const user = userEvent.setup()
    render(<FeedbackButton />)

    await user.click(screen.getByRole('button', { name: /give feedback/i }))

    expect(screen.getByLabelText(/your feedback/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows a thank you message after submitting feedback', async () => {
    const user = userEvent.setup()
    render(<FeedbackButton />)

    await user.click(screen.getByRole('button', { name: /give feedback/i }))
    await user.type(screen.getByLabelText(/your feedback/i), 'Great app!')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText(/thank you for your feedback/i)).toBeInTheDocument()
  })
})
