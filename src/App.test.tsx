import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import insturances from './config/Insurances'

test('should render App', () => {
  render(<App />)
  const linkElement = screen.getByText(/Welcome/i)
  expect(linkElement).toBeInTheDocument()
})

test('should render link to each insurance', () => {
  render(<App />)

  insturances.forEach((insurance) => {
    const linkElement = screen.getByText(insurance.title)
    expect(linkElement).toBeInTheDocument()
  })
})
