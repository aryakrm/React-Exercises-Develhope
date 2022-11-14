import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import GhUser from "./GhUser";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <div className="App">
      <h1>Github User Loader App</h1>
      <Link to="/users">Open Search</Link>
      <Routes>
        <Route path="/users" element={<GhUser />}>
          <Route index element={<p>Add a user please</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
