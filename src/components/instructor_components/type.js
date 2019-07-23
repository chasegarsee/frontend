import React, { Component } from "react";
import DeleteType from "./deleteType";
import axios from "axios";

class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeDelete: false
    };
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

  toggleDel = e => {
    e.preventDefault();
    this.setState(prev => ({
      typeDelete: !prev.typeDelete
    }))
  }

  // const Type = props => {
  render() {
    return (
      <div className="type">
        <div>type: {this.props.type.type}</div><button onClick={this.toggleDel}>{this.state.typeDelete ? 'cancel' : 'X'}</button>
        {this.state.typeDelete && <DeleteType
          id={this.props.type.id}
          deleteHandler={this.deleteHandler}
          toggleDel={this.toggleDel}
        />}
      </div>
    );
  }
}

export default Type;
