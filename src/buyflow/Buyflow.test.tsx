import React from 'react'
import { render, screen } from '@testing-library/react'
import Buyflow from './Buyflow'
import insurances from '../config/insurances'

test('should render Buyflow', () => {
  render(<Buyflow insurance={insurances[0]} />)

  const headlineElement = screen.getByText(/Buying/i)

  expect(headlineElement).toBeInTheDocument()
})
