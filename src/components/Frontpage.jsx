import React from 'react'
import images from "../assets/dices1.png"

function Frontpage(props) {
  return (
    <div>
        <div className="fp-container">
        <div className="fp-dice-game">
          <div className="fp-image-wrapper">
            <img src={images} alt="dice" className='image'/>
          </div>
          <div className='fp-text-wrapper'>
            DICE GAME
            <div className='fp-button-wrap'>
              <p className='fp-btn' onClick={props.toggle}>Play Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontpage