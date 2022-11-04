import React from "react";
import Message from "./Message";

class Hello extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <Message />
      </div>
    );
  }
}

export default Hello;
