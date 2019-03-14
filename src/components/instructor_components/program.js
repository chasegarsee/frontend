import React from "react";
import ProgramPunches from "./programPunches";
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
  console.log(props);
  return (
    <div className="program">
      <h3>Program/class</h3>
      <ProgramPunches
        id={props.program.id}
        user={props.user}
        refresh={props.refresh}
      />
      <div className="program-details">
        class name: {props.program.class_name}
        class times: {props.program.times}
        class price: {props.program.price}
        class location: {props.program.location}
        <br />
        <div className="types">
        {props.program.types.map(type => (
          <Type type={type} refresh={props.refresh} />
        ))}
        </div>
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
