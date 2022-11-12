import useChangeEvent from "./useChangeEvent";
import "./App.css";

function App() {
  const { data, onChangeEvent } = useChangeEvent();

  return (
    <div className="App">
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={onChangeEvent}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={onChangeEvent}
      />
      <input
        type="checkbox"
        name="remember"
        checked={data.remember}
        onChange={onChangeEvent}
      />
    </div>
  );
}

export default App;
