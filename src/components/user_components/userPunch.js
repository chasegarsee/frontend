import React from "react";

const UserPunch = props => {
  return (
    <div>
      punch card class id: {props.userPunch.classId}
      punch card qty left: {props.userPunch.punches_available}
    </div>
  );
};
export default UserPunch;
