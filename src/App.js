import "./App.css";

function App() {
  const hello = (name) => {
    return <h1>Hello, {name}</h1>;
  };
  return <div className="App">{hello("Arya")}</div>;
}

export default App;
