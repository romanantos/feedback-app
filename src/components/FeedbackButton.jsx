import { useState } from 'react'

function FeedbackButton() {
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  if (status === 'submitted') {
    return <p>Thank you for your feedback!</p>
  }

  if (status === 'form') {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setStatus('submitted')
        }}
      >
        <label htmlFor="feedback">Your feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    )
  }

  return (
    <button onClick={() => setStatus('form')}>
      Give Feedback
    </button>
  )
}

export default FeedbackButton
