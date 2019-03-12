import React, { Component } from "react";
import "./App.css";
import Instructor from "./components/instructor_components/instructor";
import User from "./components/user_components/user";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeofmem: props.typeofmem,
      id: ""
    };
  }
  render() {
    if (this.state.typeofmem === "instructor") {
      return <Instructor id={this.state.id} />;
    }
    if (this.state.typeofmem === "user") {
      return <User id={this.state.id} />;
    }
    return (
      <div className="App">
        <header className="App-header">Air Fitness Test</header>
      </div>
    );
  }
}

export default App;
