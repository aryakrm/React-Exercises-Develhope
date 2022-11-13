import { Route, Routes } from "react-router-dom";
import "./App.css";
import GithubUser from "./GithubUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<GithubUser />}>
          <Route path=":username" element={<GithubUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
