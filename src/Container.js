import React from "react";

class Container extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
