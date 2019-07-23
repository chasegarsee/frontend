import React from "react";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       usernameInput: "",
//       passwordInput: ""
//     };
//   }
//   editInputHandler = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = e => {
//     e.preventDefault();
//     const username = this.state.usernameInput;
//     const password = this.state.passwordInput;
//     localStorage.setItem("user", username);
//     localStorage.setItem("pass", password);
//     this.setState({
//       usernameInput: "",
//       passwordInput: ""
//     });
//   };
//   render() {
const Login = props => {
  return (
    <div className="login">
      {(() => {
        switch (props.typeofmem) {
          case "instructor":
            return <div> instructor login </div>;
          case "user":
            return <div> user login </div>;
          default:
            return null;
        }
      })()}
      <form onSubmit={props.submitLoginHandler}>
        <div>username:</div>
        <input
          name="usernameInput"
          type="text"
          onChange={props.editInputHandler}
          placeholder="Username"
          value={props.usernameInput}
          required
        />
        <div>password:</div>
        <input
          name="passwordInput"
          type="password"
          onChange={props.editInputHandler}
          placeholder="Password"
          value={props.passwordInput}
          required
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};
//   }
// }

export default Login;
