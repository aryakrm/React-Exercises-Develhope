import React from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";

class App extends React.Component {
  state = {
    counter: 0,
  };
  incCounter = () => {
    this.setState(() => {
      return {
        counter: this.state.counter + 1,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <ClickCounter eventHandler={this.incCounter} />
      </div>
    );
  }
}

export default App;
