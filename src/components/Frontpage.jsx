import React from 'react'
import images from "../assets/dices1.png"

function Frontpage(props) {
  return (
    <div>
        <div className="container">
        <div className="dice-game">
          <div className="image-wrapper">
            <img src={images} alt="dice" className='image'/>
          </div>
          <div className='text-wrapper'>
            DICE GAME
            <div className='button-wrap'>
              <p className='btn' onClick={props.toggle}>Play Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontpage