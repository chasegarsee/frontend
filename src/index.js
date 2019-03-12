import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//
import Authenticate from "./hocComponents/authenticate";
const Auth = Authenticate(App);

ReactDOM.render(<Auth />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
