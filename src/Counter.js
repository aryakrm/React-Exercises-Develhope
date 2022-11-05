import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  state = {
    counter: this.props.initialValue ?? 0,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return { counter: state.counter + 1 };
      });
    }, this.props.interval ?? 1000);
  }

  render() {
    return (
      <div>
        <CounterDisplay counter={this.state.counter} />
      </div>
    );
  }
}

export default Counter;
