import React from 'react'
import { render, screen } from '@testing-library/react'
import Buyflow from './Buyflow'
import insturances from '../config/Insurances'

test('should render Buyflow', () => {
  render(<Buyflow insurance={insturances[0]} />)

  const headlineElement = screen.getByText(/Buying/i)

  expect(headlineElement).toBeInTheDocument()
})
