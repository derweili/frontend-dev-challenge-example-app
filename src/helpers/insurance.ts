import insurances, { Insurance } from '../config/insurances'

export const getInsuranceByName = (name: string): Insurance | null => {
  const insurance = insurances.find((insurance) => insurance.name === name)

  if (!insurance) return null

  return insurance
}
