import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {};
  }
  render() {
    return <div>User Component</div>;
  }
}

export default User;
