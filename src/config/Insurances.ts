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
]

export default insturances
