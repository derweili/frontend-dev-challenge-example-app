export interface Insurance {
  id: number
  title: string
  name: string
  steps: string[]
}

const insturances: Insurance[] = [
  {
    id: 1,
    title: 'Developer Insurance',
    name: 'insurance_dev',
    steps: ['email', 'age', 'summary'],
  },
  {
    id: 2,
    title: 'Designer Insurance',
    name: 'insurance_designer',
    steps: ['email', 'age', 'lastname', 'summary'],
  },
]

export default insturances
