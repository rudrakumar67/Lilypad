import React from 'react'
import FirstSection from '../Components/PoweringUp/FirstSection'
import SecondSection from '../Components/PoweringUp/SecondSection'

const PoweringUp = () => {

  const steps = [
    {
      step: 'Step 1',
      batteryImage: 'powering-up1.png',
      addCover: false
    },
    {
      step: 'Step 2',
      batteryImage: 'powering-up1.png',
      addCover: true
    },
    {
      step: 'Step 3',
      batteryImage: 'powering-up1.png',
      addCover: true
    },
    {
      step: 'Step 4',
      batteryImage: 'powering-up1.png',
      addCover: true
    },
    {
      step: 'Step 5',
      batteryImage: 'powering-up1.png',
      addCover: true
    }
  ]

  return (
    <div>
      {/* title  */}
      <FirstSection/>
      {steps.map((step, index) => <SecondSection step={step} index={index} />)}      
    </div>
  )
}

export default PoweringUp