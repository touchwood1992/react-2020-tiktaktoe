import React from "react";
const PersonItem = (props) => {
  console.log("PERSON LIST ITEM");
  return (
    <li className="list-group-item">
      <div onClick={props.removeItem} className="mt-2 mb-2">
        My Name is {props.person.name} and i am {props.person.age} years old
      </div>
      <div>
        <input
          type="text"
          className="form-control"
          onChange={(e) => props.changeName(e, props.person.id)}
          value={props.person.name}
        />
      </div>
    </li>
  );
};
export default PersonItem;
