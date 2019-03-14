import React, { Component } from "react";
import Axios from "axios";
import ProgramsList from "./programsList";

class User extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      user: props.user,
      programsList: []
    };
  }
  componentDidMount() {
    Axios.get(`https://airfitness.herokuapp.com/api/classes`)
      .then(res =>
        this.setState({
          programsList: res.data.classes
        })
      )
      .catch(error => console.log(error));
  }
  refresh = () => {
    console.log("fired");
    this.componentDidMount();
  };
  render() {
    console.log(this.state.programsList);
    return (
      <div>
        User Component
        <ProgramsList
          programsList={this.state.programsList}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default User;
