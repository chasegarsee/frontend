import React, { Component } from "react";
import Axios from "axios";
import ProgramsList from "./programsList";

class User extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      user: props.user,
      programsList: [],
      filteredList: []
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

  //filter
  filterSearchT = e => {
    // console.log(e.target.value)
    let programs = [...this.state.programsList];
    programs = this.state.programsList.filter(programs =>
      programs.types.some(type => {
        if (type.type.includes(e.target.value)) {
          return programs;
        }
      })
    );
    this.setState({
      filteredList: programs
    });
  };
  filterSearchL = e => {
    let programs = [...this.state.programsList];
    programs = this.state.programsList.filter(programs => {
      if (programs.location.includes(e.target.value)) {
        return programs;
      }
    });
    this.setState({
      filteredList: programs
    });
  };
  render() {
    console.log(this.state.programsList);
    return (
      <div>
        User Component
        <div>
          <input
            name="searchT"
            type="text"
            placeholder="search via types"
            value={this.state.searchT}
            onChange={this.filterSearchT}
          />
          <input
            name="searchL"
            type="text"
            placeholder="search via location"
            value={this.state.searchL}
            onChange={this.filterSearchL}
          />
        </div>
        <ProgramsList
          // programsList={this.state.programsList}
          programsList={
            this.state.filteredList.length > 0
              ? this.state.filteredList
              : this.state.programsList
          }
          user={this.state.user}
          refresh={this.refresh}
        />
      </div>
    );
  }
}

export default User;
