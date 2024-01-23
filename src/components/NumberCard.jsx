import React from 'react'
import '../components/cssFiles/NumberCard.css'

function NumberCard(props) {
  return (
    <div className='container'>
        <p className='number-wrap'>{props.number}</p>
    </div>
  )
}

export default NumberCard