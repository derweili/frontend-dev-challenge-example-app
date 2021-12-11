import React from 'react'
import { CollectedData } from './Buyflow'

interface SummaryStepProps {
  collectedData: CollectedData
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <h2>Summary:</h2>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      {props.collectedData.lastname && (
        <div className="lastname">Lastname: {props.collectedData.lastname}</div>
      )}
      <div>
        <a href="/purchased=dev_ins">Purchase</a>
      </div>
    </>
  )
}

export default SummaryStep
