import React, { Component } from "react";
import axios from "axios";

class ProgramPunch extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      id: props.programPunch.id,
      userId: props.programPunch.userId,
      instructorId: props.programPunch.instructorId,
      punches_available: props.programPunch.punches_available
      //   updated_punches_available: props.programPunch.punches_available
    };
  }
  //   incrementItem = () => {
  //     this.setState({
  //       updated_punches_available: this.state.updated_punches_available + 1
  //     });
  //   };
  //   decrementItem = () => {
  //     this.setState({
  //       updated_punches_available: this.state.updated_punches_available - 1
  //     });
  //   };

  submitHandler = () => {
    const token = this.props.user.token;
    const id = this.state.id;
    const body = {
      instructorId: this.state.instructorId,
      card: this.state.id
    };
    const headers = {
      headers: {
        authorization: token
      }
    };
    //axios call, instructor id in body
    axios
      .put(
        `https://airfitness.herokuapp.com/api/classes/${id}/punchit`,
        body,
        headers
      )
      .then(res => {
        console.log(res.data.message);
        this.setState({
          punches_available: res.data.punchCard.punches_available
        });
        this.props.refresh();
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="punchCard">
        <div className="punch-details">
          punch id: {this.state.id}
          user id: {this.state.userId}
          punches left: {this.state.punches_available}
        </div>
        <div>
          {/* update punches: {this.state.updated_punches_available}
          add punch:<button onClick={this.incrementItem}>+1</button>
          minus punch: <button onClick={this.decrementItem}>-1</button> */}
          <button onClick={this.submitHandler}>Punch it! (uses an available punch)</button>
        </div>
      </div>
    );
  }
}

export default ProgramPunch;
