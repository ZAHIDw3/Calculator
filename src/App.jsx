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

  const buttonsInfo = [
    //SEGUNDA FILA
    [
      {
        classes: buttonsClass,
        value: 'C',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '/',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '*',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '-',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      }
    ],
    //TERCER FILA
    [
      {
        classes: buttonsClass,
        value: '7',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '8',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '9',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '+',
        handleClick: handleOperationButtonClick,
        style: { height: "80px" },
        rows: 2
      }
    ],
    //CUARTA FILA
    [
      {
        classes: buttonsClass,
        value: '4',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '5',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '6',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      }
    ],
    //QUINTA FILA
    [
      {
        classes: buttonsClass,
        value: '1',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '2',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '3',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '=',
        handleClick: handleEqualButtonClick,
        style: { height: "80px" },
        rows: 2
      }
    ],
    //SEXTA FILA
    [
      {
        classes: buttonsClass,
        value: 'DEL',
        handleClick: handleDelButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '0',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
      {
        classes: buttonsClass,
        value: '.',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      }
    ],
  ]

  return (
    <div className='app'>
      <h1>Calculator</h1>
      <table>
        {/* First now*/}
        <tr>
          <td colSpan={"4"} style={{ border: '1px solid black', textAlign: "end" }}><h2>{screen}</h2></td>
        </tr>
        {/* Second now*/}
        {
          buttonsInfo.map((row) => {
            return (
              <tr>
                {
                  row.map((cell) => {
                    return (
                    <td rowSpan={cell.rows}>
                      <Button
                        classes={cell.classes}
                        value={cell.value}
                        handleClick={cell.handleClick}
                        style={cell.style}
                      />
                    </td>
              )
                })
              }
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default App