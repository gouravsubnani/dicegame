import React, { useEffect, useState } from 'react'
import '../components/cssFiles/TotalScore.css';

function TotalScore(props) {

  return (
    <div className='ts-first-container'>
        <h1>{props.number}</h1>
        <p className = "ts-text-wrap">{props.name}</p>
    </div>
  )
}

export default TotalScore

