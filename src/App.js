import "./App.css";
import useCounter from "./useCounter";
function App() {
  const { counter, onIncrement, onDecrement, onReset } = useCounter();

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
