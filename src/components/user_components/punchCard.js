import React, { Component } from "react";
import Axios from "axios";

class PunchCard extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      token: props.user.token,
      userId: props.user.id,
      instructorId: props.punchCard.instructorId,
      price: props.punchCard.price,
      classId: props.punchCard.id
    };
  }
  submitHandler = e => {
    e.preventDefault();
    const token = this.state.token;
    const id = this.state.classId;
    const punchCard = {
      userId: this.state.userId,
      instructorId: this.state.instructorId,
      price: this.state.price
    };
    const headers = {
      headers: {
        authorization: token
      }
    };
    console.log(`punchCard: ${punchCard}`);
    //axios call
    Axios.post(
      `https://airfitness.herokuapp.com/api/classes/${id}/punch`,
      punchCard,
      headers
    )
      .then(res => {
        console.log(res.status);
      })
      .catch(error => console.log(error));
    this.props.refresh();
  };
  render() {
    return (
      <div>
        purchase punch card:
        <button onClick={this.submitHandler}>Purchase</button>
      </div>
    );
  }
}

export default PunchCard;
