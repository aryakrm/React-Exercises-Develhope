import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1>Welcome {this.props.name}!</h1>
      </div>
    );
  }
}

export default Welcome;
