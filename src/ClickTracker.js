import React from "react";

class ClickTracker extends React.Component {
  state = {
    title: "Nothing Clicked",
  };
  clickEvent = (event) => {
    this.setState({
      title: `${event.target.textContent} is Clicked`,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.clickEvent} style={{ marginLeft: "1rem" }}>
          One
        </button>
        <button onClick={this.clickEvent} style={{ marginLeft: "1rem" }}>
          Two
        </button>
        <button onClick={this.clickEvent} style={{ marginLeft: "1rem" }}>
          Three
        </button>
      </div>
    );
  }
}

export default ClickTracker;
