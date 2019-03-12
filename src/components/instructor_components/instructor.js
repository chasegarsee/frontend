import React, { Component } from "react";
import Programs from "./programs";
import CreateProgram from "./createProgram";

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    };
  }
  render() {
    return (
      <div>
        Instructor Component
        <div> List of current Programs</div>
        <Programs programs={this.state.programs} />
        <div>Create a new Program</div>
        <CreateProgram />
      </div>
    );
  }
}

export default Instructor;
