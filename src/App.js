import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ClickCounter from "./ClickCounter";

export default function App() {
  return (
    <div className="App">
      <Link to="/counter">Go to Counter</Link>
      <Routes>
        <Route path="/counter" element={<ClickCounter />} />
      </Routes>
    </div>
  );
}
