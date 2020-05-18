import React from "react";

const BlockLetterItem = (props) => {
  console.log("Letter List Item");
  return <li onClick={props.removeLetter}>{props.letter}</li>;
};
export default BlockLetterItem;
