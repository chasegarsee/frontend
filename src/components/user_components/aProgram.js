import React from "react";
import Atype from "./aType";

const Aprogram = props => {
  return (
    <div>
      <div>
        class name: {props.aProgram.class_name}
        class times: {props.aProgram.times}
        class price: {props.aProgram.price}
        class location: {props.aProgram.location}
        <br />
        {props.aProgram.types.map(aType => (
          <Atype aType={aType} />
        ))}
      </div>
    </div>
  );
};

export default Aprogram;
