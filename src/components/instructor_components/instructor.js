import React, { Component } from "react";
import axios from "axios";
import Programs from "./programs";
import CreateProgram from "./createProgram";

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      programs: []
    };
  }
  componentDidMount() {
    const Id = this.state.user.id;
    axios
      .get(`https://airfitness.herokuapp.com/api/instructors/${Id}`)
      .then(res =>
        this.setState({
          programs: res.data.classes
        })
      )
      .catch(error => console.log(error));
  }
  refresh = () => {
    console.log("fired");
    this.componentDidMount();
  };
  render() {
    return (
      <div>
        Instructor Component
        <div>Create a new Program</div>
        <CreateProgram user={this.state.user} refresh={this.refresh} />
        <div> List of current Programs: </div>
        <Programs
          programs={this.state.programs}
          refresh={this.refresh}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default Instructor;
