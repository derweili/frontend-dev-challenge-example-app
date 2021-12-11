import React from 'react'
import { render, screen } from '@testing-library/react'
import BuyPage from './BuyPage'
import { MemoryRouter, Route } from 'react-router'
import insurances from '../config/insurances'

test('should render BuyPage', () => {
  const testInsurance = insurances[0]

  const fakeApp = (
    <MemoryRouter initialEntries={[`/buy/${testInsurance.name}`]}>
      <Route path={`/buy/:insuranceName`} component={BuyPage} />
    </MemoryRouter>
  )

  render(fakeApp)
  const headline = screen.getByText(`Buying ${testInsurance.title}`)
  expect(headline).toBeInTheDocument()
})

test('should render error message for non existing insurance', () => {
  const fakeApp = (
    <MemoryRouter initialEntries={[`/buy/nonexisting_insurance`]}>
      <Route path={`/buy/:insuranceName`} component={BuyPage} />
    </MemoryRouter>
  )

  render(fakeApp)

  const headline = screen.getByText('Error: Insurance not found')
  expect(headline).toBeInTheDocument()
})
