import React from "react";

// class DeleteProgram extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
const DeleteProgram = props => {
  // render() {
  return (
    <div>
      Are you sure you want to delete this program?
      <button onClick={props.deleteHandler}>Yes</button>
      <button>No</button>
    </div>
  );
};

export default DeleteProgram;
