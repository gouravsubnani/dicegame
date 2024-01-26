import React, { useState } from 'react'
import './cssFiles/RollDice.css'
function RollDice(props) {

  return (
    <div className='rd-container'>
        <div className="rd-img-wrapper">
            <img src={require("../assets/dice.png")} className='rd-img' alt="dice img" />
        </div>
        <div className="rd-button-wrap">
          <p onClick = {props.rollDiceFunc}>Roll Dice</p>
        </div>
    </div>
  )
}

export default RollDice