import './App.css';
import Button from './components/Buton';
import Screen from './components/Input';
import ButtonClear from './components/ButtonClear';
import CalculaterLogo from './components/img/calculator-logo.svg';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addNewInput = val => {
   setInput(input + val);
};

const calateTheResult = () => {
  if (input) {
    setInput(evaluate(input));
  }else {
    alert('Enter with value to do your calculation, have a "Bee" day!')
  }
  
}

  return (
    <div className='App'>
      <div className='container-calculator-logo'>
        <img 
        src={CalculaterLogo}
        className='calculator-logo'
        alt="A nice calculator's logo" />
      </div>

      <div className='container-calculator'>
        
        <Screen input={input}/>

        <div className='row'>
          <Button handleClick={addNewInput}>1</Button>
          <Button handleClick={addNewInput}>2</Button>
          <Button handleClick={addNewInput}>3</Button>
          <Button handleClick={addNewInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addNewInput}>4</Button>
          <Button handleClick={addNewInput}>5</Button>
          <Button handleClick={addNewInput}>6</Button>
          <Button handleClick={addNewInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addNewInput}>7</Button>
          <Button handleClick={addNewInput}>8</Button>
          <Button handleClick={addNewInput}>9</Button>
          <Button handleClick={addNewInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calateTheResult}>=</Button>
          <Button handleClick={addNewInput}>0</Button>
          <Button handleClick={addNewInput}>.</Button>
          <Button handleClick={addNewInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear handleClear={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
 
      </div>
     
    </div>
  );
}

export default App;
