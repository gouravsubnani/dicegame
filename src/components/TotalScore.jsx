import React, { useEffect, useState } from 'react'
import '../components/cssFiles/TotalScore.css';

function TotalScore(props) {

  // const [score, setScore] = useState(0);

  // useEffect(() => {
  //   // This effect will run whenever props.number changes
  //   let temp = score + props?.number;
  //   setScore(temp);
  // }, [props.number]);
  
  return (
    <div className='ts-first-container'>
        <h1>{props.number}</h1>
        <p className = "ts-text-wrap">{props.name}</p>
    </div>
  )
}

export default TotalScore

