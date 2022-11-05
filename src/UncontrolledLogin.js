import React, { createRef } from "react";

class UncontrolledLogin extends React.Component {
  _refForm = createRef();
  handleEvent = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  handlePrefill = () => {
    this._refForm.current.elements.username.value = "Arya";
    this._refForm.current.elements.password.value = "123456";
    this._refForm.current.elements.remember.checked = true;
  };

  componentDidMount(event) {
    this._refForm.current.elements.username.focus();
  }

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
        <form ref={this._refForm} onSubmit={this.handleEvent}>
          <input
            placeholder="Name"
            name="username"
            type="text"
            style={{ marginTop: "1rem" }}
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            style={{ marginTop: "1rem" }}
          />
          <div>
            <label htmlFor="remember" style={{ fontSize: "14px" }}>
              Remember me
            </label>
            <input
              name="remember"
              type="checkbox"
              style={{ marginTop: "1rem" }}
            />
          </div>
          <button type="reset">reset</button>
          <button
            type="submit"
            style={{
              marginTop: "1rem",
            }}
          >
            log in
          </button>
          <button type="button" onClick={this.handlePrefill}>
            Prefill
          </button>
        </form>
      </div>
    );
  }
}

export default UncontrolledLogin;
