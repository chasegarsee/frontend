import React from "react";

const DeleteType = props => {
  return (
    <div className="deleteItem">
      Are you sure you want to delete this type?
      <button onClick={props.deleteHandler}>Yes</button>
      <button onClick={props.toggleDel}>No</button>
    </div>
  );
};

export default DeleteType;
