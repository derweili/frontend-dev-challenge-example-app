import React from 'react'
import { Link } from 'react-router-dom'
import { CollectedData } from './Buyflow'

interface SummaryStepProps {
  collectedData: CollectedData
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      {
        props.collectedData.lastname && <div>Lastname: {props.collectedData.lastname}</div>
      }
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
