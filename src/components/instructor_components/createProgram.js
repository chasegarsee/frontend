import React, { Component } from "react";
import axios from "axios";

class CreateProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      class_name: "",
      times: "",
      price: "",
      location: "",
      types: ""
    };
  }
  editInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    //axios call
    const token = this.state.user.token;
    let types = this.state.types.split(",");
    let newClass = {
      addedClass: {
        class_name: this.state.class_name,
        times: this.state.times,
        price: this.state.price,
        location: this.state.location,
        instructorId: this.state.user.id
      },
      types: types
    };
    const headers = {
      headers: {
        authorization: token
      }
    };
    axios
      .post(`https://airfitness.herokuapp.com/api/classes/`, newClass, headers)
      .then(res => {
        this.setState({
          ...this.state,
          class_name: "",
          times: "",
          price: "",
          location: "",
          types: ""
        });
      })
      .catch(error => console.log(error));
    this.props.refresh();
  };
  render() {
    return (
      <div>
        Create Program
        <form onSubmit={this.submitHandler}>
          class name:
          <input
            name="class_name"
            type="text"
            onChange={this.editInputHandler}
            placeholder="class name"
            value={this.state.class_name}
            required
          />
          times:
          <input
            name="times"
            type="text"
            onChange={this.editInputHandler}
            placeholder="times"
            value={this.state.times}
            required
          />
          price:
          <input
            name="price"
            type="number"
            onChange={this.editInputHandler}
            placeholder="price"
            value={this.state.price}
            required
          />
          location:
          <input
            name="location"
            type="text"
            onChange={this.editInputHandler}
            placeholder="location"
            value={this.state.location}
            required
          />
          type of class:
          <input
            name="types"
            type="text"
            onChange={this.editInputHandler}
            placeholder="type of class"
            value={this.state.types}
            required
          />
          <button onClick={this.submitHandler}>Create Program</button>
        </form>
      </div>
    );
  }
}

export default CreateProgram;
