import React from "react";
import EditProgram from "./editProgram";
import Type from "./type";

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
        <br />
        {props.program.types.map(type => (
          <Type type={type} refresh={props.refresh} />
        ))}
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
