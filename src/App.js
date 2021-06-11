import { useRef, useState } from 'react';
import './App.css';
import { sum } from './helpers/calculator'

function App() {
  const number1 = useRef(null);
  const number2 = useRef(null);
  const [result,setResult] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const firstValue = number1.current.value;
    const secondValue = number2.current.value;

    setResult(sum(firstValue, secondValue));
  }

  return (
    <div className="App">
      <form onSubmit={(event) => submitHandler(event)}>
        <div>
          <label htmlFor="number1">Número 1</label>
          <input type="number" name="number1" placeholder="Primeiro número" required ref={number1}/>
        </div>
        <div>
        <label htmlFor="number2">Número 2</label>
          <input type="number" name="number2" placeholder="Segundo número" required ref={number2}/>
        </div>
        <div>
          <button>Somar</button>
        </div>

      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
