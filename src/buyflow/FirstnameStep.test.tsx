import React from 'react'
import { render, screen } from '@testing-library/react'
import LastnameStep from './LastnameStep'

test('should render LastnameStep', () => {
  render(<LastnameStep cb={() => null} />)
  const linkElement = screen.getByText(/Lastname:/i)
  expect(linkElement).toBeInTheDocument()
})

test('should render required text input field', () => {
  const { container } = render(<LastnameStep cb={() => null} />)
  const inputElement = container.querySelector('input[type="text"]')
  expect(inputElement).toBeInTheDocument()
  expect(inputElement).toHaveAttribute('required')
})
