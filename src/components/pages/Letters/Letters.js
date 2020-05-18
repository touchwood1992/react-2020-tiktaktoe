import React, { useState } from "react";
import Validation from "./Validation/Validation";
import BlockLetters from "./BlockLetters/BlockLetters";
const Letters = () => {
  const [state, setState] = useState("");

  const removeLetterHandler = (index) => {
    const stateToArray = state.split("");
    const indexOfChar = stateToArray.findIndex((char, i) => i === index);
    if (indexOfChar !== -1) {
      stateToArray.splice(indexOfChar, 1);
      setState(stateToArray.join(""));
    }
  };

  console.log("Letters");
  return (
    <div className="container">
      <h1 className="main-heading">Letters</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Type Text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <Validation textLength={state.length}></Validation>
      <BlockLetters
        letters={state}
        removeLetter={removeLetterHandler}
      ></BlockLetters>
    </div>
  );
};
export default Letters;

//textLength
//Validation
