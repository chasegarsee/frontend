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
        passwordInput: "",
        user: {}
      };
    }

    componentDidMount() {
      // if (localStorage.getItem("user")) {
      //   this.setState({ ...this.state, loggedIn: true });
      // } else {
      //   this.setState({ ...this.state, loggedIn: false });
      // }
    }

    authHandler = e => {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    };
    handleAuth = e => {
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
      // this.setState({ loggedIn: true });
      // const username = this.state.usernameInput;
      // const password = this.state.passwordInput;
      const newUser = {
        username: this.state.usernameInput,
        password: this.state.passwordInput
      };
      if (this.state.typeofmem === "instructor") {
        axios
          .post(
            "https://airfitness.herokuapp.com/api/instructors/register",
            newUser
          )
          .then(() =>
            axios
              .post(
                "https://airfitness.herokuapp.com/api/instructors/login",
                newUser
              )
              .then(res =>
                this.setState({
                  ...this.state,
                  user: res.data,
                  loggedIn: true
                })
              )
              .catch(error => console.log(error))
          )
          .catch(error => console.log(error));
      }
      if (this.state.typeofmem === "user") {
        axios
          .post("https://airfitness.herokuapp.com/api/users/register", newUser)
          .then(() =>
            axios
              .post("https://airfitness.herokuapp.com/api/users/login", newUser)
              .then(res =>
                this.setState({
                  ...this.state,
                  user: res.data,
                  loggedIn: true
                })
              )
              .catch(error => console.log(error))
          )
          .catch(error => console.log(error));
      }

      //
      // localStorage.setItem("user", username);
      // localStorage.setItem("pass", password);
    };
    submitLoginHandler = e => {
      e.preventDefault();
      // this.setState({ loggedIn: true });
      // const username = this.state.usernameInput;
      // const password = this.state.passwordInput;
      const user = {
        username: this.state.usernameInput,
        password: this.state.passwordInput
      };
      if (this.state.typeofmem === "instructor") {
        axios
          .post("https://airfitness.herokuapp.com/api/instructors/login", user)
          .then(res =>
            this.setState({
              ...this.state,
              user: res.data,
              loggedIn: true
            })
          )
          .catch(error => console.log(error));
      }
      if (this.state.typeofmem === "user") {
        axios
          .post("https://airfitness.herokuapp.com/api/users/login", user)
          .then(res =>
            this.setState({
              ...this.state,
              user: res.data,
              loggedIn: true
            })
          )
          .catch(error => console.log(error));
      }
      // localStorage.setItem("user", username);
      // localStorage.setItem("pass", password);
    };

    render() {
      // console.log(
      //   `this.state loggedin: ${this.state.loggedIn}, this.state.register: ${
      //     this.state.register
      //   }, this.state.typeofmem: ${
      //     this.state.typeofmem
      //   }, this.state.selected: ${this.state.selected}, this.state.username: ${
      //     this.state.usernameInput
      //   }, this.state.password: ${this.state.passwordInput}`
      // );
      if (this.state.loggedIn) return <App user={this.state.user} />;
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
