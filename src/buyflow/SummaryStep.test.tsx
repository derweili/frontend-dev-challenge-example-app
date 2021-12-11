import React from 'react'
import { render, screen } from '@testing-library/react'
import SummaryStep from './SummaryStep'

const testCollectedData = {
  email: 'test@email.com',
  age: 20,
}

test('should render SummaryStep', () => {
  render(<SummaryStep collectedData={testCollectedData} />)

  const linkElement = screen.getByText(/Summary:/i)

  expect(linkElement).toBeInTheDocument()
})

test('should render provided data', () => {
  render(<SummaryStep collectedData={testCollectedData} />)

  const email = screen.getByText(`Email: ${testCollectedData.email}`)
  const age = screen.getByText(`Age: ${testCollectedData.age}`)

  expect(email).toBeInTheDocument()
  expect(age).toBeInTheDocument()
})

test('should render lastname if provided data', () => {
  const { container } = render(
    <SummaryStep collectedData={{ ...testCollectedData, lastname: 'Doe' }} />
  )

  const lastnameElement = container.querySelector('.lastname')

  const lastname = screen.getByText(`Lastname: Doe`)

  expect(lastnameElement).toBeInTheDocument()
  expect(lastname).toBeInTheDocument()
})

test('should not render lastname if not provided data', () => {
  const { container } = render(
    <SummaryStep collectedData={testCollectedData} />
  )

  const lastnameElement = container.querySelector('.lastname')

  expect(lastnameElement).not.toBeInTheDocument()
})
