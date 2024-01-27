import React, { useState } from "react";

function ScoreStateContext(props) {

    const[score , setScore] = useState(0);

    setScore(props.number);
    return (
        // const presentNumber =
        <div></div>
    );
}

export default ScoreStateContext;
