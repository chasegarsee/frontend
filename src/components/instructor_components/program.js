import React, { Component } from "react";
import EditProgram from "./editProgram";
import DeleteProgram from "./deleteProgram";

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      program: props.program
    };
  }
  render() {
    return (
      <div>
        <div>
          class name: {this.state.program.class_name}
          class times: {this.state.program.times}
          class price: {this.state.program.price}
          class location: {this.state.program.location}
          class type:{" "}
          {this.state.program.types.map(type => {
            return <li>{type.type}</li>;
          })}
        </div>
        Program
        <EditProgram />
        <DeleteProgram />
      </div>
    );
  }
}

export default Program;
