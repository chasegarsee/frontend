import React, { Component } from "react";
import Axios from "axios";
import ProgramsList from "./programsList";
import UserInfo from "./userInfo";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      programsList: [],
      filteredList: [],
      userInfo: null
    };
  }
  componentDidMount() {
    const token = this.state.user.token;
    const id = this.state.user.id;
    const headers = {
      headers: {
        authorization: token
      }
    };
    Axios.get(`https://airfitness.herokuapp.com/api/classes`)
      .then(res =>
        this.setState({
          programsList: res.data.classes
        })
      )
      .then(() =>
        Axios.get(`https://airfitness.herokuapp.com/api/users/${id}`, headers)
      )
      .then(res => {
        this.setState({
          userInfo: res.data
        });
      })
      .catch(error => console.log(error));
  }
  refresh = () => {
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
    return (
      <div>
        User Component
        {this.state.userInfo ? (
          <UserInfo userInfo={this.state.userInfo} />
        ) : (
          <></>
        )}
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
