import React, { Component } from "react";
import EditProgram from "./editProgram";
import DeleteProgram from "./deleteProgram";

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        Program
        <EditProgram />
        <DeleteProgram />
      </div>
    );
  }
}

export default Program;
