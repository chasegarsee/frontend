import React, { Component } from "react";
import axios from "axios";
import Programs from "./programs";
import CreateProgram from "./createProgram";

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      programs: [],
      isCreate: false,
      edit: '',
      delete: '',
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

  toggleCreate = e => {
    e.preventDefault()
    this.setState(prev => ({
      isCreate: !prev.isCreate
    }))
  }

  toggleEdit = (e, id) => {
    e.preventDefault()
    this.setState(prev => ({
      edit: id === prev.edit ? '' : id
    }))
  }

  toggleDelete = (e, id) => {
    e.preventDefault()
    this.setState(prev => ({
      delete: id === prev.delete ? '' : id
    }))
  }


  render() {
    return (
      <div className="instructor">
        <h1>Instructor Component</h1>
        <button onClick={this.toggleCreate}>{this.state.isCreate ? 'X' : 'Create a new Program'}</button>
        {this.state.isCreate && <CreateProgram user={this.state.user} refresh={this.refresh} />}
        <div> List of current Programs: </div>
        <Programs
          programs={this.state.programs}
          refresh={this.refresh}
          user={this.state.user}
          toggleDelete={this.toggleDelete}
          toggleEdit={this.toggleEdit}
          edit={this.state.edit}
          delete={this.state.delete}
        />
      </div>
    );
  }
}

export default Instructor;
