import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Buyflow from '../buyflow/Buyflow'
import { Insurance } from '../config/insurances'
import { getInsuranceByName } from '../helpers/insurance'

interface BuyPageParams {
  insuranceName: string
}

const BuyPage: React.FC = () => {
  const { insuranceName } = useParams<BuyPageParams>()

  const [insurance, setInsurance] = useState<Insurance | null>(null)

  useEffect(() => {
    setInsurance(getInsuranceByName(insuranceName))
  }, [insuranceName, setInsurance])

  if (!insurance) {
    return <div className="error">Error: Insurance not found</div>
  }

  return (
    <>
      <Buyflow insurance={insurance} />
    </>
  )
}

export default BuyPage
