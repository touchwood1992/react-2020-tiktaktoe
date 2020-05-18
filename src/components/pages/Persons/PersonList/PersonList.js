import React from "react";
import PersonItem from "./PersonItem/PersonItem";
const PersonList = (props) => {
  console.log("PERSON LIST");
  return (
    <ul className="list-group mt-2">
      {props.allPersons.length === 0 ? (
        <li className="list-group-item">No person Found</li>
      ) : (
        props.allPersons.map((p) => (
          <PersonItem
            person={p}
            key={p.id}
            removeItem={() => props.removePerson(p.id)}
            changeName={props.changeName}
          ></PersonItem>
        ))
      )}
    </ul>
  );
};
export default PersonList;
