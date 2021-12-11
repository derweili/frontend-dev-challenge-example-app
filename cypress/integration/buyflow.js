import insurances from '../../src/config/insurances'

const testInsurance = insurances[0]

const openInsuranceBuyflow = () => {
  cy.visit(`http://localhost:3000/buy/${testInsurance.name}/`);
}

describe('Complete Buyflow', () => {
  it('Visit insurance buyflow', () => {
    openInsuranceBuyflow()
  })

  it('Enter Email', () => {

    // enter email field
    cy.get('input[type="email"]').type('test@test.de');
			
    cy.get('button').click();
  })

  it('Enter age', () => {

    // enter email field
    cy.get('input[type="number"]').type(22);
			
    cy.get('button').click();
  })

  it('See Summary', () => {
    cy.get('h2').should('contain', 'Summary:');
  })
})

describe('Encounter Error when email not provided', () => {
  it('Visit insurance buyflow', () => {
    openInsuranceBuyflow()
  })

  it('Submit form without email', () => {
			
    cy.get('button').click();

    cy.get('form').should('contain', 'Email');
  })
})
