import "./App.css";

function App() {
  const sum = (a, b) => <h2>{a + b}</h2>;
  return <div className="App">{sum(2, 5)}</div>;
}

export default App;
