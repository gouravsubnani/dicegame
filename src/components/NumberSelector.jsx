import React from 'react';
import NumberCard from './NumberCard';
import '../components/cssFiles/NumberSelector.css';


function NumberSelector() {
  return (
    <>
        <div className='ns-container'>
            <div className='ns-card-wrap'>
                <NumberCard number = {1}/>
                <NumberCard number = {2}/>
                <NumberCard number = {3}/>
                <NumberCard number = {4}/>
                <NumberCard number = {5}/>
                <NumberCard number = {6}/>
            </div>

            <div className='ns-text-wrapper'>
                <p className='ns-text-wrap'>Select Number</p>
            </div>
        </div>
    </>
  )
}

export default NumberSelector