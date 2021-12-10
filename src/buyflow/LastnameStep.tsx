import React, { useState } from 'react'

interface LastnameStepProps {
  cb: (field: string, value: string) => void
}

const LastnameStep: React.FC<LastnameStepProps> = (props) => {
  const [lastname, setLastname] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    props.cb('lastname', lastname)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        Lastname:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastname(value)
          }}
          value={lastname}
          required
          autoFocus
        ></input>
        <button type="submit">Next</button>
      </form>
    </>
  )
}

export default LastnameStep
