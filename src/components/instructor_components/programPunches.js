import React, { Component } from "react";
import ProgramPunch from "./programPunch";
import axios from "axios";

class ProgramPunches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classId: props.id,
      classInfo: null
    };
  }
  componentDidMount() {
    const id = this.state.classId;
    axios
      .get(`https://airfitness.herokuapp.com/api/classes/${id}`)
      .then(res => {
        this.setState({
          classInfo: res.data
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.classInfo);
    return (
      <div className="Punch-cards">
        <h3>Punch Passes for this class:</h3> <br />
        {this.state.classInfo ? (
          this.state.classInfo.cards.map(programPunch => (
            <ProgramPunch
              programPunch={programPunch}
              user={this.props.user}
              refresh={this.props.refresh}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default ProgramPunches;
