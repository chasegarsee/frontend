import React, { Component } from "react";
import axios from "axios";
import Authorize from "./authorize";

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        register: null,
        typeofmem: null,
        selected: false,
        usernameInput: "",
        passwordInput: ""
      };
    }

    componentDidMount() {
      if (localStorage.getItem("user")) {
        this.setState({ ...this.state, loggedIn: true });
      } else {
        this.setState({ ...this.state, loggedIn: false });
      }
    }

    authHandler = e => {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    };
    handleAuth = e => {
      console.log(e);
      e.preventDefault();
      if (this.state.register === null || this.state.typeofmem === null) {
        alert("must pick register/login and instructor/user fileds");
      } else {
        this.setState({ ...this.state, selected: true });
      }
    };
    editInputHandler = e => {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    };
    submitRegisterHandler = e => {
      e.preventDefault();
      this.setState({ loggedIn: true });
      const username = this.state.usernameInput;
      const password = this.state.passwordInput;
      localStorage.setItem("user", username);
      localStorage.setItem("pass", password);
    };
    submitLoginHandler = e => {
      e.preventDefault();
      this.setState({ loggedIn: true });
      const username = this.state.usernameInput;
      const password = this.state.passwordInput;
      localStorage.setItem("user", username);
      localStorage.setItem("pass", password);
    };

    render() {
      console.log(
        `this.state loggedin: ${this.state.loggedIn}, this.state.register: ${
          this.state.register
        }, this.state.typeofmem: ${
          this.state.typeofmem
        }, this.state.selected: ${this.state.selected}, this.state.username: ${
          this.state.usernameInput
        }, this.state.password: ${this.state.passwordInput}`
      );
      if (this.state.loggedIn && this.state.typeofmem)
        return <App typeofmem={this.state.typeofmem} />;
      return (
        <Authorize
          loggedIn={this.state.loggedIn}
          register={this.state.register}
          typeofmem={this.state.typeofmem}
          selected={this.state.selected}
          authHandler={this.authHandler}
          handleAuth={this.handleAuth}
          usernameInput={this.state.usernameInput}
          passwordInput={this.state.passwordInput}
          editInputHandler={this.editInputHandler}
          submitRegisterHandler={this.submitRegisterHandler}
          submitLoginHandler={this.submitLoginHandler}
        />
      );
    }
  };

export default Authenticate;
