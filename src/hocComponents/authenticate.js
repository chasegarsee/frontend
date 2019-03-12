import React, { Component } from "react";
import Authorize from "./authorize";

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        typeofmem: "instructor"
      };
    }

    componentDidMount() {
      if (localStorage.getItem("user")) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }

    render() {
      if (this.state.loggedIn && this.state.typeofmem)
        return <App typeofmem={this.state.typeofmem} />;
      return <Authorize />;
    }
  };

export default Authenticate;
