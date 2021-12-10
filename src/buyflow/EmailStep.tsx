import React, { useState } from 'react'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    props.cb('email', email)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
          required
          autoFocus
        ></input>
        <button type="submit">Next</button>
      </form>
    </>
  )
}

export default EmailStep
