import React, { useState } from 'react'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(18)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    props.cb('age', age)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
          required
          autoFocus
          min="1"
        ></input>
        <button type="submit" onClick={() => props.cb('age', age)}>
          Next
        </button>
      </form>
    </>
  )
}

export default AgeStep
