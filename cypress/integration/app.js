import insurances from '../../src/config/insurances'

describe('Getsafe App', () => {
  it('Visits the App', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Finds insurance links', () => {
    cy.visit('http://localhost:3000/')

    insurances.forEach((insurance) => {
      cy.contains(insurance.title)
    })
  })
})
