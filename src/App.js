import { useState } from 'react';
import './App.css';
import Frontpage from './components/Frontpage';
import Gameplay from './components/Gameplay';

function App() {

  const[gameStart , setGameStart] = useState(false);

  const toggleFunction = () => {
    if(gameStart === false)
    {
      setGameStart(true);
    }
  };

  return (
    <>
      {gameStart ? <Gameplay /> : <Frontpage toggle = {toggleFunction}/>}   
    </>
  );
}

export default App;
