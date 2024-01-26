import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import '../components/cssFiles/Gameplay.css'
import RollDice from './RollDice'

function Gameplay() {


  const randomNumber = () => {
    const randomDecimal = Math.random();
    const randomNumber = 1 + Math.floor(randomDecimal * (6));
    console.log(randomNumber);
    setNumber(randomNumber);
  } 

  const[number , setNumber] = useState(0);

  return (
    <>
    <div className="gp-container">
      <div className="gp-first-flex">
        <TotalScore />
        <NumberSelector number = {number}/>
      </div>
      <div className='gp-second-flex'>
        <RollDice rollDiceFunc = {randomNumber}/>
      </div>
    </div>

    </>
  )
}

export default Gameplay