import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "20px",
          marginLeft: "40rem",
        }}
      >
        <input
          placeholder="Name"
          name="username"
          type="text"
          value={this.state.username}
          style={{ marginTop: "1rem" }}
          onChange={this.handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={this.state.password}
          style={{ marginTop: "1rem" }}
          onChange={this.handleChange}
        />
        <div>
          <label htmlFor="remember" style={{ fontSize: "14px" }}>
            Remember me
          </label>
          <input
            name="remember"
            type="checkbox"
            style={{ marginTop: "1rem" }}
            checked={this.state.remember}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Login;
