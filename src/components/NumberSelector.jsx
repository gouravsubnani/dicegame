import React from "react";
import NumberCard from "./NumberCard";
import "../components/cssFiles/NumberSelector.css";

function NumberSelector(props) {
  const random = props?.number;
  return (
    <>
      <div className="ns-container">
        <div className="ns-card-wrap">
          <NumberCard number={1} random={random} />
          <NumberCard number={2} random={random} />
          <NumberCard number={3} random={random} />
          <NumberCard number={4} random={random} />
          <NumberCard number={5} random={random} />
          <NumberCard number={6} random={random} />
        </div>

        <div className="ns-text-wrapper">
          <p className="ns-text-wrap">Select Number</p>
        </div>
      </div>
    </>
  );
}

export default NumberSelector;
