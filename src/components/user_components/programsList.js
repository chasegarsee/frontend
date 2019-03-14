import React from "react";
import Aprogram from "./aProgram";

const ProgramsList = props => {
  return (
    <div>
      programs list:
      {props.programsList.map(aProgram => (
        <Aprogram
          aProgram={aProgram}
          user={props.user}
          refresh={props.refresh}
        />
      ))}
    </div>
  );
};

export default ProgramsList;
