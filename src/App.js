import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor="number1">Número 1</label>
          <input type="number" name="number1" placeholder="Primeiro número" required />
        </div>
        <div>
        <label htmlFor="number2">Número 2</label>
          <input type="number" name="number2" placeholder="Segundo número" required />
        </div>
        <div>
          <button>Somar</button>
        </div>

      </form>
    </div>
  );
}

export default App;
