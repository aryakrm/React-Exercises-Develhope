import React from "react";

class Counter extends React.Component {
  state = {
    counter: this.props.initialValue ?? 0,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, this.props.interval ?? 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default Counter;
