import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import GithubUser from "./GithubUser";
import Counter from "./Counter";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user" element={<GithubUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
