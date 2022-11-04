import "./App.css";
import Welcome from "./Welcome";

function App() {
  const name1 = "John";
  return (
    <div className="App">
      <Welcome name={name1} age="23" />
    </div>
  );
}

export default App;
