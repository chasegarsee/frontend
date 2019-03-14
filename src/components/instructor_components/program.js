import React from "react";
import EditProgram from "./editProgram";

// class Program extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       program: props.program
//     };
//   }
//   render() {
const Program = props => {
  return (
    <div>
      <div>
        class name: {props.program.class_name}
        class times: {props.program.times}
        class price: {props.program.price}
        class location: {props.program.location}
        class type:{" "}
        {/* {props.program.types.map(type => {
          return <li>{type.type}</li>;
        })} */}
      </div>
      <EditProgram
        program={props.program}
        refresh={props.refresh}
        user={props.user}
      />
    </div>
  );
};
// }

export default Program;
