import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import { useState } from 'react';

const dicesArr = [ diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6 ];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const Dice = () => {

  const [diceVal, setDiceVal] = useState(dicesArr[getRandomInt(1, 6)]);

  const toggleDice = () => {
    setDiceVal(dicesArr[getRandomInt(1, 6)])
  }

  const handleClick = () => {
    setDiceVal(dicesArr[0])
    setTimeout( toggleDice, 1000);
  }
  
  return (
    <div>
      <img onClick={handleClick} src={diceVal} width='100px' alt='dice-pic' />
    </div>
  )
}

export default Dice;