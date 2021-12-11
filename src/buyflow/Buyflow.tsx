import React, { useState } from 'react'
import { Insurance } from '../config/Insurances'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import FirstnameStep from './FirstnameStep'
import LastnameStep from './LastnameStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  insurance: Insurance
}

export interface CollectedData {
  age: number
  email: string
  firstname?: string
  lastname?: string
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const { insurance } = props

  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState<CollectedData>({
    email: '',
    age: 0,
  })
  const getStepCallback = () => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    const currentStepIndex = insurance.steps.indexOf(currentStep)
    const nextStep = insurance.steps[currentStepIndex + 1]
    setStep(nextStep)
  }

  /**
   * Render the current step
   */
  const renderStep = () => {
    switch (currentStep) {
      case 'email':
        return <EmailStep cb={getStepCallback()} />
      case 'age':
        return <AgeStep cb={getStepCallback()} />
      case 'firstname':
        return <FirstnameStep cb={getStepCallback()} />
      case 'lastname':
        return <LastnameStep cb={getStepCallback()} />
      case 'summary':
        return <SummaryStep collectedData={collectedData} />
      default:
        return <div>Error: current Step not found</div>
    }
  }

  return (
    <>
      <h4>Buying {insurance.title}</h4>

      {renderStep()}
    </>
  )
}

export default Buyflow
