import React, { Component } from "react";
import DeleteType from "./deleteType";
import axios from "axios";

class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteHandler = e => {
    e.preventDefault();
    const id = this.props.type.id;
    // axios call to delete
    axios
      .delete(`https://airfitness.herokuapp.com/api/classes/${id}/types`)
      .then(res => {
        console.log(res.status);
        this.props.refresh();
      })
      .catch(error => console.log(error));
  };

  // const Type = props => {
  render() {
    return (
      <div>
        <div>type: {this.props.type.type}</div>
        <DeleteType
          id={this.props.type.id}
          deleteHandler={this.deleteHandler}
        />
      </div>
    );
  }
}

export default Type;
