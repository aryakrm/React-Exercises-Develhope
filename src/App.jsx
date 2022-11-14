import { useState } from "react";
import "./App.css";
import GithubUser from "./GithubUser";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <GithubUser username={username} />
    </div>
  );
}

export default App;
