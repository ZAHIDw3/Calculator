import { useState } from 'react';
import './App.css'
import Button from './components/Button';

const buttonsClass = "btn btn-primary w-75";

function App() {
  const [operator, setOperator] = useState('')
  const [number1, setNumber1] = useState('')
  const [clearScreen, setClearScreen] = useState(false)
  const [screen, setScreen] = useState('0')

  const handleButtonClick = (e) => {
    //const handleButtonClick=(value)=>
    //onClick={()=>handleButtonClick('4')}
    const { value } = e.target;//si el nombre de la variable es diferen const value=e.target.value;
    if (value === 'C') {
      setScreen('0')
      return;
    }
    //agregar el .
    if (value === '.') {
      if (screen.indexOf('.') !== -1) return;
      //if(screen.includes('.'))return;
    }
    //!==================================
    console.log({ number1 })
    if (clearScreen) {
      setScreen(value);
      setClearScreen(false);
      return;
    }
    if (screen === '0' && value !== '.') {
      setScreen(value)
      return;
    }
    setScreen(`${screen}${value}`)
  }

  const handleDelButtonClick = () => {
    if (screen.length === 1) {
      setScreen('0')
      return;
    }
    setScreen(screen.slice(0, -1));
  }

  const handleOperationButtonClick = (e) => {
    setOperator(e.target.value);
    setNumber1(screen);
    setClearScreen(true);
  }

  const handleEqualButtonClick = () => {
    const a = +number1;
    const b = +screen;
    switch (operator) {
      case '+':
        setScreen((a + b).toString());
        break;
      case '-':
        setScreen((a - b).toString());
        break;
      case '*':
        setScreen((a * b).toString());
        break;
      case '/':
        setScreen((a / b).toString());
        break;
      default:
        break;
    }
  }

  return (
    <div className='app'>
      <h1>Calculator</h1>
      <table>
        {/* First now*/}
        <tr>
          <td colSpan={"4"} style={{ border: '1px solid black', textAlign: "end" }}><h2>{screen}</h2></td>
        </tr>
        {/* Second now*/}
        <tr>
          <td><button type="button" className={buttonsClass} value="C" onClick={(e) => handleButtonClick(e)}>C</button></td>
          <td class="position-relative"><button
            type="button" className={buttonsClass}
            value="/"
            onClick={(e) => handleOperationButtonClick(e)}>/</button></td>
          <td><button type="button" className={buttonsClass} value="*" onClick={(e) => handleOperationButtonClick(e)}>*</button></td>
          <td><button type="button" className={buttonsClass} value="-" onClick={(e) => handleOperationButtonClick(e)}>-</button></td>
        </tr>
        {/* Third now*/}
        <tr>
          <td><button type="button" className={buttonsClass} value="7" onClick={(e) => handleButtonClick(e)}>7</button></td>
          <td>{/*<button type="button" className={buttonsClass} value="8" onClick={(e) => handleButtonClick(e)}>8</button>*/} 
            <Button style={buttonsClass} handleClick={handleButtonClick} /></td>
          <td><button type="button" className={buttonsClass} value="9" onClick={(e) => handleButtonClick(e)}>9</button></td>
          <td rowSpan={"2"}><button
            type="button" className={buttonsClass}
            style={{ height: "80px" }}
            value="+" onClick={(e) => handleOperationButtonClick(e)}>+</button></td>
        </tr>
        {/* Fourth now*/}
        <tr>
          <td><button type="button" className={buttonsClass} value="4" onClick={(e) => handleButtonClick(e)}>4</button></td>
          <td><button type="button" className={buttonsClass} value="5" onClick={(e) => handleButtonClick(e)}>5</button></td>
          <td><button type="button" className={buttonsClass} value="6" onClick={(e) => handleButtonClick(e)}>6</button></td>
        </tr>
        {/* Fifth now*/}
        <tr>
          <td><button type="button" className={buttonsClass} value="1" onClick={(e) => handleButtonClick(e)}>1</button></td>
          <td><button type="button" className={buttonsClass} value="2" onClick={(e) => handleButtonClick(e)}>2</button></td>
          <td><button type="button" className={buttonsClass} value="3" onClick={(e) => handleButtonClick(e)}>3</button></td>
          <td rowSpan={"2"}><button
            type="button"
            className={buttonsClass}
            style={{ height: "80px" }}
            onClick={handleEqualButtonClick}>=</button></td>
        </tr>
        {/* Six now*/}
        <tr>
          <td><button type="button" className={buttonsClass} onClick={handleDelButtonClick}>DEL</button></td>
          <td><button type="button" className={buttonsClass} value="0" onClick={(e) => handleButtonClick(e)}>0</button></td>
          <td><button type="button" className={buttonsClass} value="." onClick={(e) => handleButtonClick(e)}>.</button></td>
        </tr>
      </table>
    </div>
  )
}

export default App