import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter initialValue={10} interval={200} />
    </div>
  );
}

export default App;
