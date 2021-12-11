import React from 'react'
import { render, screen } from '@testing-library/react'
import EmailStep from './EmailStep'

test('should render EmailStep', () => {
  render(<EmailStep cb={() => null} />)
  const linkElement = screen.getByText(/Email:/i)
  expect(linkElement).toBeInTheDocument()
})

test('should render required email input field', () => {
  const { container } = render(<EmailStep cb={() => null} />)
  const inputElement = container.querySelector('input[type="email"]')
  expect(inputElement).toBeInTheDocument()
  expect(inputElement).toHaveAttribute('required')
})
