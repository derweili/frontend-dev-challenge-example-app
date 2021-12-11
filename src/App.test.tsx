import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('should render App', () => {
  render(<App />)
  const linkElement = screen.getByText(/Welcome/i)
  expect(linkElement).toBeInTheDocument()
})
