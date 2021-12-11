import React, { useState } from 'react'

interface FirstnameStepProps {
  cb: (field: string, value: string) => void
}

const FirstnameStep: React.FC<FirstnameStepProps> = (props) => {
  const [firstname, setFirstname] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    props.cb('firstname', firstname)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        Firstname:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstname(value)
          }}
          value={firstname}
          required
          autoFocus
        ></input>
        <button type="submit">Next</button>
      </form>
    </>
  )
}

export default FirstnameStep
