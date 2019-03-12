import React, { Component } from "react";
import Login from "./login";
import Register from "./register";

class Authorize extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Register />
        <Login />
      </div>
    );
  }
}

export default Authorize;
