import React, { Component } from "react";

class CreateProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class_name: "",
      times: "",
      price: "",
      location: ""
    };
  }
  editInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(e);
    //axios call
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
          <button onClick={this.submitHandler}>Create Program</button>
        </form>
      </div>
    );
  }
}

export default CreateProgram;
