import React from "react";
const Validation = (props) => {
  const { textLength } = props;
  let validText = <p className="mt-2">Text is valid</p>;
  if (textLength <= 5) {
    validText = <p className="mt-2">Enter Valid Text</p>;
  }
  console.log("Validation Block");
  return <div>{validText}</div>;
};
export default Validation;
