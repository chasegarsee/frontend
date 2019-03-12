import React, { Component } from "react";

class DeleteProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitHandler = e => {
    e.preventDefault();
    console.log(e);
    //axios call to delete
  };
  render() {
    return (
      <div>
        Are you sure you want to delete this program?
        <button onClick={this.submitHandler}>Yes</button>
        <button>No</button>
      </div>
    );
  }
}

export default DeleteProgram;
