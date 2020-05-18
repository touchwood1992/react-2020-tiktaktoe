import React from "react";
const TogglePerson = (props) => {
  console.log("Toggle BTN");
  return (
    <button className={props.className} onClick={props.clicked}>
      {props.children}
    </button>
  );
};
export default React.memo(TogglePerson);
