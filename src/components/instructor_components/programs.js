import React from "react";
import Program from "./program";

// class Programs extends Component {
//   constructor(props) {
//     console.log(props.programs);
//     super(props);
//     this.state = {
//       programs: props.programs
//     };
//   }
const Programs = props => {
  // render() {
  return (
    <div className="programs">
      <h3>programs list:</h3>
      {props.programs.map(program => (
        <Program program={program} user={props.user} refresh={props.refresh}
        toggleEdit={props.toggleEdit}
        toggleDelete={props.toggleDelete}
        edit={props.edit}
        delete={props.delete} />
      ))}
    </div>
  );
};
// }

export default Programs;
