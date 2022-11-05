import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    logedIn: false,
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
  handleClick = (event) => {
    this.setState({
      logedIn: true,
    });
    console.log(this.state.logedIn);
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
        <button
          type="button"
          disabled={!this.state.username || !this.state.password}
          onClick={this.handleClick}
          style={{
            marginTop: "1rem",
          }}
        >
          log in
        </button>

        <h3 style={{ color: "green" }}>
          {this.state.logedIn && "You are logged in now!"}
        </h3>
      </div>
    );
  }
}

export default Login;
