import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }
  editInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    const username = this.state.usernameInput;
    const password = this.state.passwordInput;
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);
    this.setState({
      usernameInput: "",
      passwordInput: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>username:</div>
          <input
            name="usernameInput"
            type="text"
            onChange={this.editInputHandler}
            placeholder="Username"
            value={this.state.usernameInput}
            required
          />
          <div>password:</div>
          <input
            name="passwordInput"
            type="password"
            onChange={this.editInputHandler}
            placeholder="Password"
            value={this.state.passwordInput}
            required
          />
          <button onClick={this.submitHandler}>register</button>
        </form>
      </div>
    );
  }
}

export default Register;
