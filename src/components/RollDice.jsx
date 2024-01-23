import React from 'react'

function RollDice() {
  return (
    <div className='rd-container'>
        <div className="rd-img-wrapper">
            <img src={require("../assets/dice.png")} className='rd-img' alt="dice img" />
        </div>
    </div>
  )
}

export default RollDice