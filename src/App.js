import "./App.css";
import { useRef, useState, useEffect } from "react";
import CarDetails from "./CarDetails";

function App() {
  const [data, setData] = useState({ name: "", year: "", color: "" });

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = "";
  }, []);

  function inputChange(event) {
    const { name, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  return (
    <div className="App">
      <form>
        <label htmlFor="model">Model: </label>
        <input ref={inputRef} type="text" name="model" onChange={inputChange} />
        <label htmlFor="year"> Year: </label>
        <input ref={inputRef} type="text" name="year" onChange={inputChange} />
        <label htmlFor="color"> Color: </label>
        <input ref={inputRef} type="text" name="color" onChange={inputChange} />
        <button type="reset">Clear</button>
      </form>
      <CarDetails model={data.model} year={data.year} color={data.color} />
    </div>
  );
}

export default App;
