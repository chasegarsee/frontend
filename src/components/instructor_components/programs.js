import React, { Component } from "react";
import Program from "./program";

class Programs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    };
  }
  render() {
    return (
      <div>
        {this.state.programs.map(program => (
          <Program program={program} />
        ))}
      </div>
    );
  }
}

export default Programs;
