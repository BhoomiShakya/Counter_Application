import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function decrementHandler(){
    setCount(count-1);
  }

  function incretmentHandler(){
    setCount(count+1);
  }

  function ResetHandler(){
    setCount(0);
  }

  return (
    <div className='container'>
      <div className='content'>
          <div>
            <div className='heading01'>Increment & Decrement</div>
          </div>
          <div className='counters'>
            <button className='pointer' onClick={decrementHandler}>-</button>
            <div className='valuediv'>{count}</div>
            <button className='pointer'  onClick={incretmentHandler}>+</button>
          </div>
          <button className='reset' onClick={ResetHandler}>RESET</button>
      </div>
    </div>
  );
}

export default App;
