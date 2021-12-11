import insurances from '../config/insurances'
import { getInsuranceByName } from './insurance'

test('should return correct insurance', () => {
  const foundInsurance = getInsuranceByName(insurances[0].name)

  expect(foundInsurance).toEqual(insurances[0])
})

test('should return null when wrong name is passed', () => {
  const foundInsurance = getInsuranceByName('nonexisting-insurance')

  expect(foundInsurance).toBeNull()
})
