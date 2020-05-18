import React from "react";
const CounterListItem = (props) => {
  return (
    <li className="list-group-item" onClick={props.removeitem}>
      {console.log(Math.random(), "C list Item")}
      {props.item}
    </li>
  );
};
export default CounterListItem;
