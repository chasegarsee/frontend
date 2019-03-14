import React, { Component } from "react";
import DeleteProgram from "./deleteProgram";
import axios from "axios";

class EditProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.program.id,
      class_name: props.program.class_name,
      times: props.program.times,
      price: props.program.price,
      location: props.program.location,
      type: ""
    };
  }
  editInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    const token = this.props.user.token;
    const id = this.state.id;
    let updatedClass = {
      class_name: this.state.class_name,
      times: this.state.times,
      price: this.state.price,
      location: this.state.location
    };
    const headers = {
      headers: {
        authorization: token
      }
    };
    //
    let type = { type: this.state.type };
    if (this.state.type) {
      axios
        .post(`https://airfitness.herokuapp.com/api/classes/${id}/types`, type)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }
    //
    axios
      .put(
        `https://airfitness.herokuapp.com/api/classes/${id}`,
        updatedClass,
        headers
      )
      .then(res => {
        this.setState({
          ...this.state,
          class_name: this.state.class_name,
          times: this.state.times,
          price: this.state.price,
          location: this.state.location
        });
        this.props.refresh();
      })
      .catch(error => console.log(error));
  };
  deleteHandler = e => {
    e.preventDefault();
    const token = this.props.user.token;
    const id = this.state.id;
    const headers = {
      headers: {
        authorization: token
      }
    };
    //axios call to delete
    axios
      .delete(`https://airfitness.herokuapp.com/api/classes/${id}`, headers)
      .then(res => {
        console.log(res.status);
        this.props.refresh();
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        Edit Program
        <form onSubmit={this.submitHandler}>
          class name:
          <input
            name="class_name"
            type="text"
            onChange={this.editInputHandler}
            placeholder={this.state.class_name}
            value={this.state.class_name}
            required
          />
          times:
          <input
            name="times"
            type="text"
            onChange={this.editInputHandler}
            placeholder={this.state.times}
            value={this.state.times}
            required
          />
          price:
          <input
            name="price"
            type="number"
            onChange={this.editInputHandler}
            placeholder={this.state.price}
            value={this.state.price}
            required
          />
          location:
          <input
            name="location"
            type="text"
            onChange={this.editInputHandler}
            placeholder={this.state.location}
            value={this.state.location}
            required
          />
          add additional type:
          <input
            name="type"
            type="text"
            onChange={this.editInputHandler}
            placeholder="add additional type of class"
            value={this.state.type}
          />
          <button onClick={this.submitHandler}>Edit Submit</button>
          <DeleteProgram deleteHandler={this.deleteHandler} />
        </form>
      </div>
    );
  }
}

export default EditProgram;
