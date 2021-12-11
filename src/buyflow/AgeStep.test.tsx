import React from 'react'
import { render, screen } from '@testing-library/react'
import AgeStep from './AgeStep'

test('should render AgeStep', () => {
  render(<AgeStep cb={() => null} />)
  const linkElement = screen.getByText(/Age:/i)
  expect(linkElement).toBeInTheDocument()
})

test('should render required age input field', () => {
  const { container } = render(<AgeStep cb={() => null} />)
  const inputElement = container.querySelector('input[type="number"]')
  expect(inputElement).toBeInTheDocument()
  expect(inputElement).toHaveAttribute('required')
})
