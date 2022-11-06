import React from "react";

class Container extends React.Component {
  state = {};
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Container;
