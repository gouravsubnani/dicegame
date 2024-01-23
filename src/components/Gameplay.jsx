import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import '../components/cssFiles/Gameplay.css'
import RollDice from './RollDice'

function Gameplay() {
  return (
    <>
    <div className="gp-container">
      <div className="gp-first-flex">
        <TotalScore />
        <NumberSelector />
      </div>
      <div className='gp-second-flex'>
        <RollDice />
      </div>
    </div>

    </>
  )
}

export default Gameplay