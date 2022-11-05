import React from "react";

class ClickCounter extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.props.eventHandler}>Increase +</button>
      </div>
    );
  }
}

export default ClickCounter;
