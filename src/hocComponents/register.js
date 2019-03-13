import React from "react";

// class Register extends Component {
//   constructor(props) {
//     // console.log(props);
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
const Register = props => {
  return (
    <div>
      {(() => {
        switch (props.typeofmem) {
          case "insturctor":
            return <div>instructor registration</div>;
          case "user":
            return <div>user registration</div>;
          default:
            return null;
        }
      })()}
      <form onSubmit={props.submitRegisterHandler}>
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
        <button type="submit">register</button>
      </form>
    </div>
  );
};
//   }
// }

export default Register;
