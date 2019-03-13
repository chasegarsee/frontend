import React, { Component } from "react";
import axios from "axios";
import Programs from "./programs";
import CreateProgram from "./createProgram";

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      user: props.user
    };
  }
  componentDidMount() {
    const Id = this.state.user.id;
    axios
      .get(`https://airfitness.herokuapp.com/api/instructors/${Id}`)
      .then(res =>
        this.setState({
          ...this.state,
          programs: res.data.classes
        })
      )
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        Instructor Component
        <div> List of current Programs</div>
        <Programs programs={this.state.programs} />
        <div>Create a new Program</div>
        <CreateProgram user={this.state.user} />
      </div>
    );
  }
}

export default Instructor;
