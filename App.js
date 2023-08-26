import { useState } from 'react';
import MyButton from './Counter'

function MyApp() {
  let bolsa = 499;
  let pulseira = 99;

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);  

  function handleClick() {
    setCount(count + 1);
  }
  function handleClick2() {
    setCount2(count2 + 1);
  }

  const totalBolsa = bolsa * count;
  const totalPulseira = pulseira * count2;

  return (
    <div>
      <h1>quantos itens você quer?</h1>
      Bolsa Gucci R${bolsa}:
      <MyButton count={count} onClick={handleClick} /><br></br>
      Pulseira R${pulseira}:
      <MyButton count={count2} onClick={handleClick2} /><br>
      </br>

      <h4>Total: R${totalBolsa + totalPulseira}</h4>
    </div>
  );
}

export default MyApp
