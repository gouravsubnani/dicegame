import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import '../components/cssFiles/Gameplay.css'
import RollDice from './RollDice'

function Gameplay(props) {
 
  const [temp, setTemp] = useState(0);
  const [tem, setTem] = useState(0);


  const randomNumber = () => {
    const randomDecimal = Math.random();
    const randomNumber = 1 + Math.floor(randomDecimal * (6));
    setTemp((prevTemp) => {
      return(
        prevTemp + randomNumber
      )
    });
    setplayerNumber(temp);
    randomNumber2();
  } 
  
  const randomNumber2 = () => {
    const randomDecimal = Math.random();
    const randomNumber2 = 1 + Math.floor(randomDecimal * (6));
    setTem(prevTemp => prevTemp + randomNumber2);
    setcomputerNumber(tem);
  } 
  

  const[playerNumber , setplayerNumber] = useState(0);
  const[computerNumber , setcomputerNumber] = useState(0);

  return (
    <>
    <div className="gp-container">
      <div className="gp-first-flex">
        <div className="gp-left-wing">
          <TotalScore name = {"Your Total Score"}  number = {playerNumber}/>
          <TotalScore name = {"Computer's Total Score"} number = {computerNumber}/>
        </div>
        <NumberSelector number = {playerNumber}/>
      </div>
      <div className='gp-second-flex'>
        <RollDice rollDiceFunc = {randomNumber}/>
      </div>
    </div>

    </>
  )
}

export default Gameplay