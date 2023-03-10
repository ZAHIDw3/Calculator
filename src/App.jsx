import { useState } from 'react';
import './App.css'

const buttonsClass= "btn btn-primary w-75";

function App() {
  const [screen, setScreen] = useState('0')

  const handleButtonClick=()=> {
    if(screen ==='0'){
      setScreen(9)
    }
    else {
      setScreen(`${screen}9`)
    }
  }
  return (
    <div className='app'>
      <h1>Calculator</h1>
      <table>
        {/* First now*/}
        <tr>
          <td colSpan={"4"} style={{border: '1px solid black', textAlign: "end"}}><h2>{screen}</h2></td>
        </tr>
        {/* Second now*/}
        <tr>
          <td><button type="button" className={buttonsClass}>C</button></td>
          <td class="position-relative"><button type="button" className={buttonsClass}>/</button></td>
          <td><button type="button" className={buttonsClass}>*</button></td>
          <td><button type="button" className={buttonsClass}>-</button></td>
        </tr>
        {/* Third now*/}
        <tr>
          <td><button type="button" className={buttonsClass}>7</button></td>
          <td><button type="button" className={buttonsClass}>8</button></td>
          <td><button type="button" className={buttonsClass} onClick={handleButtonClick}>9</button></td>
          <td rowSpan={"2"}><button type="button" className={buttonsClass} style={{height: "80px"}}>+</button></td>
        </tr>
        {/* Fourth now*/}
        <tr>
          <td><button type="button" className={buttonsClass}>4</button></td>
          <td><button type="button" className={buttonsClass}>5</button></td>
          <td><button type="button" className={buttonsClass}>6</button></td>
        </tr>
        {/* Fifth now*/}
        <tr>
          <td><button type="button" className={buttonsClass}>1</button></td>
          <td><button type="button" className={buttonsClass}>2</button></td>
          <td><button type="button" className={buttonsClass}>3</button></td>
          <td rowSpan={"2"}><button type="button" className={buttonsClass} style={{height: "80px"}}>=</button></td>
        </tr>
        {/* Six now*/}
        <tr>
          <td><button type="button" className={buttonsClass}>DEL</button></td>
          <td><button type="button" className={buttonsClass}>0</button></td>
          <td><button type="button" className={buttonsClass}>.</button></td>
        </tr>
      </table>
    </div>
  )
}

export default App