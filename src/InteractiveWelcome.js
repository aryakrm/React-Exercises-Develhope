import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
  state = {
    user: "",
  };
  changeEvent = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({
      user: value,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="user"
          value={this.state.user}
          onChange={this.changeEvent}
          style={{ marginTop: "20px" }}
        />
        <Welcome name={this.state.user} />
      </div>
    );
  }
}

export default InteractiveWelcome;
