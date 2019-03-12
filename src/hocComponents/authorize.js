import React, { Component } from "react";
import Login from "./login";
import Register from "./register";

class Authorize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: null,
      typeof: null,
      selected: false
    };
  }
  authHandler = e => {
    console.log(`${e.target.name}, ${e.target.value}`);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.register === null || this.state.typeof === null) {
      alert("must fill out register/login and instructor/user");
    } else {
      this.setState({ ...this.state, selected: true });
    }
  };

  render() {
    console.log(`this.state ${this.state}`);
    if (this.state.register === "true" && this.state.selected === true) {
      return <Register typeof={this.state.typeof} />;
    }
    if (this.state.register === "false" && this.state.selected === true) {
      return <Login typeof={this.state.typeof} />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>register or login</div>
          <label>
            <input
              name="register"
              type="radio"
              onChange={this.authHandler}
              value={true}
            />
            register
            <br />
          </label>
          <label>
            <input
              name="register"
              type="radio"
              onChange={this.authHandler}
              value={false}
            />
            login
            <br />
          </label>

          <div>instructor or user</div>
          <label>
            <input
              name="typeof"
              type="radio"
              onChange={this.authHandler}
              value={"insturctor"}
            />
            instructor
            <br />
          </label>
          <label>
            <input
              name="typeof"
              type="radio"
              onChange={this.authHandler}
              value={"user"}
            />
            user
            <br />
          </label>
          <button type="submit">choice confirm</button>
        </form>
      </div>
    );
  }
}

export default Authorize;
