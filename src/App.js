import React from "react";
import "./App.css";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Welcome className="welcome" name="Arya" />
      </div>
    );
  }
}

export default App;
