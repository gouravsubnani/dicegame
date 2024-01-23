
import React, { useState } from "react"
import Heart from "react-heart"

const YashiLovesGourav = () => {
    const [active, setActive] = useState(false)
    const generateRandomHex = () => {
      const randomHex = Math.floor(Math.random() * 16777215).toString(16);
      return `#${randomHex}`;
    };
  
    const randomHexValue1 = generateRandomHex();
    const randomHexValue2 = generateRandomHex();
    const randomHexValue3 = generateRandomHex();
    return (
    <>
    <div className="" style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"200px",backgroundColor:randomHexValue3 }}>

     <span style={{color:randomHexValue1}}>
     Gourav

     </span> 
		<div style={{ width: "20rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)}/>
		</div>
    
    <span style={{color:randomHexValue2}}>
    Yashi
    </span>
    </div>
    </>
  )
}

export default YashiLovesGourav